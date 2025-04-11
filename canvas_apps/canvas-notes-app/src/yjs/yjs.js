import { WebrtcProvider } from 'y-webrtc';
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
        args[0].includes('Failed to construct'))) {
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

// Set up the WebRTC provider for peer-to-peer connections with a fixed room name for all users
export const provider = new WebrtcProvider(collaborationConfig.roomName, ydoc, {
  // Optimize for production vs development
  signaling: environment.isProduction 
    ? ['wss://signaling.yjs.dev', 'wss://y-webrtc-signaling-eu.herokuapp.com', 'wss://y-webrtc-signaling-us.herokuapp.com'] 
    : [],
  maxConns: collaborationConfig.maxConnections,
  filterBcConns: false, // Enable broadcast channel for local connections
  peerOpts: {
    config: {
      iceServers: collaborationConfig.iceServers
    }
  }
});

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
      console.log('[Yjs] Connected to peer network');
    } else if (event.status === 'disconnected') {
      console.log('[Yjs] Disconnected from peer network');
    }
  }
});

// Export the awareness API for cursor tracking
export const awareness = provider.awareness;

// Log initialization (only in development)
if (collaborationConfig.enableLogging) {
  console.log('[Yjs] Collaboration session initialized');
  console.log(`[Yjs] Room name: ${collaborationConfig.roomName}`);
  console.log('[Yjs] Using peer-to-peer mode for collaboration');
}
