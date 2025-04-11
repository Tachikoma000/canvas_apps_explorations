import { useEffect, useState } from 'react';
import { bind } from 'valtio-yjs';
import canvasStore from '../store/canvasStore';
import { ymap, provider } from './yjs';
import { setupPersistence } from './persistenceProvider';

/**
 * Custom hook to synchronize the local state with Yjs
 * This binds our Valtio store to Yjs, enabling real-time collaboration
 */
export const useSyncToYjsEffect = () => {
  const [connectedPeers, setConnectedPeers] = useState(0);
  
  useEffect(() => {
    // Set up persistence to IndexedDB
    const persistence = setupPersistence();
    
    // Bind our Valtio state to Yjs
    const unbind = bind(canvasStore, ymap);
    
    // Track number of connected peers
    const updatePeers = () => {
      const peers = provider.awareness.getStates().size;
      setConnectedPeers(peers);
    };
    
    // Update connected peers count when awareness changes
    provider.awareness.on('change', updatePeers);
    
    // Log connection status
    console.log('[Yjs] Connected to shared document');
    
    // Clean up when component unmounts
    return () => {
      console.log('[Yjs] Disconnected from shared document');
      provider.awareness.off('change', updatePeers);
      persistence.destroy();
      unbind();
    };
  }, []);
  
  return {
    connectedPeers
  };
};

export default useSyncToYjsEffect;
