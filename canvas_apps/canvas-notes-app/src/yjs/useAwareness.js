import { useEffect, useState, useCallback } from 'react';
import { awareness } from './yjs';

/**
 * Custom hook to manage awareness states (like cursor positions)
 * @param {object} initialState - Initial state for the local user
 * @returns {object} Awareness state management tools
 */
export const useAwareness = (initialState = {}) => {
  const [states, setStates] = useState({});
  const localClientId = awareness.clientID;

  // Update states when other users' awareness changes
  useEffect(() => {
    const handleChange = () => {
      // Convert Map to object
      const awarenessStates = Object.fromEntries(awareness.getStates());
      setStates(awarenessStates);
    };

    // Set initial states
    handleChange();

    // Subscribe to awareness changes
    awareness.on('change', handleChange);

    // Clean up subscription
    return () => {
      awareness.off('change', handleChange);
    };
  }, []);

  // Set local state
  const setLocalState = useCallback((state) => {
    awareness.setLocalState({
      ...awareness.getLocalState(),
      ...state
    });
  }, []);

  // Helper to get all remote states (excluding local user)
  const getRemoteStates = useCallback(() => {
    return Object.entries(states).filter(
      ([clientId]) => Number(clientId) !== localClientId
    );
  }, [states, localClientId]);

  return {
    states,
    localClientId,
    setLocalState,
    getRemoteStates,
    getLocalState: () => awareness.getLocalState()
  };
};

export default useAwareness;
