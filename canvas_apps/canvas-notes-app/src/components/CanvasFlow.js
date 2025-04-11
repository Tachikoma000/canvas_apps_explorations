import { useState, useCallback, useRef, useEffect } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  BackgroundVariant,
  Panel,
  MarkerType
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import NoteNode from './NoteNode';
import ThemeToggle from './ThemeToggle';
import useSyncToYjsEffect from '../yjs/useSyncToYjsEffect';
import Cursors from '../yjs/Cursors';
import canvasStore, { 
  addNode, 
  updateNodePosition,
  updateNodeData,
  updateNodeStyle,
  deleteNode,
  addEdge as addEdgeToStore,
  updateEdge as updateEdgeInStore,
  deleteEdge as deleteEdgeFromStore
} from '../store/canvasStore';
import { proxy, snapshot, subscribe } from 'valtio';

// Node types definition
const nodeTypes = {
  note: NoteNode,
};

let id = 0;
const getId = () => `node_${id++}`;

function CanvasFlow() {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [connectedUsers, setConnectedUsers] = useState(0);
  
  // Connect to Yjs collaborative session
  const { connectedPeers } = useSyncToYjsEffect();
  
  // Subscribe to canvasStore changes and update React Flow state
  useEffect(() => {
    const unsubscribe = subscribe(canvasStore, () => {
      const snap = snapshot(canvasStore);
      
      // Convert nodes object to array for React Flow
      const nodesArray = Object.values(snap.nodes);
      setNodes(nodesArray);
      
      // Convert edges object to array for React Flow
      const edgesArray = Object.values(snap.edges);
      setEdges(edgesArray);
    });
    
    return () => unsubscribe();
  }, [setNodes, setEdges]);

  // Handle node text changes
  const onNodeTextChange = useCallback((nodeId, text) => {
    updateNodeData(nodeId, { text });
  }, []);

  // Handle connections
  const onConnect = useCallback(
    (params) => {
      // Apply default styling for new connections
      const newEdge = {
        ...params,
        id: `edge-${params.source}-${params.target}`,
        type: 'default',
        markerEnd: { type: MarkerType.Arrow },
        style: { stroke: 'var(--primary)', strokeWidth: 1.5 }
      };
      
      // Add to collaborative store
      addEdgeToStore(newEdge);
    },
    []
  );

  // Create a new node at the specified position or center of the viewport
  const createNewNode = useCallback(
    (position) => {
      if (reactFlowInstance) {
        // If position is not provided, use the center of the viewport
        const nodePosition = position || {
          x: window.innerWidth / 2 - 125,
          y: window.innerHeight / 2 - 75
        };
        
        const newId = getId();
        const newNode = {
          id: newId,
          position: nodePosition,
          type: 'note',
          data: { 
            label: `Note ${id}`, 
            text: '',
            onChange: (text) => onNodeTextChange(newId, text)
          },
          style: {
            width: 250,
            height: 150,
          }
        };

        // Add to collaborative store
        addNode(newNode);
      }
    },
    [reactFlowInstance, onNodeTextChange]
  );

  // Context menus
  const [contextMenu, setContextMenu] = useState(null);
  const [edgeContextMenu, setEdgeContextMenu] = useState(null);
  
  const onPaneContextMenu = useCallback(
    (event) => {
      // Prevent default context menu from appearing
      event.preventDefault();
      
      if (reactFlowInstance) {
        const position = reactFlowInstance.screenToFlowPosition({
          x: event.clientX,
          y: event.clientY
        });
        
        setContextMenu({
          position,
          x: event.clientX,
          y: event.clientY,
        });
        
        // Close any open edge context menu
        setEdgeContextMenu(null);
      }
    },
    [reactFlowInstance]
  );
  
  // Edge context menu handler
  const onEdgeContextMenu = useCallback(
    (event, edge) => {
      // Prevent default context menu from appearing
      event.preventDefault();
      
      setEdgeContextMenu({
        edge,
        x: event.clientX,
        y: event.clientY,
      });
      
      // Close any open pane context menu
      setContextMenu(null);
    },
    []
  );

  // Update edge properties
  const updateEdge = useCallback(
    (edgeId, newData) => {
      updateEdgeInStore(edgeId, newData);
    },
    []
  );

  // Handle edge disconnection
  const disconnectEdge = useCallback(
    (edgeId) => {
      deleteEdgeFromStore(edgeId);
    },
    []
  );
  
  // Handle node drag
  const onNodeDragStop = useCallback((event, node) => {
    updateNodePosition(node.id, node.position);
  }, []);

  // Hide context menus when clicking anywhere
  const onPaneClick = useCallback(() => {
    setContextMenu(null);
    setEdgeContextMenu(null);
  }, []);

  return (
    <div className="canvas-flow-wrapper" ref={reactFlowWrapper}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onInit={setReactFlowInstance}
        onPaneClick={onPaneClick}
        onPaneContextMenu={onPaneContextMenu}
        onEdgeContextMenu={onEdgeContextMenu}
        onNodeDragStop={onNodeDragStop}
        nodeTypes={nodeTypes}
        fitView
        snapToGrid
        attributionPosition="bottom-right"
      >
        <Background 
          variant={BackgroundVariant.Dots} 
          gap={20} 
          size={1.5} 
          color="var(--canvas-dots-color)" 
          bgColor="var(--background)" 
        />
        <Controls />
        <MiniMap />
        <Panel position="top-left" className="canvas-info-panel">
          <h3>Canvas Notes</h3>
          <p>Right-click on the canvas to add a note</p>
          <p>Connect notes by dragging from one handle to another</p>
          <p><strong>Collaborative Mode Enabled</strong></p>
          <p className="collaboration-status">
            {connectedPeers > 1 
              ? `${connectedPeers} users connected` 
              : 'Waiting for other users...'}
          </p>
        </Panel>
        
        <Panel position="top-right" className="top-controls">
          <button className="add-node-button" onClick={() => createNewNode()}>
            + Add Note
          </button>
          <ThemeToggle />
        </Panel>
        
        {/* Pane context menu */}
        {contextMenu && (
          <div 
            className="context-menu"
            style={{
              position: 'absolute',
              left: contextMenu.x + 'px',
              top: contextMenu.y + 'px',
              zIndex: 1000,
            }}
          >
            <div 
              className="context-menu-option"
              onClick={() => {
                createNewNode(contextMenu.position);
                setContextMenu(null);
              }}
            >
              Add Note
            </div>
          </div>
        )}
        
        {/* Edge context menu */}
        {edgeContextMenu && (
          <div 
            className="context-menu edge-context-menu"
            style={{
              position: 'absolute',
              left: edgeContextMenu.x + 'px',
              top: edgeContextMenu.y + 'px',
              zIndex: 1000,
            }}
          >
            <div className="context-menu-header">Edge Options</div>
            
            {/* Edge Type Options */}
            <div className="context-menu-section">
              <div className="context-menu-section-title">Edge Type</div>
              <div 
                className="context-menu-option"
                onClick={() => {
                  updateEdge(edgeContextMenu.edge.id, { type: 'default' });
                  setEdgeContextMenu(null);
                }}
              >
                Bezier (Default)
              </div>
              <div 
                className="context-menu-option"
                onClick={() => {
                  updateEdge(edgeContextMenu.edge.id, { type: 'straight' });
                  setEdgeContextMenu(null);
                }}
              >
                Straight
              </div>
              <div 
                className="context-menu-option"
                onClick={() => {
                  updateEdge(edgeContextMenu.edge.id, { type: 'step' });
                  setEdgeContextMenu(null);
                }}
              >
                Step
              </div>
              <div 
                className="context-menu-option"
                onClick={() => {
                  updateEdge(edgeContextMenu.edge.id, { type: 'smoothstep' });
                  setEdgeContextMenu(null);
                }}
              >
                Smooth Step
              </div>
            </div>
            
            {/* Marker Options */}
            <div className="context-menu-section">
              <div className="context-menu-section-title">Markers</div>
              <div 
                className="context-menu-option"
                onClick={() => {
                  updateEdge(edgeContextMenu.edge.id, { 
                    markerEnd: { type: MarkerType.Arrow }
                  });
                  setEdgeContextMenu(null);
                }}
              >
                Arrow End
              </div>
              <div 
                className="context-menu-option"
                onClick={() => {
                  updateEdge(edgeContextMenu.edge.id, { 
                    markerStart: { type: MarkerType.Arrow }
                  });
                  setEdgeContextMenu(null);
                }}
              >
                Arrow Start
              </div>
              <div 
                className="context-menu-option"
                onClick={() => {
                  updateEdge(edgeContextMenu.edge.id, { 
                    markerEnd: { type: MarkerType.ArrowClosed }
                  });
                  setEdgeContextMenu(null);
                }}
              >
                Closed Arrow End
              </div>
              <div 
                className="context-menu-option"
                onClick={() => {
                  updateEdge(edgeContextMenu.edge.id, { 
                    markerStart: { type: MarkerType.ArrowClosed }
                  });
                  setEdgeContextMenu(null);
                }}
              >
                Closed Arrow Start
              </div>
              <div 
                className="context-menu-option"
                onClick={() => {
                  updateEdge(edgeContextMenu.edge.id, { 
                    markerStart: undefined,
                    markerEnd: undefined
                  });
                  setEdgeContextMenu(null);
                }}
              >
                No Markers
              </div>
            </div>
            
            {/* Color Options */}
            <div className="context-menu-section">
              <div className="context-menu-section-title">Edge Color</div>
              <div className="context-menu-color-options">
                <div 
                  className="context-menu-color-option"
                  style={{ backgroundColor: "var(--primary)" }}
                  onClick={() => {
                    updateEdge(edgeContextMenu.edge.id, { 
                      style: { stroke: "var(--primary)" }
                    });
                    setEdgeContextMenu(null);
                  }}
                ></div>
                <div 
                  className="context-menu-color-option"
                  style={{ backgroundColor: "var(--destructive)" }}
                  onClick={() => {
                    updateEdge(edgeContextMenu.edge.id, { 
                      style: { stroke: "var(--destructive)" }
                    });
                    setEdgeContextMenu(null);
                  }}
                ></div>
                <div 
                  className="context-menu-color-option"
                  style={{ backgroundColor: "var(--accent)" }}
                  onClick={() => {
                    updateEdge(edgeContextMenu.edge.id, { 
                      style: { stroke: "var(--accent)" }
                    });
                    setEdgeContextMenu(null);
                  }}
                ></div>
                <div 
                  className="context-menu-color-option"
                  style={{ backgroundColor: "var(--muted)" }}
                  onClick={() => {
                    updateEdge(edgeContextMenu.edge.id, { 
                      style: { stroke: "var(--muted)" }
                    });
                    setEdgeContextMenu(null);
                  }}
                ></div>
                <div 
                  className="context-menu-color-option"
                  style={{ backgroundColor: "var(--secondary)" }}
                  onClick={() => {
                    updateEdge(edgeContextMenu.edge.id, { 
                      style: { stroke: "var(--secondary)" }
                    });
                    setEdgeContextMenu(null);
                  }}
                ></div>
              </div>
            </div>
            
            {/* Actions */}
            <div className="context-menu-section">
              <div className="context-menu-section-title">Actions</div>
              <div 
                className="context-menu-option context-menu-option-danger"
                onClick={() => {
                  disconnectEdge(edgeContextMenu.edge.id);
                  setEdgeContextMenu(null);
                }}
              >
                Disconnect Edge
              </div>
            </div>
          </div>
        )}
      </ReactFlow>
      
      {/* Remote user cursors */}
      <Cursors />
    </div>
  );
}

export default CanvasFlow;
