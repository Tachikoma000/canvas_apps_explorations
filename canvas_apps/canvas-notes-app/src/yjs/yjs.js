import { WebrtcProvider } from 'y-webrtc';
import { WebsocketProvider } from 'y-websocket';
import { Doc } from 'yjs';
import { collaborationConfig, environment } from '../config';

// Overriding the WebRTC Provider's WebSocket implementation to suppress connection errors
// This is a workaround for connection failures to public signaling servers
const originalConsoleError = console.error;
const originalConsoleWarn = console.warn;

// Only suppress errors in production
if (!environment.isProduction || !collaborationConfig.enableLogging) {
  // Temporarily suppress WebSocket connection errors
  console.error = (...args) => {
    if (typeof args[0] === 'string' && 
       (args[0].includes('WebSocket connection failed') || 
        args[0].includes('Failed to construct') ||
        args[0].includes('Provider disconnected'))) {
      // Suppress the error
      return;
    }
    originalConsoleError(...args);
  };

  console.warn = (...args) => {
    if (typeof args[0] === 'string' && 
       (args[0].includes('WebSocket connection') || 
        args[0].includes('signaling'))) {
      // Suppress the warning
      return;
    }
    originalConsoleWarn(...args);
  };
}

// Create a new Yjs document
export const ydoc = new Doc();

// Create a shared map for our canvas state
export const ymap = ydoc.getMap('canvasNotesApp.v1');

// Determine which provider to use as primary
const useWebSocket = collaborationConfig.websocket && collaborationConfig.websocket.preferWebsocket;

let primaryProvider;
let backupProvider;

// Initialize the WebSocket provider
if (useWebSocket) {
  // Set up WebSocket provider as primary
  primaryProvider = new WebsocketProvider(
    collaborationConfig.websocket.url,
    collaborationConfig.roomName,
    ydoc,
    { connect: true }
  );
  
  if (collaborationConfig.enableLogging) {
    console.log('[Yjs] Using WebSocket provider as primary');
    console.log(`[Yjs] WebSocket URL: ${collaborationConfig.websocket.url}`);
  }
  
  // Set up WebRTC as backup
  backupProvider = new WebrtcProvider(collaborationConfig.roomName, ydoc, {
    signaling: environment.isProduction 
      ? ['wss://signaling.yjs.dev', 'wss://y-webrtc-signaling-eu.herokuapp.com', 'wss://y-webrtc-signaling-us.herokuapp.com'] 
      : [],
    maxConns: collaborationConfig.maxConnections,
    filterBcConns: false,
    peerOpts: {
      config: {
        iceServers: collaborationConfig.iceServers
      }
    }
  });
} else {
  // Use WebRTC as primary provider
  primaryProvider = new WebrtcProvider(collaborationConfig.roomName, ydoc, {
    signaling: environment.isProduction 
      ? ['wss://signaling.yjs.dev', 'wss://y-webrtc-signaling-eu.herokuapp.com', 'wss://y-webrtc-signaling-us.herokuapp.com'] 
      : [],
    maxConns: collaborationConfig.maxConnections,
    filterBcConns: false,
    peerOpts: {
      config: {
        iceServers: collaborationConfig.iceServers
      }
    }
  });
  
  if (environment.isProduction && collaborationConfig.websocket) {
    // Set up WebSocket as backup in production
    backupProvider = new WebsocketProvider(
      collaborationConfig.websocket.url,
      collaborationConfig.roomName,
      ydoc,
      { connect: true }
    );
  }
}

// Export the primary provider as the main provider
export const provider = primaryProvider;

// Restore original console methods
if (!environment.isProduction || !collaborationConfig.enableLogging) {
  console.error = originalConsoleError;
  console.warn = originalConsoleWarn;
}

// Add connection status logging with cleaner output
provider.on('status', event => {
  if (collaborationConfig.enableLogging) {
    // Only log significant status changes
    if (event.status === 'connected') {
      console.log('[Yjs] Connected to collaboration network');
    } else if (event.status === 'disconnected') {
      console.log('[Yjs] Disconnected from collaboration network');
    }
  }
});

// Export the awareness API for cursor tracking from primary provider
export const awareness = provider.awareness;

// Log initialization (only in development)
if (collaborationConfig.enableLogging) {
  console.log('[Yjs] Collaboration session initialized');
  console.log(`[Yjs] Room name: ${collaborationConfig.roomName}`);
  console.log(`[Yjs] Primary provider type: ${useWebSocket ? 'WebSocket' : 'WebRTC'}`);
  if (backupProvider) {
    console.log('[Yjs] Backup provider initialized');
  }
}

// Automatic cleanup for backup provider
if (typeof window !== 'undefined') {
  window.addEventListener('beforeunload', () => {
    if (backupProvider) {
      backupProvider.disconnect();
    }
    primaryProvider.disconnect();
  });
}
