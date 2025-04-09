import { useState, useEffect, useCallback, useRef } from 'react';
import { Handle, Position, useReactFlow } from '@xyflow/react';

// Internal helper component for size menu buttons
const SizeButton = ({ onClick, children, isLast = false }) => (
  <button 
    style={{
      textAlign: 'left',
      padding: '10px 16px',
      border: 'none',
      borderBottom: isLast ? 'none' : '1px solid var(--border)',
      backgroundColor: 'transparent',
      color: 'inherit',
      cursor: 'pointer',
      width: '100%',
      transition: 'background-color 0.2s ease'
    }}
    onClick={onClick}
    onMouseOver={(e) => e.target.style.backgroundColor = 'var(--accent)'}
    onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
  >
    {children}
  </button>
);

function NoteNode({ id, data, isConnectable, selected }) {
  const [noteText, setNoteText] = useState(data.text || '');
  const [showSizeMenu, setShowSizeMenu] = useState(false);
  const sizeButtonRef = useRef(null);
  const nodeRef = useRef(null);
  const { deleteElements, setNodes } = useReactFlow();
  
  // Update the node data when the text changes
  useEffect(() => {
    if (data.onChange) {
      data.onChange(noteText);
    }
  }, [noteText, data]);
  
  // Handle clicking outside to close the menu
  useEffect(() => {
    if (!showSizeMenu) return;
    
    const handleClickOutside = (event) => {
      if (sizeButtonRef.current && !sizeButtonRef.current.contains(event.target)) {
        // Don't close if clicked on the menu itself
        const sizeMenu = document.querySelector('.note-size-menu');
        if (sizeMenu && sizeMenu.contains(event.target)) {
          return;
        }
        setShowSizeMenu(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showSizeMenu]);
  
  // Change node size to predefined dimensions
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
  
  // Toggle the size menu visibility
  const toggleSizeMenu = useCallback(() => {
    setShowSizeMenu(!showSizeMenu);
  }, [showSizeMenu]);
  
  return (
    <div className={`note-node ${selected ? 'selected' : ''}`} ref={nodeRef}>
      {/* Top handle */}
      <Handle 
        type="target" 
        position={Position.Top} 
        id="top"
        isConnectable={isConnectable} 
      />
      {/* Left handle */}
      <Handle 
        type="target" 
        position={Position.Left}
        id="left" 
        isConnectable={isConnectable} 
      />
      <div className="note-node-header">
        <div className="note-node-title">{data.label || 'Note'}</div>
        <div className="note-node-controls">
          {selected && (
            <button 
              ref={sizeButtonRef}
              className="note-node-size" 
              onClick={toggleSizeMenu}
              title="Change size"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-2-2h-6M9 22H5a2 2 0 0 1-2-2v-4"></path>
                <rect x="9" y="6" width="12" height="12" rx="2"></rect>
              </svg>
            </button>
          )}
          <button 
            className="note-node-delete" 
            onClick={() => deleteElements({ nodes: [{ id }] })}
          >
            ×
          </button>
        </div>
      </div>
      <div className="note-node-content">
        <textarea
          className="note-textarea"
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          placeholder="Write your notes here..."
        />
      </div>
      {/* Bottom handle */}
      <Handle 
        type="source" 
        position={Position.Bottom}
        id="bottom" 
        isConnectable={isConnectable} 
      />
      {/* Right handle */}
      <Handle 
        type="source" 
        position={Position.Right}
        id="right" 
        isConnectable={isConnectable} 
      />
      
      {/* Size menu as a separate node-like component */}
      {showSizeMenu && (
        <div 
          className="note-size-menu"
          style={{
            position: 'absolute',
            top: '0',
            left: '100%',
            marginLeft: '20px',
            width: '140px',
            height: 'auto',
            backgroundColor: 'var(--card)',
            borderRadius: 'var(--radius)',
            border: '1px solid var(--border)',
            boxShadow: 'var(--shadow-lg)',
            zIndex: 999,
            overflow: 'hidden',
            color: 'var(--foreground)'
          }}
        >
          <div 
            className="note-size-menu-header"
            style={{
              padding: '8px 16px',
              borderBottom: '1px solid var(--border)',
              fontWeight: 'bold',
              fontSize: '14px',
              backgroundColor: 'var(--secondary)', 
              color: 'var(--secondary-foreground)'
            }}
          >
            Change Size
          </div>
          <div 
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%'
            }}
          >
            <SizeButton onClick={() => changeNodeSize(200, 150)}>
              Small
            </SizeButton>
            <SizeButton onClick={() => changeNodeSize(300, 200)}>
              Medium
            </SizeButton>
            <SizeButton onClick={() => changeNodeSize(400, 250)}>
              Large
            </SizeButton>
            <SizeButton 
              onClick={() => changeNodeSize(500, 300)}
              isLast={true}
            >
              X-Large
            </SizeButton>
          </div>
        </div>
      )}
    </div>
  );
}

export default NoteNode;
