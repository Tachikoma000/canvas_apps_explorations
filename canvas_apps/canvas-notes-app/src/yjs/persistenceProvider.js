import { IndexeddbPersistence } from 'y-indexeddb';
import { ydoc } from './yjs';

// This provides local persistence even when collaboration fails
// It ensures users don't lose their work if WebRTC connections fail
export const setupPersistence = () => {
  // The first parameter is a unique ID for the document, which should match
  // across instances for collaboration to work properly
  const persistence = new IndexeddbPersistence('canvas-notes-app-main', ydoc);
  
  // Log when persistence status changes
  persistence.on('synced', () => {
    console.log('[Yjs] Content loaded from local IndexedDB');
  });
  
  // Handle errors
  persistence.on('error', (err) => {
    console.error('[Yjs] Error with local persistence:', err);
  });
  
  return persistence;
};

// Export a function to clear the local persistence
// Useful for resetting the document state
export const clearPersistence = async () => {
  await IndexeddbPersistence.clearDocument('canvas-notes-app-main');
  console.log('[Yjs] Local data cleared');
};
