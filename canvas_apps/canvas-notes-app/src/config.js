/**
 * Configuration for the Canvas Notes App
 * This file provides environment-specific configuration
 */

// Detect if we're in production (Vercel) or development
const isProduction = process.env.NODE_ENV === 'production';

// Base configuration for collaboration
export const collaborationConfig = {
  // Room name for the global canvas that all users connect to
  roomName: 'canvas-notes-app-main',
  
  // Production settings have more extensive ICE server configuration for better connectivity
  iceServers: isProduction ? [
    // Google STUN servers
    { urls: 'stun:stun.l.google.com:19302' },
    { urls: 'stun:stun1.l.google.com:19302' },
    { urls: 'stun:stun2.l.google.com:19302' },
    { urls: 'stun:stun3.l.google.com:19302' },
    { urls: 'stun:stun4.l.google.com:19302' },
    // Public TURN servers - for production environments
    // Note: In a real production app, you might want to use your own TURN server
    {
      urls: 'turn:global.turn.twilio.com:3478?transport=udp',
      username: 'f4b4035eaa76f4a55de5f4351567653ee4ff6fa97b50b6b334fcc1be9c27212d',
      credential: 'w1WpuQmeioRVdtGllhapyc/137sQlo/9NHkXUHOgHSQ='
    },
    {
      urls: 'turn:global.turn.twilio.com:3478?transport=tcp',
      username: 'f4b4035eaa76f4a55de5f4351567653ee4ff6fa97b50b6b334fcc1be9c27212d',
      credential: 'w1WpuQmeioRVdtGllhapyc/137sQlo/9NHkXUHOgHSQ='
    }
  ] : [
    // Basic STUN servers for development
    { urls: 'stun:stun.l.google.com:19302' },
    { urls: 'stun:stun1.l.google.com:19302' }
  ],
  
  // Maximum number of connections
  maxConnections: 30,
  
  // WebSocket connection configuration
  websocket: {
    // Uses dedicated WebSocket server
    // Read from environment variable if available, otherwise use default values
    url: process.env.REACT_APP_WEBSOCKET_URL || 
         (isProduction 
           ? 'wss://canvas-notes-9662.loca.lt' // Localtunnel URL for testing
           : 'ws://localhost:1234'), // Default development URL
    
    // Always use WebSocket provider for more reliable connectivity
    preferWebsocket: true
  },
  
  // For debugging
  enableLogging: !isProduction
};

// Export environment information
export const environment = {
  isProduction,
  baseUrl: isProduction 
    ? 'https://canvas-notes-app.vercel.app' // Update this to your actual deployed URL
    : 'http://localhost:3000'
};
