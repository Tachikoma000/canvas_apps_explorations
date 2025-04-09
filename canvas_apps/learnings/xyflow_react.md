└── packages
    └── react
        ├── .env
        ├── .eslintrc.js
        ├── CHANGELOG.md
        ├── README.md
        ├── package.json
        ├── src
            ├── additional-components
            │   ├── Background
            │   │   ├── Background.tsx
            │   │   ├── Patterns.tsx
            │   │   ├── index.tsx
            │   │   └── types.ts
            │   ├── Controls
            │   │   ├── ControlButton.tsx
            │   │   ├── Controls.tsx
            │   │   ├── Icons
            │   │   │   ├── FitView.tsx
            │   │   │   ├── Lock.tsx
            │   │   │   ├── Minus.tsx
            │   │   │   ├── Plus.tsx
            │   │   │   └── Unlock.tsx
            │   │   ├── index.tsx
            │   │   └── types.ts
            │   ├── MiniMap
            │   │   ├── MiniMap.tsx
            │   │   ├── MiniMapNode.tsx
            │   │   ├── MiniMapNodes.tsx
            │   │   ├── index.tsx
            │   │   └── types.ts
            │   ├── NodeResizer
            │   │   ├── NodeResizeControl.tsx
            │   │   ├── NodeResizer.tsx
            │   │   ├── index.tsx
            │   │   └── types.ts
            │   ├── NodeToolbar
            │   │   ├── NodeToolbar.tsx
            │   │   ├── NodeToolbarPortal.tsx
            │   │   ├── index.tsx
            │   │   └── types.ts
            │   └── index.ts
            ├── components
            │   ├── A11yDescriptions
            │   │   └── index.tsx
            │   ├── Attribution
            │   │   └── index.tsx
            │   ├── BatchProvider
            │   │   ├── index.tsx
            │   │   ├── types.ts
            │   │   └── useQueue.ts
            │   ├── ConnectionLine
            │   │   └── index.tsx
            │   ├── EdgeLabelRenderer
            │   │   └── index.tsx
            │   ├── EdgeWrapper
            │   │   ├── EdgeUpdateAnchors.tsx
            │   │   ├── index.tsx
            │   │   └── utils.ts
            │   ├── Edges
            │   │   ├── BaseEdge.tsx
            │   │   ├── BezierEdge.tsx
            │   │   ├── EdgeAnchor.tsx
            │   │   ├── EdgeText.tsx
            │   │   ├── SimpleBezierEdge.tsx
            │   │   ├── SmoothStepEdge.tsx
            │   │   ├── StepEdge.tsx
            │   │   ├── StraightEdge.tsx
            │   │   └── index.ts
            │   ├── Handle
            │   │   └── index.tsx
            │   ├── NodeWrapper
            │   │   ├── index.tsx
            │   │   ├── useNodeObserver.ts
            │   │   └── utils.tsx
            │   ├── Nodes
            │   │   ├── DefaultNode.tsx
            │   │   ├── GroupNode.tsx
            │   │   ├── InputNode.tsx
            │   │   ├── OutputNode.tsx
            │   │   └── utils.ts
            │   ├── NodesSelection
            │   │   └── index.tsx
            │   ├── Panel
            │   │   └── index.tsx
            │   ├── ReactFlowProvider
            │   │   └── index.tsx
            │   ├── SelectionListener
            │   │   └── index.tsx
            │   ├── StoreUpdater
            │   │   └── index.tsx
            │   ├── UserSelection
            │   │   └── index.tsx
            │   └── ViewportPortal
            │   │   └── index.tsx
            ├── container
            │   ├── EdgeRenderer
            │   │   ├── MarkerDefinitions.tsx
            │   │   ├── MarkerSymbols.tsx
            │   │   └── index.tsx
            │   ├── FlowRenderer
            │   │   └── index.tsx
            │   ├── GraphView
            │   │   ├── index.tsx
            │   │   ├── useNodeOrEdgeTypesWarning.ts
            │   │   └── useStylesLoadedWarning.ts
            │   ├── NodeRenderer
            │   │   ├── index.tsx
            │   │   └── useResizeObserver.ts
            │   ├── Pane
            │   │   └── index.tsx
            │   ├── ReactFlow
            │   │   ├── Wrapper.tsx
            │   │   ├── index.tsx
            │   │   └── init-values.ts
            │   ├── Viewport
            │   │   └── index.tsx
            │   └── ZoomPane
            │   │   └── index.tsx
            ├── contexts
            │   ├── NodeIdContext.ts
            │   └── StoreContext.ts
            ├── custom.d.ts
            ├── hooks
            │   ├── useColorModeClass.ts
            │   ├── useConnection.ts
            │   ├── useDrag.ts
            │   ├── useEdges.ts
            │   ├── useGlobalKeyHandler.ts
            │   ├── useHandleConnections.ts
            │   ├── useInternalNode.ts
            │   ├── useIsomorphicLayoutEffect.ts
            │   ├── useKeyPress.ts
            │   ├── useMoveSelectedNodes.ts
            │   ├── useNodeConnections.ts
            │   ├── useNodes.ts
            │   ├── useNodesData.ts
            │   ├── useNodesEdgesState.ts
            │   ├── useNodesInitialized.ts
            │   ├── useOnInitHandler.ts
            │   ├── useOnSelectionChange.ts
            │   ├── useOnViewportChange.ts
            │   ├── useReactFlow.ts
            │   ├── useResizeHandler.ts
            │   ├── useStore.ts
            │   ├── useUpdateNodeInternals.ts
            │   ├── useViewport.ts
            │   ├── useViewportHelper.ts
            │   ├── useViewportSync.ts
            │   ├── useVisibleEdgeIds.ts
            │   └── useVisibleNodeIds.ts
            ├── index.ts
            ├── store
            │   ├── index.ts
            │   └── initialState.ts
            ├── styles
            │   ├── base.css
            │   ├── style.css
            │   └── utils.ts
            ├── types
            │   ├── component-props.ts
            │   ├── edges.ts
            │   ├── general.ts
            │   ├── index.ts
            │   ├── instance.ts
            │   ├── nodes.ts
            │   └── store.ts
            └── utils
            │   ├── changes.ts
            │   ├── general.ts
            │   └── index.ts
        └── tsconfig.json


/packages/react/.env:
--------------------------------------------------------------------------------
1 | LIB=react


--------------------------------------------------------------------------------
/packages/react/.eslintrc.js:
--------------------------------------------------------------------------------
1 | module.exports = {
2 |   root: true,
3 |   extends: ['@xyflow/eslint-config'],
4 | };
5 | 


--------------------------------------------------------------------------------
/packages/react/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "@xyflow/react",
 3 |   "version": "12.5.5",
 4 |   "description": "React Flow - A highly customizable React library for building node-based editors and interactive flow charts.",
 5 |   "keywords": [
 6 |     "react",
 7 |     "node-based UI",
 8 |     "graph",
 9 |     "diagram",
10 |     "workflow",
11 |     "react-flow",
12 |     "xyflow"
13 |   ],
14 |   "repository": {
15 |     "type": "git",
16 |     "url": "https://github.com/xyflow/xyflow.git",
17 |     "directory": "packages/react"
18 |   },
19 |   "homepage": "https://reactflow.dev",
20 |   "bugs": {
21 |     "url": "https://github.com/xyflow/xyflow/issues"
22 |   },
23 |   "files": [
24 |     "dist"
25 |   ],
26 |   "source": "src/index.ts",
27 |   "main": "dist/umd/index.js",
28 |   "module": "dist/esm/index.js",
29 |   "types": "dist/esm/index.d.ts",
30 |   "exports": {
31 |     "./package.json": "./package.json",
32 |     ".": {
33 |       "node": {
34 |         "types": "./dist/esm/index.d.ts",
35 |         "module": "./dist/esm/index.js",
36 |         "require": "./dist/umd/index.js",
37 |         "import": "./dist/esm/index.mjs"
38 |       },
39 |       "browser": {
40 |         "import": "./dist/esm/index.js",
41 |         "require": "./dist/umd/index.js"
42 |       },
43 |       "default": "./dist/esm/index.js"
44 |     },
45 |     "./dist/base.css": "./dist/base.css",
46 |     "./dist/style.css": "./dist/style.css"
47 |   },
48 |   "sideEffects": [
49 |     "*.css"
50 |   ],
51 |   "license": "MIT",
52 |   "publishConfig": {
53 |     "access": "public"
54 |   },
55 |   "scripts": {
56 |     "dev": "concurrently \"rollup --config node:@xyflow/rollup-config --watch\" pnpm:css-watch",
57 |     "build": "rollup --config node:@xyflow/rollup-config --environment NODE_ENV:production && npm run css",
58 |     "css": "postcss src/styles/{base,style}.css --config ./../../tooling/postcss-config/ --dir dist ",
59 |     "css-watch": "pnpm css --watch",
60 |     "lint": "eslint --ext .js,.jsx,.ts,.tsx src",
61 |     "typecheck": "tsc --noEmit"
62 |   },
63 |   "dependencies": {
64 |     "@xyflow/system": "workspace:*",
65 |     "classcat": "^5.0.3",
66 |     "zustand": "^4.4.0"
67 |   },
68 |   "peerDependencies": {
69 |     "react": ">=17",
70 |     "react-dom": ">=17"
71 |   },
72 |   "devDependencies": {
73 |     "@types/node": "^18.7.16",
74 |     "@types/react": ">=17",
75 |     "@types/react-dom": ">=17",
76 |     "@xyflow/eslint-config": "workspace:*",
77 |     "@xyflow/rollup-config": "workspace:*",
78 |     "@xyflow/tsconfig": "workspace:*",
79 |     "autoprefixer": "^10.4.15",
80 |     "cssnano": "^6.0.1",
81 |     "postcss": "^8.4.21",
82 |     "postcss-cli": "^11.0.0",
83 |     "postcss-combine-duplicated-selectors": "^10.0.3",
84 |     "postcss-import": "^15.1.0",
85 |     "postcss-nested": "^6.0.0",
86 |     "postcss-rename": "^0.6.1",
87 |     "react": "^18.2.0",
88 |     "typescript": "5.4.5"
89 |   },
90 |   "rollup": {
91 |     "globals": {
92 |       "classcat": "cc",
93 |       "zustand": "zustand",
94 |       "zustand/shallow": "zustandShallow"
95 |     },
96 |     "name": "ReactFlow"
97 |   }
98 | }
99 | 


--------------------------------------------------------------------------------
/packages/react/src/additional-components/Background/Background.tsx:
--------------------------------------------------------------------------------
  1 | import { CSSProperties, memo, useRef } from 'react';
  2 | import cc from 'classcat';
  3 | import { shallow } from 'zustand/shallow';
  4 | 
  5 | import { useStore } from '../../hooks/useStore';
  6 | import { DotPattern, LinePattern } from './Patterns';
  7 | import { containerStyle } from '../../styles/utils';
  8 | import { type BackgroundProps, BackgroundVariant } from './types';
  9 | import { type ReactFlowState } from '../../types';
 10 | 
 11 | const defaultSize = {
 12 |   [BackgroundVariant.Dots]: 1,
 13 |   [BackgroundVariant.Lines]: 1,
 14 |   [BackgroundVariant.Cross]: 6,
 15 | };
 16 | 
 17 | const selector = (s: ReactFlowState) => ({ transform: s.transform, patternId: `pattern-${s.rfId}` });
 18 | 
 19 | function BackgroundComponent({
 20 |   id,
 21 |   variant = BackgroundVariant.Dots,
 22 |   // only used for dots and cross
 23 |   gap = 20,
 24 |   // only used for lines and cross
 25 |   size,
 26 |   lineWidth = 1,
 27 |   offset = 0,
 28 |   color,
 29 |   bgColor,
 30 |   style,
 31 |   className,
 32 |   patternClassName,
 33 | }: BackgroundProps) {
 34 |   const ref = useRef<SVGSVGElement>(null);
 35 |   const { transform, patternId } = useStore(selector, shallow);
 36 |   const patternSize = size || defaultSize[variant];
 37 |   const isDots = variant === BackgroundVariant.Dots;
 38 |   const isCross = variant === BackgroundVariant.Cross;
 39 |   const gapXY: [number, number] = Array.isArray(gap) ? gap : [gap, gap];
 40 |   const scaledGap: [number, number] = [gapXY[0] * transform[2] || 1, gapXY[1] * transform[2] || 1];
 41 |   const scaledSize = patternSize * transform[2];
 42 |   const offsetXY: [number, number] = Array.isArray(offset) ? offset : [offset, offset];
 43 | 
 44 |   const patternDimensions: [number, number] = isCross ? [scaledSize, scaledSize] : scaledGap;
 45 |   const scaledOffset: [number, number] = [
 46 |     offsetXY[0] * transform[2] || 1 + patternDimensions[0] / 2,
 47 |     offsetXY[1] * transform[2] || 1 + patternDimensions[1] / 2,
 48 |   ];
 49 | 
 50 |   const _patternId = `${patternId}${id ? id : ''}`;
 51 | 
 52 |   return (
 53 |     <svg
 54 |       className={cc(['react-flow__background', className])}
 55 |       style={
 56 |         {
 57 |           ...style,
 58 |           ...containerStyle,
 59 |           '--xy-background-color-props': bgColor,
 60 |           '--xy-background-pattern-color-props': color,
 61 |         } as CSSProperties
 62 |       }
 63 |       ref={ref}
 64 |       data-testid="rf__background"
 65 |     >
 66 |       <pattern
 67 |         id={_patternId}
 68 |         x={transform[0] % scaledGap[0]}
 69 |         y={transform[1] % scaledGap[1]}
 70 |         width={scaledGap[0]}
 71 |         height={scaledGap[1]}
 72 |         patternUnits="userSpaceOnUse"
 73 |         patternTransform={`translate(-${scaledOffset[0]},-${scaledOffset[1]})`}
 74 |       >
 75 |         {isDots ? (
 76 |           <DotPattern radius={scaledSize / 2} className={patternClassName} />
 77 |         ) : (
 78 |           <LinePattern
 79 |             dimensions={patternDimensions}
 80 |             lineWidth={lineWidth}
 81 |             variant={variant}
 82 |             className={patternClassName}
 83 |           />
 84 |         )}
 85 |       </pattern>
 86 |       <rect x="0" y="0" width="100%" height="100%" fill={`url(#${_patternId})`} />
 87 |     </svg>
 88 |   );
 89 | }
 90 | 
 91 | BackgroundComponent.displayName = 'Background';
 92 | 
 93 | /**
 94 |  * The `<Background />` component makes it convenient to render different types of backgrounds common in node-based UIs. It comes with three variants: lines, dots and cross.
 95 |  *
 96 |  * @example
 97 |  *
 98 |  * A simple example of how to use the Background component.
 99 |  *
100 |  * ```tsx
101 |  * import { useState } from 'react';
102 |  * import { ReactFlow, Background, BackgroundVariant } from '@xyflow/react';
103 |  *
104 |  * export default function Flow() {
105 |  *   return (
106 |  *     <ReactFlow defaultNodes={[...]} defaultEdges={[...]}>
107 |  *       <Background color="#ccc" variant={BackgroundVariant.Dots} />
108 |  *     </ReactFlow>
109 |  *   );
110 |  * }
111 |  * ```
112 |  *
113 |  * @example
114 |  *
115 |  * In this example you can see how to combine multiple backgrounds
116 |  *
117 |  * ```tsx
118 |  * import { ReactFlow, Background, BackgroundVariant } from '@xyflow/react';
119 |  * import '@xyflow/react/dist/style.css';
120 |  *
121 |  * export default function Flow() {
122 |  *   return (
123 |  *     <ReactFlow defaultNodes={[...]} defaultEdges={[...]}>
124 |  *       <Background
125 |  *         id="1"
126 |  *         gap={10}
127 |  *         color="#f1f1f1"
128 |  *         variant={BackgroundVariant.Lines}
129 |  *       />
130 |  *       <Background
131 |  *         id="2"
132 |  *         gap={100}
133 |  *         color="#ccc"
134 |  *         variant={BackgroundVariant.Lines}
135 |  *       />
136 |  *     </ReactFlow>
137 |  *   );
138 |  * }
139 |  * ```
140 |  *
141 |  * @remarks
142 |  *
143 |  * When combining multiple <Background /> components it’s important to give each of them a unique id prop!
144 |  *
145 |  */
146 | export const Background = memo(BackgroundComponent);
147 | 


--------------------------------------------------------------------------------
/packages/react/src/additional-components/Background/Patterns.tsx:
--------------------------------------------------------------------------------
 1 | import cc from 'classcat';
 2 | 
 3 | import { BackgroundVariant } from './types';
 4 | 
 5 | type LinePatternProps = {
 6 |   dimensions: [number, number];
 7 |   variant: BackgroundVariant;
 8 |   lineWidth?: number;
 9 |   className?: string;
10 | };
11 | 
12 | export function LinePattern({ dimensions, lineWidth, variant, className }: LinePatternProps) {
13 |   return (
14 |     <path
15 |       strokeWidth={lineWidth}
16 |       d={`M${dimensions[0] / 2} 0 V${dimensions[1]} M0 ${dimensions[1] / 2} H${dimensions[0]}`}
17 |       className={cc(['react-flow__background-pattern', variant, className])}
18 |     />
19 |   );
20 | }
21 | 
22 | type DotPatternProps = {
23 |   radius: number;
24 |   className?: string;
25 | };
26 | 
27 | export function DotPattern({ radius, className }: DotPatternProps) {
28 |   return (
29 |     <circle cx={radius} cy={radius} r={radius} className={cc(['react-flow__background-pattern', 'dots', className])} />
30 |   );
31 | }
32 | 


--------------------------------------------------------------------------------
/packages/react/src/additional-components/Background/index.tsx:
--------------------------------------------------------------------------------
1 | export { Background } from './Background';
2 | export { BackgroundVariant, type BackgroundProps } from './types';
3 | 


--------------------------------------------------------------------------------
/packages/react/src/additional-components/Background/types.ts:
--------------------------------------------------------------------------------
 1 | import { CSSProperties } from 'react';
 2 | 
 3 | /**
 4 |  * The three variants are exported as an enum for convenience. You can either import
 5 |  * the enum and use it like `BackgroundVariant.Lines` or you can use the raw string
 6 |  * value directly.
 7 |  * @public
 8 |  */
 9 | export enum BackgroundVariant {
10 |   Lines = 'lines',
11 |   Dots = 'dots',
12 |   Cross = 'cross',
13 | }
14 | 
15 | /**
16 |  * @expand
17 |  */
18 | export type BackgroundProps = {
19 |   /** When multiple backgrounds are present on the page, each one should have a unique id. */
20 |   id?: string;
21 |   /** Color of the pattern. */
22 |   color?: string;
23 |   /** Color of the background. */
24 |   bgColor?: string;
25 |   /** Class applied to the container. */
26 |   className?: string;
27 |   /** Class applied to the pattern. */
28 |   patternClassName?: string;
29 |   /**
30 |    * The gap between patterns. Passing in a tuple allows you to control the x and y gap
31 |    * independently.
32 |    * @default 20
33 |    */
34 |   gap?: number | [number, number];
35 |   /**
36 |    * The radius of each dot or the size of each rectangle if `BackgroundVariant.Dots` or
37 |    * `BackgroundVariant.Cross` is used. This defaults to 1 or 6 respectively, or ignored if
38 |    * `BackgroundVariant.Lines` is used.
39 |    */
40 |   size?: number;
41 |   /**
42 |    * Offset of the pattern.
43 |    * @default 0
44 |    */
45 |   offset?: number | [number, number];
46 |   /**
47 |    * The stroke thickness used when drawing the pattern.
48 |    * @default 1
49 |    */
50 |   lineWidth?: number;
51 |   /**
52 |    * Variant of the pattern.
53 |    * @default BackgroundVariant.Dots
54 |    * @example BackgroundVariant.Lines, BackgroundVariant.Dots, BackgroundVariant.Cross
55 |    * 'lines', 'dots', 'cross'
56 |    */
57 |   variant?: BackgroundVariant;
58 |   /** Style applied to the container. */
59 |   style?: CSSProperties;
60 | };
61 | 


--------------------------------------------------------------------------------
/packages/react/src/additional-components/Controls/ControlButton.tsx:
--------------------------------------------------------------------------------
 1 | import cc from 'classcat';
 2 | 
 3 | import type { ControlButtonProps } from './types';
 4 | 
 5 | /**
 6 |  * You can add buttons to the control panel by using the `<ControlButton />` component
 7 |  * and pass it as a child to the [`<Controls />`](/api-reference/components/controls) component.
 8 |  *
 9 |  * @public
10 |  * @example
11 |  *```jsx
12 |  *import { MagicWand } from '@radix-ui/react-icons'
13 |  *import { ReactFlow, Controls, ControlButton } from '@xyflow/react'
14 |  *
15 |  *export default function Flow() {
16 |  *  return (
17 |  *    <ReactFlow nodes={[...]} edges={[...]}>
18 |  *      <Controls>
19 |  *        <ControlButton onClick={() => alert('Something magical just happened. ✨')}>
20 |  *          <MagicWand />
21 |  *        </ControlButton>
22 |  *      </Controls>
23 |  *    </ReactFlow>
24 |  *  )
25 |  *}
26 |  *```
27 |  */
28 | export function ControlButton({ children, className, ...rest }: ControlButtonProps) {
29 |   return (
30 |     <button type="button" className={cc(['react-flow__controls-button', className])} {...rest}>
31 |       {children}
32 |     </button>
33 |   );
34 | }
35 | 


--------------------------------------------------------------------------------
/packages/react/src/additional-components/Controls/Controls.tsx:
--------------------------------------------------------------------------------
  1 | import { memo } from 'react';
  2 | import cc from 'classcat';
  3 | import { shallow } from 'zustand/shallow';
  4 | 
  5 | import { useStore, useStoreApi } from '../../hooks/useStore';
  6 | import { useReactFlow } from '../../hooks/useReactFlow';
  7 | import { Panel } from '../../components/Panel';
  8 | import { type ReactFlowState } from '../../types';
  9 | 
 10 | import { PlusIcon } from './Icons/Plus';
 11 | import { MinusIcon } from './Icons/Minus';
 12 | import { FitViewIcon } from './Icons/FitView';
 13 | import { LockIcon } from './Icons/Lock';
 14 | import { UnlockIcon } from './Icons/Unlock';
 15 | import { ControlButton } from './ControlButton';
 16 | import type { ControlProps } from './types';
 17 | 
 18 | const selector = (s: ReactFlowState) => ({
 19 |   isInteractive: s.nodesDraggable || s.nodesConnectable || s.elementsSelectable,
 20 |   minZoomReached: s.transform[2] <= s.minZoom,
 21 |   maxZoomReached: s.transform[2] >= s.maxZoom,
 22 | });
 23 | 
 24 | function ControlsComponent({
 25 |   style,
 26 |   showZoom = true,
 27 |   showFitView = true,
 28 |   showInteractive = true,
 29 |   fitViewOptions,
 30 |   onZoomIn,
 31 |   onZoomOut,
 32 |   onFitView,
 33 |   onInteractiveChange,
 34 |   className,
 35 |   children,
 36 |   position = 'bottom-left',
 37 |   orientation = 'vertical',
 38 |   'aria-label': ariaLabel = 'React Flow controls',
 39 | }: ControlProps) {
 40 |   const store = useStoreApi();
 41 |   const { isInteractive, minZoomReached, maxZoomReached } = useStore(selector, shallow);
 42 |   const { zoomIn, zoomOut, fitView } = useReactFlow();
 43 | 
 44 |   const onZoomInHandler = () => {
 45 |     zoomIn();
 46 |     onZoomIn?.();
 47 |   };
 48 | 
 49 |   const onZoomOutHandler = () => {
 50 |     zoomOut();
 51 |     onZoomOut?.();
 52 |   };
 53 | 
 54 |   const onFitViewHandler = () => {
 55 |     fitView(fitViewOptions);
 56 |     onFitView?.();
 57 |   };
 58 | 
 59 |   const onToggleInteractivity = () => {
 60 |     store.setState({
 61 |       nodesDraggable: !isInteractive,
 62 |       nodesConnectable: !isInteractive,
 63 |       elementsSelectable: !isInteractive,
 64 |     });
 65 | 
 66 |     onInteractiveChange?.(!isInteractive);
 67 |   };
 68 | 
 69 |   const orientationClass = orientation === 'horizontal' ? 'horizontal' : 'vertical';
 70 | 
 71 |   return (
 72 |     <Panel
 73 |       className={cc(['react-flow__controls', orientationClass, className])}
 74 |       position={position}
 75 |       style={style}
 76 |       data-testid="rf__controls"
 77 |       aria-label={ariaLabel}
 78 |     >
 79 |       {showZoom && (
 80 |         <>
 81 |           <ControlButton
 82 |             onClick={onZoomInHandler}
 83 |             className="react-flow__controls-zoomin"
 84 |             title="zoom in"
 85 |             aria-label="zoom in"
 86 |             disabled={maxZoomReached}
 87 |           >
 88 |             <PlusIcon />
 89 |           </ControlButton>
 90 |           <ControlButton
 91 |             onClick={onZoomOutHandler}
 92 |             className="react-flow__controls-zoomout"
 93 |             title="zoom out"
 94 |             aria-label="zoom out"
 95 |             disabled={minZoomReached}
 96 |           >
 97 |             <MinusIcon />
 98 |           </ControlButton>
 99 |         </>
100 |       )}
101 |       {showFitView && (
102 |         <ControlButton
103 |           className="react-flow__controls-fitview"
104 |           onClick={onFitViewHandler}
105 |           title="fit view"
106 |           aria-label="fit view"
107 |         >
108 |           <FitViewIcon />
109 |         </ControlButton>
110 |       )}
111 |       {showInteractive && (
112 |         <ControlButton
113 |           className="react-flow__controls-interactive"
114 |           onClick={onToggleInteractivity}
115 |           title="toggle interactivity"
116 |           aria-label="toggle interactivity"
117 |         >
118 |           {isInteractive ? <UnlockIcon /> : <LockIcon />}
119 |         </ControlButton>
120 |       )}
121 |       {children}
122 |     </Panel>
123 |   );
124 | }
125 | 
126 | ControlsComponent.displayName = 'Controls';
127 | 
128 | /**
129 |  * The `<Controls />` component renders a small panel that contains convenient
130 |  * buttons to zoom in, zoom out, fit the view, and lock the viewport.
131 |  *
132 |  * @public
133 |  * @example
134 |  *```tsx
135 |  *import { ReactFlow, Controls } from '@xyflow/react'
136 |  *
137 |  *export default function Flow() {
138 |  *  return (
139 |  *    <ReactFlow nodes={[...]} edges={[...]}>
140 |  *      <Controls />
141 |  *    </ReactFlow>
142 |  *  )
143 |  *}
144 |  *```
145 |  *
146 |  * @remarks To extend or customise the controls, you can use the [`<ControlButton />`](/api-reference/components/control-button) component
147 |  *
148 |  */
149 | export const Controls = memo(ControlsComponent);
150 | 


--------------------------------------------------------------------------------
/packages/react/src/additional-components/Controls/Icons/FitView.tsx:
--------------------------------------------------------------------------------
1 | export function FitViewIcon() {
2 |   return (
3 |     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30">
4 |       <path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z" />
5 |     </svg>
6 |   );
7 | }
8 | 


--------------------------------------------------------------------------------
/packages/react/src/additional-components/Controls/Icons/Lock.tsx:
--------------------------------------------------------------------------------
1 | export function LockIcon() {
2 |   return (
3 |     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32">
4 |       <path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z" />
5 |     </svg>
6 |   );
7 | }
8 | 


--------------------------------------------------------------------------------
/packages/react/src/additional-components/Controls/Icons/Minus.tsx:
--------------------------------------------------------------------------------
1 | export function MinusIcon() {
2 |   return (
3 |     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5">
4 |       <path d="M0 0h32v4.2H0z" />
5 |     </svg>
6 |   );
7 | }
8 | 


--------------------------------------------------------------------------------
/packages/react/src/additional-components/Controls/Icons/Plus.tsx:
--------------------------------------------------------------------------------
1 | export function PlusIcon() {
2 |   return (
3 |     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
4 |       <path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z" />
5 |     </svg>
6 |   );
7 | }
8 | 


--------------------------------------------------------------------------------
/packages/react/src/additional-components/Controls/Icons/Unlock.tsx:
--------------------------------------------------------------------------------
1 | export function UnlockIcon() {
2 |   return (
3 |     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32">
4 |       <path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z" />
5 |     </svg>
6 |   );
7 | }
8 | 


--------------------------------------------------------------------------------
/packages/react/src/additional-components/Controls/index.tsx:
--------------------------------------------------------------------------------
1 | export { Controls } from './Controls';
2 | export { ControlButton } from './ControlButton';
3 | export type { ControlProps, ControlButtonProps } from './types';
4 | 


--------------------------------------------------------------------------------
/packages/react/src/additional-components/Controls/types.ts:
--------------------------------------------------------------------------------
 1 | import type { ButtonHTMLAttributes, ReactNode } from 'react';
 2 | import type { PanelPosition } from '@xyflow/system';
 3 | 
 4 | import type { FitViewOptions } from '../../types';
 5 | 
 6 | /**
 7 |  * @expand
 8 |  */
 9 | export type ControlProps = {
10 |   /**
11 |    * Whether or not to show the zoom in and zoom out buttons. These buttons will adjust the viewport
12 |    * zoom by a fixed amount each press.
13 |    * @default true
14 |    */
15 |   showZoom?: boolean;
16 |   /**
17 |    * Whether or not to show the fit view button. By default, this button will adjust the viewport so
18 |    * that all nodes are visible at once.
19 |    * @default true
20 |    */
21 |   showFitView?: boolean;
22 |   /**
23 |    * Show button for toggling interactivity
24 |    * @default true
25 |    */
26 |   showInteractive?: boolean;
27 |   /**
28 |    * Customise the options for the fit view button. These are the same options you would pass to the
29 |    * fitView function.
30 |    */
31 |   fitViewOptions?: FitViewOptions;
32 |   /** Called in addition the default zoom behavior when the zoom in button is clicked. */
33 |   onZoomIn?: () => void;
34 |   /** Called in addition the default zoom behavior when the zoom out button is clicked. */
35 |   onZoomOut?: () => void;
36 |   /**
37 |    * Called when the fit view button is clicked. When this is not provided, the viewport will be
38 |    * adjusted so that all nodes are visible.
39 |    */
40 |   onFitView?: () => void;
41 |   /** Called when the interactive (lock) button is clicked. */
42 |   onInteractiveChange?: (interactiveStatus: boolean) => void;
43 |   /**
44 |    * Position of the controls on the pane
45 |    * @default PanelPosition.BottomLeft
46 |    * @example PanelPosition.TopLeft, PanelPosition.TopRight,
47 |    * PanelPosition.BottomLeft, PanelPosition.BottomRight
48 |    */
49 |   position?: PanelPosition;
50 |   children?: ReactNode;
51 |   /** Style applied to container */
52 |   style?: React.CSSProperties;
53 |   /** Class name applied to container */
54 |   className?: string;
55 |   /**
56 |    * @default 'React Flow controls'
57 |    */
58 |   'aria-label'?: string;
59 |   /**
60 |    * @default 'vertical'
61 |    */
62 |   orientation?: 'horizontal' | 'vertical';
63 | };
64 | 
65 | /**
66 |  * @expand
67 |  */
68 | export type ControlButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
69 | 


--------------------------------------------------------------------------------
/packages/react/src/additional-components/MiniMap/MiniMapNode.tsx:
--------------------------------------------------------------------------------
 1 | import { memo } from 'react';
 2 | import cc from 'classcat';
 3 | 
 4 | import type { MiniMapNodeProps } from './types';
 5 | 
 6 | function MiniMapNodeComponent({
 7 |   id,
 8 |   x,
 9 |   y,
10 |   width,
11 |   height,
12 |   style,
13 |   color,
14 |   strokeColor,
15 |   strokeWidth,
16 |   className,
17 |   borderRadius,
18 |   shapeRendering,
19 |   selected,
20 |   onClick,
21 | }: MiniMapNodeProps) {
22 |   const { background, backgroundColor } = style || {};
23 |   const fill = (color || background || backgroundColor) as string;
24 | 
25 |   return (
26 |     <rect
27 |       className={cc(['react-flow__minimap-node', { selected }, className])}
28 |       x={x}
29 |       y={y}
30 |       rx={borderRadius}
31 |       ry={borderRadius}
32 |       width={width}
33 |       height={height}
34 |       style={{
35 |         fill,
36 |         stroke: strokeColor,
37 |         strokeWidth,
38 |       }}
39 |       shapeRendering={shapeRendering}
40 |       onClick={onClick ? (event) => onClick(event, id) : undefined}
41 |     />
42 |   );
43 | }
44 | 
45 | export const MiniMapNode = memo(MiniMapNodeComponent);
46 | 


--------------------------------------------------------------------------------
/packages/react/src/additional-components/MiniMap/MiniMapNodes.tsx:
--------------------------------------------------------------------------------
  1 | /* eslint-disable @typescript-eslint/ban-ts-comment */
  2 | /* eslint-disable @typescript-eslint/no-explicit-any */
  3 | import { ComponentType, memo } from 'react';
  4 | import { getNodeDimensions, nodeHasDimensions } from '@xyflow/system';
  5 | import { shallow } from 'zustand/shallow';
  6 | 
  7 | import { useStore } from '../../hooks/useStore';
  8 | import { MiniMapNode } from './MiniMapNode';
  9 | import type { ReactFlowState, Node } from '../../types';
 10 | import type { MiniMapNodes as MiniMapNodesProps, GetMiniMapNodeAttribute, MiniMapNodeProps } from './types';
 11 | 
 12 | declare const window: any;
 13 | 
 14 | const selectorNodeIds = (s: ReactFlowState) => s.nodes.map((node) => node.id);
 15 | const getAttrFunction = <NodeType extends Node>(func: any): GetMiniMapNodeAttribute<NodeType> =>
 16 |   func instanceof Function ? func : () => func;
 17 | 
 18 | function MiniMapNodes<NodeType extends Node>({
 19 |   nodeStrokeColor,
 20 |   nodeColor,
 21 |   nodeClassName = '',
 22 |   nodeBorderRadius = 5,
 23 |   nodeStrokeWidth,
 24 |   /*
 25 |    * We need to rename the prop to be `CapitalCase` so that JSX will render it as
 26 |    * a component properly.
 27 |    */
 28 |   nodeComponent: NodeComponent = MiniMapNode,
 29 |   onClick,
 30 | }: MiniMapNodesProps<NodeType>) {
 31 |   const nodeIds = useStore(selectorNodeIds, shallow);
 32 |   const nodeColorFunc = getAttrFunction<NodeType>(nodeColor);
 33 |   const nodeStrokeColorFunc = getAttrFunction<NodeType>(nodeStrokeColor);
 34 |   const nodeClassNameFunc = getAttrFunction<NodeType>(nodeClassName);
 35 | 
 36 |   const shapeRendering = typeof window === 'undefined' || !!window.chrome ? 'crispEdges' : 'geometricPrecision';
 37 | 
 38 |   return (
 39 |     <>
 40 |       {nodeIds.map((nodeId) => (
 41 |         /*
 42 |          * The split of responsibilities between MiniMapNodes and
 43 |          * NodeComponentWrapper may appear weird. However, it’s designed to
 44 |          * minimize the cost of updates when individual nodes change.
 45 |          *
 46 |          * For more details, see a similar commit in `NodeRenderer/index.tsx`.
 47 |          */
 48 |         <NodeComponentWrapper<NodeType>
 49 |           key={nodeId}
 50 |           id={nodeId}
 51 |           nodeColorFunc={nodeColorFunc}
 52 |           nodeStrokeColorFunc={nodeStrokeColorFunc}
 53 |           nodeClassNameFunc={nodeClassNameFunc}
 54 |           nodeBorderRadius={nodeBorderRadius}
 55 |           nodeStrokeWidth={nodeStrokeWidth}
 56 |           NodeComponent={NodeComponent}
 57 |           onClick={onClick}
 58 |           shapeRendering={shapeRendering}
 59 |         />
 60 |       ))}
 61 |     </>
 62 |   );
 63 | }
 64 | 
 65 | function NodeComponentWrapperInner<NodeType extends Node>({
 66 |   id,
 67 |   nodeColorFunc,
 68 |   nodeStrokeColorFunc,
 69 |   nodeClassNameFunc,
 70 |   nodeBorderRadius,
 71 |   nodeStrokeWidth,
 72 |   shapeRendering,
 73 |   NodeComponent,
 74 |   onClick,
 75 | }: {
 76 |   id: string;
 77 |   nodeColorFunc: GetMiniMapNodeAttribute<NodeType>;
 78 |   nodeStrokeColorFunc: GetMiniMapNodeAttribute<NodeType>;
 79 |   nodeClassNameFunc: GetMiniMapNodeAttribute<NodeType>;
 80 |   nodeBorderRadius: number;
 81 |   nodeStrokeWidth?: number;
 82 |   NodeComponent: ComponentType<MiniMapNodeProps>;
 83 |   onClick: MiniMapNodesProps['onClick'];
 84 |   shapeRendering: string;
 85 | }) {
 86 |   const { node, x, y, width, height } = useStore((s) => {
 87 |     const { internals } = s.nodeLookup.get(id)!;
 88 |     const node = internals.userNode as NodeType;
 89 |     const { x, y } = internals.positionAbsolute;
 90 |     const { width, height } = getNodeDimensions(node);
 91 | 
 92 |     return {
 93 |       node,
 94 |       x,
 95 |       y,
 96 |       width,
 97 |       height,
 98 |     };
 99 |   }, shallow);
100 | 
101 |   if (!node || node.hidden || !nodeHasDimensions(node)) {
102 |     return null;
103 |   }
104 | 
105 |   return (
106 |     <NodeComponent
107 |       x={x}
108 |       y={y}
109 |       width={width}
110 |       height={height}
111 |       style={node.style}
112 |       selected={!!node.selected}
113 |       className={nodeClassNameFunc(node)}
114 |       color={nodeColorFunc(node)}
115 |       borderRadius={nodeBorderRadius}
116 |       strokeColor={nodeStrokeColorFunc(node)}
117 |       strokeWidth={nodeStrokeWidth}
118 |       shapeRendering={shapeRendering}
119 |       onClick={onClick}
120 |       id={node.id}
121 |     />
122 |   );
123 | }
124 | 
125 | const NodeComponentWrapper = memo(NodeComponentWrapperInner) as typeof NodeComponentWrapperInner;
126 | 
127 | export default memo(MiniMapNodes) as typeof MiniMapNodes;
128 | 


--------------------------------------------------------------------------------
/packages/react/src/additional-components/MiniMap/index.tsx:
--------------------------------------------------------------------------------
1 | export { MiniMap } from './MiniMap';
2 | export * from './types';
3 | 


--------------------------------------------------------------------------------
/packages/react/src/additional-components/MiniMap/types.ts:
--------------------------------------------------------------------------------
  1 | /* eslint-disable @typescript-eslint/no-explicit-any */
  2 | import type { ComponentType, CSSProperties, HTMLAttributes, MouseEvent } from 'react';
  3 | import type { PanelPosition, XYPosition } from '@xyflow/system';
  4 | 
  5 | import type { Node } from '../../types';
  6 | 
  7 | export type GetMiniMapNodeAttribute<NodeType extends Node = Node> = (node: NodeType) => string;
  8 | 
  9 | /**
 10 |  * @expand
 11 |  */
 12 | export type MiniMapProps<NodeType extends Node = Node> = Omit<HTMLAttributes<SVGSVGElement>, 'onClick'> & {
 13 |   /**
 14 |    * Color of nodes on minimap.
 15 |    * @default "#e2e2e2"
 16 |    */
 17 |   nodeColor?: string | GetMiniMapNodeAttribute<NodeType>;
 18 |   /**
 19 |    * Stroke color of nodes on minimap.
 20 |    * @default "transparent"
 21 |    */
 22 |   nodeStrokeColor?: string | GetMiniMapNodeAttribute<NodeType>;
 23 |   /**
 24 |    * Class name applied to nodes on minimap.
 25 |    * @default ""
 26 |    */
 27 |   nodeClassName?: string | GetMiniMapNodeAttribute<NodeType>;
 28 |   /**
 29 |    * Border radius of nodes on minimap.
 30 |    * @default 5
 31 |    */
 32 |   nodeBorderRadius?: number;
 33 |   /**
 34 |    * Stroke width of nodes on minimap.
 35 |    * @default 2
 36 |    */
 37 |   nodeStrokeWidth?: number;
 38 |   /**
 39 |    * A custom component to render the nodes in the minimap. This component must render an SVG
 40 |    * element!
 41 |    */
 42 |   nodeComponent?: ComponentType<MiniMapNodeProps>;
 43 |   /** Background color of minimap. */
 44 |   bgColor?: string;
 45 |   /**
 46 |    * The color of the mask that covers the portion of the minimap not currently visible in the
 47 |    * viewport.
 48 |    * @default "rgba(240, 240, 240, 0.6)"
 49 |    */
 50 |   maskColor?: string;
 51 |   /**
 52 |    * Stroke color of mask representing viewport.
 53 |    * @default transparent
 54 |    */
 55 |   maskStrokeColor?: string;
 56 |   /**
 57 |    * Stroke width of mask representing viewport.
 58 |    * @default 1
 59 |    */
 60 |   maskStrokeWidth?: number;
 61 |   /**
 62 |    * Position of minimap on pane.
 63 |    * @default PanelPosition.BottomRight
 64 |    * @example PanelPosition.TopLeft, PanelPosition.TopRight,
 65 |    * PanelPosition.BottomLeft, PanelPosition.BottomRight
 66 |    */
 67 |   position?: PanelPosition;
 68 |   /** Callback called when minimap is clicked. */
 69 |   onClick?: (event: MouseEvent, position: XYPosition) => void;
 70 |   /** Callback called when node on minimap is clicked. */
 71 |   onNodeClick?: (event: MouseEvent, node: NodeType) => void;
 72 |   /**
 73 |    * Determines whether you can pan the viewport by dragging inside the minimap.
 74 |    * @default false
 75 |    */
 76 |   pannable?: boolean;
 77 |   /**
 78 |    * Determines whether you can zoom the viewport by scrolling inside the minimap.
 79 |    * @default false
 80 |    */
 81 |   zoomable?: boolean;
 82 |   /**
 83 |    * There is no text inside the minimap for a screen reader to use as an accessible name, so it's
 84 |    * important we provide one to make the minimap accessible. The default is sufficient, but you may
 85 |    * want to replace it with something more relevant to your app or product.
 86 |    * @default "React Flow mini map"
 87 |    */
 88 |   ariaLabel?: string | null;
 89 |   /** Invert direction when panning the minimap viewport. */
 90 |   inversePan?: boolean;
 91 |   /**
 92 |    * Step size for zooming in/out on minimap.
 93 |    * @default 10
 94 |    */
 95 |   zoomStep?: number;
 96 |   /**
 97 |    * Offset the viewport on the minimap, acts like a padding.
 98 |    * @default 5
 99 |    */
100 |   offsetScale?: number;
101 | };
102 | 
103 | export type MiniMapNodes<NodeType extends Node = Node> = Pick<
104 |   MiniMapProps<NodeType>,
105 |   'nodeColor' | 'nodeStrokeColor' | 'nodeClassName' | 'nodeBorderRadius' | 'nodeStrokeWidth' | 'nodeComponent'
106 | > & {
107 |   onClick?: (event: MouseEvent, nodeId: string) => void;
108 | };
109 | 
110 | /**
111 |  * The props that are passed to the MiniMapNode component
112 |  *
113 |  * @public
114 |  * @expand
115 |  */
116 | export type MiniMapNodeProps = {
117 |   id: string;
118 |   x: number;
119 |   y: number;
120 |   width: number;
121 |   height: number;
122 |   borderRadius: number;
123 |   className: string;
124 |   color?: string;
125 |   shapeRendering: string;
126 |   strokeColor?: string;
127 |   strokeWidth?: number;
128 |   style?: CSSProperties;
129 |   selected: boolean;
130 |   onClick?: (event: MouseEvent, id: string) => void;
131 | };
132 | 


--------------------------------------------------------------------------------
/packages/react/src/additional-components/NodeResizer/NodeResizer.tsx:
--------------------------------------------------------------------------------
 1 | import { ResizeControlVariant, XY_RESIZER_HANDLE_POSITIONS, XY_RESIZER_LINE_POSITIONS } from '@xyflow/system';
 2 | 
 3 | import { NodeResizeControl } from './NodeResizeControl';
 4 | import type { NodeResizerProps } from './types';
 5 | 
 6 | /**
 7 |  * The `<NodeResizer />` component can be used to add a resize functionality to your
 8 |  * nodes. It renders draggable controls around the node to resize in all directions.
 9 |  * @public
10 |  *
11 |  * @example
12 |  *```jsx
13 |  *import { memo } from 'react';
14 |  *import { Handle, Position, NodeResizer } from '@xyflow/react';
15 |  *
16 |  *function ResizableNode({ data }) {
17 |  *  return (
18 |  *    <>
19 |  *      <NodeResizer minWidth={100} minHeight={30} />
20 |  *      <Handle type="target" position={Position.Left} />
21 |  *      <div style={{ padding: 10 }}>{data.label}</div>
22 |  *      <Handle type="source" position={Position.Right} />
23 |  *    </>
24 |  *  );
25 |  *};
26 |  *
27 |  *export default memo(ResizableNode);
28 |  *```
29 |  */
30 | export function NodeResizer({
31 |   nodeId,
32 |   isVisible = true,
33 |   handleClassName,
34 |   handleStyle,
35 |   lineClassName,
36 |   lineStyle,
37 |   color,
38 |   minWidth = 10,
39 |   minHeight = 10,
40 |   maxWidth = Number.MAX_VALUE,
41 |   maxHeight = Number.MAX_VALUE,
42 |   keepAspectRatio = false,
43 |   shouldResize,
44 |   onResizeStart,
45 |   onResize,
46 |   onResizeEnd,
47 | }: NodeResizerProps) {
48 |   if (!isVisible) {
49 |     return null;
50 |   }
51 | 
52 |   return (
53 |     <>
54 |       {XY_RESIZER_LINE_POSITIONS.map((position) => (
55 |         <NodeResizeControl
56 |           key={position}
57 |           className={lineClassName}
58 |           style={lineStyle}
59 |           nodeId={nodeId}
60 |           position={position}
61 |           variant={ResizeControlVariant.Line}
62 |           color={color}
63 |           minWidth={minWidth}
64 |           minHeight={minHeight}
65 |           maxWidth={maxWidth}
66 |           maxHeight={maxHeight}
67 |           onResizeStart={onResizeStart}
68 |           keepAspectRatio={keepAspectRatio}
69 |           shouldResize={shouldResize}
70 |           onResize={onResize}
71 |           onResizeEnd={onResizeEnd}
72 |         />
73 |       ))}
74 |       {XY_RESIZER_HANDLE_POSITIONS.map((position) => (
75 |         <NodeResizeControl
76 |           key={position}
77 |           className={handleClassName}
78 |           style={handleStyle}
79 |           nodeId={nodeId}
80 |           position={position}
81 |           color={color}
82 |           minWidth={minWidth}
83 |           minHeight={minHeight}
84 |           maxWidth={maxWidth}
85 |           maxHeight={maxHeight}
86 |           onResizeStart={onResizeStart}
87 |           keepAspectRatio={keepAspectRatio}
88 |           shouldResize={shouldResize}
89 |           onResize={onResize}
90 |           onResizeEnd={onResizeEnd}
91 |         />
92 |       ))}
93 |     </>
94 |   );
95 | }
96 | 


--------------------------------------------------------------------------------
/packages/react/src/additional-components/NodeResizer/index.tsx:
--------------------------------------------------------------------------------
1 | export { NodeResizer } from './NodeResizer';
2 | export { NodeResizeControl } from './NodeResizeControl';
3 | 
4 | export * from './types';
5 | 


--------------------------------------------------------------------------------
/packages/react/src/additional-components/NodeResizer/types.ts:
--------------------------------------------------------------------------------
  1 | import type { CSSProperties, ReactNode } from 'react';
  2 | import type {
  3 |   ControlPosition,
  4 |   ControlLinePosition,
  5 |   ResizeControlVariant,
  6 |   ShouldResize,
  7 |   OnResizeStart,
  8 |   OnResize,
  9 |   OnResizeEnd,
 10 | } from '@xyflow/system';
 11 | 
 12 | /**
 13 |  * @expand
 14 |  */
 15 | export type NodeResizerProps = {
 16 |   /**
 17 |    * Id of the node it is resizing.
 18 |    * @remarks optional if used inside custom node
 19 |    */
 20 |   nodeId?: string;
 21 |   /** Color of the resize handle. */
 22 |   color?: string;
 23 |   /** Class name applied to handle. */
 24 |   handleClassName?: string;
 25 |   /** Style applied to handle. */
 26 |   handleStyle?: CSSProperties;
 27 |   /** Class name applied to line. */
 28 |   lineClassName?: string;
 29 |   /** Style applied to line. */
 30 |   lineStyle?: CSSProperties;
 31 |   /**
 32 |    * Are the controls visible.
 33 |    * @default true
 34 |    */
 35 |   isVisible?: boolean;
 36 |   /**
 37 |    * Minimum width of node.
 38 |    * @default 10
 39 |    */
 40 |   minWidth?: number;
 41 |   /**
 42 |    * Minimum height of node.
 43 |    * @default 10
 44 |    */
 45 |   minHeight?: number;
 46 |   /**
 47 |    * Maximum width of node.
 48 |    * @default Number.MAX_VALUE
 49 |    */
 50 |   maxWidth?: number;
 51 |   /**
 52 |    * Maximum height of node.
 53 |    * @default Number.MAX_VALUE
 54 |    */
 55 |   maxHeight?: number;
 56 |   /**
 57 |    * Keep aspect ratio when resizing.
 58 |    * @default false
 59 |    */
 60 |   keepAspectRatio?: boolean;
 61 |   /** Callback to determine if node should resize. */
 62 |   shouldResize?: ShouldResize;
 63 |   /** Callback called when resizing starts. */
 64 |   onResizeStart?: OnResizeStart;
 65 |   /** Callback called when resizing. */
 66 |   onResize?: OnResize;
 67 |   /** Callback called when resizing ends. */
 68 |   onResizeEnd?: OnResizeEnd;
 69 | };
 70 | 
 71 | /**
 72 |  * @expand
 73 |  */
 74 | export type ResizeControlProps = Pick<
 75 |   NodeResizerProps,
 76 |   | 'nodeId'
 77 |   | 'color'
 78 |   | 'minWidth'
 79 |   | 'minHeight'
 80 |   | 'maxWidth'
 81 |   | 'maxHeight'
 82 |   | 'keepAspectRatio'
 83 |   | 'shouldResize'
 84 |   | 'onResizeStart'
 85 |   | 'onResize'
 86 |   | 'onResizeEnd'
 87 | > & {
 88 |   /**
 89 |    * Position of the control.
 90 |    * @example ControlPosition.TopLeft, ControlPosition.TopRight,
 91 |    * ControlPosition.BottomLeft, ControlPosition.BottomRight
 92 |    */
 93 |   position?: ControlPosition;
 94 |   /**
 95 |    * Variant of the control.
 96 |    * @default "handle"
 97 |    * @example ResizeControlVariant.Handle, ResizeControlVariant.Line
 98 |    */
 99 |   variant?: ResizeControlVariant;
100 |   className?: string;
101 |   style?: CSSProperties;
102 |   children?: ReactNode;
103 | };
104 | 
105 | /**
106 |  * @expand
107 |  */
108 | export type ResizeControlLineProps = ResizeControlProps & {
109 |   position?: ControlLinePosition;
110 | };
111 | 


--------------------------------------------------------------------------------
/packages/react/src/additional-components/NodeToolbar/NodeToolbar.tsx:
--------------------------------------------------------------------------------
  1 | import { useCallback, CSSProperties } from 'react';
  2 | import cc from 'classcat';
  3 | import { shallow } from 'zustand/shallow';
  4 | import { Position, getNodeToolbarTransform, getInternalNodesBounds, NodeLookup } from '@xyflow/system';
  5 | 
  6 | import { InternalNode, ReactFlowState } from '../../types';
  7 | import { useStore } from '../../hooks/useStore';
  8 | import { useNodeId } from '../../contexts/NodeIdContext';
  9 | import { NodeToolbarPortal } from './NodeToolbarPortal';
 10 | import type { NodeToolbarProps } from './types';
 11 | 
 12 | const nodeEqualityFn = (a?: InternalNode, b?: InternalNode) =>
 13 |   a?.internals.positionAbsolute.x !== b?.internals.positionAbsolute.x ||
 14 |   a?.internals.positionAbsolute.y !== b?.internals.positionAbsolute.y ||
 15 |   a?.measured.width !== b?.measured.width ||
 16 |   a?.measured.height !== b?.measured.height ||
 17 |   a?.selected !== b?.selected ||
 18 |   a?.internals.z !== b?.internals.z;
 19 | 
 20 | const nodesEqualityFn = (a: NodeLookup, b: NodeLookup) => {
 21 |   if (a.size !== b.size) {
 22 |     return false;
 23 |   }
 24 | 
 25 |   for (const [key, node] of a) {
 26 |     if (nodeEqualityFn(node, b.get(key))) {
 27 |       return false;
 28 |     }
 29 |   }
 30 | 
 31 |   return true;
 32 | };
 33 | 
 34 | const storeSelector = (state: ReactFlowState) => ({
 35 |   x: state.transform[0],
 36 |   y: state.transform[1],
 37 |   zoom: state.transform[2],
 38 |   selectedNodesCount: state.nodes.filter((node) => node.selected).length,
 39 | });
 40 | 
 41 | /**
 42 |  * This component can render a toolbar or tooltip to one side of a custom node. This
 43 |  * toolbar doesn't scale with the viewport so that the content is always visible.
 44 |  *
 45 |  * @public
 46 |  * @example
 47 |  * ```jsx
 48 |  *import { memo } from 'react';
 49 |  *import { Handle, Position, NodeToolbar } from '@xyflow/react';
 50 |  *
 51 |  *function CustomNode({ data }) {
 52 |  *  return (
 53 |  *    <>
 54 |  *      <NodeToolbar isVisible={data.toolbarVisible} position={data.toolbarPosition}>
 55 |  *        <button>delete</button>
 56 |  *        <button>copy</button>
 57 |  *        <button>expand</button>
 58 |  *      </NodeToolbar>
 59 |  *
 60 |  *      <div style={{ padding: '10px 20px' }}>
 61 |  *        {data.label}
 62 |  *      </div>
 63 |  *
 64 |  *      <Handle type="target" position={Position.Left} />
 65 |  *      <Handle type="source" position={Position.Right} />
 66 |  *    </>
 67 |  *  );
 68 |  *};
 69 |  *
 70 |  *export default memo(CustomNode);
 71 |  *```
 72 |  * @remarks By default, the toolbar is only visible when a node is selected. If multiple
 73 |  * nodes are selected it will not be visible to prevent overlapping toolbars or
 74 |  * clutter. You can override this behavior by setting the `isVisible` prop to `true`.
 75 |  */
 76 | export function NodeToolbar({
 77 |   nodeId,
 78 |   children,
 79 |   className,
 80 |   style,
 81 |   isVisible,
 82 |   position = Position.Top,
 83 |   offset = 10,
 84 |   align = 'center',
 85 |   ...rest
 86 | }: NodeToolbarProps) {
 87 |   const contextNodeId = useNodeId();
 88 | 
 89 |   const nodesSelector = useCallback(
 90 |     (state: ReactFlowState): NodeLookup => {
 91 |       const nodeIds = Array.isArray(nodeId) ? nodeId : [nodeId || contextNodeId || ''];
 92 |       const internalNodes = nodeIds.reduce<NodeLookup>((res, id) => {
 93 |         const node = state.nodeLookup.get(id);
 94 |         if (node) {
 95 |           res.set(node.id, node);
 96 |         }
 97 | 
 98 |         return res;
 99 |       }, new Map());
100 | 
101 |       return internalNodes;
102 |     },
103 |     [nodeId, contextNodeId]
104 |   );
105 |   const nodes = useStore(nodesSelector, nodesEqualityFn);
106 |   const { x, y, zoom, selectedNodesCount } = useStore(storeSelector, shallow);
107 | 
108 |   // if isVisible is not set, we show the toolbar only if its node is selected and no other node is selected
109 |   const isActive =
110 |     typeof isVisible === 'boolean'
111 |       ? isVisible
112 |       : nodes.size === 1 && nodes.values().next().value?.selected && selectedNodesCount === 1;
113 | 
114 |   if (!isActive || !nodes.size) {
115 |     return null;
116 |   }
117 | 
118 |   const nodeRect = getInternalNodesBounds(nodes);
119 |   const nodesArray = Array.from(nodes.values());
120 |   const zIndex = Math.max(...nodesArray.map((node) => node.internals.z + 1));
121 | 
122 |   const wrapperStyle: CSSProperties = {
123 |     position: 'absolute',
124 |     transform: getNodeToolbarTransform(nodeRect, { x, y, zoom }, position, offset, align),
125 |     zIndex,
126 |     ...style,
127 |   };
128 | 
129 |   return (
130 |     <NodeToolbarPortal>
131 |       <div
132 |         style={wrapperStyle}
133 |         className={cc(['react-flow__node-toolbar', className])}
134 |         {...rest}
135 |         // @todo: check if we could only do this for non-prod envs
136 |         data-id={nodesArray.reduce((acc, node) => `${acc}${node.id} `, '').trim()}
137 |       >
138 |         {children}
139 |       </div>
140 |     </NodeToolbarPortal>
141 |   );
142 | }
143 | 


--------------------------------------------------------------------------------
/packages/react/src/additional-components/NodeToolbar/NodeToolbarPortal.tsx:
--------------------------------------------------------------------------------
 1 | import { ReactNode } from 'react';
 2 | import { createPortal } from 'react-dom';
 3 | 
 4 | import type { ReactFlowState } from '../../types';
 5 | import { useStore } from '../../hooks/useStore';
 6 | 
 7 | const selector = (state: ReactFlowState) => state.domNode?.querySelector('.react-flow__renderer');
 8 | 
 9 | export function NodeToolbarPortal({ children }: { children: ReactNode }) {
10 |   const wrapperRef = useStore(selector);
11 | 
12 |   if (!wrapperRef) {
13 |     return null;
14 |   }
15 | 
16 |   return createPortal(children, wrapperRef);
17 | }
18 | 


--------------------------------------------------------------------------------
/packages/react/src/additional-components/NodeToolbar/index.tsx:
--------------------------------------------------------------------------------
1 | export { NodeToolbar } from './NodeToolbar';
2 | export type { NodeToolbarProps } from './types';
3 | 


--------------------------------------------------------------------------------
/packages/react/src/additional-components/NodeToolbar/types.ts:
--------------------------------------------------------------------------------
 1 | import type { HTMLAttributes } from 'react';
 2 | import type { Position, Align } from '@xyflow/system';
 3 | 
 4 | /**
 5 |  * @expand
 6 |  */
 7 | export type NodeToolbarProps = HTMLAttributes<HTMLDivElement> & {
 8 |   /**
 9 |    * By passing in an array of node id's you can render a single tooltip for a group or collection
10 |    * of nodes.
11 |    */
12 |   nodeId?: string | string[];
13 |   /** If `true`, node toolbar is visible even if node is not selected. */
14 |   isVisible?: boolean;
15 |   /**
16 |    * Position of the toolbar relative to the node.
17 |    * @default Position.Top
18 |    * @example Position.TopLeft, Position.TopRight, Position.BottomLeft, Position.BottomRight
19 |    */
20 |   position?: Position;
21 |   /**
22 |    * The space between the node and the toolbar, measured in pixels.
23 |    * @default 10
24 |    */
25 |   offset?: number;
26 |   /**
27 |    * Align the toolbar relative to the node.
28 |    * @default "center"
29 |    * @example Align.Start, Align.Center, Align.End
30 |    */
31 |   align?: Align;
32 | };
33 | 


--------------------------------------------------------------------------------
/packages/react/src/additional-components/index.ts:
--------------------------------------------------------------------------------
1 | export * from './Background';
2 | export * from './Controls';
3 | export * from './MiniMap';
4 | export * from './NodeResizer';
5 | export * from './NodeToolbar';
6 | 


--------------------------------------------------------------------------------
/packages/react/src/components/A11yDescriptions/index.tsx:
--------------------------------------------------------------------------------
 1 | import { CSSProperties } from 'react';
 2 | 
 3 | import { useStore } from '../../hooks/useStore';
 4 | import type { ReactFlowState } from '../../types';
 5 | 
 6 | const style: CSSProperties = { display: 'none' };
 7 | const ariaLiveStyle: CSSProperties = {
 8 |   position: 'absolute',
 9 |   width: 1,
10 |   height: 1,
11 |   margin: -1,
12 |   border: 0,
13 |   padding: 0,
14 |   overflow: 'hidden',
15 |   clip: 'rect(0px, 0px, 0px, 0px)',
16 |   clipPath: 'inset(100%)',
17 | };
18 | 
19 | export const ARIA_NODE_DESC_KEY = 'react-flow__node-desc';
20 | export const ARIA_EDGE_DESC_KEY = 'react-flow__edge-desc';
21 | export const ARIA_LIVE_MESSAGE = 'react-flow__aria-live';
22 | 
23 | const selector = (s: ReactFlowState) => s.ariaLiveMessage;
24 | 
25 | function AriaLiveMessage({ rfId }: { rfId: string }) {
26 |   const ariaLiveMessage = useStore(selector);
27 | 
28 |   return (
29 |     <div id={`${ARIA_LIVE_MESSAGE}-${rfId}`} aria-live="assertive" aria-atomic="true" style={ariaLiveStyle}>
30 |       {ariaLiveMessage}
31 |     </div>
32 |   );
33 | }
34 | 
35 | export function A11yDescriptions({ rfId, disableKeyboardA11y }: { rfId: string; disableKeyboardA11y: boolean }) {
36 |   return (
37 |     <>
38 |       <div id={`${ARIA_NODE_DESC_KEY}-${rfId}`} style={style}>
39 |         Press enter or space to select a node.
40 |         {!disableKeyboardA11y && 'You can then use the arrow keys to move the node around.'} Press delete to remove it
41 |         and escape to cancel.{' '}
42 |       </div>
43 |       <div id={`${ARIA_EDGE_DESC_KEY}-${rfId}`} style={style}>
44 |         Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.
45 |       </div>
46 |       {!disableKeyboardA11y && <AriaLiveMessage rfId={rfId} />}
47 |     </>
48 |   );
49 | }
50 | 


--------------------------------------------------------------------------------
/packages/react/src/components/Attribution/index.tsx:
--------------------------------------------------------------------------------
 1 | import type { PanelPosition, ProOptions } from '@xyflow/system';
 2 | 
 3 | import { Panel } from '../Panel';
 4 | 
 5 | type AttributionProps = {
 6 |   proOptions?: ProOptions;
 7 |   position?: PanelPosition;
 8 | };
 9 | 
10 | export function Attribution({ proOptions, position = 'bottom-right' }: AttributionProps) {
11 |   if (proOptions?.hideAttribution) {
12 |     return null;
13 |   }
14 | 
15 |   return (
16 |     <Panel
17 |       position={position}
18 |       className="react-flow__attribution"
19 |       data-message="Please only hide this attribution when you are subscribed to React Flow Pro: https://pro.reactflow.dev"
20 |     >
21 |       <a href="https://reactflow.dev" target="_blank" rel="noopener noreferrer" aria-label="React Flow attribution">
22 |         React Flow
23 |       </a>
24 |     </Panel>
25 |   );
26 | }
27 | 


--------------------------------------------------------------------------------
/packages/react/src/components/BatchProvider/index.tsx:
--------------------------------------------------------------------------------
  1 | import { createContext, ReactNode, useCallback, useContext, useMemo } from 'react';
  2 | import { EdgeChange, NodeChange } from '@xyflow/system';
  3 | 
  4 | import { useStoreApi } from '../../hooks/useStore';
  5 | import { getElementsDiffChanges } from '../../utils';
  6 | import { Queue, QueueItem } from './types';
  7 | import type { Edge, Node } from '../../types';
  8 | import { useQueue } from './useQueue';
  9 | 
 10 | const BatchContext = createContext<{
 11 |   // eslint-disable-next-line @typescript-eslint/no-explicit-any
 12 |   nodeQueue: Queue<any>;
 13 |   // eslint-disable-next-line @typescript-eslint/no-explicit-any
 14 |   edgeQueue: Queue<any>;
 15 | } | null>(null);
 16 | 
 17 | /**
 18 |  * This is a context provider that holds and processes the node and edge update queues
 19 |  * that are needed to handle setNodes, addNodes, setEdges and addEdges.
 20 |  *
 21 |  * @internal
 22 |  */
 23 | export function BatchProvider<NodeType extends Node = Node, EdgeType extends Edge = Edge>({
 24 |   children,
 25 | }: {
 26 |   children: ReactNode;
 27 | }) {
 28 |   const store = useStoreApi<NodeType, EdgeType>();
 29 | 
 30 |   const nodeQueueHandler = useCallback((queueItems: QueueItem<NodeType>[]) => {
 31 |     const { nodes = [], setNodes, hasDefaultNodes, onNodesChange, nodeLookup, fitViewQueued } = store.getState();
 32 | 
 33 |     /*
 34 |      * This is essentially an `Array.reduce` in imperative clothing. Processing
 35 |      * this queue is a relatively hot path so we'd like to avoid the overhead of
 36 |      * array methods where we can.
 37 |      */
 38 |     let next = nodes;
 39 |     for (const payload of queueItems) {
 40 |       next = typeof payload === 'function' ? payload(next) : payload;
 41 |     }
 42 | 
 43 |     if (hasDefaultNodes) {
 44 |       setNodes(next);
 45 |     } else {
 46 |       // When a controlled flow is used we need to collect the changes
 47 |       const changes = getElementsDiffChanges({
 48 |         items: next,
 49 |         lookup: nodeLookup,
 50 |       }) as NodeChange<NodeType>[];
 51 | 
 52 |       // We only want to fire onNodesChange if there are changes to the nodes
 53 |       if (changes.length > 0) {
 54 |         onNodesChange?.(changes);
 55 |       } else if (fitViewQueued) {
 56 |         // If there are no changes to the nodes, we still need to call setNodes
 57 |         // to trigger a re-render and fitView.
 58 |         window.requestAnimationFrame(() => {
 59 |           const { fitViewQueued, nodes, setNodes } = store.getState();
 60 |           if (fitViewQueued) {
 61 |             setNodes(nodes);
 62 |           }
 63 |         });
 64 |       }
 65 |     }
 66 |   }, []);
 67 | 
 68 |   const nodeQueue = useQueue<NodeType>(nodeQueueHandler);
 69 | 
 70 |   const edgeQueueHandler = useCallback((queueItems: QueueItem<EdgeType>[]) => {
 71 |     const { edges = [], setEdges, hasDefaultEdges, onEdgesChange, edgeLookup } = store.getState();
 72 | 
 73 |     let next = edges;
 74 |     for (const payload of queueItems) {
 75 |       next = typeof payload === 'function' ? payload(next) : payload;
 76 |     }
 77 | 
 78 |     if (hasDefaultEdges) {
 79 |       setEdges(next);
 80 |     } else if (onEdgesChange) {
 81 |       onEdgesChange(
 82 |         getElementsDiffChanges({
 83 |           items: next,
 84 |           lookup: edgeLookup,
 85 |         }) as EdgeChange<EdgeType>[]
 86 |       );
 87 |     }
 88 |   }, []);
 89 |   const edgeQueue = useQueue<EdgeType>(edgeQueueHandler);
 90 | 
 91 |   const value = useMemo(() => ({ nodeQueue, edgeQueue }), []);
 92 | 
 93 |   return <BatchContext.Provider value={value}>{children}</BatchContext.Provider>;
 94 | }
 95 | 
 96 | export function useBatchContext() {
 97 |   const batchContext = useContext(BatchContext);
 98 | 
 99 |   if (!batchContext) {
100 |     throw new Error('useBatchContext must be used within a BatchProvider');
101 |   }
102 | 
103 |   return batchContext;
104 | }
105 | 


--------------------------------------------------------------------------------
/packages/react/src/components/BatchProvider/types.ts:
--------------------------------------------------------------------------------
1 | export type QueueItem<T> = T[] | ((items: T[]) => T[]);
2 | 
3 | export type Queue<T> = {
4 |   get: () => QueueItem<T>[];
5 |   reset: () => void;
6 |   push: (item: QueueItem<T>) => void;
7 | };
8 | 


--------------------------------------------------------------------------------
/packages/react/src/components/BatchProvider/useQueue.ts:
--------------------------------------------------------------------------------
 1 | import { useState } from 'react';
 2 | 
 3 | import { useIsomorphicLayoutEffect } from '../../hooks/useIsomorphicLayoutEffect';
 4 | import { Queue, QueueItem } from './types';
 5 | 
 6 | /**
 7 |  * This hook returns a queue that can be used to batch updates.
 8 |  *
 9 |  * @param runQueue - a function that gets called when the queue is flushed
10 |  * @internal
11 |  *
12 |  * @returns a Queue object
13 |  */
14 | export function useQueue<T>(runQueue: (items: QueueItem<T>[]) => void) {
15 |   /*
16 |    * Because we're using a ref above, we need some way to let React know when to
17 |    * actually process the queue. We increment this number any time we mutate the
18 |    * queue, creating a new state to trigger the layout effect below.
19 |    * Using a boolean dirty flag here instead would lead to issues related to
20 |    * automatic batching. (https://github.com/xyflow/xyflow/issues/4779)
21 |    */
22 |   const [serial, setSerial] = useState(BigInt(0));
23 | 
24 |   /*
25 |    * A reference of all the batched updates to process before the next render. We
26 |    * want a reference here so multiple synchronous calls to `setNodes` etc can be
27 |    * batched together.
28 |    */
29 |   const [queue] = useState(() => createQueue<T>(() => setSerial(n => n + BigInt(1))));
30 | 
31 |   /*
32 |    * Layout effects are guaranteed to run before the next render which means we
33 |    * shouldn't run into any issues with stale state or weird issues that come from
34 |    * rendering things one frame later than expected (we used to use `setTimeout`).
35 |    */
36 |   useIsomorphicLayoutEffect(() => {
37 |     const queueItems = queue.get();
38 | 
39 |     if (queueItems.length) {
40 |       runQueue(queueItems);
41 | 
42 |       queue.reset();
43 |     }
44 |   }, [serial]);
45 | 
46 |   return queue;
47 | }
48 | 
49 | function createQueue<T>(cb: () => void): Queue<T> {
50 |   let queue: QueueItem<T>[] = [];
51 | 
52 |   return {
53 |     get: () => queue,
54 |     reset: () => {
55 |       queue = [];
56 |     },
57 |     push: (item) => {
58 |       queue.push(item);
59 |       cb();
60 |     },
61 |   };
62 | }
63 | 


--------------------------------------------------------------------------------
/packages/react/src/components/ConnectionLine/index.tsx:
--------------------------------------------------------------------------------
  1 | import { CSSProperties } from 'react';
  2 | import { shallow } from 'zustand/shallow';
  3 | import cc from 'classcat';
  4 | import {
  5 |   ConnectionLineType,
  6 |   getBezierPath,
  7 |   getSmoothStepPath,
  8 |   getConnectionStatus,
  9 |   getStraightPath,
 10 | } from '@xyflow/system';
 11 | 
 12 | import { useStore } from '../../hooks/useStore';
 13 | import { getSimpleBezierPath } from '../Edges/SimpleBezierEdge';
 14 | import type { ConnectionLineComponent, Node, ReactFlowState } from '../../types';
 15 | import { useConnection } from '../../hooks/useConnection';
 16 | 
 17 | type ConnectionLineWrapperProps<NodeType extends Node = Node> = {
 18 |   type: ConnectionLineType;
 19 |   component?: ConnectionLineComponent<NodeType>;
 20 |   containerStyle?: CSSProperties;
 21 |   style?: CSSProperties;
 22 | };
 23 | 
 24 | const selector = (s: ReactFlowState) => ({
 25 |   nodesConnectable: s.nodesConnectable,
 26 |   isValid: s.connection.isValid,
 27 |   inProgress: s.connection.inProgress,
 28 |   width: s.width,
 29 |   height: s.height,
 30 | });
 31 | 
 32 | export function ConnectionLineWrapper<NodeType extends Node = Node>({
 33 |   containerStyle,
 34 |   style,
 35 |   type,
 36 |   component,
 37 | }: ConnectionLineWrapperProps<NodeType>) {
 38 |   const { nodesConnectable, width, height, isValid, inProgress } = useStore(selector, shallow);
 39 |   const renderConnection = !!(width && nodesConnectable && inProgress);
 40 | 
 41 |   if (!renderConnection) {
 42 |     return null;
 43 |   }
 44 | 
 45 |   return (
 46 |     <svg
 47 |       style={containerStyle}
 48 |       width={width}
 49 |       height={height}
 50 |       className="react-flow__connectionline react-flow__container"
 51 |     >
 52 |       <g className={cc(['react-flow__connection', getConnectionStatus(isValid)])}>
 53 |         <ConnectionLine<NodeType> style={style} type={type} CustomComponent={component} isValid={isValid} />
 54 |       </g>
 55 |     </svg>
 56 |   );
 57 | }
 58 | 
 59 | type ConnectionLineProps<NodeType extends Node = Node> = {
 60 |   type: ConnectionLineType;
 61 |   style?: CSSProperties;
 62 |   CustomComponent?: ConnectionLineComponent<NodeType>;
 63 |   isValid: boolean | null;
 64 | };
 65 | 
 66 | const ConnectionLine = <NodeType extends Node = Node>({
 67 |   style,
 68 |   type = ConnectionLineType.Bezier,
 69 |   CustomComponent,
 70 |   isValid,
 71 | }: ConnectionLineProps<NodeType>) => {
 72 |   const { inProgress, from, fromNode, fromHandle, fromPosition, to, toNode, toHandle, toPosition } =
 73 |     useConnection<NodeType>();
 74 | 
 75 |   if (!inProgress) {
 76 |     return;
 77 |   }
 78 | 
 79 |   if (CustomComponent) {
 80 |     return (
 81 |       <CustomComponent
 82 |         connectionLineType={type}
 83 |         connectionLineStyle={style}
 84 |         fromNode={fromNode}
 85 |         fromHandle={fromHandle}
 86 |         fromX={from.x}
 87 |         fromY={from.y}
 88 |         toX={to.x}
 89 |         toY={to.y}
 90 |         fromPosition={fromPosition}
 91 |         toPosition={toPosition}
 92 |         connectionStatus={getConnectionStatus(isValid)}
 93 |         toNode={toNode}
 94 |         toHandle={toHandle}
 95 |       />
 96 |     );
 97 |   }
 98 | 
 99 |   let path = '';
100 | 
101 |   const pathParams = {
102 |     sourceX: from.x,
103 |     sourceY: from.y,
104 |     sourcePosition: fromPosition,
105 |     targetX: to.x,
106 |     targetY: to.y,
107 |     targetPosition: toPosition,
108 |   };
109 | 
110 |   switch (type) {
111 |     case ConnectionLineType.Bezier:
112 |       [path] = getBezierPath(pathParams);
113 |       break;
114 |     case ConnectionLineType.SimpleBezier:
115 |       [path] = getSimpleBezierPath(pathParams);
116 |       break;
117 |     case ConnectionLineType.Step:
118 |       [path] = getSmoothStepPath({
119 |         ...pathParams,
120 |         borderRadius: 0,
121 |       });
122 |       break;
123 |     case ConnectionLineType.SmoothStep:
124 |       [path] = getSmoothStepPath(pathParams);
125 |       break;
126 |     default:
127 |       [path] = getStraightPath(pathParams);
128 |   }
129 | 
130 |   return <path d={path} fill="none" className="react-flow__connection-path" style={style} />;
131 | };
132 | 
133 | ConnectionLine.displayName = 'ConnectionLine';
134 | 


--------------------------------------------------------------------------------
/packages/react/src/components/EdgeLabelRenderer/index.tsx:
--------------------------------------------------------------------------------
 1 | import type { ReactNode } from 'react';
 2 | import { createPortal } from 'react-dom';
 3 | 
 4 | import { useStore } from '../../hooks/useStore';
 5 | import type { ReactFlowState } from '../../types';
 6 | 
 7 | const selector = (s: ReactFlowState) => s.domNode?.querySelector('.react-flow__edgelabel-renderer');
 8 | 
 9 | export type EdgeLabelRendererProps = {
10 |   children: ReactNode
11 | }
12 | 
13 | /**
14 |  * Edges are SVG-based. If you want to render more complex labels you can use the
15 |  * `<EdgeLabelRenderer />` component to access a div based renderer. This component
16 |  * is a portal that renders the label in a `<div />` that is positioned on top of
17 |  * the edges. You can see an example usage of the component in the
18 |  * [edge label renderer example](/examples/edges/edge-label-renderer).
19 |  * @public
20 |  *
21 |  * @example
22 |  * ```jsx
23 |  * import React from 'react';
24 |  * import { getBezierPath, EdgeLabelRenderer, BaseEdge } from '@xyflow/react';
25 |  *
26 |  * export function CustomEdge({ id, data, ...props }) {
27 |  *   const [edgePath, labelX, labelY] = getBezierPath(props);
28 |  *
29 |  *   return (
30 |  *     <>
31 |  *       <BaseEdge id={id} path={edgePath} />
32 |  *       <EdgeLabelRenderer>
33 |  *         <div
34 |  *           style={{
35 |  *             position: 'absolute',
36 |  *             transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
37 |  *             background: '#ffcc00',
38 |  *             padding: 10,
39 |  *         }}
40 |  *           className="nodrag nopan"
41 |  *         >
42 |  *          {data.label}
43 |  *         </div>
44 |  *       </EdgeLabelRenderer>
45 |  *     </>
46 |  *   );
47 |  * };
48 |  * ```
49 |  *
50 |  * @remarks The `<EdgeLabelRenderer />` has no pointer events by default. If you want to
51 |  * add mouse interactions you need to set the style `pointerEvents: all` and add
52 |  * the `nopan` class on the label or the element you want to interact with.
53 |  */
54 | export function EdgeLabelRenderer({ children }: EdgeLabelRendererProps) {
55 |   const edgeLabelRenderer = useStore(selector);
56 | 
57 |   if (!edgeLabelRenderer) {
58 |     return null;
59 |   }
60 | 
61 |   return createPortal(children, edgeLabelRenderer);
62 | }
63 | 


--------------------------------------------------------------------------------
/packages/react/src/components/EdgeWrapper/EdgeUpdateAnchors.tsx:
--------------------------------------------------------------------------------
  1 | // Reconnectable edges have a anchors around their handles to reconnect the edge.
  2 | import { XYHandle, type Connection, EdgePosition, FinalConnectionState, HandleType } from '@xyflow/system';
  3 | 
  4 | import { EdgeAnchor } from '../Edges/EdgeAnchor';
  5 | import type { EdgeWrapperProps, Edge } from '../../types/edges';
  6 | import { useStoreApi } from '../../hooks/useStore';
  7 | 
  8 | type EdgeUpdateAnchorsProps<EdgeType extends Edge = Edge> = {
  9 |   edge: EdgeType;
 10 |   isReconnectable: boolean | 'source' | 'target';
 11 |   reconnectRadius: EdgeWrapperProps['reconnectRadius'];
 12 |   onReconnect: EdgeWrapperProps<EdgeType>['onReconnect'];
 13 |   onReconnectStart: EdgeWrapperProps<EdgeType>['onReconnectStart'];
 14 |   onReconnectEnd: EdgeWrapperProps<EdgeType>['onReconnectEnd'];
 15 |   setUpdateHover: (hover: boolean) => void;
 16 |   setReconnecting: (updating: boolean) => void;
 17 | } & EdgePosition;
 18 | 
 19 | export function EdgeUpdateAnchors<EdgeType extends Edge = Edge>({
 20 |   isReconnectable,
 21 |   reconnectRadius,
 22 |   edge,
 23 |   sourceX,
 24 |   sourceY,
 25 |   targetX,
 26 |   targetY,
 27 |   sourcePosition,
 28 |   targetPosition,
 29 |   onReconnect,
 30 |   onReconnectStart,
 31 |   onReconnectEnd,
 32 |   setReconnecting,
 33 |   setUpdateHover,
 34 | }: EdgeUpdateAnchorsProps<EdgeType>) {
 35 |   const store = useStoreApi();
 36 | 
 37 |   const handleEdgeUpdater = (
 38 |     event: React.MouseEvent<SVGGElement, MouseEvent>,
 39 |     oppositeHandle: { nodeId: string; id: string | null; type: HandleType }
 40 |   ) => {
 41 |     // avoid triggering edge updater if mouse btn is not left
 42 |     if (event.button !== 0) {
 43 |       return;
 44 |     }
 45 | 
 46 |     const {
 47 |       autoPanOnConnect,
 48 |       domNode,
 49 |       isValidConnection,
 50 |       connectionMode,
 51 |       connectionRadius,
 52 |       lib,
 53 |       onConnectStart,
 54 |       onConnectEnd,
 55 |       cancelConnection,
 56 |       nodeLookup,
 57 |       rfId: flowId,
 58 |       panBy,
 59 |       updateConnection,
 60 |     } = store.getState();
 61 |     const isTarget = oppositeHandle.type === 'target';
 62 | 
 63 |     setReconnecting(true);
 64 |     onReconnectStart?.(event, edge, oppositeHandle.type);
 65 | 
 66 |     const _onReconnectEnd = (evt: MouseEvent | TouchEvent, connectionState: FinalConnectionState) => {
 67 |       setReconnecting(false);
 68 |       onReconnectEnd?.(evt, edge, oppositeHandle.type, connectionState);
 69 |     };
 70 | 
 71 |     const onConnectEdge = (connection: Connection) => onReconnect?.(edge, connection);
 72 | 
 73 |     XYHandle.onPointerDown(event.nativeEvent, {
 74 |       autoPanOnConnect,
 75 |       connectionMode,
 76 |       connectionRadius,
 77 |       domNode,
 78 |       handleId: oppositeHandle.id,
 79 |       nodeId: oppositeHandle.nodeId,
 80 |       nodeLookup,
 81 |       isTarget,
 82 |       edgeUpdaterType: oppositeHandle.type,
 83 |       lib,
 84 |       flowId,
 85 |       cancelConnection,
 86 |       panBy,
 87 |       isValidConnection,
 88 |       onConnect: onConnectEdge,
 89 |       onConnectStart,
 90 |       onConnectEnd,
 91 |       onReconnectEnd: _onReconnectEnd,
 92 |       updateConnection,
 93 |       getTransform: () => store.getState().transform,
 94 |       getFromHandle: () => store.getState().connection.fromHandle,
 95 |     });
 96 |   };
 97 | 
 98 |   const onReconnectSourceMouseDown = (event: React.MouseEvent<SVGGElement, MouseEvent>): void =>
 99 |     handleEdgeUpdater(event, { nodeId: edge.target, id: edge.targetHandle ?? null, type: 'target' });
100 |   const onReconnectTargetMouseDown = (event: React.MouseEvent<SVGGElement, MouseEvent>): void =>
101 |     handleEdgeUpdater(event, { nodeId: edge.source, id: edge.sourceHandle ?? null, type: 'source' });
102 |   const onReconnectMouseEnter = () => setUpdateHover(true);
103 |   const onReconnectMouseOut = () => setUpdateHover(false);
104 | 
105 |   return (
106 |     <>
107 |       {(isReconnectable === true || isReconnectable === 'source') && (
108 |         <EdgeAnchor
109 |           position={sourcePosition}
110 |           centerX={sourceX}
111 |           centerY={sourceY}
112 |           radius={reconnectRadius}
113 |           onMouseDown={onReconnectSourceMouseDown}
114 |           onMouseEnter={onReconnectMouseEnter}
115 |           onMouseOut={onReconnectMouseOut}
116 |           type="source"
117 |         />
118 |       )}
119 |       {(isReconnectable === true || isReconnectable === 'target') && (
120 |         <EdgeAnchor
121 |           position={targetPosition}
122 |           centerX={targetX}
123 |           centerY={targetY}
124 |           radius={reconnectRadius}
125 |           onMouseDown={onReconnectTargetMouseDown}
126 |           onMouseEnter={onReconnectMouseEnter}
127 |           onMouseOut={onReconnectMouseOut}
128 |           type="target"
129 |         />
130 |       )}
131 |     </>
132 |   );
133 | }
134 | 


--------------------------------------------------------------------------------
/packages/react/src/components/EdgeWrapper/utils.ts:
--------------------------------------------------------------------------------
 1 | import type { EdgeTypes } from '../../types';
 2 | import {
 3 |   BezierEdgeInternal,
 4 |   StraightEdgeInternal,
 5 |   StepEdgeInternal,
 6 |   SmoothStepEdgeInternal,
 7 |   SimpleBezierEdgeInternal,
 8 | } from '../Edges';
 9 | 
10 | export const builtinEdgeTypes: EdgeTypes = {
11 |   default: BezierEdgeInternal,
12 |   straight: StraightEdgeInternal,
13 |   step: StepEdgeInternal,
14 |   smoothstep: SmoothStepEdgeInternal,
15 |   simplebezier: SimpleBezierEdgeInternal,
16 | };
17 | 
18 | export const nullPosition = {
19 |   sourceX: null,
20 |   sourceY: null,
21 |   targetX: null,
22 |   targetY: null,
23 |   sourcePosition: null,
24 |   targetPosition: null,
25 | };
26 | 


--------------------------------------------------------------------------------
/packages/react/src/components/Edges/BaseEdge.tsx:
--------------------------------------------------------------------------------
 1 | import { isNumeric } from '@xyflow/system';
 2 | import cc from 'classcat';
 3 | 
 4 | import { EdgeText } from './EdgeText';
 5 | import type { BaseEdgeProps } from '../../types';
 6 | 
 7 | /**
 8 |  * The `<BaseEdge />` component gets used internally for all the edges. It can be
 9 |  * used inside a custom edge and handles the invisible helper edge and the edge label
10 |  * for you.
11 |  *
12 |  * @public
13 |  * @example
14 |  * ```jsx
15 |  *import { BaseEdge } from '@xyflow/react';
16 |  *
17 |  *export function CustomEdge({ sourceX, sourceY, targetX, targetY, ...props }) {
18 |  *  const [edgePath] = getStraightPath({
19 |  *    sourceX,
20 |  *    sourceY,
21 |  *    targetX,
22 |  *    targetY,
23 |  *  });
24 |  *
25 |  *  return <BaseEdge path={edgePath} {...props} />;
26 |  *}
27 |  *```
28 |  *
29 |  * @remarks If you want to use an edge marker with the [`<BaseEdge />`](/api-reference/components/base-edge) component,
30 |  * you can pass the `markerStart` or `markerEnd` props passed to your custom edge
31 |  * through to the [`<BaseEdge />`](/api-reference/components/base-edge) component.
32 |  * You can see all the props passed to a custom edge by looking at the [`EdgeProps`](/api-reference/types/edge-props) type.
33 |  */
34 | export function BaseEdge({
35 |   path,
36 |   labelX,
37 |   labelY,
38 |   label,
39 |   labelStyle,
40 |   labelShowBg,
41 |   labelBgStyle,
42 |   labelBgPadding,
43 |   labelBgBorderRadius,
44 |   interactionWidth = 20,
45 |   ...props
46 | }: BaseEdgeProps) {
47 |   return (
48 |     <>
49 |       <path {...props} d={path} fill="none" className={cc(['react-flow__edge-path', props.className])} />
50 |       {interactionWidth && (
51 |         <path
52 |           d={path}
53 |           fill="none"
54 |           strokeOpacity={0}
55 |           strokeWidth={interactionWidth}
56 |           className="react-flow__edge-interaction"
57 |         />
58 |       )}
59 |       {label && isNumeric(labelX) && isNumeric(labelY) ? (
60 |         <EdgeText
61 |           x={labelX}
62 |           y={labelY}
63 |           label={label}
64 |           labelStyle={labelStyle}
65 |           labelShowBg={labelShowBg}
66 |           labelBgStyle={labelBgStyle}
67 |           labelBgPadding={labelBgPadding}
68 |           labelBgBorderRadius={labelBgBorderRadius}
69 |         />
70 |       ) : null}
71 |     </>
72 |   );
73 | }
74 | 


--------------------------------------------------------------------------------
/packages/react/src/components/Edges/BezierEdge.tsx:
--------------------------------------------------------------------------------
 1 | import { memo } from 'react';
 2 | import { Position, getBezierPath } from '@xyflow/system';
 3 | 
 4 | import { BaseEdge } from './BaseEdge';
 5 | import type { BezierEdgeProps } from '../../types';
 6 | 
 7 | function createBezierEdge(params: { isInternal: boolean }) {
 8 |   // eslint-disable-next-line react/display-name
 9 |   return memo(
10 |     ({
11 |       id,
12 |       sourceX,
13 |       sourceY,
14 |       targetX,
15 |       targetY,
16 |       sourcePosition = Position.Bottom,
17 |       targetPosition = Position.Top,
18 |       label,
19 |       labelStyle,
20 |       labelShowBg,
21 |       labelBgStyle,
22 |       labelBgPadding,
23 |       labelBgBorderRadius,
24 |       style,
25 |       markerEnd,
26 |       markerStart,
27 |       pathOptions,
28 |       interactionWidth,
29 |     }: BezierEdgeProps) => {
30 |       const [path, labelX, labelY] = getBezierPath({
31 |         sourceX,
32 |         sourceY,
33 |         sourcePosition,
34 |         targetX,
35 |         targetY,
36 |         targetPosition,
37 |         curvature: pathOptions?.curvature,
38 |       });
39 | 
40 |       const _id = params.isInternal ? undefined : id;
41 | 
42 |       return (
43 |         <BaseEdge
44 |           id={_id}
45 |           path={path}
46 |           labelX={labelX}
47 |           labelY={labelY}
48 |           label={label}
49 |           labelStyle={labelStyle}
50 |           labelShowBg={labelShowBg}
51 |           labelBgStyle={labelBgStyle}
52 |           labelBgPadding={labelBgPadding}
53 |           labelBgBorderRadius={labelBgBorderRadius}
54 |           style={style}
55 |           markerEnd={markerEnd}
56 |           markerStart={markerStart}
57 |           interactionWidth={interactionWidth}
58 |         />
59 |       );
60 |     }
61 |   );
62 | }
63 | 
64 | /**
65 |  * Component that can be used inside a custom edge to render a bezier curve.
66 |  *
67 |  * @public
68 |  * @example
69 |  *
70 |  * ```tsx
71 |  * import { BezierEdge } from '@xyflow/react';
72 |  *
73 |  * function CustomEdge({ sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition }) {
74 |  *   return (
75 |  *     <BezierEdge
76 |  *       sourceX={sourceX}
77 |  *       sourceY={sourceY}
78 |  *       targetX={targetX}
79 |  *       targetY={targetY}
80 |  *       sourcePosition={sourcePosition}
81 |  *       targetPosition={targetPosition}
82 |  *     />
83 |  *   );
84 |  * }
85 |  * ```
86 |  */
87 | const BezierEdge = createBezierEdge({ isInternal: false });
88 | 
89 | /**
90 |  * @internal
91 |  */
92 | const BezierEdgeInternal = createBezierEdge({ isInternal: true });
93 | 
94 | BezierEdge.displayName = 'BezierEdge';
95 | BezierEdgeInternal.displayName = 'BezierEdgeInternal';
96 | 
97 | export { BezierEdge, BezierEdgeInternal };
98 | 


--------------------------------------------------------------------------------
/packages/react/src/components/Edges/EdgeAnchor.tsx:
--------------------------------------------------------------------------------
 1 | import type { MouseEvent as ReactMouseEvent, SVGAttributes } from 'react';
 2 | import cc from 'classcat';
 3 | import { Position } from '@xyflow/system';
 4 | 
 5 | const shiftX = (x: number, shift: number, position: Position): number => {
 6 |   if (position === Position.Left) return x - shift;
 7 |   if (position === Position.Right) return x + shift;
 8 |   return x;
 9 | };
10 | 
11 | const shiftY = (y: number, shift: number, position: Position): number => {
12 |   if (position === Position.Top) return y - shift;
13 |   if (position === Position.Bottom) return y + shift;
14 |   return y;
15 | };
16 | 
17 | export interface EdgeAnchorProps extends SVGAttributes<SVGGElement> {
18 |   position: Position;
19 |   centerX: number;
20 |   centerY: number;
21 |   radius?: number;
22 |   onMouseDown: (event: ReactMouseEvent<SVGGElement, MouseEvent>) => void;
23 |   onMouseEnter: (event: ReactMouseEvent<SVGGElement, MouseEvent>) => void;
24 |   onMouseOut: (event: ReactMouseEvent<SVGGElement, MouseEvent>) => void;
25 |   type: string;
26 | }
27 | 
28 | const EdgeUpdaterClassName = 'react-flow__edgeupdater';
29 | 
30 | /**
31 |  * @internal
32 |  */
33 | export function EdgeAnchor({
34 |   position,
35 |   centerX,
36 |   centerY,
37 |   radius = 10,
38 |   onMouseDown,
39 |   onMouseEnter,
40 |   onMouseOut,
41 |   type,
42 | }: EdgeAnchorProps) {
43 |   return (
44 |     <circle
45 |       onMouseDown={onMouseDown}
46 |       onMouseEnter={onMouseEnter}
47 |       onMouseOut={onMouseOut}
48 |       className={cc([EdgeUpdaterClassName, `${EdgeUpdaterClassName}-${type}`])}
49 |       cx={shiftX(centerX, radius, position)}
50 |       cy={shiftY(centerY, radius, position)}
51 |       r={radius}
52 |       stroke="transparent"
53 |       fill="transparent"
54 |     />
55 |   );
56 | }
57 | 


--------------------------------------------------------------------------------
/packages/react/src/components/Edges/EdgeText.tsx:
--------------------------------------------------------------------------------
  1 | import { memo, useState, useEffect, useRef } from 'react';
  2 | import cc from 'classcat';
  3 | import type { Rect } from '@xyflow/system';
  4 | 
  5 | import type { EdgeTextProps } from '../../types';
  6 | 
  7 | function EdgeTextComponent({
  8 |   x,
  9 |   y,
 10 |   label,
 11 |   labelStyle,
 12 |   labelShowBg = true,
 13 |   labelBgStyle,
 14 |   labelBgPadding = [2, 4],
 15 |   labelBgBorderRadius = 2,
 16 |   children,
 17 |   className,
 18 |   ...rest
 19 | }: EdgeTextProps) {
 20 |   const [edgeTextBbox, setEdgeTextBbox] = useState<Rect>({ x: 1, y: 0, width: 0, height: 0 });
 21 |   const edgeTextClasses = cc(['react-flow__edge-textwrapper', className]);
 22 |   const edgeTextRef = useRef<SVGTextElement | null>(null);
 23 | 
 24 |   useEffect(() => {
 25 |     if (edgeTextRef.current) {
 26 |       const textBbox = edgeTextRef.current.getBBox();
 27 | 
 28 |       setEdgeTextBbox({
 29 |         x: textBbox.x,
 30 |         y: textBbox.y,
 31 |         width: textBbox.width,
 32 |         height: textBbox.height,
 33 |       });
 34 |     }
 35 |   }, [label]);
 36 | 
 37 |   if (!label) {
 38 |     return null;
 39 |   }
 40 | 
 41 |   return (
 42 |     <g
 43 |       transform={`translate(${x - edgeTextBbox.width / 2} ${y - edgeTextBbox.height / 2})`}
 44 |       className={edgeTextClasses}
 45 |       visibility={edgeTextBbox.width ? 'visible' : 'hidden'}
 46 |       {...rest}
 47 |     >
 48 |       {labelShowBg && (
 49 |         <rect
 50 |           width={edgeTextBbox.width + 2 * labelBgPadding[0]}
 51 |           x={-labelBgPadding[0]}
 52 |           y={-labelBgPadding[1]}
 53 |           height={edgeTextBbox.height + 2 * labelBgPadding[1]}
 54 |           className="react-flow__edge-textbg"
 55 |           style={labelBgStyle}
 56 |           rx={labelBgBorderRadius}
 57 |           ry={labelBgBorderRadius}
 58 |         />
 59 |       )}
 60 |       <text
 61 |         className="react-flow__edge-text"
 62 |         y={edgeTextBbox.height / 2}
 63 |         dy="0.3em"
 64 |         ref={edgeTextRef}
 65 |         style={labelStyle}
 66 |       >
 67 |         {label}
 68 |       </text>
 69 |       {children}
 70 |     </g>
 71 |   );
 72 | }
 73 | 
 74 | EdgeTextComponent.displayName = 'EdgeText';
 75 | 
 76 | /**
 77 |  * You can use the `<EdgeText />` component as a helper component to display text
 78 |  * within your custom edges.
 79 |  *
 80 |  * @public
 81 |  *
 82 |  * @example
 83 |  * ```jsx
 84 |  * import { EdgeText } from '@xyflow/react';
 85 |  *
 86 |  * export function CustomEdgeLabel({ label }) {
 87 |  *   return (
 88 |  *     <EdgeText
 89 |  *       x={100}
 90 |  *       y={100}
 91 |  *       label={label}
 92 |  *       labelStyle={{ fill: 'white' }}
 93 |  *       labelShowBg
 94 |  *       labelBgStyle={{ fill: 'red' }}
 95 |  *       labelBgPadding={[2, 4]}
 96 |  *       labelBgBorderRadius={2}
 97 |  *     />
 98 |  *   );
 99 |  * }
100 |  *```
101 |  */
102 | export const EdgeText = memo(EdgeTextComponent);
103 | 


--------------------------------------------------------------------------------
/packages/react/src/components/Edges/SimpleBezierEdge.tsx:
--------------------------------------------------------------------------------
  1 | import { memo } from 'react';
  2 | import { Position, getBezierEdgeCenter } from '@xyflow/system';
  3 | 
  4 | import { BaseEdge } from './BaseEdge';
  5 | import type { SimpleBezierEdgeProps } from '../../types';
  6 | 
  7 | export interface GetSimpleBezierPathParams {
  8 |   sourceX: number;
  9 |   sourceY: number;
 10 |   /** @default Position.Bottom */
 11 |   sourcePosition?: Position;
 12 |   targetX: number;
 13 |   targetY: number;
 14 |   /** @default Position.Top */
 15 |   targetPosition?: Position;
 16 | }
 17 | 
 18 | interface GetControlParams {
 19 |   pos: Position;
 20 |   x1: number;
 21 |   y1: number;
 22 |   x2: number;
 23 |   y2: number;
 24 | }
 25 | 
 26 | function getControl({ pos, x1, y1, x2, y2 }: GetControlParams): [number, number] {
 27 |   if (pos === Position.Left || pos === Position.Right) {
 28 |     return [0.5 * (x1 + x2), y1];
 29 |   }
 30 | 
 31 |   return [x1, 0.5 * (y1 + y2)];
 32 | }
 33 | 
 34 | /**
 35 |  * The `getSimpleBezierPath` util returns everything you need to render a simple
 36 |  * bezier edge between two nodes.
 37 |  * @public
 38 |  * @returns
 39 |  * - `path`: the path to use in an SVG `<path>` element.
 40 |  * - `labelX`: the `x` position you can use to render a label for this edge.
 41 |  * - `labelY`: the `y` position you can use to render a label for this edge.
 42 |  * - `offsetX`: the absolute difference between the source `x` position and the `x` position of the
 43 |  * middle of this path.
 44 |  * - `offsetY`: the absolute difference between the source `y` position and the `y` position of the
 45 |  * middle of this path.
 46 |  */
 47 | export function getSimpleBezierPath({
 48 |   sourceX,
 49 |   sourceY,
 50 |   sourcePosition = Position.Bottom,
 51 |   targetX,
 52 |   targetY,
 53 |   targetPosition = Position.Top,
 54 | }: GetSimpleBezierPathParams): [path: string, labelX: number, labelY: number, offsetX: number, offsetY: number] {
 55 |   const [sourceControlX, sourceControlY] = getControl({
 56 |     pos: sourcePosition,
 57 |     x1: sourceX,
 58 |     y1: sourceY,
 59 |     x2: targetX,
 60 |     y2: targetY,
 61 |   });
 62 |   const [targetControlX, targetControlY] = getControl({
 63 |     pos: targetPosition,
 64 |     x1: targetX,
 65 |     y1: targetY,
 66 |     x2: sourceX,
 67 |     y2: sourceY,
 68 |   });
 69 |   const [labelX, labelY, offsetX, offsetY] = getBezierEdgeCenter({
 70 |     sourceX,
 71 |     sourceY,
 72 |     targetX,
 73 |     targetY,
 74 |     sourceControlX,
 75 |     sourceControlY,
 76 |     targetControlX,
 77 |     targetControlY,
 78 |   });
 79 | 
 80 |   return [
 81 |     `M${sourceX},${sourceY} C${sourceControlX},${sourceControlY} ${targetControlX},${targetControlY} ${targetX},${targetY}`,
 82 |     labelX,
 83 |     labelY,
 84 |     offsetX,
 85 |     offsetY,
 86 |   ];
 87 | }
 88 | 
 89 | function createSimpleBezierEdge(params: { isInternal: boolean }) {
 90 |   // eslint-disable-next-line react/display-name
 91 |   return memo(
 92 |     ({
 93 |       id,
 94 |       sourceX,
 95 |       sourceY,
 96 |       targetX,
 97 |       targetY,
 98 |       sourcePosition,
 99 |       targetPosition,
100 |       label,
101 |       labelStyle,
102 |       labelShowBg,
103 |       labelBgStyle,
104 |       labelBgPadding,
105 |       labelBgBorderRadius,
106 |       style,
107 |       markerEnd,
108 |       markerStart,
109 |       interactionWidth,
110 |     }: SimpleBezierEdgeProps) => {
111 |       const [path, labelX, labelY] = getSimpleBezierPath({
112 |         sourceX,
113 |         sourceY,
114 |         sourcePosition,
115 |         targetX,
116 |         targetY,
117 |         targetPosition,
118 |       });
119 | 
120 |       const _id = params.isInternal ? undefined : id;
121 | 
122 |       return (
123 |         <BaseEdge
124 |           id={_id}
125 |           path={path}
126 |           labelX={labelX}
127 |           labelY={labelY}
128 |           label={label}
129 |           labelStyle={labelStyle}
130 |           labelShowBg={labelShowBg}
131 |           labelBgStyle={labelBgStyle}
132 |           labelBgPadding={labelBgPadding}
133 |           labelBgBorderRadius={labelBgBorderRadius}
134 |           style={style}
135 |           markerEnd={markerEnd}
136 |           markerStart={markerStart}
137 |           interactionWidth={interactionWidth}
138 |         />
139 |       );
140 |     }
141 |   );
142 | }
143 | 
144 | const SimpleBezierEdge = createSimpleBezierEdge({ isInternal: false });
145 | const SimpleBezierEdgeInternal = createSimpleBezierEdge({ isInternal: true });
146 | 
147 | SimpleBezierEdge.displayName = 'SimpleBezierEdge';
148 | SimpleBezierEdgeInternal.displayName = 'SimpleBezierEdgeInternal';
149 | 
150 | export { SimpleBezierEdge, SimpleBezierEdgeInternal };
151 | 


--------------------------------------------------------------------------------
/packages/react/src/components/Edges/SmoothStepEdge.tsx:
--------------------------------------------------------------------------------
 1 | import { memo } from 'react';
 2 | import { Position, getSmoothStepPath } from '@xyflow/system';
 3 | 
 4 | import { BaseEdge } from './BaseEdge';
 5 | import type { SmoothStepEdgeProps } from '../../types';
 6 | 
 7 | function createSmoothStepEdge(params: { isInternal: boolean }) {
 8 |   // eslint-disable-next-line react/display-name
 9 |   return memo(
10 |     ({
11 |       id,
12 |       sourceX,
13 |       sourceY,
14 |       targetX,
15 |       targetY,
16 |       label,
17 |       labelStyle,
18 |       labelShowBg,
19 |       labelBgStyle,
20 |       labelBgPadding,
21 |       labelBgBorderRadius,
22 |       style,
23 |       sourcePosition = Position.Bottom,
24 |       targetPosition = Position.Top,
25 |       markerEnd,
26 |       markerStart,
27 |       pathOptions,
28 |       interactionWidth,
29 |     }: SmoothStepEdgeProps) => {
30 |       const [path, labelX, labelY] = getSmoothStepPath({
31 |         sourceX,
32 |         sourceY,
33 |         sourcePosition,
34 |         targetX,
35 |         targetY,
36 |         targetPosition,
37 |         borderRadius: pathOptions?.borderRadius,
38 |         offset: pathOptions?.offset,
39 |       });
40 | 
41 |       const _id = params.isInternal ? undefined : id;
42 | 
43 |       return (
44 |         <BaseEdge
45 |           id={_id}
46 |           path={path}
47 |           labelX={labelX}
48 |           labelY={labelY}
49 |           label={label}
50 |           labelStyle={labelStyle}
51 |           labelShowBg={labelShowBg}
52 |           labelBgStyle={labelBgStyle}
53 |           labelBgPadding={labelBgPadding}
54 |           labelBgBorderRadius={labelBgBorderRadius}
55 |           style={style}
56 |           markerEnd={markerEnd}
57 |           markerStart={markerStart}
58 |           interactionWidth={interactionWidth}
59 |         />
60 |       );
61 |     }
62 |   );
63 | }
64 | 
65 | /**
66 |  * Component that can be used inside a custom edge to render a smooth step edge.
67 |  *
68 |  * @public
69 |  * @example
70 |  *
71 |  * ```tsx
72 |  * import { SmoothStepEdge } from '@xyflow/react';
73 |  *
74 |  * function CustomEdge({ sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition }) {
75 |  *   return (
76 |  *     <SmoothStepEdge
77 |  *       sourceX={sourceX}
78 |  *       sourceY={sourceY}
79 |  *       targetX={targetX}
80 |  *       targetY={targetY}
81 |  *       sourcePosition={sourcePosition}
82 |  *       targetPosition={targetPosition}
83 |  *     />
84 |  *   );
85 |  * }
86 |  * ```
87 |  */
88 | const SmoothStepEdge = createSmoothStepEdge({ isInternal: false });
89 | 
90 | /**
91 |  * @internal
92 |  */
93 | const SmoothStepEdgeInternal = createSmoothStepEdge({ isInternal: true });
94 | 
95 | SmoothStepEdge.displayName = 'SmoothStepEdge';
96 | SmoothStepEdgeInternal.displayName = 'SmoothStepEdgeInternal';
97 | 
98 | export { SmoothStepEdge, SmoothStepEdgeInternal };
99 | 


--------------------------------------------------------------------------------
/packages/react/src/components/Edges/StepEdge.tsx:
--------------------------------------------------------------------------------
 1 | import { memo, useMemo } from 'react';
 2 | 
 3 | import { SmoothStepEdge } from './SmoothStepEdge';
 4 | import type { StepEdgeProps } from '../../types';
 5 | 
 6 | function createStepEdge(params: { isInternal: boolean }) {
 7 |   // eslint-disable-next-line react/display-name
 8 |   return memo(({ id, ...props }: StepEdgeProps) => {
 9 |     const _id = params.isInternal ? undefined : id;
10 | 
11 |     return (
12 |       <SmoothStepEdge
13 |         {...props}
14 |         id={_id}
15 |         pathOptions={useMemo(
16 |           () => ({ borderRadius: 0, offset: props.pathOptions?.offset }),
17 |           [props.pathOptions?.offset]
18 |         )}
19 |       />
20 |     );
21 |   });
22 | }
23 | 
24 | /**
25 |  * Component that can be used inside a custom edge to render a step edge.
26 |  *
27 |  * @public
28 |  * @example
29 |  *
30 |  * ```tsx
31 |  * import { StepEdge } from '@xyflow/react';
32 |  *
33 |  * function CustomEdge({ sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition }) {
34 |  *   return (
35 |  *     <StepEdge
36 |  *       sourceX={sourceX}
37 |  *       sourceY={sourceY}
38 |  *       targetX={targetX}
39 |  *       targetY={targetY}
40 |  *       sourcePosition={sourcePosition}
41 |  *       targetPosition={targetPosition}
42 |  *     />
43 |  *   );
44 |  * }
45 |  * ```
46 |  */
47 | const StepEdge = createStepEdge({ isInternal: false });
48 | 
49 | /**
50 |  * @internal
51 |  */
52 | const StepEdgeInternal = createStepEdge({ isInternal: true });
53 | 
54 | StepEdge.displayName = 'StepEdge';
55 | StepEdgeInternal.displayName = 'StepEdgeInternal';
56 | 
57 | export { StepEdge, StepEdgeInternal };
58 | 


--------------------------------------------------------------------------------
/packages/react/src/components/Edges/StraightEdge.tsx:
--------------------------------------------------------------------------------
 1 | import { memo } from 'react';
 2 | import { getStraightPath } from '@xyflow/system';
 3 | 
 4 | import { BaseEdge } from './BaseEdge';
 5 | import type { StraightEdgeProps } from '../../types';
 6 | 
 7 | function createStraightEdge(params: { isInternal: boolean }) {
 8 |   // eslint-disable-next-line react/display-name
 9 |   return memo(
10 |     ({
11 |       id,
12 |       sourceX,
13 |       sourceY,
14 |       targetX,
15 |       targetY,
16 |       label,
17 |       labelStyle,
18 |       labelShowBg,
19 |       labelBgStyle,
20 |       labelBgPadding,
21 |       labelBgBorderRadius,
22 |       style,
23 |       markerEnd,
24 |       markerStart,
25 |       interactionWidth,
26 |     }: StraightEdgeProps) => {
27 |       const [path, labelX, labelY] = getStraightPath({ sourceX, sourceY, targetX, targetY });
28 | 
29 |       const _id = params.isInternal ? undefined : id;
30 | 
31 |       return (
32 |         <BaseEdge
33 |           id={_id}
34 |           path={path}
35 |           labelX={labelX}
36 |           labelY={labelY}
37 |           label={label}
38 |           labelStyle={labelStyle}
39 |           labelShowBg={labelShowBg}
40 |           labelBgStyle={labelBgStyle}
41 |           labelBgPadding={labelBgPadding}
42 |           labelBgBorderRadius={labelBgBorderRadius}
43 |           style={style}
44 |           markerEnd={markerEnd}
45 |           markerStart={markerStart}
46 |           interactionWidth={interactionWidth}
47 |         />
48 |       );
49 |     }
50 |   );
51 | }
52 | 
53 | /**
54 |  * Component that can be used inside a custom edge to render a straight line.
55 |  *
56 |  * @public
57 |  * @example
58 |  *
59 |  * ```tsx
60 |  * import { StraightEdge } from '@xyflow/react';
61 |  *
62 |  * function CustomEdge({ sourceX, sourceY, targetX, targetY }) {
63 |  *   return (
64 |  *     <StraightEdge
65 |  *       sourceX={sourceX}
66 |  *       sourceY={sourceY}
67 |  *       targetX={targetX}
68 |  *       targetY={targetY}
69 |  *     />
70 |  *   );
71 |  * }
72 |  * ```
73 |  */
74 | const StraightEdge = createStraightEdge({ isInternal: false });
75 | 
76 | /**
77 |  * @internal
78 |  */
79 | const StraightEdgeInternal = createStraightEdge({ isInternal: true });
80 | 
81 | StraightEdge.displayName = 'StraightEdge';
82 | StraightEdgeInternal.displayName = 'StraightEdgeInternal';
83 | 
84 | export { StraightEdge, StraightEdgeInternal };
85 | 


--------------------------------------------------------------------------------
/packages/react/src/components/Edges/index.ts:
--------------------------------------------------------------------------------
 1 | /*
 2 |  * We distinguish between internal and exported edges
 3 |  * The internal edges are used directly like custom edges and always get an id, source and target props
 4 |  * If you import an edge from the library, the id is optional and source and target are not used at all
 5 |  */
 6 | 
 7 | export { SimpleBezierEdge, SimpleBezierEdgeInternal } from './SimpleBezierEdge';
 8 | export { SmoothStepEdge, SmoothStepEdgeInternal } from './SmoothStepEdge';
 9 | export { StepEdge, StepEdgeInternal } from './StepEdge';
10 | export { StraightEdge, StraightEdgeInternal } from './StraightEdge';
11 | export { BezierEdge, BezierEdgeInternal } from './BezierEdge';
12 | 


--------------------------------------------------------------------------------
/packages/react/src/components/NodeWrapper/useNodeObserver.ts:
--------------------------------------------------------------------------------
 1 | import { useEffect, useRef } from 'react';
 2 | 
 3 | import type { InternalNode } from '../../types';
 4 | import { useStoreApi } from '../../hooks/useStore';
 5 | 
 6 | /**
 7 |  * Hook to handle the resize observation + internal updates for the passed node.
 8 |  *
 9 |  * @internal
10 |  * @returns nodeRef - reference to the node element
11 |  */
12 | export function useNodeObserver({
13 |   node,
14 |   nodeType,
15 |   hasDimensions,
16 |   resizeObserver,
17 | }: {
18 |   node: InternalNode;
19 |   nodeType: string;
20 |   hasDimensions: boolean;
21 |   resizeObserver: ResizeObserver | null;
22 | }) {
23 |   const store = useStoreApi();
24 |   const nodeRef = useRef<HTMLDivElement | null>(null);
25 |   const observedNode = useRef<HTMLDivElement | null>(null);
26 |   const prevSourcePosition = useRef(node.sourcePosition);
27 |   const prevTargetPosition = useRef(node.targetPosition);
28 |   const prevType = useRef(nodeType);
29 |   const isInitialized = hasDimensions && !!node.internals.handleBounds;
30 | 
31 |   useEffect(() => {
32 |     if (nodeRef.current && !node.hidden && (!isInitialized || observedNode.current !== nodeRef.current)) {
33 |       if (observedNode.current) {
34 |         resizeObserver?.unobserve(observedNode.current);
35 |       }
36 |       resizeObserver?.observe(nodeRef.current);
37 |       observedNode.current = nodeRef.current;
38 |     }
39 |   }, [isInitialized, node.hidden]);
40 | 
41 |   useEffect(() => {
42 |     return () => {
43 |       if (observedNode.current) {
44 |         resizeObserver?.unobserve(observedNode.current);
45 |         observedNode.current = null;
46 |       }
47 |     };
48 |   }, []);
49 | 
50 |   useEffect(() => {
51 |     if (nodeRef.current) {
52 |       /*
53 |        * when the user programmatically changes the source or handle position, we need to update the internals
54 |        * to make sure the edges are updated correctly
55 |        */
56 |       const typeChanged = prevType.current !== nodeType;
57 |       const sourcePosChanged = prevSourcePosition.current !== node.sourcePosition;
58 |       const targetPosChanged = prevTargetPosition.current !== node.targetPosition;
59 | 
60 |       if (typeChanged || sourcePosChanged || targetPosChanged) {
61 |         prevType.current = nodeType;
62 |         prevSourcePosition.current = node.sourcePosition;
63 |         prevTargetPosition.current = node.targetPosition;
64 | 
65 |         store
66 |           .getState()
67 |           .updateNodeInternals(new Map([[node.id, { id: node.id, nodeElement: nodeRef.current, force: true }]]));
68 |       }
69 |     }
70 |   }, [node.id, nodeType, node.sourcePosition, node.targetPosition]);
71 | 
72 |   return nodeRef;
73 | }
74 | 


--------------------------------------------------------------------------------
/packages/react/src/components/NodeWrapper/utils.tsx:
--------------------------------------------------------------------------------
 1 | import type { XYPosition } from '@xyflow/system';
 2 | 
 3 | import { InputNode } from '../Nodes/InputNode';
 4 | import { DefaultNode } from '../Nodes/DefaultNode';
 5 | import { GroupNode } from '../Nodes/GroupNode';
 6 | import { OutputNode } from '../Nodes/OutputNode';
 7 | import type { InternalNode, Node, NodeTypes } from '../../types';
 8 | 
 9 | export const arrowKeyDiffs: Record<string, XYPosition> = {
10 |   ArrowUp: { x: 0, y: -1 },
11 |   ArrowDown: { x: 0, y: 1 },
12 |   ArrowLeft: { x: -1, y: 0 },
13 |   ArrowRight: { x: 1, y: 0 },
14 | };
15 | 
16 | export const builtinNodeTypes: NodeTypes = {
17 |   input: InputNode,
18 |   default: DefaultNode,
19 |   output: OutputNode,
20 |   group: GroupNode,
21 | };
22 | 
23 | export function getNodeInlineStyleDimensions<NodeType extends Node = Node>(
24 |   node: InternalNode<NodeType>
25 | ): {
26 |     width: number | string | undefined;
27 |     height: number | string | undefined;
28 |   } {
29 |   if (node.internals.handleBounds === undefined) {
30 |     return {
31 |       width: node.width ?? node.initialWidth ?? node.style?.width,
32 |       height: node.height ?? node.initialHeight ?? node.style?.height,
33 |     };
34 |   }
35 | 
36 |   return {
37 |     width: node.width ?? node.style?.width,
38 |     height: node.height ?? node.style?.height,
39 |   };
40 | }
41 | 


--------------------------------------------------------------------------------
/packages/react/src/components/Nodes/DefaultNode.tsx:
--------------------------------------------------------------------------------
 1 | import { Position } from '@xyflow/system';
 2 | 
 3 | import { Handle } from '../../components/Handle';
 4 | import type { BuiltInNode, NodeProps } from '../../types/nodes';
 5 | 
 6 | export function DefaultNode({
 7 |   data,
 8 |   isConnectable,
 9 |   targetPosition = Position.Top,
10 |   sourcePosition = Position.Bottom,
11 | }: NodeProps<BuiltInNode>) {
12 |   return (
13 |     <>
14 |       <Handle type="target" position={targetPosition} isConnectable={isConnectable} />
15 |       {data?.label}
16 |       <Handle type="source" position={sourcePosition} isConnectable={isConnectable} />
17 |     </>
18 |   );
19 | }
20 | 


--------------------------------------------------------------------------------
/packages/react/src/components/Nodes/GroupNode.tsx:
--------------------------------------------------------------------------------
1 | export function GroupNode() {
2 |   return null;
3 | }
4 | 


--------------------------------------------------------------------------------
/packages/react/src/components/Nodes/InputNode.tsx:
--------------------------------------------------------------------------------
 1 | import { Position } from '@xyflow/system';
 2 | 
 3 | import { Handle } from '../../components/Handle';
 4 | import type { BuiltInNode, NodeProps } from '../../types/nodes';
 5 | 
 6 | export function InputNode({ data, isConnectable, sourcePosition = Position.Bottom }: NodeProps<BuiltInNode>) {
 7 |   return (
 8 |     <>
 9 |       {data?.label}
10 |       <Handle type="source" position={sourcePosition} isConnectable={isConnectable} />
11 |     </>
12 |   );
13 | }
14 | 


--------------------------------------------------------------------------------
/packages/react/src/components/Nodes/OutputNode.tsx:
--------------------------------------------------------------------------------
 1 | import { Position } from '@xyflow/system';
 2 | 
 3 | import { Handle } from '../../components/Handle';
 4 | import type { BuiltInNode, NodeProps } from '../../types/nodes';
 5 | 
 6 | export function OutputNode({ data, isConnectable, targetPosition = Position.Top }: NodeProps<BuiltInNode>) {
 7 |   return (
 8 |     <>
 9 |       <Handle type="target" position={targetPosition} isConnectable={isConnectable} />
10 |       {data?.label}
11 |     </>
12 |   );
13 | }
14 | 


--------------------------------------------------------------------------------
/packages/react/src/components/Nodes/utils.ts:
--------------------------------------------------------------------------------
 1 | import type { RefObject } from 'react';
 2 | import type { StoreApi } from 'zustand';
 3 | import { errorMessages } from '@xyflow/system';
 4 | 
 5 | import type { ReactFlowState } from '../../types';
 6 | 
 7 | /*
 8 |  * this handler is called by
 9 |  * 1. the click handler when node is not draggable or selectNodesOnDrag = false
10 |  * or
11 |  * 2. the on drag start handler when node is draggable and selectNodesOnDrag = true
12 |  */
13 | export function handleNodeClick({
14 |   id,
15 |   store,
16 |   unselect = false,
17 |   nodeRef,
18 | }: {
19 |   id: string;
20 |   store: {
21 |     getState: StoreApi<ReactFlowState>['getState'];
22 |     setState: StoreApi<ReactFlowState>['setState'];
23 |   };
24 |   unselect?: boolean;
25 |   nodeRef?: RefObject<HTMLDivElement>;
26 | }) {
27 |   const { addSelectedNodes, unselectNodesAndEdges, multiSelectionActive, nodeLookup, onError } = store.getState();
28 |   const node = nodeLookup.get(id);
29 | 
30 |   if (!node) {
31 |     onError?.('012', errorMessages['error012'](id));
32 |     return;
33 |   }
34 | 
35 |   store.setState({ nodesSelectionActive: false });
36 | 
37 |   if (!node.selected) {
38 |     addSelectedNodes([id]);
39 |   } else if (unselect || (node.selected && multiSelectionActive)) {
40 |     unselectNodesAndEdges({ nodes: [node], edges: [] });
41 | 
42 |     requestAnimationFrame(() => nodeRef?.current?.blur());
43 |   }
44 | }
45 | 


--------------------------------------------------------------------------------
/packages/react/src/components/NodesSelection/index.tsx:
--------------------------------------------------------------------------------
  1 | /**
  2 |  * The nodes selection rectangle gets displayed when a user
  3 |  * made a selection with on or several nodes
  4 |  */
  5 | import { useRef, useEffect, type MouseEvent, type KeyboardEvent } from 'react';
  6 | import cc from 'classcat';
  7 | import { shallow } from 'zustand/shallow';
  8 | import { getInternalNodesBounds, isNumeric } from '@xyflow/system';
  9 | 
 10 | import { useStore, useStoreApi } from '../../hooks/useStore';
 11 | import { useDrag } from '../../hooks/useDrag';
 12 | import { useMoveSelectedNodes } from '../../hooks/useMoveSelectedNodes';
 13 | import { arrowKeyDiffs } from '../NodeWrapper/utils';
 14 | import type { Node, ReactFlowState } from '../../types';
 15 | 
 16 | export type NodesSelectionProps<NodeType> = {
 17 |   onSelectionContextMenu?: (event: MouseEvent, nodes: NodeType[]) => void;
 18 |   noPanClassName?: string;
 19 |   disableKeyboardA11y: boolean;
 20 | };
 21 | 
 22 | const selector = (s: ReactFlowState) => {
 23 |   const { width, height, x, y } = getInternalNodesBounds(s.nodeLookup, {
 24 |     filter: (node) => !!node.selected,
 25 |   });
 26 | 
 27 |   return {
 28 |     width: isNumeric(width) ? width : null,
 29 |     height: isNumeric(height) ? height : null,
 30 |     userSelectionActive: s.userSelectionActive,
 31 |     transformString: `translate(${s.transform[0]}px,${s.transform[1]}px) scale(${s.transform[2]}) translate(${x}px,${y}px)`,
 32 |   };
 33 | };
 34 | 
 35 | export function NodesSelection<NodeType extends Node>({
 36 |   onSelectionContextMenu,
 37 |   noPanClassName,
 38 |   disableKeyboardA11y,
 39 | }: NodesSelectionProps<NodeType>) {
 40 |   const store = useStoreApi<NodeType>();
 41 |   const { width, height, transformString, userSelectionActive } = useStore(selector, shallow);
 42 |   const moveSelectedNodes = useMoveSelectedNodes();
 43 | 
 44 |   const nodeRef = useRef<HTMLDivElement>(null);
 45 | 
 46 |   useEffect(() => {
 47 |     if (!disableKeyboardA11y) {
 48 |       nodeRef.current?.focus({
 49 |         preventScroll: true,
 50 |       });
 51 |     }
 52 |   }, [disableKeyboardA11y]);
 53 | 
 54 |   useDrag({
 55 |     nodeRef,
 56 |   });
 57 | 
 58 |   if (userSelectionActive || !width || !height) {
 59 |     return null;
 60 |   }
 61 | 
 62 |   const onContextMenu = onSelectionContextMenu
 63 |     ? (event: MouseEvent) => {
 64 |       const selectedNodes = store.getState().nodes.filter((n) => n.selected);
 65 |       onSelectionContextMenu(event, selectedNodes);
 66 |     }
 67 |     : undefined;
 68 | 
 69 |   const onKeyDown = (event: KeyboardEvent) => {
 70 |     if (Object.prototype.hasOwnProperty.call(arrowKeyDiffs, event.key)) {
 71 |       event.preventDefault();
 72 | 
 73 |       moveSelectedNodes({
 74 |         direction: arrowKeyDiffs[event.key],
 75 |         factor: event.shiftKey ? 4 : 1,
 76 |       });
 77 |     }
 78 |   };
 79 | 
 80 |   return (
 81 |     <div
 82 |       className={cc(['react-flow__nodesselection', 'react-flow__container', noPanClassName])}
 83 |       style={{
 84 |         transform: transformString,
 85 |       }}
 86 |     >
 87 |       <div
 88 |         ref={nodeRef}
 89 |         className="react-flow__nodesselection-rect"
 90 |         onContextMenu={onContextMenu}
 91 |         tabIndex={disableKeyboardA11y ? undefined : -1}
 92 |         onKeyDown={disableKeyboardA11y ? undefined : onKeyDown}
 93 |         style={{
 94 |           width,
 95 |           height,
 96 |         }}
 97 |       />
 98 |     </div>
 99 |   );
100 | }
101 | 


--------------------------------------------------------------------------------
/packages/react/src/components/Panel/index.tsx:
--------------------------------------------------------------------------------
 1 | import { HTMLAttributes, forwardRef } from 'react';
 2 | import cc from 'classcat';
 3 | import type { PanelPosition } from '@xyflow/system';
 4 | 
 5 | import { useStore } from '../../hooks/useStore';
 6 | import type { ReactFlowState } from '../../types';
 7 | 
 8 | /**
 9 |  * @expand
10 |  */
11 | export type PanelProps = HTMLAttributes<HTMLDivElement> & {
12 |   /**
13 |    * The position of the panel.
14 |    * @default "top-left"
15 |    */
16 |   position?: PanelPosition;
17 | };
18 | 
19 | const selector = (s: ReactFlowState) => (s.userSelectionActive ? 'none' : 'all');
20 | 
21 | /**
22 |  * The `<Panel />` component helps you position content above the viewport.
23 |  * It is used internally by the [`<MiniMap />`](/api-reference/components/minimap)
24 |  * and [`<Controls />`](/api-reference/components/controls) components.
25 |  *
26 |  * @public
27 |  *
28 |  * @example
29 |  * ```jsx
30 |  *import { ReactFlow, Background, Panel } from '@xyflow/react';
31 |  *
32 |  *export default function Flow() {
33 |  *  return (
34 |  *    <ReactFlow nodes={[]} fitView>
35 |  *      <Panel position="top-left">top-left</Panel>
36 |  *      <Panel position="top-center">top-center</Panel>
37 |  *      <Panel position="top-right">top-right</Panel>
38 |  *      <Panel position="bottom-left">bottom-left</Panel>
39 |  *      <Panel position="bottom-center">bottom-center</Panel>
40 |  *      <Panel position="bottom-right">bottom-right</Panel>
41 |  *    </ReactFlow>
42 |  *  );
43 |  *}
44 |  *```
45 |  */
46 | export const Panel = forwardRef<HTMLDivElement, PanelProps>(
47 |   ({ position = 'top-left', children, className, style, ...rest }, ref) => {
48 |     const pointerEvents = useStore(selector);
49 |     const positionClasses = `${position}`.split('-');
50 | 
51 |     return (
52 |       <div
53 |         className={cc(['react-flow__panel', className, ...positionClasses])}
54 |         style={{ ...style, pointerEvents }}
55 |         ref={ref}
56 |         {...rest}
57 |       >
58 |         {children}
59 |       </div>
60 |     );
61 |   }
62 | );
63 | 
64 | Panel.displayName = 'Panel';
65 | 


--------------------------------------------------------------------------------
/packages/react/src/components/ReactFlowProvider/index.tsx:
--------------------------------------------------------------------------------
 1 | import { useState, type ReactNode } from 'react';
 2 | 
 3 | import { Provider } from '../../contexts/StoreContext';
 4 | import { createStore } from '../../store';
 5 | import { BatchProvider } from '../BatchProvider';
 6 | import type { Node, Edge } from '../../types';
 7 | import { CoordinateExtent, NodeOrigin } from '@xyflow/system';
 8 | 
 9 | export type ReactFlowProviderProps = {
10 |   initialNodes?: Node[];
11 |   initialEdges?: Edge[];
12 |   defaultNodes?: Node[];
13 |   defaultEdges?: Edge[];
14 |   initialWidth?: number;
15 |   initialHeight?: number;
16 |   fitView?: boolean;
17 |   nodeOrigin?: NodeOrigin;
18 |   nodeExtent?: CoordinateExtent;
19 |   children: ReactNode;
20 | };
21 | 
22 | /**
23 |  * The `<ReactFlowProvider />` component is a [context provider](https://react.dev/learn/passing-data-deeply-with-context#)
24 |  * that makes it possible to access a flow's internal state outside of the
25 |  * [`<ReactFlow />`](/api-reference/react-flow) component. Many of the hooks we
26 |  * provide rely on this component to work.
27 |  * @public
28 |  *
29 |  * @example
30 |  * ```tsx
31 |  *import { ReactFlow, ReactFlowProvider, useNodes } from '@xyflow/react'
32 |  *
33 |  *export default function Flow() {
34 |  *  return (
35 |  *    <ReactFlowProvider>
36 |  *      <ReactFlow nodes={...} edges={...} />
37 |  *      <Sidebar />
38 |  *    </ReactFlowProvider>
39 |  *  );
40 |  *}
41 |  *
42 |  *function Sidebar() {
43 |  *  // This hook will only work if the component it's used in is a child of a
44 |  *  // <ReactFlowProvider />.
45 |  *  const nodes = useNodes()
46 |  *
47 |  *  return <aside>do something with nodes</aside>;
48 |  *}
49 |  *```
50 |  *
51 |  * @remarks If you're using a router and want your flow's state to persist across routes,
52 |  * it's vital that you place the `<ReactFlowProvider />` component _outside_ of
53 |  * your router. If you have multiple flows on the same page you will need to use a separate
54 |  * `<ReactFlowProvider />` for each flow.
55 |  */
56 | export function ReactFlowProvider({
57 |   initialNodes: nodes,
58 |   initialEdges: edges,
59 |   defaultNodes,
60 |   defaultEdges,
61 |   initialWidth: width,
62 |   initialHeight: height,
63 |   fitView,
64 |   nodeOrigin,
65 |   nodeExtent,
66 |   children,
67 | }: ReactFlowProviderProps) {
68 |   const [store] = useState(() =>
69 |     createStore({
70 |       nodes,
71 |       edges,
72 |       defaultNodes,
73 |       defaultEdges,
74 |       width,
75 |       height,
76 |       fitView,
77 |       nodeOrigin,
78 |       nodeExtent,
79 |     })
80 |   );
81 | 
82 |   return (
83 |     <Provider value={store}>
84 |       <BatchProvider>{children}</BatchProvider>
85 |     </Provider>
86 |   );
87 | }
88 | 


--------------------------------------------------------------------------------
/packages/react/src/components/SelectionListener/index.tsx:
--------------------------------------------------------------------------------
 1 | /*
 2 |  * This is a helper component for calling the onSelectionChange listener.
 3 |  * It will only be mounted if the user has passed an onSelectionChange listener
 4 |  * or is using the useOnSelectionChange hook.
 5 |  * @TODO: Now that we have the onNodesChange and on EdgesChange listeners, do we still need this component?
 6 |  */
 7 | import { useEffect } from 'react';
 8 | import { shallow } from 'zustand/shallow';
 9 | 
10 | import { useStore, useStoreApi } from '../../hooks/useStore';
11 | import type { ReactFlowState, OnSelectionChangeFunc, Node, Edge } from '../../types';
12 | 
13 | type SelectionListenerProps<NodeType extends Node = Node, EdgeType extends Edge = Edge> = {
14 |   onSelectionChange?: OnSelectionChangeFunc<NodeType, EdgeType>;
15 | };
16 | 
17 | const selector = (s: ReactFlowState) => {
18 |   const selectedNodes = [];
19 |   const selectedEdges = [];
20 | 
21 |   for (const [, node] of s.nodeLookup) {
22 |     if (node.selected) {
23 |       selectedNodes.push(node.internals.userNode);
24 |     }
25 |   }
26 | 
27 |   for (const [, edge] of s.edgeLookup) {
28 |     if (edge.selected) {
29 |       selectedEdges.push(edge);
30 |     }
31 |   }
32 | 
33 |   return { selectedNodes, selectedEdges };
34 | };
35 | 
36 | type SelectorSlice = ReturnType<typeof selector>;
37 | 
38 | const selectId = (obj: Node | Edge) => obj.id;
39 | 
40 | function areEqual(a: SelectorSlice, b: SelectorSlice) {
41 |   return (
42 |     shallow(a.selectedNodes.map(selectId), b.selectedNodes.map(selectId)) &&
43 |     shallow(a.selectedEdges.map(selectId), b.selectedEdges.map(selectId))
44 |   );
45 | }
46 | 
47 | function SelectionListenerInner<NodeType extends Node = Node, EdgeType extends Edge = Edge>({
48 |   onSelectionChange,
49 | }: SelectionListenerProps<NodeType, EdgeType>) {
50 |   const store = useStoreApi<NodeType, EdgeType>();
51 |   const { selectedNodes, selectedEdges } = useStore(selector, areEqual);
52 | 
53 |   useEffect(() => {
54 |     const params = { nodes: selectedNodes as NodeType[], edges: selectedEdges as EdgeType[] };
55 | 
56 |     onSelectionChange?.(params);
57 |     store.getState().onSelectionChangeHandlers.forEach((fn) => fn(params));
58 |   }, [selectedNodes, selectedEdges, onSelectionChange]);
59 | 
60 |   return null;
61 | }
62 | 
63 | const changeSelector = (s: ReactFlowState) => !!s.onSelectionChangeHandlers;
64 | 
65 | export function SelectionListener<NodeType extends Node = Node, EdgeType extends Edge = Edge>({
66 |   onSelectionChange,
67 | }: SelectionListenerProps<NodeType, EdgeType>) {
68 |   const storeHasSelectionChangeHandlers = useStore(changeSelector);
69 | 
70 |   if (onSelectionChange || storeHasSelectionChangeHandlers) {
71 |     return <SelectionListenerInner<NodeType, EdgeType> onSelectionChange={onSelectionChange} />;
72 |   }
73 | 
74 |   return null;
75 | }
76 | 


--------------------------------------------------------------------------------
/packages/react/src/components/StoreUpdater/index.tsx:
--------------------------------------------------------------------------------
  1 | /*
  2 |  * This component helps us to update the store with the values coming from the user.
  3 |  * We distinguish between values we can update directly with `useDirectStoreUpdater` (like `snapGrid`)
  4 |  * and values that have a dedicated setter function in the store (like `setNodes`).
  5 |  */
  6 | import { useEffect, useRef } from 'react';
  7 | import { shallow } from 'zustand/shallow';
  8 | import { infiniteExtent, type CoordinateExtent } from '@xyflow/system';
  9 | 
 10 | import { useStore, useStoreApi } from '../../hooks/useStore';
 11 | import type { Node, Edge, ReactFlowState, ReactFlowProps, FitViewOptions } from '../../types';
 12 | import { defaultNodeOrigin } from '../../container/ReactFlow/init-values';
 13 | 
 14 | // These fields exist in the global store, and we need to keep them up to date
 15 | const reactFlowFieldsToTrack = [
 16 |   'nodes',
 17 |   'edges',
 18 |   'defaultNodes',
 19 |   'defaultEdges',
 20 |   'onConnect',
 21 |   'onConnectStart',
 22 |   'onConnectEnd',
 23 |   'onClickConnectStart',
 24 |   'onClickConnectEnd',
 25 |   'nodesDraggable',
 26 |   'nodesConnectable',
 27 |   'nodesFocusable',
 28 |   'edgesFocusable',
 29 |   'edgesReconnectable',
 30 |   'elevateNodesOnSelect',
 31 |   'elevateEdgesOnSelect',
 32 |   'minZoom',
 33 |   'maxZoom',
 34 |   'nodeExtent',
 35 |   'onNodesChange',
 36 |   'onEdgesChange',
 37 |   'elementsSelectable',
 38 |   'connectionMode',
 39 |   'snapGrid',
 40 |   'snapToGrid',
 41 |   'translateExtent',
 42 |   'connectOnClick',
 43 |   'defaultEdgeOptions',
 44 |   'fitView',
 45 |   'fitViewOptions',
 46 |   'onNodesDelete',
 47 |   'onEdgesDelete',
 48 |   'onDelete',
 49 |   'onNodeDrag',
 50 |   'onNodeDragStart',
 51 |   'onNodeDragStop',
 52 |   'onSelectionDrag',
 53 |   'onSelectionDragStart',
 54 |   'onSelectionDragStop',
 55 |   'onMoveStart',
 56 |   'onMove',
 57 |   'onMoveEnd',
 58 |   'noPanClassName',
 59 |   'nodeOrigin',
 60 |   'autoPanOnConnect',
 61 |   'autoPanOnNodeDrag',
 62 |   'onError',
 63 |   'connectionRadius',
 64 |   'isValidConnection',
 65 |   'selectNodesOnDrag',
 66 |   'nodeDragThreshold',
 67 |   'onBeforeDelete',
 68 |   'debug',
 69 |   'autoPanSpeed',
 70 |   'paneClickDistance',
 71 | ] as const;
 72 | 
 73 | type ReactFlowFieldsToTrack = (typeof reactFlowFieldsToTrack)[number];
 74 | type StoreUpdaterProps<NodeType extends Node = Node, EdgeType extends Edge = Edge> = Pick<
 75 |   ReactFlowProps<NodeType, EdgeType>,
 76 |   ReactFlowFieldsToTrack
 77 | > & {
 78 |   rfId: string;
 79 | };
 80 | 
 81 | // rfId doesn't exist in ReactFlowProps, but it's one of the fields we want to update
 82 | const fieldsToTrack = [...reactFlowFieldsToTrack, 'rfId'] as const;
 83 | 
 84 | const selector = (s: ReactFlowState) => ({
 85 |   setNodes: s.setNodes,
 86 |   setEdges: s.setEdges,
 87 |   setMinZoom: s.setMinZoom,
 88 |   setMaxZoom: s.setMaxZoom,
 89 |   setTranslateExtent: s.setTranslateExtent,
 90 |   setNodeExtent: s.setNodeExtent,
 91 |   reset: s.reset,
 92 |   setDefaultNodesAndEdges: s.setDefaultNodesAndEdges,
 93 |   setPaneClickDistance: s.setPaneClickDistance,
 94 | });
 95 | 
 96 | const initPrevValues = {
 97 |   /*
 98 |    * these are values that are also passed directly to other components
 99 |    * than the StoreUpdater. We can reduce the number of setStore calls
100 |    * by setting the same values here as prev fields.
101 |    */
102 |   translateExtent: infiniteExtent,
103 |   nodeOrigin: defaultNodeOrigin,
104 |   minZoom: 0.5,
105 |   maxZoom: 2,
106 |   elementsSelectable: true,
107 |   noPanClassName: 'nopan',
108 |   rfId: '1',
109 |   paneClickDistance: 0,
110 | };
111 | 
112 | export function StoreUpdater<NodeType extends Node = Node, EdgeType extends Edge = Edge>(
113 |   props: StoreUpdaterProps<NodeType, EdgeType>
114 | ) {
115 |   const {
116 |     setNodes,
117 |     setEdges,
118 |     setMinZoom,
119 |     setMaxZoom,
120 |     setTranslateExtent,
121 |     setNodeExtent,
122 |     reset,
123 |     setDefaultNodesAndEdges,
124 |     setPaneClickDistance,
125 |   } = useStore(selector, shallow);
126 |   const store = useStoreApi<NodeType, EdgeType>();
127 | 
128 |   useEffect(() => {
129 |     setDefaultNodesAndEdges(props.defaultNodes, props.defaultEdges);
130 | 
131 |     return () => {
132 |       // when we reset the store we also need to reset the previous fields
133 |       previousFields.current = initPrevValues;
134 |       reset();
135 |     };
136 |   }, []);
137 | 
138 |   const previousFields = useRef<Partial<StoreUpdaterProps<NodeType, EdgeType>>>(initPrevValues);
139 | 
140 |   useEffect(
141 |     () => {
142 |       for (const fieldName of fieldsToTrack) {
143 |         const fieldValue = props[fieldName];
144 |         const previousFieldValue = previousFields.current[fieldName];
145 | 
146 |         if (fieldValue === previousFieldValue) continue;
147 |         if (typeof props[fieldName] === 'undefined') continue;
148 |         // Custom handling with dedicated setters for some fields
149 |         if (fieldName === 'nodes') setNodes(fieldValue as Node[]);
150 |         else if (fieldName === 'edges') setEdges(fieldValue as Edge[]);
151 |         else if (fieldName === 'minZoom') setMinZoom(fieldValue as number);
152 |         else if (fieldName === 'maxZoom') setMaxZoom(fieldValue as number);
153 |         else if (fieldName === 'translateExtent') setTranslateExtent(fieldValue as CoordinateExtent);
154 |         else if (fieldName === 'nodeExtent') setNodeExtent(fieldValue as CoordinateExtent);
155 |         else if (fieldName === 'paneClickDistance') setPaneClickDistance(fieldValue as number);
156 |         // Renamed fields
157 |         else if (fieldName === 'fitView') store.setState({ fitViewQueued: fieldValue as boolean });
158 |         else if (fieldName === 'fitViewOptions') store.setState({ fitViewOptions: fieldValue as FitViewOptions });
159 |         // General case
160 |         else store.setState({ [fieldName]: fieldValue });
161 |       }
162 | 
163 |       previousFields.current = props;
164 |     },
165 |     // Only re-run the effect if one of the fields we track changes
166 |     fieldsToTrack.map((fieldName) => props[fieldName])
167 |   );
168 | 
169 |   return null;
170 | }
171 | 


--------------------------------------------------------------------------------
/packages/react/src/components/UserSelection/index.tsx:
--------------------------------------------------------------------------------
 1 | import { shallow } from 'zustand/shallow';
 2 | 
 3 | import { useStore } from '../../hooks/useStore';
 4 | import type { ReactFlowState } from '../../types';
 5 | 
 6 | const selector = (s: ReactFlowState) => ({
 7 |   userSelectionActive: s.userSelectionActive,
 8 |   userSelectionRect: s.userSelectionRect,
 9 | });
10 | 
11 | export function UserSelection() {
12 |   const { userSelectionActive, userSelectionRect } = useStore(selector, shallow);
13 |   const isActive = userSelectionActive && userSelectionRect;
14 | 
15 |   if (!isActive) {
16 |     return null;
17 |   }
18 | 
19 |   return (
20 |     <div
21 |       className="react-flow__selection react-flow__container"
22 |       style={{
23 |         width: userSelectionRect.width,
24 |         height: userSelectionRect.height,
25 |         transform: `translate(${userSelectionRect.x}px, ${userSelectionRect.y}px)`,
26 |       }}
27 |     />
28 |   );
29 | }
30 | 


--------------------------------------------------------------------------------
/packages/react/src/components/ViewportPortal/index.tsx:
--------------------------------------------------------------------------------
 1 | import type { ReactNode } from 'react';
 2 | import { createPortal } from 'react-dom';
 3 | 
 4 | import { useStore } from '../../hooks/useStore';
 5 | import type { ReactFlowState } from '../../types';
 6 | 
 7 | const selector = (s: ReactFlowState) => s.domNode?.querySelector('.react-flow__viewport-portal');
 8 | 
 9 | /**
10 |  * The `<ViewportPortal />` component can be used to add components to the same viewport
11 |  * of the flow where nodes and edges are rendered. This is useful when you want to render
12 |  * your own components that are adhere to the same coordinate system as the nodes & edges
13 |  * and are also affected by zooming and panning
14 |  * @public
15 |  * @example
16 |  *
17 |  * ```jsx
18 |  *import React from 'react';
19 |  *import { ViewportPortal } from '@xyflow/react';
20 |  *
21 |  *export default function () {
22 |  *  return (
23 |  *    <ViewportPortal>
24 |  *      <div
25 |  *        style={{ transform: 'translate(100px, 100px)', position: 'absolute' }}
26 |  *      >
27 |  *        This div is positioned at [100, 100] on the flow.
28 |  *      </div>
29 |  *    </ViewportPortal>
30 |  *  );
31 |  *}
32 |  *```
33 |  */
34 | export function ViewportPortal({ children }: { children: ReactNode }) {
35 |   const viewPortalDiv = useStore(selector);
36 | 
37 |   if (!viewPortalDiv) {
38 |     return null;
39 |   }
40 | 
41 |   return createPortal(children, viewPortalDiv);
42 | }
43 | 


--------------------------------------------------------------------------------
/packages/react/src/container/EdgeRenderer/MarkerDefinitions.tsx:
--------------------------------------------------------------------------------
 1 | import { memo, useMemo } from 'react';
 2 | import { type MarkerProps, createMarkerIds } from '@xyflow/system';
 3 | 
 4 | import { useStore } from '../../hooks/useStore';
 5 | import { useMarkerSymbol } from './MarkerSymbols';
 6 | 
 7 | type MarkerDefinitionsProps = {
 8 |   defaultColor: string;
 9 |   rfId?: string;
10 | };
11 | 
12 | const Marker = ({
13 |   id,
14 |   type,
15 |   color,
16 |   width = 12.5,
17 |   height = 12.5,
18 |   markerUnits = 'strokeWidth',
19 |   strokeWidth,
20 |   orient = 'auto-start-reverse',
21 | }: MarkerProps) => {
22 |   const Symbol = useMarkerSymbol(type);
23 | 
24 |   if (!Symbol) {
25 |     return null;
26 |   }
27 | 
28 |   return (
29 |     <marker
30 |       className="react-flow__arrowhead"
31 |       id={id}
32 |       markerWidth={`${width}`}
33 |       markerHeight={`${height}`}
34 |       viewBox="-10 -10 20 20"
35 |       markerUnits={markerUnits}
36 |       orient={orient}
37 |       refX="0"
38 |       refY="0"
39 |     >
40 |       <Symbol color={color} strokeWidth={strokeWidth} />
41 |     </marker>
42 |   );
43 | };
44 | 
45 | /*
46 |  * when you have multiple flows on a page and you hide the first one, the other ones have no markers anymore
47 |  * when they do have markers with the same ids. To prevent this the user can pass a unique id to the react flow wrapper
48 |  * that we can then use for creating our unique marker ids
49 |  */
50 | const MarkerDefinitions = ({ defaultColor, rfId }: MarkerDefinitionsProps) => {
51 |   const edges = useStore((s) => s.edges);
52 |   const defaultEdgeOptions = useStore((s) => s.defaultEdgeOptions);
53 | 
54 |   const markers = useMemo(() => {
55 |     const markers = createMarkerIds(edges, {
56 |       id: rfId,
57 |       defaultColor,
58 |       defaultMarkerStart: defaultEdgeOptions?.markerStart,
59 |       defaultMarkerEnd: defaultEdgeOptions?.markerEnd,
60 |     });
61 | 
62 |     return markers;
63 |   }, [edges, defaultEdgeOptions, rfId, defaultColor]);
64 | 
65 |   if (!markers.length) {
66 |     return null;
67 |   }
68 | 
69 |   return (
70 |     <svg className="react-flow__marker">
71 |       <defs>
72 |         {markers.map((marker: MarkerProps) => (
73 |           <Marker
74 |             id={marker.id}
75 |             key={marker.id}
76 |             type={marker.type}
77 |             color={marker.color}
78 |             width={marker.width}
79 |             height={marker.height}
80 |             markerUnits={marker.markerUnits}
81 |             strokeWidth={marker.strokeWidth}
82 |             orient={marker.orient}
83 |           />
84 |         ))}
85 |       </defs>
86 |     </svg>
87 |   );
88 | };
89 | 
90 | MarkerDefinitions.displayName = 'MarkerDefinitions';
91 | 
92 | export default memo(MarkerDefinitions);
93 | 


--------------------------------------------------------------------------------
/packages/react/src/container/EdgeRenderer/MarkerSymbols.tsx:
--------------------------------------------------------------------------------
 1 | import { useMemo } from 'react';
 2 | import { errorMessages, MarkerType, type EdgeMarker } from '@xyflow/system';
 3 | 
 4 | import { useStoreApi } from '../../hooks/useStore';
 5 | 
 6 | type SymbolProps = Omit<EdgeMarker, 'type'>;
 7 | 
 8 | const ArrowSymbol = ({ color = 'none', strokeWidth = 1 }: SymbolProps) => {
 9 |   return (
10 |     <polyline
11 |       style={{
12 |         stroke: color,
13 |         strokeWidth,
14 |       }}
15 |       strokeLinecap="round"
16 |       strokeLinejoin="round"
17 |       fill="none"
18 |       points="-5,-4 0,0 -5,4"
19 |     />
20 |   );
21 | };
22 | 
23 | const ArrowClosedSymbol = ({ color = 'none', strokeWidth = 1 }: SymbolProps) => {
24 |   return (
25 |     <polyline
26 |       style={{
27 |         stroke: color,
28 |         fill: color,
29 |         strokeWidth,
30 |       }}
31 |       strokeLinecap="round"
32 |       strokeLinejoin="round"
33 |       points="-5,-4 0,0 -5,4 -5,-4"
34 |     />
35 |   );
36 | };
37 | 
38 | export const MarkerSymbols = {
39 |   [MarkerType.Arrow]: ArrowSymbol,
40 |   [MarkerType.ArrowClosed]: ArrowClosedSymbol,
41 | };
42 | 
43 | export function useMarkerSymbol(type: MarkerType) {
44 |   const store = useStoreApi();
45 | 
46 |   const symbol = useMemo(() => {
47 |     const symbolExists = Object.prototype.hasOwnProperty.call(MarkerSymbols, type);
48 | 
49 |     if (!symbolExists) {
50 |       store.getState().onError?.('009', errorMessages['error009'](type));
51 | 
52 |       return null;
53 |     }
54 | 
55 |     return MarkerSymbols[type];
56 |   }, [type]);
57 | 
58 |   return symbol;
59 | }
60 | 


--------------------------------------------------------------------------------
/packages/react/src/container/EdgeRenderer/index.tsx:
--------------------------------------------------------------------------------
 1 | import { memo, ReactNode } from 'react';
 2 | import { shallow } from 'zustand/shallow';
 3 | 
 4 | import { useStore } from '../../hooks/useStore';
 5 | import { useVisibleEdgeIds } from '../../hooks/useVisibleEdgeIds';
 6 | import MarkerDefinitions from './MarkerDefinitions';
 7 | import { GraphViewProps } from '../GraphView';
 8 | import { EdgeWrapper } from '../../components/EdgeWrapper';
 9 | import type { Edge, ReactFlowState, Node } from '../../types';
10 | 
11 | type EdgeRendererProps<EdgeType extends Edge = Edge> = Pick<
12 |   GraphViewProps<Node, EdgeType>,
13 |   | 'onEdgeClick'
14 |   | 'onEdgeDoubleClick'
15 |   | 'defaultMarkerColor'
16 |   | 'onlyRenderVisibleElements'
17 |   | 'onReconnect'
18 |   | 'onEdgeContextMenu'
19 |   | 'onEdgeMouseEnter'
20 |   | 'onEdgeMouseMove'
21 |   | 'onEdgeMouseLeave'
22 |   | 'onReconnectStart'
23 |   | 'onReconnectEnd'
24 |   | 'reconnectRadius'
25 |   | 'noPanClassName'
26 |   | 'rfId'
27 |   | 'disableKeyboardA11y'
28 |   | 'edgeTypes'
29 | > & {
30 |   children?: ReactNode;
31 | };
32 | 
33 | const selector = (s: ReactFlowState) => ({
34 |   edgesFocusable: s.edgesFocusable,
35 |   edgesReconnectable: s.edgesReconnectable,
36 |   elementsSelectable: s.elementsSelectable,
37 |   connectionMode: s.connectionMode,
38 |   onError: s.onError,
39 | });
40 | 
41 | function EdgeRendererComponent<EdgeType extends Edge = Edge>({
42 |   defaultMarkerColor,
43 |   onlyRenderVisibleElements,
44 |   rfId,
45 |   edgeTypes,
46 |   noPanClassName,
47 |   onReconnect,
48 |   onEdgeContextMenu,
49 |   onEdgeMouseEnter,
50 |   onEdgeMouseMove,
51 |   onEdgeMouseLeave,
52 |   onEdgeClick,
53 |   reconnectRadius,
54 |   onEdgeDoubleClick,
55 |   onReconnectStart,
56 |   onReconnectEnd,
57 |   disableKeyboardA11y,
58 | }: EdgeRendererProps<EdgeType>) {
59 |   const { edgesFocusable, edgesReconnectable, elementsSelectable, onError } = useStore(selector, shallow);
60 |   const edgeIds = useVisibleEdgeIds(onlyRenderVisibleElements);
61 | 
62 |   return (
63 |     <div className="react-flow__edges">
64 |       <MarkerDefinitions defaultColor={defaultMarkerColor} rfId={rfId} />
65 | 
66 |       {edgeIds.map((id) => {
67 |         return (
68 |           <EdgeWrapper<EdgeType>
69 |             key={id}
70 |             id={id}
71 |             edgesFocusable={edgesFocusable}
72 |             edgesReconnectable={edgesReconnectable}
73 |             elementsSelectable={elementsSelectable}
74 |             noPanClassName={noPanClassName}
75 |             onReconnect={onReconnect}
76 |             onContextMenu={onEdgeContextMenu}
77 |             onMouseEnter={onEdgeMouseEnter}
78 |             onMouseMove={onEdgeMouseMove}
79 |             onMouseLeave={onEdgeMouseLeave}
80 |             onClick={onEdgeClick}
81 |             reconnectRadius={reconnectRadius}
82 |             onDoubleClick={onEdgeDoubleClick}
83 |             onReconnectStart={onReconnectStart}
84 |             onReconnectEnd={onReconnectEnd}
85 |             rfId={rfId}
86 |             onError={onError}
87 |             edgeTypes={edgeTypes}
88 |             disableKeyboardA11y={disableKeyboardA11y}
89 |           />
90 |         );
91 |       })}
92 |     </div>
93 |   );
94 | }
95 | 
96 | EdgeRendererComponent.displayName = 'EdgeRenderer';
97 | 
98 | export const EdgeRenderer = memo(EdgeRendererComponent) as typeof EdgeRendererComponent;
99 | 


--------------------------------------------------------------------------------
/packages/react/src/container/FlowRenderer/index.tsx:
--------------------------------------------------------------------------------
  1 | import { memo, type ReactNode } from 'react';
  2 | 
  3 | import { useStore } from '../../hooks/useStore';
  4 | import { useGlobalKeyHandler } from '../../hooks/useGlobalKeyHandler';
  5 | import { useKeyPress } from '../../hooks/useKeyPress';
  6 | import { GraphViewProps } from '../GraphView';
  7 | import { ZoomPane } from '../ZoomPane';
  8 | import { Pane } from '../Pane';
  9 | import { NodesSelection } from '../../components/NodesSelection';
 10 | import type { ReactFlowState, Node } from '../../types';
 11 | 
 12 | export type FlowRendererProps<NodeType extends Node = Node> = Omit<
 13 |   GraphViewProps<NodeType>,
 14 |   | 'snapToGrid'
 15 |   | 'nodeTypes'
 16 |   | 'edgeTypes'
 17 |   | 'snapGrid'
 18 |   | 'connectionLineType'
 19 |   | 'connectionLineContainerStyle'
 20 |   | 'arrowHeadColor'
 21 |   | 'onlyRenderVisibleElements'
 22 |   | 'selectNodesOnDrag'
 23 |   | 'defaultMarkerColor'
 24 |   | 'rfId'
 25 |   | 'nodeClickDistance'
 26 | > & {
 27 |   isControlledViewport: boolean;
 28 |   children: ReactNode;
 29 | };
 30 | 
 31 | const win = typeof window !== 'undefined' ? window : undefined;
 32 | 
 33 | const selector = (s: ReactFlowState) => {
 34 |   return { nodesSelectionActive: s.nodesSelectionActive, userSelectionActive: s.userSelectionActive };
 35 | };
 36 | 
 37 | function FlowRendererComponent<NodeType extends Node = Node>({
 38 |   children,
 39 |   onPaneClick,
 40 |   onPaneMouseEnter,
 41 |   onPaneMouseMove,
 42 |   onPaneMouseLeave,
 43 |   onPaneContextMenu,
 44 |   onPaneScroll,
 45 |   paneClickDistance,
 46 |   deleteKeyCode,
 47 |   selectionKeyCode,
 48 |   selectionOnDrag,
 49 |   selectionMode,
 50 |   onSelectionStart,
 51 |   onSelectionEnd,
 52 |   multiSelectionKeyCode,
 53 |   panActivationKeyCode,
 54 |   zoomActivationKeyCode,
 55 |   elementsSelectable,
 56 |   zoomOnScroll,
 57 |   zoomOnPinch,
 58 |   panOnScroll: _panOnScroll,
 59 |   panOnScrollSpeed,
 60 |   panOnScrollMode,
 61 |   zoomOnDoubleClick,
 62 |   panOnDrag: _panOnDrag,
 63 |   defaultViewport,
 64 |   translateExtent,
 65 |   minZoom,
 66 |   maxZoom,
 67 |   preventScrolling,
 68 |   onSelectionContextMenu,
 69 |   noWheelClassName,
 70 |   noPanClassName,
 71 |   disableKeyboardA11y,
 72 |   onViewportChange,
 73 |   isControlledViewport,
 74 | }: FlowRendererProps<NodeType>) {
 75 |   const { nodesSelectionActive, userSelectionActive } = useStore(selector);
 76 |   const selectionKeyPressed = useKeyPress(selectionKeyCode, { target: win });
 77 |   const panActivationKeyPressed = useKeyPress(panActivationKeyCode, { target: win });
 78 | 
 79 |   const panOnDrag = panActivationKeyPressed || _panOnDrag;
 80 |   const panOnScroll = panActivationKeyPressed || _panOnScroll;
 81 |   const _selectionOnDrag = selectionOnDrag && panOnDrag !== true;
 82 |   const isSelecting = selectionKeyPressed || userSelectionActive || _selectionOnDrag;
 83 | 
 84 |   useGlobalKeyHandler({ deleteKeyCode, multiSelectionKeyCode });
 85 | 
 86 |   return (
 87 |     <ZoomPane
 88 |       onPaneContextMenu={onPaneContextMenu}
 89 |       elementsSelectable={elementsSelectable}
 90 |       zoomOnScroll={zoomOnScroll}
 91 |       zoomOnPinch={zoomOnPinch}
 92 |       panOnScroll={panOnScroll}
 93 |       panOnScrollSpeed={panOnScrollSpeed}
 94 |       panOnScrollMode={panOnScrollMode}
 95 |       zoomOnDoubleClick={zoomOnDoubleClick}
 96 |       panOnDrag={!selectionKeyPressed && panOnDrag}
 97 |       defaultViewport={defaultViewport}
 98 |       translateExtent={translateExtent}
 99 |       minZoom={minZoom}
100 |       maxZoom={maxZoom}
101 |       zoomActivationKeyCode={zoomActivationKeyCode}
102 |       preventScrolling={preventScrolling}
103 |       noWheelClassName={noWheelClassName}
104 |       noPanClassName={noPanClassName}
105 |       onViewportChange={onViewportChange}
106 |       isControlledViewport={isControlledViewport}
107 |       paneClickDistance={paneClickDistance}
108 |     >
109 |       <Pane
110 |         onSelectionStart={onSelectionStart}
111 |         onSelectionEnd={onSelectionEnd}
112 |         onPaneClick={onPaneClick}
113 |         onPaneMouseEnter={onPaneMouseEnter}
114 |         onPaneMouseMove={onPaneMouseMove}
115 |         onPaneMouseLeave={onPaneMouseLeave}
116 |         onPaneContextMenu={onPaneContextMenu}
117 |         onPaneScroll={onPaneScroll}
118 |         panOnDrag={panOnDrag}
119 |         isSelecting={!!isSelecting}
120 |         selectionMode={selectionMode}
121 |         selectionKeyPressed={selectionKeyPressed}
122 |         selectionOnDrag={_selectionOnDrag}
123 |       >
124 |         {children}
125 |         {nodesSelectionActive && (
126 |           <NodesSelection
127 |             onSelectionContextMenu={onSelectionContextMenu}
128 |             noPanClassName={noPanClassName}
129 |             disableKeyboardA11y={disableKeyboardA11y}
130 |           />
131 |         )}
132 |       </Pane>
133 |     </ZoomPane>
134 |   );
135 | }
136 | 
137 | FlowRendererComponent.displayName = 'FlowRenderer';
138 | 
139 | export const FlowRenderer = memo(FlowRendererComponent) as typeof FlowRendererComponent;
140 | 


--------------------------------------------------------------------------------
/packages/react/src/container/GraphView/useNodeOrEdgeTypesWarning.ts:
--------------------------------------------------------------------------------
 1 | import { useEffect, useRef } from 'react';
 2 | import { errorMessages } from '@xyflow/system';
 3 | 
 4 | import { useStoreApi } from '../../hooks/useStore';
 5 | import type { EdgeTypes, NodeTypes } from '../../types';
 6 | 
 7 | const emptyTypes = {};
 8 | 
 9 | /**
10 |  * This hook warns the user if nodeTypes or edgeTypes changed.
11 |  * It is only used in development mode.
12 |  *
13 |  * @internal
14 |  */
15 | export function useNodeOrEdgeTypesWarning(nodeOrEdgeTypes?: NodeTypes): void;
16 | export function useNodeOrEdgeTypesWarning(nodeOrEdgeTypes?: EdgeTypes): void;
17 | // eslint-disable-next-line @typescript-eslint/no-explicit-any
18 | export function useNodeOrEdgeTypesWarning(nodeOrEdgeTypes: any = emptyTypes): any {
19 |   const typesRef = useRef(nodeOrEdgeTypes);
20 |   const store = useStoreApi();
21 | 
22 |   useEffect(() => {
23 |     if (process.env.NODE_ENV === 'development') {
24 |       const usedKeys = new Set([...Object.keys(typesRef.current), ...Object.keys(nodeOrEdgeTypes)]);
25 | 
26 |       for (const key of usedKeys) {
27 |         if (typesRef.current[key] !== nodeOrEdgeTypes[key]) {
28 |           store.getState().onError?.('002', errorMessages['error002']());
29 |           break;
30 |         }
31 |       }
32 | 
33 |       typesRef.current = nodeOrEdgeTypes;
34 |     }
35 |   }, [nodeOrEdgeTypes]);
36 | }
37 | 


--------------------------------------------------------------------------------
/packages/react/src/container/GraphView/useStylesLoadedWarning.ts:
--------------------------------------------------------------------------------
 1 | import { useEffect, useRef } from 'react';
 2 | import { errorMessages } from '@xyflow/system';
 3 | 
 4 | import { useStoreApi } from '../../hooks/useStore';
 5 | 
 6 | export function useStylesLoadedWarning() {
 7 |   const store = useStoreApi();
 8 |   const checked = useRef(false);
 9 | 
10 |   useEffect(() => {
11 |     if (process.env.NODE_ENV === 'development') {
12 |       if (!checked.current) {
13 |         const pane = document.querySelector('.react-flow__pane');
14 | 
15 |         if (pane && !(window.getComputedStyle(pane).zIndex === '1')) {
16 |           store.getState().onError?.('013', errorMessages['error013']('react'));
17 |         }
18 | 
19 |         checked.current = true;
20 |       }
21 |     }
22 |   }, []);
23 | }
24 | 


--------------------------------------------------------------------------------
/packages/react/src/container/NodeRenderer/index.tsx:
--------------------------------------------------------------------------------
  1 | import { memo } from 'react';
  2 | import { shallow } from 'zustand/shallow';
  3 | 
  4 | import { useVisibleNodeIds } from '../../hooks/useVisibleNodeIds';
  5 | import { useStore } from '../../hooks/useStore';
  6 | import { containerStyle } from '../../styles/utils';
  7 | import { GraphViewProps } from '../GraphView';
  8 | import { useResizeObserver } from './useResizeObserver';
  9 | import { NodeWrapper } from '../../components/NodeWrapper';
 10 | import type { Node, ReactFlowState } from '../../types';
 11 | 
 12 | export type NodeRendererProps<NodeType extends Node> = Pick<
 13 |   GraphViewProps<NodeType>,
 14 |   | 'onNodeClick'
 15 |   | 'onNodeDoubleClick'
 16 |   | 'onNodeMouseEnter'
 17 |   | 'onNodeMouseMove'
 18 |   | 'onNodeMouseLeave'
 19 |   | 'onNodeContextMenu'
 20 |   | 'onlyRenderVisibleElements'
 21 |   | 'noPanClassName'
 22 |   | 'noDragClassName'
 23 |   | 'rfId'
 24 |   | 'disableKeyboardA11y'
 25 |   | 'nodeExtent'
 26 |   | 'nodeTypes'
 27 |   | 'nodeClickDistance'
 28 | >;
 29 | 
 30 | const selector = (s: ReactFlowState) => ({
 31 |   nodesDraggable: s.nodesDraggable,
 32 |   nodesConnectable: s.nodesConnectable,
 33 |   nodesFocusable: s.nodesFocusable,
 34 |   elementsSelectable: s.elementsSelectable,
 35 |   onError: s.onError,
 36 | });
 37 | 
 38 | function NodeRendererComponent<NodeType extends Node>(props: NodeRendererProps<NodeType>) {
 39 |   const { nodesDraggable, nodesConnectable, nodesFocusable, elementsSelectable, onError } = useStore(selector, shallow);
 40 |   const nodeIds = useVisibleNodeIds(props.onlyRenderVisibleElements);
 41 |   const resizeObserver = useResizeObserver();
 42 | 
 43 |   return (
 44 |     <div className="react-flow__nodes" style={containerStyle}>
 45 |       {nodeIds.map((nodeId) => {
 46 |         return (
 47 |           /*
 48 |            * The split of responsibilities between NodeRenderer and
 49 |            * NodeComponentWrapper may appear weird. However, it’s designed to
 50 |            * minimize the cost of updates when individual nodes change.
 51 |            * 
 52 |            * For example, when you’re dragging a single node, that node gets
 53 |            * updated multiple times per second. If `NodeRenderer` were to update
 54 |            * every time, it would have to re-run the `nodes.map()` loop every
 55 |            * time. This gets pricey with hundreds of nodes, especially if every
 56 |            * loop cycle does more than just rendering a JSX element!
 57 |            * 
 58 |            * As a result of this choice, we took the following implementation
 59 |            * decisions:
 60 |            * - NodeRenderer subscribes *only* to node IDs – and therefore
 61 |            *   rerender *only* when visible nodes are added or removed.
 62 |            * - NodeRenderer performs all operations the result of which can be
 63 |            *   shared between nodes (such as creating the `ResizeObserver`
 64 |            *   instance, or subscribing to `selector`). This means extra prop
 65 |            *   drilling into `NodeComponentWrapper`, but it means we need to run
 66 |            *   these operations only once – instead of once per node.
 67 |            * - Any operations that you’d normally write inside `nodes.map` are
 68 |            *   moved into `NodeComponentWrapper`. This ensures they are
 69 |            *   memorized – so if `NodeRenderer` *has* to rerender, it only
 70 |            *   needs to regenerate the list of nodes, nothing else.
 71 |            */
 72 |           <NodeWrapper<NodeType>
 73 |             key={nodeId}
 74 |             id={nodeId}
 75 |             nodeTypes={props.nodeTypes}
 76 |             nodeExtent={props.nodeExtent}
 77 |             onClick={props.onNodeClick}
 78 |             onMouseEnter={props.onNodeMouseEnter}
 79 |             onMouseMove={props.onNodeMouseMove}
 80 |             onMouseLeave={props.onNodeMouseLeave}
 81 |             onContextMenu={props.onNodeContextMenu}
 82 |             onDoubleClick={props.onNodeDoubleClick}
 83 |             noDragClassName={props.noDragClassName}
 84 |             noPanClassName={props.noPanClassName}
 85 |             rfId={props.rfId}
 86 |             disableKeyboardA11y={props.disableKeyboardA11y}
 87 |             resizeObserver={resizeObserver}
 88 |             nodesDraggable={nodesDraggable}
 89 |             nodesConnectable={nodesConnectable}
 90 |             nodesFocusable={nodesFocusable}
 91 |             elementsSelectable={elementsSelectable}
 92 |             nodeClickDistance={props.nodeClickDistance}
 93 |             onError={onError}
 94 |           />
 95 |         );
 96 |       })}
 97 |     </div>
 98 |   );
 99 | }
100 | 
101 | NodeRendererComponent.displayName = 'NodeRenderer';
102 | 
103 | export const NodeRenderer = memo(NodeRendererComponent) as typeof NodeRendererComponent;
104 | 


--------------------------------------------------------------------------------
/packages/react/src/container/NodeRenderer/useResizeObserver.ts:
--------------------------------------------------------------------------------
 1 | import { useEffect, useState } from 'react';
 2 | 
 3 | import { ReactFlowState } from '../../types';
 4 | import { useStore } from '../../hooks/useStore';
 5 | import { InternalNodeUpdate } from '@xyflow/system';
 6 | 
 7 | const selector = (s: ReactFlowState) => s.updateNodeInternals;
 8 | 
 9 | export function useResizeObserver() {
10 |   const updateNodeInternals = useStore(selector);
11 |   const [resizeObserver] = useState(() => {
12 |     if (typeof ResizeObserver === 'undefined') {
13 |       return null;
14 |     }
15 | 
16 |     return new ResizeObserver((entries: ResizeObserverEntry[]) => {
17 |       const updates = new Map<string, InternalNodeUpdate>();
18 |       entries.forEach((entry: ResizeObserverEntry) => {
19 |         const id = entry.target.getAttribute('data-id') as string;
20 |         updates.set(id, {
21 |           id,
22 |           nodeElement: entry.target as HTMLDivElement,
23 |           force: true,
24 |         });
25 |       });
26 | 
27 |       updateNodeInternals(updates);
28 |     });
29 |   });
30 | 
31 |   useEffect(() => {
32 |     return () => {
33 |       resizeObserver?.disconnect();
34 |     };
35 |   }, [resizeObserver]);
36 | 
37 |   return resizeObserver;
38 | }
39 | 


--------------------------------------------------------------------------------
/packages/react/src/container/ReactFlow/Wrapper.tsx:
--------------------------------------------------------------------------------
 1 | import { useContext, type ReactNode } from 'react';
 2 | 
 3 | import StoreContext from '../../contexts/StoreContext';
 4 | import { ReactFlowProvider } from '../../components/ReactFlowProvider';
 5 | import type { Node, Edge } from '../../types';
 6 | import { CoordinateExtent, NodeOrigin } from '@xyflow/system';
 7 | 
 8 | export function Wrapper({
 9 |   children,
10 |   nodes,
11 |   edges,
12 |   defaultNodes,
13 |   defaultEdges,
14 |   width,
15 |   height,
16 |   fitView,
17 |   nodeOrigin,
18 |   nodeExtent,
19 | }: {
20 |   children: ReactNode;
21 |   nodes?: Node[];
22 |   edges?: Edge[];
23 |   defaultNodes?: Node[];
24 |   defaultEdges?: Edge[];
25 |   width?: number;
26 |   height?: number;
27 |   fitView?: boolean;
28 |   nodeOrigin?: NodeOrigin;
29 |   nodeExtent?: CoordinateExtent;
30 | }) {
31 |   const isWrapped = useContext(StoreContext);
32 | 
33 |   if (isWrapped) {
34 |     /*
35 |      * we need to wrap it with a fragment because it's not allowed for children to be a ReactNode
36 |      * https://github.com/DefinitelyTyped/DefinitelyTyped/issues/18051
37 |      */
38 |     return <>{children}</>;
39 |   }
40 | 
41 |   return (
42 |     <ReactFlowProvider
43 |       initialNodes={nodes}
44 |       initialEdges={edges}
45 |       defaultNodes={defaultNodes}
46 |       defaultEdges={defaultEdges}
47 |       initialWidth={width}
48 |       initialHeight={height}
49 |       fitView={fitView}
50 |       nodeOrigin={nodeOrigin}
51 |       nodeExtent={nodeExtent}
52 |     >
53 |       {children}
54 |     </ReactFlowProvider>
55 |   );
56 | }
57 | 


--------------------------------------------------------------------------------
/packages/react/src/container/ReactFlow/init-values.ts:
--------------------------------------------------------------------------------
1 | import { type NodeOrigin, Viewport } from '@xyflow/system';
2 | 
3 | export const defaultNodeOrigin: NodeOrigin = [0, 0];
4 | export const defaultViewport: Viewport = { x: 0, y: 0, zoom: 1 };
5 | 


--------------------------------------------------------------------------------
/packages/react/src/container/Viewport/index.tsx:
--------------------------------------------------------------------------------
 1 | import type { ReactNode } from 'react';
 2 | 
 3 | import { useStore } from '../../hooks/useStore';
 4 | import type { ReactFlowState } from '../../types';
 5 | 
 6 | const selector = (s: ReactFlowState) => `translate(${s.transform[0]}px,${s.transform[1]}px) scale(${s.transform[2]})`;
 7 | 
 8 | type ViewportProps = {
 9 |   children: ReactNode;
10 | };
11 | 
12 | export function Viewport({ children }: ViewportProps) {
13 |   const transform = useStore(selector);
14 | 
15 |   return (
16 |     <div className="react-flow__viewport xyflow__viewport react-flow__container" style={{ transform }}>
17 |       {children}
18 |     </div>
19 |   );
20 | }
21 | 


--------------------------------------------------------------------------------
/packages/react/src/container/ZoomPane/index.tsx:
--------------------------------------------------------------------------------
  1 | /* eslint-disable @typescript-eslint/no-explicit-any */
  2 | import { useCallback, useEffect, useRef } from 'react';
  3 | import { shallow } from 'zustand/shallow';
  4 | import { XYPanZoom, PanOnScrollMode, type Transform, type PanZoomInstance } from '@xyflow/system';
  5 | 
  6 | import { useKeyPress } from '../../hooks/useKeyPress';
  7 | import { useResizeHandler } from '../../hooks/useResizeHandler';
  8 | import { useStore, useStoreApi } from '../../hooks/useStore';
  9 | import { containerStyle } from '../../styles/utils';
 10 | import type { FlowRendererProps } from '../FlowRenderer';
 11 | import type { ReactFlowState } from '../../types';
 12 | 
 13 | type ZoomPaneProps = Omit<
 14 |   FlowRendererProps,
 15 |   | 'deleteKeyCode'
 16 |   | 'selectionKeyCode'
 17 |   | 'multiSelectionKeyCode'
 18 |   | 'noDragClassName'
 19 |   | 'disableKeyboardA11y'
 20 |   | 'selectionOnDrag'
 21 | > & {
 22 |   isControlledViewport: boolean;
 23 | };
 24 | 
 25 | const selector = (s: ReactFlowState) => ({
 26 |   userSelectionActive: s.userSelectionActive,
 27 |   lib: s.lib,
 28 | });
 29 | 
 30 | export function ZoomPane({
 31 |   onPaneContextMenu,
 32 |   zoomOnScroll = true,
 33 |   zoomOnPinch = true,
 34 |   panOnScroll = false,
 35 |   panOnScrollSpeed = 0.5,
 36 |   panOnScrollMode = PanOnScrollMode.Free,
 37 |   zoomOnDoubleClick = true,
 38 |   panOnDrag = true,
 39 |   defaultViewport,
 40 |   translateExtent,
 41 |   minZoom,
 42 |   maxZoom,
 43 |   zoomActivationKeyCode,
 44 |   preventScrolling = true,
 45 |   children,
 46 |   noWheelClassName,
 47 |   noPanClassName,
 48 |   onViewportChange,
 49 |   isControlledViewport,
 50 |   paneClickDistance,
 51 | }: ZoomPaneProps) {
 52 |   const store = useStoreApi();
 53 |   const zoomPane = useRef<HTMLDivElement>(null);
 54 |   const { userSelectionActive, lib } = useStore(selector, shallow);
 55 |   const zoomActivationKeyPressed = useKeyPress(zoomActivationKeyCode);
 56 |   const panZoom = useRef<PanZoomInstance>();
 57 | 
 58 |   useResizeHandler(zoomPane);
 59 | 
 60 |   const onTransformChange = useCallback(
 61 |     (transform: Transform) => {
 62 |       onViewportChange?.({ x: transform[0], y: transform[1], zoom: transform[2] });
 63 | 
 64 |       if (!isControlledViewport) {
 65 |         store.setState({ transform });
 66 |       }
 67 |     },
 68 |     [onViewportChange, isControlledViewport]
 69 |   );
 70 | 
 71 |   useEffect(() => {
 72 |     if (zoomPane.current) {
 73 |       panZoom.current = XYPanZoom({
 74 |         domNode: zoomPane.current,
 75 |         minZoom,
 76 |         maxZoom,
 77 |         translateExtent,
 78 |         viewport: defaultViewport,
 79 |         paneClickDistance,
 80 |         onDraggingChange: (paneDragging: boolean) => store.setState({ paneDragging }),
 81 |         onPanZoomStart: (event, vp) => {
 82 |           const { onViewportChangeStart, onMoveStart } = store.getState();
 83 |           onMoveStart?.(event, vp);
 84 |           onViewportChangeStart?.(vp);
 85 |         },
 86 |         onPanZoom: (event, vp) => {
 87 |           const { onViewportChange, onMove } = store.getState();
 88 |           onMove?.(event, vp);
 89 |           onViewportChange?.(vp);
 90 |         },
 91 |         onPanZoomEnd: (event, vp) => {
 92 |           const { onViewportChangeEnd, onMoveEnd } = store.getState();
 93 |           onMoveEnd?.(event, vp);
 94 |           onViewportChangeEnd?.(vp);
 95 |         },
 96 |       });
 97 | 
 98 |       const { x, y, zoom } = panZoom.current.getViewport();
 99 | 
100 |       store.setState({
101 |         panZoom: panZoom.current,
102 |         transform: [x, y, zoom],
103 |         domNode: zoomPane.current.closest('.react-flow') as HTMLDivElement,
104 |       });
105 | 
106 |       return () => {
107 |         panZoom.current?.destroy();
108 |       };
109 |     }
110 |   }, []);
111 | 
112 |   useEffect(() => {
113 |     panZoom.current?.update({
114 |       onPaneContextMenu,
115 |       zoomOnScroll,
116 |       zoomOnPinch,
117 |       panOnScroll,
118 |       panOnScrollSpeed,
119 |       panOnScrollMode,
120 |       zoomOnDoubleClick,
121 |       panOnDrag,
122 |       zoomActivationKeyPressed,
123 |       preventScrolling,
124 |       noPanClassName,
125 |       userSelectionActive,
126 |       noWheelClassName,
127 |       lib,
128 |       onTransformChange,
129 |     });
130 |   }, [
131 |     onPaneContextMenu,
132 |     zoomOnScroll,
133 |     zoomOnPinch,
134 |     panOnScroll,
135 |     panOnScrollSpeed,
136 |     panOnScrollMode,
137 |     zoomOnDoubleClick,
138 |     panOnDrag,
139 |     zoomActivationKeyPressed,
140 |     preventScrolling,
141 |     noPanClassName,
142 |     userSelectionActive,
143 |     noWheelClassName,
144 |     lib,
145 |     onTransformChange,
146 |   ]);
147 | 
148 |   return (
149 |     <div className="react-flow__renderer" ref={zoomPane} style={containerStyle}>
150 |       {children}
151 |     </div>
152 |   );
153 | }
154 | 


--------------------------------------------------------------------------------
/packages/react/src/contexts/NodeIdContext.ts:
--------------------------------------------------------------------------------
 1 | import { createContext, useContext } from 'react';
 2 | 
 3 | export const NodeIdContext = createContext<string | null>(null);
 4 | export const Provider = NodeIdContext.Provider;
 5 | export const Consumer = NodeIdContext.Consumer;
 6 | 
 7 | /**
 8 |  * You can use this hook to get the id of the node it is used inside. It is useful
 9 |  * if you need the node's id deeper in the render tree but don't want to manually
10 |  * drill down the id as a prop.
11 |  *
12 |  * @public
13 |  * @returns The id for a node in the flow.
14 |  *
15 |  * @example
16 |  *```jsx
17 |  *import { useNodeId } from '@xyflow/react';
18 |  *
19 |  *export default function CustomNode() {
20 |  *  return (
21 |  *    <div>
22 |  *      <span>This node has an id of </span>
23 |  *      <NodeIdDisplay />
24 |  *    </div>
25 |  *  );
26 |  *}
27 |  *
28 |  *function NodeIdDisplay() {
29 |  *  const nodeId = useNodeId();
30 |  *
31 |  *  return <span>{nodeId}</span>;
32 |  *}
33 |  *```
34 |  */
35 | export const useNodeId = (): string | null => {
36 |   const nodeId = useContext(NodeIdContext);
37 |   return nodeId;
38 | };
39 | 
40 | export default NodeIdContext;
41 | 


--------------------------------------------------------------------------------
/packages/react/src/contexts/StoreContext.ts:
--------------------------------------------------------------------------------
1 | import { createContext } from 'react';
2 | 
3 | import { createStore } from '../store';
4 | 
5 | const StoreContext = createContext<ReturnType<typeof createStore> | null>(null);
6 | 
7 | export const Provider = StoreContext.Provider;
8 | export default StoreContext;
9 | 


--------------------------------------------------------------------------------
/packages/react/src/custom.d.ts:
--------------------------------------------------------------------------------
 1 | declare module '*.css' {
 2 |   const content: { [className: string]: string };
 3 |   export default content;
 4 | }
 5 | 
 6 | type SvgrComponent = React.FunctionComponent<React.SVGAttributes<SVGElement>>;
 7 | 
 8 | declare module '*.svg' {
 9 |   const svgUrl: string;
10 |   const svgComponent: SvgrComponent;
11 |   export default svgUrl;
12 |   export { svgComponent as ReactComponent };
13 | }
14 | 


--------------------------------------------------------------------------------
/packages/react/src/hooks/useColorModeClass.ts:
--------------------------------------------------------------------------------
 1 | import { useEffect, useState } from 'react';
 2 | import type { ColorMode, ColorModeClass } from '@xyflow/system';
 3 | 
 4 | function getMediaQuery() {
 5 |   if (typeof window === 'undefined' || !window.matchMedia) {
 6 |     return null;
 7 |   }
 8 | 
 9 |   return window.matchMedia('(prefers-color-scheme: dark)');
10 | }
11 | 
12 | /**
13 |  * Hook for receiving the current color mode class 'dark' or 'light'.
14 |  *
15 |  * @internal
16 |  * @param colorMode - The color mode to use ('dark', 'light' or 'system')
17 |  */
18 | export function useColorModeClass(colorMode: ColorMode): ColorModeClass {
19 |   const [colorModeClass, setColorModeClass] = useState<ColorModeClass | null>(
20 |     colorMode === 'system' ? null : colorMode
21 |   );
22 | 
23 |   useEffect(() => {
24 |     if (colorMode !== 'system') {
25 |       setColorModeClass(colorMode);
26 |       return;
27 |     }
28 | 
29 |     const mediaQuery = getMediaQuery();
30 |     const updateColorModeClass = () => setColorModeClass(mediaQuery?.matches ? 'dark' : 'light');
31 | 
32 |     updateColorModeClass();
33 |     mediaQuery?.addEventListener('change', updateColorModeClass);
34 | 
35 |     return () => {
36 |       mediaQuery?.removeEventListener('change', updateColorModeClass);
37 |     };
38 |   }, [colorMode]);
39 | 
40 |   return colorModeClass !== null ? colorModeClass : getMediaQuery()?.matches ? 'dark' : 'light';
41 | }
42 | 


--------------------------------------------------------------------------------
/packages/react/src/hooks/useConnection.ts:
--------------------------------------------------------------------------------
 1 | import { shallow } from 'zustand/shallow';
 2 | import { ConnectionState, pointToRendererPoint } from '@xyflow/system';
 3 | 
 4 | import { useStore } from './useStore';
 5 | import type { InternalNode, Node, ReactFlowStore } from '../types';
 6 | 
 7 | function storeSelector(s: ReactFlowStore) {
 8 |   return s.connection.inProgress
 9 |     ? { ...s.connection, to: pointToRendererPoint(s.connection.to, s.transform) }
10 |     : { ...s.connection };
11 | }
12 | 
13 | function getSelector<NodeType extends Node = Node, SelectorReturn = ConnectionState<InternalNode<NodeType>>>(
14 |   connectionSelector?: (connection: ConnectionState<InternalNode<NodeType>>) => SelectorReturn
15 | ): (s: ReactFlowStore) => SelectorReturn | ConnectionState<InternalNode> {
16 |   if (connectionSelector) {
17 |     const combinedSelector = (s: ReactFlowStore) => {
18 |       const connection = storeSelector(s) as ConnectionState<InternalNode<NodeType>>;
19 |       return connectionSelector(connection);
20 |     };
21 |     return combinedSelector;
22 |   }
23 | 
24 |   return storeSelector;
25 | }
26 | /**
27 |  * The `useConnection` hook returns the current connection when there is an active
28 |  * connection interaction. If no connection interaction is active, it returns null
29 |  * for every property. A typical use case for this hook is to colorize handles
30 |  * based on a certain condition (e.g. if the connection is valid or not).
31 |  *
32 |  * @public
33 |  * @param connectionSelector - An optional selector function used to extract a slice of the
34 |  * `ConnectionState` data. Using a selector can prevent component re-renders where data you don't
35 |  * otherwise care about might change. If a selector is not provided, the entire `ConnectionState`
36 |  * object is returned unchanged.
37 |  * @example
38 |  *
39 |  * ```tsx
40 |  *import { useConnection } from '@xyflow/react';
41 |  *
42 |  *function App() {
43 |  *  const connection = useConnection();
44 |  *
45 |  *  return (
46 |  *    <div> {connection ? `Someone is trying to make a connection from ${connection.fromNode} to this one.` : 'There are currently no incoming connections!'}
47 |  *
48 |  *   </div>
49 |  *   );
50 |  * }
51 |  * ```
52 |  *
53 |  * @returns ConnectionState
54 |  */
55 | export function useConnection<NodeType extends Node = Node, SelectorReturn = ConnectionState<InternalNode<NodeType>>>(
56 |   connectionSelector?: (connection: ConnectionState<InternalNode<NodeType>>) => SelectorReturn
57 | ): SelectorReturn {
58 |   const combinedSelector = getSelector<NodeType, SelectorReturn>(connectionSelector);
59 |   return useStore(combinedSelector, shallow) as SelectorReturn;
60 | }
61 | 


--------------------------------------------------------------------------------
/packages/react/src/hooks/useDrag.ts:
--------------------------------------------------------------------------------
 1 | import { useEffect, useRef, useState, type RefObject } from 'react';
 2 | import { XYDrag, type XYDragInstance } from '@xyflow/system';
 3 | 
 4 | import { handleNodeClick } from '../components/Nodes/utils';
 5 | import { useStoreApi } from './useStore';
 6 | 
 7 | type UseDragParams = {
 8 |   nodeRef: RefObject<HTMLDivElement>;
 9 |   disabled?: boolean;
10 |   noDragClassName?: string;
11 |   handleSelector?: string;
12 |   nodeId?: string;
13 |   isSelectable?: boolean;
14 |   nodeClickDistance?: number;
15 | };
16 | 
17 | /**
18 |  * Hook for calling XYDrag helper from @xyflow/system.
19 |  *
20 |  * @internal
21 |  */
22 | export function useDrag({
23 |   nodeRef,
24 |   disabled = false,
25 |   noDragClassName,
26 |   handleSelector,
27 |   nodeId,
28 |   isSelectable,
29 |   nodeClickDistance,
30 | }: UseDragParams) {
31 |   const store = useStoreApi();
32 |   const [dragging, setDragging] = useState<boolean>(false);
33 |   const xyDrag = useRef<XYDragInstance>();
34 | 
35 |   useEffect(() => {
36 |     xyDrag.current = XYDrag({
37 |       getStoreItems: () => store.getState(),
38 |       onNodeMouseDown: (id: string) => {
39 |         handleNodeClick({
40 |           id,
41 |           store,
42 |           nodeRef,
43 |         });
44 |       },
45 |       onDragStart: () => {
46 |         setDragging(true);
47 |       },
48 |       onDragStop: () => {
49 |         setDragging(false);
50 |       },
51 |     });
52 |   }, []);
53 | 
54 |   useEffect(() => {
55 |     if (disabled) {
56 |       xyDrag.current?.destroy();
57 |     } else if (nodeRef.current) {
58 |       xyDrag.current?.update({
59 |         noDragClassName,
60 |         handleSelector,
61 |         domNode: nodeRef.current,
62 |         isSelectable,
63 |         nodeId,
64 |         nodeClickDistance,
65 |       });
66 |       return () => {
67 |         xyDrag.current?.destroy();
68 |       };
69 |     }
70 |   }, [noDragClassName, handleSelector, disabled, isSelectable, nodeRef, nodeId]);
71 | 
72 |   return dragging;
73 | }
74 | 


--------------------------------------------------------------------------------
/packages/react/src/hooks/useEdges.ts:
--------------------------------------------------------------------------------
 1 | import { shallow } from 'zustand/shallow';
 2 | 
 3 | import { useStore } from '../hooks/useStore';
 4 | import type { Edge, ReactFlowState } from '../types';
 5 | 
 6 | const edgesSelector = (state: ReactFlowState) => state.edges;
 7 | 
 8 | /**
 9 |  * This hook returns an array of the current edges. Components that use this hook
10 |  * will re-render **whenever any edge changes**.
11 |  *
12 |  * @public
13 |  * @returns An array of all edges currently in the flow.
14 |  *
15 |  * @example
16 |  * ```tsx
17 |  *import { useEdges } from '@xyflow/react';
18 |  *
19 |  *export default function () {
20 |  *  const edges = useEdges();
21 |  *
22 |  *  return <div>There are currently {edges.length} edges!</div>;
23 |  *}
24 |  *```
25 |  */
26 | export function useEdges<EdgeType extends Edge = Edge>(): EdgeType[] {
27 |   const edges = useStore(edgesSelector, shallow) as EdgeType[];
28 | 
29 |   return edges;
30 | }
31 | 


--------------------------------------------------------------------------------
/packages/react/src/hooks/useGlobalKeyHandler.ts:
--------------------------------------------------------------------------------
 1 | import { useEffect } from 'react';
 2 | import type { KeyCode } from '@xyflow/system';
 3 | 
 4 | import { useStoreApi } from '../hooks/useStore';
 5 | import { useKeyPress, UseKeyPressOptions } from './useKeyPress';
 6 | import { useReactFlow } from './useReactFlow';
 7 | import { Edge, Node } from '../types';
 8 | 
 9 | const selected = (item: Node | Edge) => item.selected;
10 | 
11 | const deleteKeyOptions: UseKeyPressOptions = { actInsideInputWithModifier: false };
12 | const win = typeof window !== 'undefined' ? window : undefined;
13 | 
14 | /**
15 |  * Hook for handling global key events.
16 |  *
17 |  * @internal
18 |  */
19 | export function useGlobalKeyHandler({
20 |   deleteKeyCode,
21 |   multiSelectionKeyCode,
22 | }: {
23 |   deleteKeyCode: KeyCode | null;
24 |   multiSelectionKeyCode: KeyCode | null;
25 | }): void {
26 |   const store = useStoreApi();
27 |   const { deleteElements } = useReactFlow();
28 | 
29 |   const deleteKeyPressed = useKeyPress(deleteKeyCode, deleteKeyOptions);
30 |   const multiSelectionKeyPressed = useKeyPress(multiSelectionKeyCode, { target: win });
31 | 
32 |   useEffect(() => {
33 |     if (deleteKeyPressed) {
34 |       const { edges, nodes } = store.getState();
35 |       deleteElements({ nodes: nodes.filter(selected), edges: edges.filter(selected) });
36 |       store.setState({ nodesSelectionActive: false });
37 |     }
38 |   }, [deleteKeyPressed]);
39 | 
40 |   useEffect(() => {
41 |     store.setState({ multiSelectionActive: multiSelectionKeyPressed });
42 |   }, [multiSelectionKeyPressed]);
43 | }
44 | 


--------------------------------------------------------------------------------
/packages/react/src/hooks/useHandleConnections.ts:
--------------------------------------------------------------------------------
 1 | import { useEffect, useMemo, useRef } from 'react';
 2 | import {
 3 |   Connection,
 4 |   HandleConnection,
 5 |   HandleType,
 6 |   areConnectionMapsEqual,
 7 |   handleConnectionChange,
 8 | } from '@xyflow/system';
 9 | 
10 | import { useStore } from './useStore';
11 | import { useNodeId } from '../contexts/NodeIdContext';
12 | 
13 | type UseHandleConnectionsParams = {
14 |   /** What type of handle connections do you want to observe? */
15 |   type: HandleType;
16 |   /** The handle id (this is only needed if the node has multiple handles of the same type). */
17 |   id?: string | null;
18 |   /** If node id is not provided, the node id from the `NodeIdContext` is used. */
19 |   nodeId?: string;
20 |   /** Gets called when a connection is established. */
21 |   onConnect?: (connections: Connection[]) => void;
22 |   /** Gets called when a connection is removed. */
23 |   onDisconnect?: (connections: Connection[]) => void;
24 | };
25 | 
26 | /**
27 |  * Hook to check if a <Handle /> is connected to another <Handle /> and get the connections.
28 |  *
29 |  * @public
30 |  * @deprecated Use `useNodeConnections` instead.
31 |  * @returns An array with handle connections.
32 |  */
33 | export function useHandleConnections({
34 |   type,
35 |   id,
36 |   nodeId,
37 |   onConnect,
38 |   onDisconnect,
39 | }: UseHandleConnectionsParams): HandleConnection[] {
40 |   console.warn(
41 |     '[DEPRECATED] `useHandleConnections` is deprecated. Instead use `useNodeConnections` https://reactflow.dev/api-reference/hooks/useNodeConnections'
42 |   );
43 | 
44 |   const _nodeId = useNodeId();
45 |   const currentNodeId = nodeId ?? _nodeId;
46 | 
47 |   const prevConnections = useRef<Map<string, HandleConnection> | null>(null);
48 | 
49 |   const connections = useStore(
50 |     (state) => state.connectionLookup.get(`${currentNodeId}-${type}${id ? `-${id}` : ''}`),
51 |     areConnectionMapsEqual
52 |   );
53 | 
54 |   useEffect(() => {
55 |     // @todo dicuss if onConnect/onDisconnect should be called when the component mounts/unmounts
56 |     if (prevConnections.current && prevConnections.current !== connections) {
57 |       const _connections = connections ?? new Map();
58 |       handleConnectionChange(prevConnections.current, _connections, onDisconnect);
59 |       handleConnectionChange(_connections, prevConnections.current, onConnect);
60 |     }
61 | 
62 |     prevConnections.current = connections ?? new Map();
63 |   }, [connections, onConnect, onDisconnect]);
64 | 
65 |   return useMemo(() => Array.from(connections?.values() ?? []), [connections]);
66 | }
67 | 


--------------------------------------------------------------------------------
/packages/react/src/hooks/useInternalNode.ts:
--------------------------------------------------------------------------------
 1 | import { useCallback } from 'react';
 2 | import { shallow } from 'zustand/shallow';
 3 | 
 4 | import { useStore } from './useStore';
 5 | import type { InternalNode, Node } from '../types';
 6 | 
 7 | /**
 8 |  * This hook returns the internal representation of a specific node.
 9 |  * Components that use this hook will re-render **whenever the node changes**,
10 |  * including when a node is selected or moved.
11 |  *
12 |  * @public
13 |  * @param id - The ID of a node you want to observe.
14 |  * @returns The `InternalNode` object for the node with the given ID.
15 |  *
16 |  * @example
17 |  * ```tsx
18 |  *import { useInternalNode } from '@xyflow/react';
19 |  *
20 |  *export default function () {
21 |  *  const internalNode = useInternalNode('node-1');
22 |  *  const absolutePosition = internalNode.internals.positionAbsolute;
23 |  *
24 |  *  return (
25 |  *    <div>
26 |  *      The absolute position of the node is at:
27 |  *      <p>x: {absolutePosition.x}</p>
28 |  *      <p>y: {absolutePosition.y}</p>
29 |  *    </div>
30 |  *  );
31 |  *}
32 |  *```
33 |  */
34 | export function useInternalNode<NodeType extends Node = Node>(id: string): InternalNode<NodeType> | undefined {
35 |   const node = useStore(
36 |     useCallback((s) => s.nodeLookup.get(id) as InternalNode<NodeType> | undefined, [id]),
37 |     shallow
38 |   );
39 | 
40 |   return node;
41 | }
42 | 


--------------------------------------------------------------------------------
/packages/react/src/hooks/useIsomorphicLayoutEffect.ts:
--------------------------------------------------------------------------------
1 | import { useEffect, useLayoutEffect } from 'react';
2 | 
3 | // we need this hook to prevent a warning when using react-flow in SSR
4 | export const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;
5 | 


--------------------------------------------------------------------------------
/packages/react/src/hooks/useMoveSelectedNodes.ts:
--------------------------------------------------------------------------------
 1 | import { useCallback } from 'react';
 2 | import { calculateNodePosition, snapPosition, type XYPosition } from '@xyflow/system';
 3 | 
 4 | import { type Node } from '../types';
 5 | import { useStoreApi } from './useStore';
 6 | 
 7 | const selectedAndDraggable = (nodesDraggable: boolean) => (n: Node) =>
 8 |   n.selected && (n.draggable || (nodesDraggable && typeof n.draggable === 'undefined'));
 9 | 
10 | /**
11 |  * Hook for updating node positions by passing a direction and factor
12 |  *
13 |  * @internal
14 |  * @returns function for updating node positions
15 |  */
16 | export function useMoveSelectedNodes() {
17 |   const store = useStoreApi();
18 | 
19 |   const moveSelectedNodes = useCallback((params: { direction: XYPosition; factor: number }) => {
20 |     const { nodeExtent, snapToGrid, snapGrid, nodesDraggable, onError, updateNodePositions, nodeLookup, nodeOrigin } =
21 |       store.getState();
22 |     const nodeUpdates = new Map();
23 |     const isSelected = selectedAndDraggable(nodesDraggable);
24 | 
25 |     /*
26 |      * by default a node moves 5px on each key press
27 |      * if snap grid is enabled, we use that for the velocity
28 |      */
29 |     const xVelo = snapToGrid ? snapGrid[0] : 5;
30 |     const yVelo = snapToGrid ? snapGrid[1] : 5;
31 | 
32 |     const xDiff = params.direction.x * xVelo * params.factor;
33 |     const yDiff = params.direction.y * yVelo * params.factor;
34 | 
35 |     for (const [, node] of nodeLookup) {
36 |       if (!isSelected(node)) {
37 |         continue;
38 |       }
39 | 
40 |       let nextPosition = {
41 |         x: node.internals.positionAbsolute.x + xDiff,
42 |         y: node.internals.positionAbsolute.y + yDiff,
43 |       };
44 | 
45 |       if (snapToGrid) {
46 |         nextPosition = snapPosition(nextPosition, snapGrid);
47 |       }
48 | 
49 |       const { position, positionAbsolute } = calculateNodePosition({
50 |         nodeId: node.id,
51 |         nextPosition,
52 |         nodeLookup,
53 |         nodeExtent,
54 |         nodeOrigin,
55 |         onError,
56 |       });
57 | 
58 |       node.position = position;
59 |       node.internals.positionAbsolute = positionAbsolute;
60 | 
61 |       nodeUpdates.set(node.id, node);
62 |     }
63 | 
64 |     updateNodePositions(nodeUpdates);
65 |   }, []);
66 | 
67 |   return moveSelectedNodes;
68 | }
69 | 


--------------------------------------------------------------------------------
/packages/react/src/hooks/useNodeConnections.ts:
--------------------------------------------------------------------------------
 1 | import { useEffect, useMemo, useRef } from 'react';
 2 | import {
 3 |   Connection,
 4 |   NodeConnection,
 5 |   HandleType,
 6 |   areConnectionMapsEqual,
 7 |   handleConnectionChange,
 8 |   errorMessages,
 9 | } from '@xyflow/system';
10 | 
11 | import { useStore } from './useStore';
12 | import { useNodeId } from '../contexts/NodeIdContext';
13 | 
14 | const error014 = errorMessages['error014']();
15 | 
16 | type UseNodeConnectionsParams = {
17 |   /** ID of the node, filled in automatically if used inside custom node. */
18 |   id?: string;
19 |   /** What type of handle connections do you want to observe? */
20 |   handleType?: HandleType;
21 |   /** Filter by handle id (this is only needed if the node has multiple handles of the same type). */
22 |   handleId?: string;
23 |   /** Gets called when a connection is established. */
24 |   onConnect?: (connections: Connection[]) => void;
25 |   /** Gets called when a connection is removed. */
26 |   onDisconnect?: (connections: Connection[]) => void;
27 | };
28 | 
29 | /**
30 |  * This hook returns an array of connections on a specific node, handle type ('source', 'target') or handle ID.
31 |  *
32 |  * @public
33 |  * @returns An array with connections.
34 |  *
35 |  * @example
36 |  * ```jsx
37 |  *import { useNodeConnections } from '@xyflow/react';
38 |  *
39 |  *export default function () {
40 |  *  const connections = useNodeConnections({
41 |  *    handleType: 'target',
42 |  *    handleId: 'my-handle',
43 |  *  });
44 |  *
45 |  *  return (
46 |  *    <div>There are currently {connections.length} incoming connections!</div>
47 |  *  );
48 |  *}
49 |  *```
50 |  */
51 | export function useNodeConnections({
52 |   id,
53 |   handleType,
54 |   handleId,
55 |   onConnect,
56 |   onDisconnect,
57 | }: UseNodeConnectionsParams = {}): NodeConnection[] {
58 |   const nodeId = useNodeId();
59 |   const currentNodeId = id ?? nodeId;
60 | 
61 |   if (!currentNodeId) {
62 |     throw new Error(error014);
63 |   }
64 | 
65 |   const prevConnections = useRef<Map<string, NodeConnection> | null>(null);
66 | 
67 |   const connections = useStore(
68 |     (state) =>
69 |       state.connectionLookup.get(
70 |         `${currentNodeId}${handleType ? (handleId ? `-${handleType}-${handleId}` : `-${handleType}`) : ''}`
71 |       ),
72 |     areConnectionMapsEqual
73 |   );
74 | 
75 |   useEffect(() => {
76 |     // @todo discuss if onConnect/onDisconnect should be called when the component mounts/unmounts
77 |     if (prevConnections.current && prevConnections.current !== connections) {
78 |       const _connections = connections ?? new Map();
79 |       handleConnectionChange(prevConnections.current, _connections, onDisconnect);
80 |       handleConnectionChange(_connections, prevConnections.current, onConnect);
81 |     }
82 | 
83 |     prevConnections.current = connections ?? new Map();
84 |   }, [connections, onConnect, onDisconnect]);
85 | 
86 |   return useMemo(() => Array.from(connections?.values() ?? []), [connections]);
87 | }
88 | 


--------------------------------------------------------------------------------
/packages/react/src/hooks/useNodes.ts:
--------------------------------------------------------------------------------
 1 | import { shallow } from 'zustand/shallow';
 2 | 
 3 | import { useStore } from '../hooks/useStore';
 4 | import type { Node, ReactFlowState } from '../types';
 5 | 
 6 | const nodesSelector = (state: ReactFlowState) => state.nodes;
 7 | 
 8 | /**
 9 |  * This hook returns an array of the current nodes. Components that use this hook
10 |  * will re-render **whenever any node changes**, including when a node is selected
11 |  * or moved.
12 |  *
13 |  * @public
14 |  * @returns An array of all nodes currently in the flow.
15 |  *
16 |  * @example
17 |  * ```jsx
18 |  *import { useNodes } from '@xyflow/react';
19 |  *
20 |  *export default function() {
21 |  *  const nodes = useNodes();
22 |  *
23 |  *  return <div>There are currently {nodes.length} nodes!</div>;
24 |  *}
25 |  *```
26 |  */
27 | export function useNodes<NodeType extends Node = Node>(): NodeType[] {
28 |   const nodes = useStore(nodesSelector, shallow) as NodeType[];
29 | 
30 |   return nodes;
31 | }
32 | 


--------------------------------------------------------------------------------
/packages/react/src/hooks/useNodesData.ts:
--------------------------------------------------------------------------------
 1 | import { useCallback } from 'react';
 2 | import { shallowNodeData } from '@xyflow/system';
 3 | 
 4 | import { useStore } from '../hooks/useStore';
 5 | import type { Node } from '../types';
 6 | 
 7 | /**
 8 |  * This hook lets you subscribe to changes of a specific nodes `data` object.
 9 |  *
10 |  * @public
11 |  * @returns An object (or array of object) with `id`, `type`, `data` representing each node.
12 |  *
13 |  * @example
14 |  *```jsx
15 |  *import { useNodesData } from '@xyflow/react';
16 |  *
17 |  *export default function() {
18 |  *  const nodeData = useNodesData('nodeId-1');
19 |  *  const nodesData = useNodesData(['nodeId-1', 'nodeId-2']);
20 |  *
21 |  *  return null;
22 |  *}
23 |  *```
24 |  */
25 | export function useNodesData<NodeType extends Node = Node>(
26 |   /** The id of the node to get the data from. */
27 |   nodeId: string
28 | ): Pick<NodeType, 'id' | 'type' | 'data'> | null;
29 | export function useNodesData<NodeType extends Node = Node>(
30 |   /** The ids of the nodes to get the data from. */
31 |   nodeIds: string[]
32 | ): Pick<NodeType, 'id' | 'type' | 'data'>[];
33 | // eslint-disable-next-line @typescript-eslint/no-explicit-any
34 | export function useNodesData(nodeIds: any): any {
35 |   const nodesData = useStore(
36 |     useCallback(
37 |       (s) => {
38 |         const data = [];
39 |         const isArrayOfIds = Array.isArray(nodeIds);
40 |         const _nodeIds = isArrayOfIds ? nodeIds : [nodeIds];
41 | 
42 |         for (const nodeId of _nodeIds) {
43 |           const node = s.nodeLookup.get(nodeId);
44 |           if (node) {
45 |             data.push({
46 |               id: node.id,
47 |               type: node.type,
48 |               data: node.data,
49 |             });
50 |           }
51 |         }
52 | 
53 |         return isArrayOfIds ? data : data[0] ?? null;
54 |       },
55 |       [nodeIds]
56 |     ),
57 |     shallowNodeData
58 |   );
59 | 
60 |   return nodesData;
61 | }
62 | 


--------------------------------------------------------------------------------
/packages/react/src/hooks/useNodesEdgesState.ts:
--------------------------------------------------------------------------------
  1 | import { useState, useCallback, type Dispatch, type SetStateAction } from 'react';
  2 | 
  3 | import { applyNodeChanges, applyEdgeChanges } from '../utils/changes';
  4 | import type { Node, Edge, OnNodesChange, OnEdgesChange } from '../types';
  5 | 
  6 | /**
  7 |  * This hook makes it easy to prototype a controlled flow where you manage the
  8 |  * state of nodes and edges outside the `ReactFlowInstance`. You can think of it
  9 |  * like React's `useState` hook with an additional helper callback.
 10 |  *
 11 |  * @public
 12 |  * @returns
 13 |  * - `nodes`: The current array of nodes. You might pass this directly to the `nodes` prop of your
 14 |  * `<ReactFlow />` component, or you may want to manipulate it first to perform some layouting,
 15 |  * for example.
 16 |  * - `setNodes`: A function that you can use to update the nodes. You can pass it a new array of
 17 |  * nodes or a callback that receives the current array of nodes and returns a new array of nodes.
 18 |  * This is the same as the second element of the tuple returned by React's `useState` hook.
 19 |  * - `onNodesChange`: A handy callback that can take an array of `NodeChanges` and update the nodes
 20 |  * state accordingly. You'll typically pass this directly to the `onNodesChange` prop of your
 21 |  * `<ReactFlow />` component.
 22 |  * @example
 23 |  *
 24 |  *```tsx
 25 |  *import { ReactFlow, useNodesState, useEdgesState } from '@xyflow/react';
 26 |  *
 27 |  *const initialNodes = [];
 28 |  *const initialEdges = [];
 29 |  *
 30 |  *export default function () {
 31 |  *  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
 32 |  *  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
 33 |  *
 34 |  *  return (
 35 |  *    <ReactFlow
 36 |  *      nodes={nodes}
 37 |  *      edges={edges}
 38 |  *      onNodesChange={onNodesChange}
 39 |  *      onEdgesChange={onEdgesChange}
 40 |  *    />
 41 |  *  );
 42 |  *}
 43 |  *```
 44 |  *
 45 |  * @remarks This hook was created to make prototyping easier and our documentation
 46 |  * examples clearer. Although it is OK to use this hook in production, in
 47 |  * practice you may want to use a more sophisticated state management solution
 48 |  * like Zustand {@link https://reactflow.dev/docs/guides/state-management/} instead.
 49 |  *
 50 |  */
 51 | export function useNodesState<NodeType extends Node>(
 52 |   initialNodes: NodeType[]
 53 | ): [
 54 |   //
 55 |   nodes: NodeType[],
 56 |   setNodes: Dispatch<SetStateAction<NodeType[]>>,
 57 |   onNodesChange: OnNodesChange<NodeType>
 58 | ] {
 59 |   const [nodes, setNodes] = useState(initialNodes);
 60 |   const onNodesChange: OnNodesChange<NodeType> = useCallback(
 61 |     (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
 62 |     []
 63 |   );
 64 | 
 65 |   return [nodes, setNodes, onNodesChange];
 66 | }
 67 | 
 68 | /**
 69 |  * This hook makes it easy to prototype a controlled flow where you manage the
 70 |  * state of nodes and edges outside the `ReactFlowInstance`. You can think of it
 71 |  * like React's `useState` hook with an additional helper callback.
 72 |  *
 73 |  * @public
 74 |  * @returns
 75 |  * - `edges`: The current array of edges. You might pass this directly to the `edges` prop of your
 76 |  * `<ReactFlow />` component, or you may want to manipulate it first to perform some layouting,
 77 |  * for example.
 78 |  *
 79 |  * - `setEdges`: A function that you can use to update the edges. You can pass it a new array of
 80 |  * edges or a callback that receives the current array of edges and returns a new array of edges.
 81 |  * This is the same as the second element of the tuple returned by React's `useState` hook.
 82 |  *
 83 |  * - `onEdgesChange`: A handy callback that can take an array of `EdgeChanges` and update the edges
 84 |  * state accordingly. You'll typically pass this directly to the `onEdgesChange` prop of your
 85 |  * `<ReactFlow />` component.
 86 |  * @example
 87 |  *
 88 |  *```tsx
 89 |  *import { ReactFlow, useNodesState, useEdgesState } from '@xyflow/react';
 90 |  *
 91 |  *const initialNodes = [];
 92 |  *const initialEdges = [];
 93 |  *
 94 |  *export default function () {
 95 |  *  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
 96 |  *  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
 97 |  *
 98 |  *  return (
 99 |  *    <ReactFlow
100 |  *      nodes={nodes}
101 |  *      edges={edges}
102 |  *      onNodesChange={onNodesChange}
103 |  *      onEdgesChange={onEdgesChange}
104 |  *    />
105 |  *  );
106 |  *}
107 |  *```
108 |  *
109 |  * @remarks This hook was created to make prototyping easier and our documentation
110 |  * examples clearer. Although it is OK to use this hook in production, in
111 |  * practice you may want to use a more sophisticated state management solution
112 |  * like Zustand {@link https://reactflow.dev/docs/guides/state-management/} instead.
113 |  *
114 |  */
115 | export function useEdgesState<EdgeType extends Edge = Edge>(
116 |   initialEdges: EdgeType[]
117 | ): [
118 |   //
119 |   edges: EdgeType[],
120 |   setEdges: Dispatch<SetStateAction<EdgeType[]>>,
121 |   onEdgesChange: OnEdgesChange<EdgeType>
122 | ] {
123 |   const [edges, setEdges] = useState(initialEdges);
124 |   const onEdgesChange: OnEdgesChange<EdgeType> = useCallback(
125 |     (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
126 |     []
127 |   );
128 | 
129 |   return [edges, setEdges, onEdgesChange];
130 | }
131 | 


--------------------------------------------------------------------------------
/packages/react/src/hooks/useNodesInitialized.ts:
--------------------------------------------------------------------------------
 1 | import { nodeHasDimensions } from '@xyflow/system';
 2 | 
 3 | import { useStore } from './useStore';
 4 | import type { ReactFlowState } from '../types';
 5 | 
 6 | export type UseNodesInitializedOptions = {
 7 |   /** @default false */
 8 |   includeHiddenNodes?: boolean;
 9 | };
10 | 
11 | const selector = (options: UseNodesInitializedOptions) => (s: ReactFlowState) => {
12 |   if (s.nodeLookup.size === 0) {
13 |     return false;
14 |   }
15 | 
16 |   for (const [, { hidden, internals }] of s.nodeLookup) {
17 |     if (options.includeHiddenNodes || !hidden) {
18 |       if (internals.handleBounds === undefined || !nodeHasDimensions(internals.userNode)) {
19 |         return false;
20 |       }
21 |     }
22 |   }
23 | 
24 |   return true;
25 | };
26 | 
27 | /**
28 |  * This hook tells you whether all the nodes in a flow have been measured and given
29 |  *a width and height. When you add a node to the flow, this hook will return
30 |  *`false` and then `true` again once the node has been measured.
31 |  *
32 |  * @public
33 |  * @returns Whether or not the nodes have been initialized by the `<ReactFlow />` component and
34 |  * given a width and height.
35 |  *
36 |  * @example
37 |  * ```jsx
38 |  *import { useReactFlow, useNodesInitialized } from '@xyflow/react';
39 |  *import { useEffect, useState } from 'react';
40 |  *
41 |  *const options = {
42 |  *  includeHiddenNodes: false,
43 |  *};
44 |  *
45 |  *export default function useLayout() {
46 |  *  const { getNodes } = useReactFlow();
47 |  *  const nodesInitialized = useNodesInitialized(options);
48 |  *  const [layoutedNodes, setLayoutedNodes] = useState(getNodes());
49 |  *
50 |  *  useEffect(() => {
51 |  *    if (nodesInitialized) {
52 |  *      setLayoutedNodes(yourLayoutingFunction(getNodes()));
53 |  *    }
54 |  *  }, [nodesInitialized]);
55 |  *
56 |  *  return layoutedNodes;
57 |  *}
58 |  *```
59 |  */
60 | export function useNodesInitialized(
61 |   options: UseNodesInitializedOptions = {
62 |     includeHiddenNodes: false,
63 |   }
64 | ): boolean {
65 |   const initialized = useStore(selector(options));
66 | 
67 |   return initialized;
68 | }
69 | 


--------------------------------------------------------------------------------
/packages/react/src/hooks/useOnInitHandler.ts:
--------------------------------------------------------------------------------
 1 | import { useEffect, useRef } from 'react';
 2 | 
 3 | import { useReactFlow } from './useReactFlow';
 4 | import type { OnInit, Node, Edge } from '../types';
 5 | 
 6 | /**
 7 |  * Hook for calling onInit handler.
 8 |  *
 9 |  * @internal
10 |  */
11 | export function useOnInitHandler<NodeType extends Node = Node, EdgeType extends Edge = Edge>(
12 |   onInit: OnInit<NodeType, EdgeType> | undefined
13 | ) {
14 |   const rfInstance = useReactFlow<NodeType, EdgeType>();
15 |   const isInitialized = useRef<boolean>(false);
16 | 
17 |   useEffect(() => {
18 |     if (!isInitialized.current && rfInstance.viewportInitialized && onInit) {
19 |       setTimeout(() => onInit(rfInstance), 1);
20 |       isInitialized.current = true;
21 |     }
22 |   }, [onInit, rfInstance.viewportInitialized]);
23 | }
24 | 


--------------------------------------------------------------------------------
/packages/react/src/hooks/useOnSelectionChange.ts:
--------------------------------------------------------------------------------
 1 | import { useEffect } from 'react';
 2 | 
 3 | import { useStoreApi } from './useStore';
 4 | import type { OnSelectionChangeFunc, Node, Edge } from '../types';
 5 | 
 6 | export type UseOnSelectionChangeOptions<NodeType extends Node = Node, EdgeType extends Edge = Edge> = {
 7 |   /** The handler to register. */
 8 |   onChange: OnSelectionChangeFunc<NodeType, EdgeType>;
 9 | };
10 | 
11 | /**
12 |  * This hook lets you listen for changes to both node and edge selection. As the
13 |  *name implies, the callback you provide will be called whenever the selection of
14 |  *_either_ nodes or edges changes.
15 |  *
16 |  * @public
17 |  * @example
18 |  * ```jsx
19 |  *import { useState } from 'react';
20 |  *import { ReactFlow, useOnSelectionChange } from '@xyflow/react';
21 |  *
22 |  *function SelectionDisplay() {
23 |  *  const [selectedNodes, setSelectedNodes] = useState([]);
24 |  *  const [selectedEdges, setSelectedEdges] = useState([]);
25 |  *
26 |  *  // the passed handler has to be memoized, otherwise the hook will not work correctly
27 |  *  const onChange = useCallback(({ nodes, edges }) => {
28 |  *    setSelectedNodes(nodes.map((node) => node.id));
29 |  *    setSelectedEdges(edges.map((edge) => edge.id));
30 |  *  }, []);
31 |  *
32 |  *  useOnSelectionChange({
33 |  *    onChange,
34 |  *  });
35 |  *
36 |  *  return (
37 |  *    <div>
38 |  *      <p>Selected nodes: {selectedNodes.join(', ')}</p>
39 |  *      <p>Selected edges: {selectedEdges.join(', ')}</p>
40 |  *    </div>
41 |  *  );
42 |  *}
43 |  *```
44 |  *
45 |  * @remarks You need to memoize the passed `onChange` handler, otherwise the hook will not work correctly.
46 |  */
47 | export function useOnSelectionChange<NodeType extends Node = Node, EdgeType extends Edge = Edge>({
48 |   onChange,
49 | }: UseOnSelectionChangeOptions<NodeType, EdgeType>) {
50 |   const store = useStoreApi<NodeType, EdgeType>();
51 | 
52 |   useEffect(() => {
53 |     const nextOnSelectionChangeHandlers = [...store.getState().onSelectionChangeHandlers, onChange];
54 |     store.setState({ onSelectionChangeHandlers: nextOnSelectionChangeHandlers });
55 | 
56 |     return () => {
57 |       const nextHandlers = store.getState().onSelectionChangeHandlers.filter((fn) => fn !== onChange);
58 |       store.setState({ onSelectionChangeHandlers: nextHandlers });
59 |     };
60 |   }, [onChange]);
61 | }
62 | 


--------------------------------------------------------------------------------
/packages/react/src/hooks/useOnViewportChange.ts:
--------------------------------------------------------------------------------
 1 | import { useEffect } from 'react';
 2 | import type { OnViewportChange } from '@xyflow/system';
 3 | 
 4 | import { useStoreApi } from './useStore';
 5 | 
 6 | export type UseOnViewportChangeOptions = {
 7 |   /** Gets called when the viewport starts changing. */
 8 |   onStart?: OnViewportChange;
 9 |   /** Gets called when the viewport changes. */
10 |   onChange?: OnViewportChange;
11 |   /** Gets called when the viewport stops changing. */
12 |   onEnd?: OnViewportChange;
13 | };
14 | 
15 | /**
16 |  * The `useOnViewportChange` hook lets you listen for changes to the viewport such
17 |  * as panning and zooming. You can provide a callback for each phase of a viewport
18 |  * change: `onStart`, `onChange`, and `onEnd`.
19 |  *
20 |  * @public
21 |  * @example
22 |  * ```jsx
23 |  *import { useCallback } from 'react';
24 |  *import { useOnViewportChange } from '@xyflow/react';
25 |  *
26 |  *function ViewportChangeLogger() {
27 |  *  useOnViewportChange({
28 |  *    onStart: (viewport: Viewport) => console.log('start', viewport),
29 |  *    onChange: (viewport: Viewport) => console.log('change', viewport),
30 |  *    onEnd: (viewport: Viewport) => console.log('end', viewport),
31 |  *  });
32 |  *
33 |  *  return null;
34 |  *}
35 |  *```
36 |  */
37 | export function useOnViewportChange({ onStart, onChange, onEnd }: UseOnViewportChangeOptions) {
38 |   const store = useStoreApi();
39 | 
40 |   useEffect(() => {
41 |     store.setState({ onViewportChangeStart: onStart });
42 |   }, [onStart]);
43 | 
44 |   useEffect(() => {
45 |     store.setState({ onViewportChange: onChange });
46 |   }, [onChange]);
47 | 
48 |   useEffect(() => {
49 |     store.setState({ onViewportChangeEnd: onEnd });
50 |   }, [onEnd]);
51 | }
52 | 


--------------------------------------------------------------------------------
/packages/react/src/hooks/useResizeHandler.ts:
--------------------------------------------------------------------------------
 1 | import { useEffect, type MutableRefObject } from 'react';
 2 | import { errorMessages, getDimensions } from '@xyflow/system';
 3 | 
 4 | import { useStoreApi } from '../hooks/useStore';
 5 | 
 6 | /**
 7 |  * Hook for handling resize events.
 8 |  *
 9 |  * @internal
10 |  */
11 | export function useResizeHandler(domNode: MutableRefObject<HTMLDivElement | null>): void {
12 |   const store = useStoreApi();
13 | 
14 |   useEffect(() => {
15 |     const updateDimensions = () => {
16 |       if (!domNode.current) {
17 |         return false;
18 |       }
19 |       const size = getDimensions(domNode.current);
20 | 
21 |       if (size.height === 0 || size.width === 0) {
22 |         store.getState().onError?.('004', errorMessages['error004']());
23 |       }
24 | 
25 |       store.setState({ width: size.width || 500, height: size.height || 500 });
26 |     };
27 | 
28 |     if (domNode.current) {
29 |       updateDimensions();
30 |       window.addEventListener('resize', updateDimensions);
31 | 
32 |       const resizeObserver = new ResizeObserver(() => updateDimensions());
33 |       resizeObserver.observe(domNode.current);
34 | 
35 |       return () => {
36 |         window.removeEventListener('resize', updateDimensions);
37 | 
38 |         if (resizeObserver && domNode.current) {
39 |           resizeObserver.unobserve(domNode.current);
40 |         }
41 |       };
42 |     }
43 |   }, []);
44 | }
45 | 


--------------------------------------------------------------------------------
/packages/react/src/hooks/useStore.ts:
--------------------------------------------------------------------------------
 1 | import { useContext, useMemo } from 'react';
 2 | import { UseBoundStoreWithEqualityFn, useStoreWithEqualityFn as useZustandStore } from 'zustand/traditional';
 3 | import { StoreApi } from 'zustand';
 4 | import { errorMessages } from '@xyflow/system';
 5 | 
 6 | import StoreContext from '../contexts/StoreContext';
 7 | import type { Edge, Node, ReactFlowState } from '../types';
 8 | 
 9 | const zustandErrorMessage = errorMessages['error001']();
10 | 
11 | /**
12 |  * This hook can be used to subscribe to internal state changes of the React Flow
13 |  * component. The `useStore` hook is re-exported from the [Zustand](https://github.com/pmndrs/zustand)
14 |  * state management library, so you should check out their docs for more details.
15 |  *
16 |  * @public
17 |  * @param selector - A selector function that returns a slice of the flow's internal state.
18 |  * Extracting or transforming just the state you need is a good practice to avoid unnecessary
19 |  * re-renders.
20 |  * @param equalityFn - A function to compare the previous and next value. This is incredibly useful
21 |  * for preventing unnecessary re-renders. Good sensible defaults are using `Object.is` or importing
22 |  * `zustand/shallow`, but you can be as granular as you like.
23 |  * @returns The selected state slice.
24 |  *
25 |  * @example
26 |  * ```ts
27 |  * const nodes = useStore((state) => state.nodes);
28 |  * ```
29 |  *
30 |  * @remarks This hook should only be used if there is no other way to access the internal
31 |  * state. For many of the common use cases, there are dedicated hooks available
32 |  * such as {@link useReactFlow}, {@link useViewport}, etc.
33 |  */
34 | function useStore<StateSlice = unknown>(
35 |   selector: (state: ReactFlowState) => StateSlice,
36 |   equalityFn?: (a: StateSlice, b: StateSlice) => boolean
37 | ) {
38 |   const store = useContext(StoreContext);
39 | 
40 |   if (store === null) {
41 |     throw new Error(zustandErrorMessage);
42 |   }
43 | 
44 |   return useZustandStore(store, selector, equalityFn);
45 | }
46 | 
47 | /**
48 |  * In some cases, you might need to access the store directly. This hook returns the store object which can be used on demand to access the state or dispatch actions.
49 |  *
50 |  * @returns The store object.
51 |  * @example
52 |  * ```ts
53 |  * const store = useStoreApi();
54 |  * ```
55 |  *
56 |  * @remarks This hook should only be used if there is no other way to access the internal
57 |  * state. For many of the common use cases, there are dedicated hooks available
58 |  * such as {@link useReactFlow}, {@link useViewport}, etc.
59 |  */
60 | function useStoreApi<NodeType extends Node = Node, EdgeType extends Edge = Edge>() {
61 |   const store = useContext(StoreContext) as UseBoundStoreWithEqualityFn<
62 |     StoreApi<ReactFlowState<NodeType, EdgeType>>
63 |   > | null;
64 | 
65 |   if (store === null) {
66 |     throw new Error(zustandErrorMessage);
67 |   }
68 | 
69 |   return useMemo(
70 |     () => ({
71 |       getState: store.getState,
72 |       setState: store.setState,
73 |       subscribe: store.subscribe,
74 |     }),
75 |     [store]
76 |   );
77 | }
78 | 
79 | export { useStore, useStoreApi };
80 | 


--------------------------------------------------------------------------------
/packages/react/src/hooks/useUpdateNodeInternals.ts:
--------------------------------------------------------------------------------
 1 | import { useCallback } from 'react';
 2 | import type { UpdateNodeInternals, InternalNodeUpdate } from '@xyflow/system';
 3 | 
 4 | import { useStoreApi } from '../hooks/useStore';
 5 | 
 6 | /**
 7 |  * When you programmatically add or remove handles to a node or update a node's
 8 |  * handle position, you need to let React Flow know about it using this hook. This
 9 |  * will update the internal dimensions of the node and properly reposition handles
10 |  * on the canvas if necessary.
11 |  *
12 |  * @public
13 |  * @returns Use this function to tell React Flow to update the internal state of one or more nodes
14 |  * that you have changed programmatically.
15 |  *
16 |  * @example
17 |  * ```jsx
18 |  *import { useCallback, useState } from 'react';
19 |  *import { Handle, useUpdateNodeInternals } from '@xyflow/react';
20 |  *
21 |  *export default function RandomHandleNode({ id }) {
22 |  *  const updateNodeInternals = useUpdateNodeInternals();
23 |  *  const [handleCount, setHandleCount] = useState(0);
24 |  *  const randomizeHandleCount = useCallback(() => {
25 |  *   setHandleCount(Math.floor(Math.random() * 10));
26 |  *    updateNodeInternals(id);
27 |  *  }, [id, updateNodeInternals]);
28 |  *
29 |  *  return (
30 |  *    <>
31 |  *      {Array.from({ length: handleCount }).map((_, index) => (
32 |  *        <Handle
33 |  *          key={index}
34 |  *          type="target"
35 |  *          position="left"
36 |  *          id={`handle-${index}`}
37 |  *        />
38 |  *      ))}
39 |  *
40 |  *      <div>
41 |  *        <button onClick={randomizeHandleCount}>Randomize handle count</button>
42 |  *        <p>There are {handleCount} handles on this node.</p>
43 |  *      </div>
44 |  *    </>
45 |  *  );
46 |  *}
47 |  *```
48 |  * @remarks This hook can only be used in a component that is a child of a
49 |  *{@link ReactFlowProvider} or a {@link ReactFlow} component.
50 |  */
51 | export function useUpdateNodeInternals(): UpdateNodeInternals {
52 |   const store = useStoreApi();
53 | 
54 |   return useCallback<UpdateNodeInternals>((id: string | string[]) => {
55 |     const { domNode, updateNodeInternals } = store.getState();
56 |     const updateIds = Array.isArray(id) ? id : [id];
57 |     const updates = new Map<string, InternalNodeUpdate>();
58 | 
59 |     updateIds.forEach((updateId) => {
60 |       const nodeElement = domNode?.querySelector(`.react-flow__node[data-id="${updateId}"]`) as HTMLDivElement;
61 | 
62 |       if (nodeElement) {
63 |         updates.set(updateId, { id: updateId, nodeElement, force: true });
64 |       }
65 |     });
66 | 
67 |     requestAnimationFrame(() => updateNodeInternals(updates, { triggerFitView: false }));
68 |   }, []);
69 | }
70 | 


--------------------------------------------------------------------------------
/packages/react/src/hooks/useViewport.ts:
--------------------------------------------------------------------------------
 1 | import { shallow } from 'zustand/shallow';
 2 | import type { Viewport } from '@xyflow/system';
 3 | 
 4 | import { useStore } from '../hooks/useStore';
 5 | import type { ReactFlowState } from '../types';
 6 | 
 7 | const viewportSelector = (state: ReactFlowState) => ({
 8 |   x: state.transform[0],
 9 |   y: state.transform[1],
10 |   zoom: state.transform[2],
11 | });
12 | 
13 | /**
14 |  * The `useViewport` hook is a convenient way to read the current state of the
15 |  * {@link Viewport} in a component. Components that use this hook
16 |  * will re-render **whenever the viewport changes**.
17 |  *
18 |  * @public
19 |  * @returns The current viewport.
20 |  *
21 |  * @example
22 |  *
23 |  *```jsx
24 |  *import { useViewport } from '@xyflow/react';
25 |  *
26 |  *export default function ViewportDisplay() {
27 |  *  const { x, y, zoom } = useViewport();
28 |  *
29 |  *  return (
30 |  *    <div>
31 |  *      <p>
32 |  *        The viewport is currently at ({x}, {y}) and zoomed to {zoom}.
33 |  *      </p>
34 |  *    </div>
35 |  *  );
36 |  *}
37 |  *```
38 |  *
39 |  * @remarks This hook can only be used in a component that is a child of a
40 |  *{@link ReactFlowProvider} or a {@link ReactFlow} component.
41 |  */
42 | export function useViewport(): Viewport {
43 |   const viewport = useStore(viewportSelector, shallow);
44 | 
45 |   return viewport;
46 | }
47 | 


--------------------------------------------------------------------------------
/packages/react/src/hooks/useViewportHelper.ts:
--------------------------------------------------------------------------------
  1 | import { useMemo } from 'react';
  2 | import {
  3 |   pointToRendererPoint,
  4 |   getViewportForBounds,
  5 |   type XYPosition,
  6 |   rendererPointToPoint,
  7 |   SnapGrid,
  8 | } from '@xyflow/system';
  9 | 
 10 | import { useStoreApi } from '../hooks/useStore';
 11 | import type { ViewportHelperFunctions } from '../types';
 12 | 
 13 | /**
 14 |  * Hook for getting viewport helper functions.
 15 |  *
 16 |  * @internal
 17 |  * @returns viewport helper functions
 18 |  */
 19 | const useViewportHelper = (): ViewportHelperFunctions => {
 20 |   const store = useStoreApi();
 21 | 
 22 |   return useMemo<ViewportHelperFunctions>(() => {
 23 |     return {
 24 |       zoomIn: (options) => {
 25 |         const { panZoom } = store.getState();
 26 | 
 27 |         return panZoom ? panZoom.scaleBy(1.2, { duration: options?.duration }) : Promise.resolve(false);
 28 |       },
 29 |       zoomOut: (options) => {
 30 |         const { panZoom } = store.getState();
 31 | 
 32 |         return panZoom ? panZoom.scaleBy(1 / 1.2, { duration: options?.duration }) : Promise.resolve(false);
 33 |       },
 34 |       zoomTo: (zoomLevel, options) => {
 35 |         const { panZoom } = store.getState();
 36 | 
 37 |         return panZoom ? panZoom.scaleTo(zoomLevel, { duration: options?.duration }) : Promise.resolve(false);
 38 |       },
 39 |       getZoom: () => store.getState().transform[2],
 40 |       setViewport: async (viewport, options) => {
 41 |         const {
 42 |           transform: [tX, tY, tZoom],
 43 |           panZoom,
 44 |         } = store.getState();
 45 | 
 46 |         if (!panZoom) {
 47 |           return Promise.resolve(false);
 48 |         }
 49 | 
 50 |         await panZoom.setViewport(
 51 |           {
 52 |             x: viewport.x ?? tX,
 53 |             y: viewport.y ?? tY,
 54 |             zoom: viewport.zoom ?? tZoom,
 55 |           },
 56 |           { duration: options?.duration }
 57 |         );
 58 | 
 59 |         return Promise.resolve(true);
 60 |       },
 61 |       getViewport: () => {
 62 |         const [x, y, zoom] = store.getState().transform;
 63 |         return { x, y, zoom };
 64 |       },
 65 |       setCenter: async (x, y, options) => {
 66 |         const { width, height, maxZoom, panZoom } = store.getState();
 67 |         const nextZoom = typeof options?.zoom !== 'undefined' ? options.zoom : maxZoom;
 68 |         const centerX = width / 2 - x * nextZoom;
 69 |         const centerY = height / 2 - y * nextZoom;
 70 | 
 71 |         if (!panZoom) {
 72 |           return Promise.resolve(false);
 73 |         }
 74 | 
 75 |         await panZoom.setViewport(
 76 |           {
 77 |             x: centerX,
 78 |             y: centerY,
 79 |             zoom: nextZoom,
 80 |           },
 81 |           { duration: options?.duration }
 82 |         );
 83 | 
 84 |         return Promise.resolve(true);
 85 |       },
 86 |       fitBounds: async (bounds, options) => {
 87 |         const { width, height, minZoom, maxZoom, panZoom } = store.getState();
 88 |         const viewport = getViewportForBounds(bounds, width, height, minZoom, maxZoom, options?.padding ?? 0.1);
 89 | 
 90 |         if (!panZoom) {
 91 |           return Promise.resolve(false);
 92 |         }
 93 | 
 94 |         await panZoom.setViewport(viewport, { duration: options?.duration });
 95 | 
 96 |         return Promise.resolve(true);
 97 |       },
 98 |       screenToFlowPosition: (
 99 |         clientPosition: XYPosition,
100 |         options: { snapToGrid?: boolean; snapGrid?: SnapGrid } = {}
101 |       ) => {
102 |         const { transform, snapGrid, snapToGrid, domNode } = store.getState();
103 | 
104 |         if (!domNode) {
105 |           return clientPosition;
106 |         }
107 | 
108 |         const { x: domX, y: domY } = domNode.getBoundingClientRect();
109 |         const correctedPosition = {
110 |           x: clientPosition.x - domX,
111 |           y: clientPosition.y - domY,
112 |         };
113 |         const _snapGrid = options.snapGrid ?? snapGrid;
114 |         const _snapToGrid = options.snapToGrid ?? snapToGrid;
115 | 
116 |         return pointToRendererPoint(correctedPosition, transform, _snapToGrid, _snapGrid);
117 |       },
118 |       flowToScreenPosition: (flowPosition: XYPosition) => {
119 |         const { transform, domNode } = store.getState();
120 | 
121 |         if (!domNode) {
122 |           return flowPosition;
123 |         }
124 | 
125 |         const { x: domX, y: domY } = domNode.getBoundingClientRect();
126 |         const rendererPosition = rendererPointToPoint(flowPosition, transform);
127 | 
128 |         return {
129 |           x: rendererPosition.x + domX,
130 |           y: rendererPosition.y + domY,
131 |         };
132 |       },
133 |     };
134 |   }, []);
135 | };
136 | 
137 | export default useViewportHelper;
138 | 


--------------------------------------------------------------------------------
/packages/react/src/hooks/useViewportSync.ts:
--------------------------------------------------------------------------------
 1 | import { useEffect } from 'react';
 2 | import type { Viewport } from '@xyflow/system';
 3 | 
 4 | import { useStore, useStoreApi } from './useStore';
 5 | import type { ReactFlowState } from '../types';
 6 | 
 7 | const selector = (state: ReactFlowState) => state.panZoom?.syncViewport;
 8 | 
 9 | /**
10 |  * Hook for syncing the viewport with the panzoom instance.
11 |  *
12 |  * @internal
13 |  * @param viewport
14 |  */
15 | export function useViewportSync(viewport?: Viewport) {
16 |   const syncViewport = useStore(selector);
17 |   const store = useStoreApi();
18 | 
19 |   useEffect(() => {
20 |     if (viewport) {
21 |       syncViewport?.(viewport);
22 |       store.setState({ transform: [viewport.x, viewport.y, viewport.zoom] });
23 |     }
24 |   }, [viewport, syncViewport]);
25 | 
26 |   return null;
27 | }
28 | 


--------------------------------------------------------------------------------
/packages/react/src/hooks/useVisibleEdgeIds.ts:
--------------------------------------------------------------------------------
 1 | import { useCallback } from 'react';
 2 | import { shallow } from 'zustand/shallow';
 3 | import { isEdgeVisible } from '@xyflow/system';
 4 | 
 5 | import { useStore } from './useStore';
 6 | import { type ReactFlowState } from '../types';
 7 | 
 8 | /**
 9 |  * Hook for getting the visible edge ids from the store.
10 |  *
11 |  * @internal
12 |  * @param onlyRenderVisible
13 |  * @returns array with visible edge ids
14 |  */
15 | export function useVisibleEdgeIds(onlyRenderVisible: boolean): string[] {
16 |   const edgeIds = useStore(
17 |     useCallback(
18 |       (s: ReactFlowState) => {
19 |         if (!onlyRenderVisible) {
20 |           return s.edges.map((edge) => edge.id);
21 |         }
22 | 
23 |         const visibleEdgeIds = [];
24 | 
25 |         if (s.width && s.height) {
26 |           for (const edge of s.edges) {
27 |             const sourceNode = s.nodeLookup.get(edge.source);
28 |             const targetNode = s.nodeLookup.get(edge.target);
29 | 
30 |             if (
31 |               sourceNode &&
32 |               targetNode &&
33 |               isEdgeVisible({
34 |                 sourceNode,
35 |                 targetNode,
36 |                 width: s.width,
37 |                 height: s.height,
38 |                 transform: s.transform,
39 |               })
40 |             ) {
41 |               visibleEdgeIds.push(edge.id);
42 |             }
43 |           }
44 |         }
45 | 
46 |         return visibleEdgeIds;
47 |       },
48 |       [onlyRenderVisible]
49 |     ),
50 |     shallow
51 |   );
52 | 
53 |   return edgeIds;
54 | }
55 | 


--------------------------------------------------------------------------------
/packages/react/src/hooks/useVisibleNodeIds.ts:
--------------------------------------------------------------------------------
 1 | import { useCallback } from 'react';
 2 | import { shallow } from 'zustand/shallow';
 3 | import { getNodesInside } from '@xyflow/system';
 4 | 
 5 | import { useStore } from './useStore';
 6 | import type { Node, ReactFlowState } from '../types';
 7 | 
 8 | const selector = (onlyRenderVisible: boolean) => (s: ReactFlowState) => {
 9 |   return onlyRenderVisible
10 |     ? getNodesInside<Node>(s.nodeLookup, { x: 0, y: 0, width: s.width, height: s.height }, s.transform, true).map(
11 |       (node) => node.id
12 |     )
13 |     : Array.from(s.nodeLookup.keys());
14 | };
15 | 
16 | /**
17 |  * Hook for getting the visible node ids from the store.
18 |  *
19 |  * @internal
20 |  * @param onlyRenderVisible
21 |  * @returns array with visible node ids
22 |  */
23 | export function useVisibleNodeIds(onlyRenderVisible: boolean) {
24 |   const nodeIds = useStore(useCallback(selector(onlyRenderVisible), [onlyRenderVisible]), shallow);
25 | 
26 |   return nodeIds;
27 | }
28 | 


--------------------------------------------------------------------------------
/packages/react/src/index.ts:
--------------------------------------------------------------------------------
  1 | export { default as ReactFlow } from './container/ReactFlow';
  2 | export { Handle, type HandleProps } from './components/Handle';
  3 | export { EdgeText } from './components/Edges/EdgeText';
  4 | export { StraightEdge } from './components/Edges/StraightEdge';
  5 | export { StepEdge } from './components/Edges/StepEdge';
  6 | export { BezierEdge } from './components/Edges/BezierEdge';
  7 | export { SimpleBezierEdge, getSimpleBezierPath } from './components/Edges/SimpleBezierEdge';
  8 | export { SmoothStepEdge } from './components/Edges/SmoothStepEdge';
  9 | export { BaseEdge } from './components/Edges/BaseEdge';
 10 | export { ReactFlowProvider } from './components/ReactFlowProvider';
 11 | export { Panel, type PanelProps } from './components/Panel';
 12 | export { EdgeLabelRenderer, type EdgeLabelRendererProps } from './components/EdgeLabelRenderer';
 13 | export { ViewportPortal } from './components/ViewportPortal';
 14 | 
 15 | export { useReactFlow } from './hooks/useReactFlow';
 16 | export { useUpdateNodeInternals } from './hooks/useUpdateNodeInternals';
 17 | export { useNodes } from './hooks/useNodes';
 18 | export { useEdges } from './hooks/useEdges';
 19 | export { useViewport } from './hooks/useViewport';
 20 | export { useKeyPress } from './hooks/useKeyPress';
 21 | export { useNodesState, useEdgesState } from './hooks/useNodesEdgesState';
 22 | export { useStore, useStoreApi } from './hooks/useStore';
 23 | export { useOnViewportChange, type UseOnViewportChangeOptions } from './hooks/useOnViewportChange';
 24 | export { useOnSelectionChange, type UseOnSelectionChangeOptions } from './hooks/useOnSelectionChange';
 25 | export { useNodesInitialized, type UseNodesInitializedOptions } from './hooks/useNodesInitialized';
 26 | export { useHandleConnections } from './hooks/useHandleConnections';
 27 | export { useNodeConnections } from './hooks/useNodeConnections';
 28 | export { useNodesData } from './hooks/useNodesData';
 29 | export { useConnection } from './hooks/useConnection';
 30 | export { useInternalNode } from './hooks/useInternalNode';
 31 | export { useNodeId } from './contexts/NodeIdContext';
 32 | 
 33 | export { applyNodeChanges, applyEdgeChanges } from './utils/changes';
 34 | export { isNode, isEdge } from './utils/general';
 35 | 
 36 | export * from './additional-components';
 37 | 
 38 | export * from './types';
 39 | 
 40 | // system types
 41 | export {
 42 |   type Align,
 43 |   type SmoothStepPathOptions,
 44 |   type BezierPathOptions,
 45 |   ConnectionLineType,
 46 |   type EdgeMarker,
 47 |   type EdgeMarkerType,
 48 |   MarkerType,
 49 |   type OnMove,
 50 |   type OnMoveStart,
 51 |   type OnMoveEnd,
 52 |   type Connection,
 53 |   ConnectionMode,
 54 |   type OnConnectStartParams,
 55 |   type OnConnectStart,
 56 |   type OnConnect,
 57 |   type OnConnectEnd,
 58 |   type Viewport,
 59 |   type SnapGrid,
 60 |   PanOnScrollMode,
 61 |   type ViewportHelperFunctionOptions,
 62 |   type SetCenterOptions,
 63 |   type FitBoundsOptions,
 64 |   type PanelPosition,
 65 |   type ProOptions,
 66 |   SelectionMode,
 67 |   type SelectionRect,
 68 |   type OnError,
 69 |   type NodeOrigin,
 70 |   type OnSelectionDrag,
 71 |   Position,
 72 |   type XYPosition,
 73 |   type XYZPosition,
 74 |   type Dimensions,
 75 |   type Rect,
 76 |   type Box,
 77 |   type Transform,
 78 |   type CoordinateExtent,
 79 |   type ColorMode,
 80 |   type ColorModeClass,
 81 |   type HandleType,
 82 |   type ShouldResize,
 83 |   type OnResizeStart,
 84 |   type OnResize,
 85 |   type OnResizeEnd,
 86 |   type ControlPosition,
 87 |   type ControlLinePosition,
 88 |   ResizeControlVariant,
 89 |   type ResizeParams,
 90 |   type ResizeParamsWithDirection,
 91 |   type ResizeDragEvent,
 92 |   type NodeChange,
 93 |   type NodeDimensionChange,
 94 |   type NodePositionChange,
 95 |   type NodeSelectionChange,
 96 |   type NodeRemoveChange,
 97 |   type NodeAddChange,
 98 |   type NodeReplaceChange,
 99 |   type EdgeChange,
100 |   type EdgeSelectionChange,
101 |   type EdgeRemoveChange,
102 |   type EdgeAddChange,
103 |   type EdgeReplaceChange,
104 |   type KeyCode,
105 |   type ConnectionState,
106 |   type FinalConnectionState,
107 |   type ConnectionInProgress,
108 |   type NoConnection,
109 |   type NodeConnection,
110 | } from '@xyflow/system';
111 | 
112 | // we need this workaround to prevent a duplicate identifier error
113 | import { type Handle as HandleBound } from '@xyflow/system';
114 | export type Handle = HandleBound;
115 | 
116 | // system utils
117 | export {
118 |   type GetBezierPathParams,
119 |   getBezierEdgeCenter,
120 |   getBezierPath,
121 |   getEdgeCenter,
122 |   type GetSmoothStepPathParams,
123 |   getSmoothStepPath,
124 |   type GetStraightPathParams,
125 |   getStraightPath,
126 |   getViewportForBounds,
127 |   getNodesBounds,
128 |   getIncomers,
129 |   getOutgoers,
130 |   addEdge,
131 |   reconnectEdge,
132 |   getConnectedEdges,
133 | } from '@xyflow/system';
134 | 


--------------------------------------------------------------------------------
/packages/react/src/store/initialState.ts:
--------------------------------------------------------------------------------
  1 | import {
  2 |   infiniteExtent,
  3 |   ConnectionMode,
  4 |   adoptUserNodes,
  5 |   getViewportForBounds,
  6 |   Transform,
  7 |   updateConnectionLookup,
  8 |   devWarn,
  9 |   getInternalNodesBounds,
 10 |   NodeOrigin,
 11 |   initialConnection,
 12 |   CoordinateExtent,
 13 | } from '@xyflow/system';
 14 | 
 15 | import type { Edge, InternalNode, Node, ReactFlowStore } from '../types';
 16 | 
 17 | const getInitialState = ({
 18 |   nodes,
 19 |   edges,
 20 |   defaultNodes,
 21 |   defaultEdges,
 22 |   width,
 23 |   height,
 24 |   fitView,
 25 |   nodeOrigin,
 26 |   nodeExtent,
 27 | }: {
 28 |   nodes?: Node[];
 29 |   edges?: Edge[];
 30 |   defaultNodes?: Node[];
 31 |   defaultEdges?: Edge[];
 32 |   width?: number;
 33 |   height?: number;
 34 |   fitView?: boolean;
 35 |   nodeOrigin?: NodeOrigin;
 36 |   nodeExtent?: CoordinateExtent;
 37 | } = {}): ReactFlowStore => {
 38 |   const nodeLookup = new Map<string, InternalNode>();
 39 |   const parentLookup = new Map();
 40 |   const connectionLookup = new Map();
 41 |   const edgeLookup = new Map();
 42 | 
 43 |   const storeEdges = defaultEdges ?? edges ?? [];
 44 |   const storeNodes = defaultNodes ?? nodes ?? [];
 45 |   const storeNodeOrigin = nodeOrigin ?? [0, 0];
 46 |   const storeNodeExtent = nodeExtent ?? infiniteExtent;
 47 | 
 48 |   updateConnectionLookup(connectionLookup, edgeLookup, storeEdges);
 49 |   adoptUserNodes(storeNodes, nodeLookup, parentLookup, {
 50 |     nodeOrigin: storeNodeOrigin,
 51 |     nodeExtent: storeNodeExtent,
 52 |     elevateNodesOnSelect: false,
 53 |   });
 54 | 
 55 |   let transform: Transform = [0, 0, 1];
 56 | 
 57 |   if (fitView && width && height) {
 58 |     const bounds = getInternalNodesBounds(nodeLookup, {
 59 |       filter: (node) => !!((node.width || node.initialWidth) && (node.height || node.initialHeight)),
 60 |     });
 61 | 
 62 |     const { x, y, zoom } = getViewportForBounds(bounds, width, height, 0.5, 2, 0.1);
 63 |     transform = [x, y, zoom];
 64 |   }
 65 | 
 66 |   return {
 67 |     rfId: '1',
 68 |     width: 0,
 69 |     height: 0,
 70 |     transform,
 71 |     nodes: storeNodes,
 72 |     nodeLookup,
 73 |     parentLookup,
 74 |     edges: storeEdges,
 75 |     edgeLookup,
 76 |     connectionLookup,
 77 |     onNodesChange: null,
 78 |     onEdgesChange: null,
 79 |     hasDefaultNodes: defaultNodes !== undefined,
 80 |     hasDefaultEdges: defaultEdges !== undefined,
 81 |     panZoom: null,
 82 |     minZoom: 0.5,
 83 |     maxZoom: 2,
 84 |     translateExtent: infiniteExtent,
 85 |     nodeExtent: storeNodeExtent,
 86 |     nodesSelectionActive: false,
 87 |     userSelectionActive: false,
 88 |     userSelectionRect: null,
 89 |     connectionMode: ConnectionMode.Strict,
 90 |     domNode: null,
 91 |     paneDragging: false,
 92 |     noPanClassName: 'nopan',
 93 |     nodeOrigin: storeNodeOrigin,
 94 |     nodeDragThreshold: 1,
 95 | 
 96 |     snapGrid: [15, 15],
 97 |     snapToGrid: false,
 98 | 
 99 |     nodesDraggable: true,
100 |     nodesConnectable: true,
101 |     nodesFocusable: true,
102 |     edgesFocusable: true,
103 |     edgesReconnectable: true,
104 |     elementsSelectable: true,
105 |     elevateNodesOnSelect: true,
106 |     elevateEdgesOnSelect: false,
107 |     selectNodesOnDrag: true,
108 | 
109 |     multiSelectionActive: false,
110 | 
111 |     fitViewQueued: fitView ?? false,
112 |     fitViewOptions: undefined,
113 |     fitViewResolver: null,
114 | 
115 |     connection: { ...initialConnection },
116 |     connectionClickStartHandle: null,
117 |     connectOnClick: true,
118 | 
119 |     ariaLiveMessage: '',
120 |     autoPanOnConnect: true,
121 |     autoPanOnNodeDrag: true,
122 |     autoPanSpeed: 15,
123 |     connectionRadius: 20,
124 |     onError: devWarn,
125 |     isValidConnection: undefined,
126 |     onSelectionChangeHandlers: [],
127 | 
128 |     lib: 'react',
129 |     debug: false,
130 |   };
131 | };
132 | 
133 | export default getInitialState;
134 | 


--------------------------------------------------------------------------------
/packages/react/src/styles/base.css:
--------------------------------------------------------------------------------
1 | /* this will be exported as base.css and can be used for a basic styling */
2 | @import '../../../system/src/styles/init.css';
3 | @import '../../../system/src/styles/base.css';
4 | @import '../../../system/src/styles/node-resizer.css';
5 | 


--------------------------------------------------------------------------------
/packages/react/src/styles/style.css:
--------------------------------------------------------------------------------
 1 | /* this gets exported as style.css and can be used for the default theming */
 2 | @import '../../../system/src/styles/init.css';
 3 | @import '../../../system/src/styles/style.css';
 4 | @import '../../../system/src/styles/node-resizer.css';
 5 | 
 6 | .react-flow__edge-textbg {
 7 |   fill: var(--xy-edge-label-background-color, var(--xy-edge-label-background-color-default));
 8 | }
 9 | 
10 | .react-flow__edge-text {
11 |   fill: var(--xy-edge-label-color, var(--xy-edge-label-color-default));
12 | }
13 | 


--------------------------------------------------------------------------------
/packages/react/src/styles/utils.ts:
--------------------------------------------------------------------------------
 1 | import type { CSSProperties } from 'react';
 2 | 
 3 | export const containerStyle: CSSProperties = {
 4 |   position: 'absolute',
 5 |   width: '100%',
 6 |   height: '100%',
 7 |   top: 0,
 8 |   left: 0,
 9 | };
10 | 


--------------------------------------------------------------------------------
/packages/react/src/types/index.ts:
--------------------------------------------------------------------------------
1 | export * from './nodes';
2 | export * from './edges';
3 | export * from './component-props';
4 | export * from './general';
5 | export * from './store';
6 | export * from './instance';
7 | 


--------------------------------------------------------------------------------
/packages/react/src/types/nodes.ts:
--------------------------------------------------------------------------------
  1 | import type { CSSProperties, MouseEvent as ReactMouseEvent } from 'react';
  2 | import type { CoordinateExtent, NodeBase, OnError, NodeProps as NodePropsBase, InternalNodeBase } from '@xyflow/system';
  3 | 
  4 | import { NodeTypes } from './general';
  5 | 
  6 | /**
  7 |  * The `Node` type represents everything React Flow needs to know about a given node.
  8 |  * Whenever you want to update a certain attribute of a node, you need to create a new
  9 |  * node object.
 10 |  *
 11 |  * @public
 12 |  */
 13 | export type Node<
 14 |   NodeData extends Record<string, unknown> = Record<string, unknown>,
 15 |   NodeType extends string = string
 16 | > = NodeBase<NodeData, NodeType> & {
 17 |   style?: CSSProperties;
 18 |   className?: string;
 19 |   resizing?: boolean;
 20 |   focusable?: boolean;
 21 | };
 22 | 
 23 | /**
 24 |  * The `InternalNode` type is identical to the base [`Node`](/api-references/types/node)
 25 |  * type but is extended with some additional properties used internally.
 26 |  * Some functions and callbacks that return nodes may return an `InternalNode`.
 27 |  *
 28 |  * @public
 29 |  */
 30 | export type InternalNode<NodeType extends Node = Node> = InternalNodeBase<NodeType>;
 31 | 
 32 | export type NodeMouseHandler<NodeType extends Node = Node> = (event: ReactMouseEvent, node: NodeType) => void;
 33 | export type SelectionDragHandler<NodeType extends Node = Node> = (event: ReactMouseEvent, nodes: NodeType[]) => void;
 34 | export type OnNodeDrag<NodeType extends Node = Node> = (
 35 |   event: ReactMouseEvent,
 36 |   node: NodeType,
 37 |   nodes: NodeType[]
 38 | ) => void;
 39 | 
 40 | export type NodeWrapperProps<NodeType extends Node> = {
 41 |   id: string;
 42 |   nodesConnectable: boolean;
 43 |   elementsSelectable: boolean;
 44 |   nodesDraggable: boolean;
 45 |   nodesFocusable: boolean;
 46 |   onClick?: NodeMouseHandler<NodeType>;
 47 |   onDoubleClick?: NodeMouseHandler<NodeType>;
 48 |   onMouseEnter?: NodeMouseHandler<NodeType>;
 49 |   onMouseMove?: NodeMouseHandler<NodeType>;
 50 |   onMouseLeave?: NodeMouseHandler<NodeType>;
 51 |   onContextMenu?: NodeMouseHandler<NodeType>;
 52 |   resizeObserver: ResizeObserver | null;
 53 |   noDragClassName: string;
 54 |   noPanClassName: string;
 55 |   rfId: string;
 56 |   disableKeyboardA11y: boolean;
 57 |   nodeTypes?: NodeTypes;
 58 |   nodeExtent?: CoordinateExtent;
 59 |   onError?: OnError;
 60 |   nodeClickDistance?: number;
 61 | };
 62 | 
 63 | /**
 64 |  * The `BuiltInNode` type represents the built-in node types that are available in React Flow.
 65 |  * You can use this type to extend your custom node type if you still want ot use the built-in ones.
 66 |  *
 67 |  * @public
 68 |  * @example
 69 |  * ```ts
 70 |  * type CustomNode = Node<{ value: number }, 'custom'>;
 71 |  * type MyAppNode = CustomNode | BuiltInNode;
 72 |  * ```
 73 |  */
 74 | export type BuiltInNode =
 75 |   | Node<{ label: string }, 'input' | 'output' | 'default'>
 76 |   | Node<Record<string, never>, 'group'>;
 77 | 
 78 | /**
 79 |  * When you implement a [custom node](/learn/customization/custom-nodes) it is
 80 |  * wrapped in a component that enables basic functionality like selection and
 81 |  * dragging. Your custom node receives `NodeProps` as props.
 82 |  *
 83 |  * @public
 84 |  * @example
 85 |  * ```tsx
 86 |  *import { useState } from 'react';
 87 |  *import { NodeProps, Node } from '@xyflow/react';
 88 |  *
 89 |  *export type CounterNode = Node<{ initialCount?: number }, 'counter'>;
 90 |  *
 91 |  *export default function CounterNode(props: NodeProps<CounterNode>) {
 92 |  *  const [count, setCount] = useState(props.data?.initialCount ?? 0);
 93 |  *
 94 |  *  return (
 95 |  *    <div>
 96 |  *      <p>Count: {count}</p>
 97 |  *      <button className="nodrag" onClick={() => setCount(count + 1)}>
 98 |  *        Increment
 99 |  *      </button>
100 |  *    </div>
101 |  *  );
102 |  *}
103 |  *```
104 |  */
105 | export type NodeProps<NodeType extends Node = Node> = NodePropsBase<NodeType>;
106 | 


--------------------------------------------------------------------------------
/packages/react/src/types/store.ts:
--------------------------------------------------------------------------------
  1 | import {
  2 |   ConnectionMode,
  3 |   type ConnectionState,
  4 |   type CoordinateExtent,
  5 |   type InternalNodeUpdate,
  6 |   type UpdateNodePositions,
  7 |   type NodeOrigin,
  8 |   type OnConnect,
  9 |   type OnError,
 10 |   type OnViewportChange,
 11 |   type SelectionRect,
 12 |   type SnapGrid,
 13 |   type Handle,
 14 |   type Transform,
 15 |   type PanZoomInstance,
 16 |   type PanBy,
 17 |   type OnConnectStart,
 18 |   type OnConnectEnd,
 19 |   type OnSelectionDrag,
 20 |   type OnMoveStart,
 21 |   type OnMove,
 22 |   type OnMoveEnd,
 23 |   type UpdateConnection,
 24 |   type EdgeLookup,
 25 |   type ConnectionLookup,
 26 |   type NodeLookup,
 27 |   type NodeChange,
 28 |   type EdgeChange,
 29 |   type ParentLookup,
 30 | } from '@xyflow/system';
 31 | 
 32 | import type {
 33 |   Edge,
 34 |   Node,
 35 |   OnNodesChange,
 36 |   OnEdgesChange,
 37 |   DefaultEdgeOptions,
 38 |   FitViewOptions,
 39 |   OnNodesDelete,
 40 |   OnEdgesDelete,
 41 |   OnSelectionChangeFunc,
 42 |   UnselectNodesAndEdgesParams,
 43 |   OnDelete,
 44 |   OnNodeDrag,
 45 |   OnBeforeDelete,
 46 |   IsValidConnection,
 47 |   InternalNode,
 48 | } from '.';
 49 | 
 50 | export type ReactFlowStore<NodeType extends Node = Node, EdgeType extends Edge = Edge> = {
 51 |   rfId: string;
 52 |   width: number;
 53 |   height: number;
 54 |   transform: Transform;
 55 |   nodes: NodeType[];
 56 |   nodeLookup: NodeLookup<InternalNode<NodeType>>;
 57 |   parentLookup: ParentLookup<InternalNode<NodeType>>;
 58 |   edges: EdgeType[];
 59 |   edgeLookup: EdgeLookup<EdgeType>;
 60 |   connectionLookup: ConnectionLookup;
 61 |   onNodesChange: OnNodesChange<NodeType> | null;
 62 |   onEdgesChange: OnEdgesChange<EdgeType> | null;
 63 |   hasDefaultNodes: boolean;
 64 |   hasDefaultEdges: boolean;
 65 |   domNode: HTMLDivElement | null;
 66 |   paneDragging: boolean;
 67 |   noPanClassName: string;
 68 | 
 69 |   panZoom: PanZoomInstance | null;
 70 |   minZoom: number;
 71 |   maxZoom: number;
 72 |   translateExtent: CoordinateExtent;
 73 |   nodeExtent: CoordinateExtent;
 74 |   nodeOrigin: NodeOrigin;
 75 |   nodeDragThreshold: number;
 76 | 
 77 |   nodesSelectionActive: boolean;
 78 |   userSelectionActive: boolean;
 79 |   userSelectionRect: SelectionRect | null;
 80 | 
 81 |   connection: ConnectionState<InternalNode<NodeType>>;
 82 |   connectionMode: ConnectionMode;
 83 |   connectionClickStartHandle: (Pick<Handle, 'nodeId' | 'id'> & Required<Pick<Handle, 'type'>>) | null;
 84 | 
 85 |   snapToGrid: boolean;
 86 |   snapGrid: SnapGrid;
 87 | 
 88 |   nodesDraggable: boolean;
 89 |   nodesConnectable: boolean;
 90 |   nodesFocusable: boolean;
 91 |   edgesFocusable: boolean;
 92 |   edgesReconnectable: boolean;
 93 |   elementsSelectable: boolean;
 94 |   elevateNodesOnSelect: boolean;
 95 |   elevateEdgesOnSelect: boolean;
 96 |   selectNodesOnDrag: boolean;
 97 | 
 98 |   multiSelectionActive: boolean;
 99 | 
100 |   onNodeDragStart?: OnNodeDrag<NodeType>;
101 |   onNodeDrag?: OnNodeDrag<NodeType>;
102 |   onNodeDragStop?: OnNodeDrag<NodeType>;
103 | 
104 |   onSelectionDragStart?: OnSelectionDrag;
105 |   onSelectionDrag?: OnSelectionDrag;
106 |   onSelectionDragStop?: OnSelectionDrag;
107 | 
108 |   onMoveStart?: OnMoveStart;
109 |   onMove?: OnMove;
110 |   onMoveEnd?: OnMoveEnd;
111 | 
112 |   onConnect?: OnConnect;
113 |   onConnectStart?: OnConnectStart;
114 |   onConnectEnd?: OnConnectEnd;
115 | 
116 |   onClickConnectStart?: OnConnectStart;
117 |   onClickConnectEnd?: OnConnectEnd;
118 | 
119 |   connectOnClick: boolean;
120 |   defaultEdgeOptions?: DefaultEdgeOptions;
121 | 
122 |   fitViewQueued: boolean;
123 |   fitViewOptions: FitViewOptions | undefined;
124 |   fitViewResolver: PromiseWithResolvers<boolean> | null;
125 | 
126 |   onNodesDelete?: OnNodesDelete<NodeType>;
127 |   onEdgesDelete?: OnEdgesDelete<EdgeType>;
128 |   onDelete?: OnDelete;
129 |   onError?: OnError;
130 | 
131 |   // event handlers
132 |   onViewportChangeStart?: OnViewportChange;
133 |   onViewportChange?: OnViewportChange;
134 |   onViewportChangeEnd?: OnViewportChange;
135 |   onBeforeDelete?: OnBeforeDelete<NodeType, EdgeType>;
136 | 
137 |   onSelectionChangeHandlers: OnSelectionChangeFunc<NodeType, EdgeType>[];
138 | 
139 |   ariaLiveMessage: string;
140 |   autoPanOnConnect: boolean;
141 |   autoPanOnNodeDrag: boolean;
142 |   autoPanSpeed: number;
143 |   connectionRadius: number;
144 | 
145 |   isValidConnection?: IsValidConnection<EdgeType>;
146 | 
147 |   lib: string;
148 |   debug: boolean;
149 | };
150 | 
151 | export type ReactFlowActions<NodeType extends Node, EdgeType extends Edge> = {
152 |   setNodes: (nodes: NodeType[]) => void;
153 |   setEdges: (edges: EdgeType[]) => void;
154 |   setDefaultNodesAndEdges: (nodes?: NodeType[], edges?: EdgeType[]) => void;
155 |   updateNodeInternals: (updates: Map<string, InternalNodeUpdate>, params?: { triggerFitView: boolean }) => void;
156 |   updateNodePositions: UpdateNodePositions;
157 |   resetSelectedElements: () => void;
158 |   unselectNodesAndEdges: (params?: UnselectNodesAndEdgesParams<NodeType, EdgeType>) => void;
159 |   addSelectedNodes: (nodeIds: string[]) => void;
160 |   addSelectedEdges: (edgeIds: string[]) => void;
161 |   setMinZoom: (minZoom: number) => void;
162 |   setMaxZoom: (maxZoom: number) => void;
163 |   setTranslateExtent: (translateExtent: CoordinateExtent) => void;
164 |   setNodeExtent: (nodeExtent: CoordinateExtent) => void;
165 |   cancelConnection: () => void;
166 |   updateConnection: UpdateConnection<InternalNode<NodeType>>;
167 |   reset: () => void;
168 |   triggerNodeChanges: (changes: NodeChange<NodeType>[]) => void;
169 |   triggerEdgeChanges: (changes: EdgeChange<EdgeType>[]) => void;
170 |   panBy: PanBy;
171 |   setPaneClickDistance: (distance: number) => void;
172 | };
173 | 
174 | export type ReactFlowState<NodeType extends Node = Node, EdgeType extends Edge = Edge> = ReactFlowStore<
175 |   NodeType,
176 |   EdgeType
177 | > &
178 |   ReactFlowActions<NodeType, EdgeType>;
179 | 


--------------------------------------------------------------------------------
/packages/react/src/utils/general.ts:
--------------------------------------------------------------------------------
 1 | import { type Ref, type RefAttributes, forwardRef, JSX } from 'react';
 2 | import { isNodeBase, isEdgeBase } from '@xyflow/system';
 3 | 
 4 | import type { Edge, Node } from '../types';
 5 | 
 6 | /**
 7 |  * Test whether an object is usable as an [`Node`](/api-reference/types/node).
 8 |  * In TypeScript this is a type guard that will narrow the type of whatever you pass in to
 9 |  * [`Node`](/api-reference/types/node) if it returns `true`.
10 |  *
11 |  * @public
12 |  * @remarks In TypeScript this is a type guard that will narrow the type of whatever you pass in to Node if it returns true
13 |  * @param element - The element to test.
14 |  * @returns Tests whether the provided value can be used as a `Node`. If you're using TypeScript,
15 |  * this function acts as a type guard and will narrow the type of the value to `Node` if it returns
16 |  * `true`.
17 |  *
18 |  * @example
19 |  * ```js
20 |  *import { isNode } from '@xyflow/react';
21 |  *
22 |  *if (isNode(node)) {
23 |  * // ...
24 |  *}
25 |  *```
26 |  */
27 | export const isNode = <NodeType extends Node = Node>(element: unknown): element is NodeType =>
28 |   isNodeBase<NodeType>(element);
29 | 
30 | /**
31 |  * Test whether an object is usable as an [`Edge`](/api-reference/types/edge).
32 |  * In TypeScript this is a type guard that will narrow the type of whatever you pass in to
33 |  * [`Edge`](/api-reference/types/edge) if it returns `true`.
34 |  *
35 |  * @public
36 |  * @remarks In TypeScript this is a type guard that will narrow the type of whatever you pass in to Edge if it returns true
37 |  * @param element - The element to test
38 |  * @returns Tests whether the provided value can be used as an `Edge`. If you're using TypeScript,
39 |  * this function acts as a type guard and will narrow the type of the value to `Edge` if it returns
40 |  * `true`.
41 |  *
42 |  * @example
43 |  * ```js
44 |  *import { isEdge } from '@xyflow/react';
45 |  *
46 |  *if (isEdge(edge)) {
47 |  * // ...
48 |  *}
49 |  *```
50 |  */
51 | export const isEdge = <EdgeType extends Edge = Edge>(element: unknown): element is EdgeType =>
52 |   isEdgeBase<EdgeType>(element);
53 | 
54 | // eslint-disable-next-line @typescript-eslint/no-empty-object-type
55 | export function fixedForwardRef<T, P = {}>(
56 |   render: (props: P, ref: Ref<T>) => JSX.Element
57 | ): (props: P & RefAttributes<T>) => JSX.Element {
58 |   // eslint-disable-next-line @typescript-eslint/no-explicit-any
59 |   return forwardRef(render) as any;
60 | }
61 | 


--------------------------------------------------------------------------------
/packages/react/src/utils/index.ts:
--------------------------------------------------------------------------------
1 | export * from './changes';
2 | export * from './general';
3 | 


--------------------------------------------------------------------------------
/packages/react/tsconfig.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "extends": "@xyflow/tsconfig/react.json",
 3 |   "display": "@xyflow/react",
 4 |   "include": ["**/*.ts", "**/*.tsx"],
 5 |   "exclude": ["node_modules", "dist"],
 6 |   "compilerOptions": {
 7 |     "outDir": "dist"
 8 |   }
 9 | }
10 | 


---------------------------------------------------------