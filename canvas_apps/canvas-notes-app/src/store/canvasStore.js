import { nanoid } from 'nanoid';
import { proxy } from 'valtio';

// Our full store interface for nodes and edges
const canvasStore = proxy({
  nodes: {},
  edges: {}
});

// Actions for manipulating the store

// Add a node to the store
export const addNode = (node) => {
  // If id is not provided, generate one
  const id = node.id || `node_${nanoid()}`;
  canvasStore.nodes[id] = {
    ...node,
    id
  };
  return id;
};

// Update node position
export const updateNodePosition = (id, position) => {
  if (canvasStore.nodes[id]) {
    canvasStore.nodes[id].position = position;
  }
};

// Update node data (like text content)
export const updateNodeData = (id, data) => {
  if (canvasStore.nodes[id]) {
    canvasStore.nodes[id].data = {
      ...canvasStore.nodes[id].data,
      ...data
    };
  }
};

// Update node style (like size)
export const updateNodeStyle = (id, style) => {
  if (canvasStore.nodes[id]) {
    canvasStore.nodes[id].style = {
      ...canvasStore.nodes[id].style,
      ...style
    };
  }
};

// Delete a node and its connected edges
export const deleteNode = (id) => {
  if (canvasStore.nodes[id]) {
    delete canvasStore.nodes[id];
    
    // Also delete any connected edges
    Object.entries(canvasStore.edges).forEach(([edgeId, edge]) => {
      if (edge.source === id || edge.target === id) {
        delete canvasStore.edges[edgeId];
      }
    });
  }
};

// Add an edge to the store
export const addEdge = (edge) => {
  const id = edge.id || `edge_${nanoid()}`;
  canvasStore.edges[id] = {
    ...edge,
    id
  };
  return id;
};

// Update edge properties
export const updateEdge = (id, data) => {
  if (canvasStore.edges[id]) {
    canvasStore.edges[id] = {
      ...canvasStore.edges[id],
      ...data
    };
  }
};

// Delete an edge
export const deleteEdge = (id) => {
  if (canvasStore.edges[id]) {
    delete canvasStore.edges[id];
  }
};

export default canvasStore;
