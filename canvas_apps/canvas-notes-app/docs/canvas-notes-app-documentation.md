# Canvas Notes App Documentation

## Table of Contents

1. [Introduction](#introduction)
2. [Application Architecture](#application-architecture)
3. [Core Components](#core-components)
4. [State Management](#state-management)
5. [Nodes Implementation](#nodes-implementation)
6. [Edges Implementation](#edges-implementation)
7. [Interaction Patterns](#interaction-patterns)
8. [Theming System](#theming-system)
9. [API Reference](#api-reference)
10. [Extending the Application](#extending-the-application)
11. [Best Practices](#best-practices)

## Introduction

Canvas Notes App is a flexible, interactive note-taking application built on React Flow (@xyflow/react) that allows users to create, connect, and organize notes in a spatial canvas. The application enables users to visualize relationships between ideas through an intuitive node-based interface.

### Key Features

- Create and edit notes in a spatial canvas
- Connect related notes with customizable edges
- Resize and reposition notes freely
- Multiple edge types and styling options
- Dark/light theme support
- Minimap navigation
- Canvas controls (zoom, pan, fit view)

## Application Architecture

The Canvas Notes App uses a component-based architecture centered around React Flow, a library for building node-based editors and interactive diagrams.

### High-Level Architecture

```
┌─────────────────────────────────────┐
│              App                    │
│  ┌───────────────────────────────┐  │
│  │      ReactFlowProvider        │  │
│  │  ┌────────────────────────┐   │  │
│  │  │       CanvasFlow       │   │  │
│  │  │  ┌─────────────────┐   │   │  │
│  │  │  │     ReactFlow   │   │   │  │
│  │  │  │  ┌───────────┐  │   │   │  │
│  │  │  │  │ NoteNodes │  │   │   │  │
│  │  │  │  └───────────┘  │   │   │  │
│  │  │  │  ┌───────────┐  │   │   │  │
│  │  │  │  │   Edges   │  │   │   │  │
│  │  │  │  └───────────┘  │   │   │  │
│  │  │  │  ┌───────────┐  │   │   │  │
│  │  │  │  │ Background │  │   │   │  │
│  │  │  │  └───────────┘  │   │   │  │
│  │  │  │  ┌───────────┐  │   │   │  │
│  │  │  │  │ Controls  │  │   │   │  │
│  │  │  │  └───────────┘  │   │   │  │
│  │  │  │  ┌───────────┐  │   │   │  │
│  │  │  │  │  MiniMap  │  │   │   │  │
│  │  │  │  └───────────┘  │   │   │  │
│  │  │  └─────────────────┘   │   │  │
│  │  │  ┌─────────────────┐   │   │  │
│  │  │  │   ThemeToggle   │   │   │  │
│  │  │  └─────────────────┘   │   │  │
│  │  └────────────────────────┘   │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
```

### Technology Stack

- **React**: Front-end library for building the user interface
- **@xyflow/react (React Flow)**: Core library for canvas, nodes, and edges functionality
- **CSS Variables**: Used for theming and styling
- **Local Storage**: Used for persisting theme preferences

### Data Flow

The application follows a unidirectional data flow pattern:

1. User interactions (adding nodes, connecting edges, etc.) trigger state changes in the CanvasFlow component
2. State updates trigger re-renders of the affected components
3. Node and edge data is managed centrally by React Flow's internal state

## Core Components

### App.js

The root component that wraps the application in the ReactFlowProvider, enabling access to the React Flow context throughout the component tree.

```jsx
function App() {
  return (
    <div className="app">
      <ReactFlowProvider>
        <CanvasFlow />
      </ReactFlowProvider>
    </div>
  );
}
```

### CanvasFlow.js

The central component managing the canvas state and functionality. It:

- Initializes and manages the nodes and edges state
- Handles node creation and connection
- Manages context menus for nodes and edges
- Configures React Flow settings (background, controls, etc.)

Key functions:
- `createNewNode`: Creates a new note node at the specified position
- `onNodeTextChange`: Updates a node's text content
- `onConnect`: Handles edge creation between nodes
- `onPaneContextMenu`: Shows the canvas context menu
- `onEdgeContextMenu`: Shows the edge customization menu
- `updateEdge`: Modifies edge properties (type, style, markers)
- `disconnectEdge`: Removes an edge connection

### NoteNode.js

A custom node component that renders an interactive note with:

- Text editing capability through a textarea
- Resize functionality
- Connections handles on all sides
- Delete button
- Size customization menu

### ThemeToggle.js

Manages theme switching between light and dark modes by:
- Reading/writing theme preference to localStorage
- Updating CSS classes on the document
- Rendering appropriate toggle icons

## State Management

The application uses a combination of React's useState hooks and React Flow's built-in state management.

### Nodes State

Nodes are managed using the `useNodesState` hook from React Flow:

```jsx
const [nodes, setNodes, onNodesChange] = useNodesState([]);
```

Each node contains:
- `id`: Unique identifier
- `position`: x,y coordinates on the canvas
- `type`: Node type ('note')
- `data`: Contains the note text and callback for updates
- `style`: Visual styling and dimensions

### Edges State

Edges are managed using the `useEdgesState` hook:

```jsx
const [edges, setEdges, onEdgesChange] = useEdgesState([]);
```

Each edge contains:
- `id`: Unique identifier
- `source`, `target`: IDs of connected nodes
- `sourceHandle`, `targetHandle`: Handle identifiers (top, right, bottom, left)
- `type`: Edge type (bezier, straight, step, smoothstep)
- `markerEnd`, `markerStart`: Arrow markers
- `style`: Visual styling

### Context Menus State

The application maintains separate state for pane and edge context menus:

```jsx
const [contextMenu, setContextMenu] = useState(null);
const [edgeContextMenu, setEdgeContextMenu] = useState(null);
```

## Nodes Implementation

### Node Structure

Nodes in the Canvas Notes App are custom implementations of React Flow's node system. Each node is a React component that renders:

1. A container div with positioning and styling
2. Connection handles on all four sides
3. A header with title and controls
4. A text area for content
5. A size adjustment menu

### NoteNode Component

```jsx
function NoteNode({ id, data, isConnectable, selected }) {
  // State and refs
  const [noteText, setNoteText] = useState(data.text || '');
  const [showSizeMenu, setShowSizeMenu] = useState(false);
  
  // React Flow hooks for node manipulation
  const { deleteElements, setNodes } = useReactFlow();
  
  // Size change functionality
  const changeNodeSize = useCallback((width, height) => {
    setNodes(nodes => 
      nodes.map(node => {
        if (node.id === id) {
          return {
            ...node,
            style: {
              ...node.style,
              width,
              height
            }
          };
        }
        return node;
      })
    );
    setShowSizeMenu(false);
  }, [id, setNodes]);
  
  return (
    <div className={`note-node ${selected ? 'selected' : ''}`}>
      {/* Connection handles */}
      <Handle type="target" position={Position.Top} id="top" isConnectable={isConnectable} />
      <Handle type="target" position={Position.Left} id="left" isConnectable={isConnectable} />
      
      {/* Header with controls */}
      <div className="note-node-header">
        <div className="note-node-title">{data.label || 'Note'}</div>
        <div className="note-node-controls">
          {selected && (
            <button className="note-node-size" onClick={toggleSizeMenu} title="Change size">
              {/* Size icon */}
            </button>
          )}
          <button className="note-node-delete" onClick={() => deleteElements({ nodes: [{ id }] })}>
            ×
          </button>
        </div>
      </div>
      
      {/* Note content */}
      <div className="note-node-content">
        <textarea
          className="note-textarea"
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          placeholder="Write your notes here..."
        />
      </div>
      
      {/* Bottom and right handles */}
      <Handle type="source" position={Position.Bottom} id="bottom" isConnectable={isConnectable} />
      <Handle type="source" position={Position.Right} id="right" isConnectable={isConnectable} />
      
      {/* Size menu popup */}
      {showSizeMenu && (
        <div className="note-size-menu">
          {/* Size options */}
        </div>
      )}
    </div>
  );
}
```

### Node Creation

Nodes are created through the `createNewNode` function in CanvasFlow:

```jsx
const createNewNode = useCallback(
  (position) => {
    if (reactFlowInstance) {
      // If position is not provided, use the center of the viewport
      const nodePosition = position || {
        x: window.innerWidth / 2 - 125,
        y: window.innerHeight / 2 - 75
      };
      
      const newNode = {
        id: getId(),
        position: nodePosition,
        type: 'note',
        data: { 
          label: `Note ${id}`, 
          text: '',
          onChange: (text) => onNodeTextChange(newNode.id, text)
        },
        style: {
          width: 250,
          height: 150,
        }
      };

      setNodes((nds) => nds.concat(newNode));
    }
  },
  [reactFlowInstance, setNodes, onNodeTextChange]
);
```

## Edges Implementation

### Edge Structure

Edges in the application are connections between notes that can be customized with different:

1. Types (Bezier, Straight, Step, Smooth Step)
2. Markers (arrows at start, end, or both)
3. Colors
4. Deletion functionality

### Edge Creation

Edges are created through the `onConnect` callback when a user drags from one handle to another:

```jsx
const onConnect = useCallback(
  (params) => {
    // Apply default styling for new connections
    const newEdge = {
      ...params,
      type: 'default',
      markerEnd: { type: MarkerType.Arrow },
      style: { stroke: 'var(--primary)', strokeWidth: 1.5 }
    };
    return setEdges((eds) => addEdge(newEdge, eds));
  },
  [setEdges]
);
```

### Edge Customization

Edges can be customized through a context menu that appears when right-clicking on an edge:

```jsx
const updateEdge = useCallback(
  (edgeId, newData) => {
    setEdges((eds) =>
      eds.map((edge) => {
        if (edge.id === edgeId) {
          return { ...edge, ...newData };
        }
        return edge;
      })
    );
  },
  [setEdges]
);
```

Available customization options:
- **Edge Type**: Bezier (default), Straight, Step, Smooth Step
- **Markers**: Arrow End, Arrow Start, Closed Arrow End, Closed Arrow Start, No Markers
- **Colors**: Multiple theme-based color options
- **Disconnection**: Remove the edge from the canvas

## Interaction Patterns

### Adding Notes

Notes can be added in two ways:
1. Clicking the "Add Note" button in the top-right panel
2. Right-clicking on the canvas and selecting "Add Note" from the context menu

### Editing Notes

Notes are edited by clicking inside the text area and typing content. Changes are saved automatically as you type.

### Connecting Notes

Connections are created by:
1. Dragging from a handle on one note (small squares on the sides)
2. Dropping onto a handle on another note

By default, connections:
- Can be made from any handle to any other handle
- Are styled as Bezier curves with an end arrow
- Use the primary color defined in the theme

### Customizing Connections

Connections are customized by:
1. Right-clicking on an edge to open the edge context menu
2. Selecting options from the menu categories (Edge Type, Markers, Edge Color)
3. Clicking outside to apply and close the menu

### Resizing Notes

Notes can be resized by:
1. Selecting a note (click on it)
2. Clicking the resize button in the top-right corner of the note
3. Selecting a size option from the popup menu (Small, Medium, Large, X-Large)

### Deleting Elements

- **Notes**: Click the × button in the top-right corner of a note
- **Connections**: Right-click on an edge and select "Disconnect Edge" from the context menu

### Navigation

The canvas supports standard navigation patterns:
- **Pan**: Click and drag on empty canvas space
- **Zoom**: Mouse wheel or using the zoom controls (+ and - buttons)
- **Fit View**: Click the fit view button in the controls panel
- **Minimap**: Click on the minimap to navigate to a specific area

## Theming System

The application implements a theming system based on CSS variables, inspired by shadcn/ui's approach.

### Theme Variables

CSS variables define the color palette and visual attributes for both light and dark themes:

```css
:root {
  /* Base colors */
  --background: hsl(0 0% 100%);
  --foreground: hsl(222.2 47.4% 11.2%);
  
  /* Muted backgrounds */
  --muted: hsl(210 40% 96.1%);
  --muted-foreground: hsl(215.4 16.3% 46.9%);
  
  /* Card backgrounds */
  --card: hsl(0 0% 100%);
  --card-foreground: hsl(222.2 47.4% 11.2%);
  
  /* Borders */
  --border: hsl(214.3 31.8% 91.4%);
  
  /* Primary action colors */
  --primary: hsl(222.2 47.4% 11.2%);
  --primary-foreground: hsl(210 40% 98%);
  
  /* Secondary action colors */
  --secondary: hsl(210 40% 96.1%);
  --secondary-foreground: hsl(222.2 47.4% 11.2%);
  
  /* Accents */
  --accent: hsl(210 40% 96.1%);
  --accent-foreground: hsl(222.2 47.4% 11.2%);
  
  /* Destructive actions */
  --destructive: hsl(0 100% 50%);
  --destructive-foreground: hsl(210 40% 98%);
  
  /* App-specific variables */
  --handle-color: var(--primary);
  --canvas-dots-color: var(--muted-foreground);
  
  /* Border radius */
  --radius: 0.5rem;
  
  /* Shadows */
  --shadow-sm: /*...*/;
  --shadow-md: /*...*/;
  --shadow-lg: /*...*/;
}

/* Dark mode overrides */
.dark {
  --background: hsl(224 71% 4%);
  --foreground: hsl(213 31% 91%);
  /* ...other dark variables */
}
```

### Theme Toggle Implementation

The theme toggle component manages switching between themes:

```jsx
function ThemeToggle() {
  // Initialize from localStorage or system preference
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('canvas-notes-theme');
    if (!storedTheme) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return storedTheme;
  });

  // Apply theme when it changes
  useEffect(() => {
    const htmlElement = document.documentElement;
    if (theme === 'dark') {
      htmlElement.classList.add('dark');
      htmlElement.classList.remove('light');
    } else {
      htmlElement.classList.add('light');
      htmlElement.classList.remove('dark');
    }
    
    localStorage.setItem('canvas-notes-theme', theme);
  }, [theme]);

  // Toggle between themes
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {/* Theme icons */}
    </button>
  );
}
```

## API Reference

### CanvasFlow Component

#### Props
None - This component is self-contained and manages its own state.

#### State Hooks
```jsx
const [nodes, setNodes, onNodesChange] = useNodesState([]);
const [edges, setEdges, onEdgesChange] = useEdgesState([]);
const [reactFlowInstance, setReactFlowInstance] = useState(null);
const [contextMenu, setContextMenu] = useState(null);
const [edgeContextMenu, setEdgeContextMenu] = useState(null);
```

#### Methods

| Method | Parameters | Description |
|--------|------------|-------------|
| `createNewNode` | `position?: {x: number, y: number}` | Creates a new note node at the specified position or at the center of the viewport if no position is provided |
| `onNodeTextChange` | `nodeId: string, text: string` | Updates the text content of a node identified by its ID |
| `onConnect` | `connection: Connection` | Creates a new edge between nodes when a connection is established |
| `updateEdge` | `edgeId: string, newData: object` | Updates properties of an existing edge |
| `disconnectEdge` | `edgeId: string` | Removes an edge from the canvas |
| `onPaneContextMenu` | `event: React.MouseEvent` | Opens the context menu for the canvas pane |
| `onEdgeContextMenu` | `event: React.MouseEvent, edge: Edge` | Opens the context menu for an edge |

### NoteNode Component

#### Props

| Prop | Type | Description |
|------|------|-------------|
| `id` | string | Unique identifier for the node |
| `data` | object | Contains node data including label and text content |
| `isConnectable` | boolean | Whether the node can have connections |
| `selected` | boolean | Whether the node is currently selected |

#### Methods

| Method | Parameters | Description |
|--------|------------|-------------|
| `changeNodeSize` | `width: number, height: number` | Updates the dimensions of the node |
| `toggleSizeMenu` | none | Shows or hides the size customization menu |

### ThemeToggle Component

#### State

| State | Type | Description |
|-------|------|-------------|
| `theme` | string | Current theme ('light' or 'dark') |

#### Methods

| Method | Parameters | Description |
|--------|------------|-------------|
| `toggleTheme` | none | Switches between light and dark themes |

## Extending the Application

### Adding New Node Types

The application can be extended with new node types by:

1. Creating a new node component:
```jsx
function CustomNode({ id, data, isConnectable }) {
  return (
    <div className="custom-node">
      <Handle type="target" position={Position.Top} id="top" isConnectable={isConnectable} />
      {/* Custom node content */}
      <Handle type="source" position={Position.Bottom} id="bottom" isConnectable={isConnectable} />
    </div>
  );
}
```

2. Registering the node type in the CanvasFlow component:
```jsx
const nodeTypes = {
  note: NoteNode,
  custom: CustomNode,
};

// Later in the ReactFlow component:
<ReactFlow
  nodes={nodes}
  edges={edges}
  nodeTypes={nodeTypes}
  // ...other props
/>
```

3. Creating nodes of the new type:
```jsx
const newCustomNode = {
  id: getId(),
  position: { x: 100, y: 100 },
  type: 'custom', // This must match the key in nodeTypes
  data: { /* custom data */ },
};
```

### Adding New Edge Types

To add custom edge types:

1. Create a custom edge component:
```jsx
function CustomEdge({ id, source, target, sourceX, sourceY, targetX, targetY, style = {}, markerEnd }) {
  const [edgePath] = getStraightPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  return (
    <path
      id={id}
      style={style}
      className="custom-edge"
      d={edgePath}
      markerEnd={markerEnd}
    />
  );
}
```

2. Register the edge type:
```jsx
const edgeTypes = {
  custom: CustomEdge,
};

// In the ReactFlow component:
<ReactFlow
  edges={edges}
  edgeTypes={edgeTypes}
  // ...other props
/>
```

3. Create edges with the custom type:
```jsx
const customEdge = {
  id: 'e1-2',
  source: 'node1',
  target: 'node2',
  type: 'custom',
};
```

### Adding Data Persistence

To add persistence for saving and loading canvas states:

1. Implement save functionality:
```jsx
const saveCanvas = () => {
  if (reactFlowInstance) {
    const flow = reactFlowInstance.toObject();
    localStorage.setItem('canvas-flow', JSON.stringify(flow));
  }
};
```

2. Implement load functionality:
```jsx
const restoreCanvas = () => {
  const savedFlow = localStorage.getItem('canvas-flow');
  
  if (savedFlow) {
    const flow = JSON.parse(savedFlow);
    
    // Restore nodes and edges with proper callbacks
    const restoredNodes = flow.nodes.map(node => ({
      ...node,
      data: {
        ...node.data,
        onChange: (text) => onNodeTextChange(node.id, text)
      }
    }));
    
    setNodes(restoredNodes);
    setEdges(flow.edges);
  }
};
```

3. Add UI elements for saving/loading:
```jsx
<Panel position="top-right">
  <button onClick={saveCanvas}>Save</button>
  <button onClick={restoreCanvas}>Load</button>
</Panel>
```

### Adding Export Features

To add capabilities for exporting the canvas as an image:

```jsx
const exportImage = () => {
  if (reactFlowInstance) {
    const dataUrl = reactFlowInstance.toImage();
    
    // Create a download link
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = 'canvas-notes.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};
```

## Best Practices

### Node Management

1. **Limit Node Count**: For performance reasons, limit the number of visible nodes to 100-200 at a time
2. **Use Pagination or Virtualization**: For larger node sets, implement pagination or virtualization
3. **Group Related Nodes**: Use visual grouping (colors, proximity) to organize related nodes
4. **Node Naming**: Use descriptive, unique names for nodes to improve user experience
5. **Node Sizing**: Keep node sizes consistent unless there's a semantic meaning to size differences

### Connection Management

1. **Avoid Overlapping Edges**: Position nodes to minimize edge crossings
2. **Use Different Edge Types**: Use different edge types to represent different types of relationships
3. **Edge Labels**: Use edge labels sparingly to avoid visual clutter
4. **Consider Connection Direction**: Be intentional about whether relationships are directed (one-way) or undirected (two-way)
5. **Limit Connections per Node**: For clarity, limit the number of connections per node

### Performance Optimization

1. **Memoize Callbacks**: Use React's `useCallback` for functions that don't need to be recreated on every render
2. **Virtualize Nodes**: For large canvases, only render nodes that are in or near the viewport
3. **Debounce User Inputs**: Especially for text editing in nodes to minimize re-renders
4. **Optimize Rendering**: Use `React.memo` for node components to prevent unnecessary re-renders
5. **Batch Updates**: Combine multiple state updates to minimize re-renders

```jsx
// Example of batching updates
const updateMultipleNodes = (updatedNodes) => {
  setNodes(nodes => 
    nodes.map(node => {
      const update = updatedNodes.find(n => n.id === node.id);
      return update ? { ...node, ...update } : node;
    })
  );
};
```

### UX Recommendations

1. **Provide Clear Feedback**: Use visual cues to show users when actions are successful
2. **Progressive Disclosure**: Start with simple functionality and allow users to discover advanced features
3. **Undo/Redo**: Implement an undo/redo system for user actions
4. **Keyboard Shortcuts**: Add keyboard shortcuts for common actions for power users
5. **Responsive Layout**: Ensure the canvas works well on different screen sizes
6. **Canvas Navigation**: Provide tools for users to easily navigate a large canvas (minimap, zooming, etc.)
7. **Contextual Help**: Provide tooltips or a help panel explaining how to use the canvas

### Accessibility Considerations

1. **Keyboard Navigation**: Ensure all functions can be performed via keyboard
2. **Screen Reader Support**: Add appropriate ARIA attributes for screen readers
3. **Color Contrast**: Ensure sufficient contrast between text and background
4. **Focus Indicators**: Provide clear visual indicators of focus
5. **Alternative Text**: Add descriptive alt text for all visual elements
