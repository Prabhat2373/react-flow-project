import React, { useState, useEffect, useCallback } from 'react';
import ReactFlow, {
  useNodes,
  useEdges,
  addEdge,
  MiniMap,
  Controls,
  Node,
} from 'react-flow-renderer';
import 'react-flow-renderer/dist/style.css';

import './index.css';
import TableNode from './Nodes/TableNode';

type CustomNodeFlowProps = {};

const initBgColor: string = '#1A192B';

const connectionLineStyle = { stroke: '#fff' };
const snapGrid: [number, number] = [20, 20];
const nodeTypes = {
  selectorNode: TableNode,
};

const defaultViewport = { x: 0, y: 0, zoom: 1.5 };

const CustomNodeFlow: React.FC<CustomNodeFlowProps> = () => {
  const [nodes, setNodes] = useNodes<Node>();
  const [edges, setEdges] = useEdges();
  const [bgColor, setBgColor] = useState<string>(initBgColor);

  useEffect(() => {
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setNodes((nds: any) =>
        nds.map((node: any) => {
          if (node.id !== '2') {
            return node;
          }

          const color = event.target.value;

          setBgColor(color);

          return {
            ...node,
            data: {
              ...node.data,
              color,
            },
          };
        })
      );
    };

    setNodes([
      {
        id: '1',
        type: 'input',
        data: { label: 'An input node' },
        position: { x: 0, y: 50 },
        sourcePosition: 'right',
      },
      {
        id: '2',
        type: 'selectorNode',
        data: { onChange: onChange, color: initBgColor },
        style: { border: '1px solid #777', padding: 10 },
        position: { x: 300, y: 50 },
      },
      {
        id: '3',
        type: 'output',
        data: { label: 'Output A' },
        position: { x: 650, y: 25 },
        targetPosition: 'left',
      },
      {
        id: '4',
        type: 'output',
        data: { label: 'Output B' },
        position: { x: 650, y: 100 },
        targetPosition: 'left',
      },
    ]);

    setEdges([
      {
        id: 'e1-2',
        source: '1',
        target: '2',
        animated: true,
        style: { stroke: '#fff' },
      },
      {
        id: 'e2a-3',
        source: '2',
        target: '3',
        sourceHandle: 'a',
        animated: true,
        style: { stroke: '#fff' },
      },
      {
        id: 'e2b-4',
        source: '2',
        target: '4',
        sourceHandle: 'b',
        animated: true,
        style: { stroke: '#fff' },
      },
    ]);
  }, [setNodes, setEdges]);

  const onConnect = useCallback(
    (params: {
      source: string;
      target: string;
      sourceHandle?: string;
      targetHandle?: string;
    }) =>
      setEdges((eds: any) =>
        addEdge({ ...params, animated: true, style: { stroke: '#fff' } }, eds)
      ),
    [setEdges]
  );

  return (
    <>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onConnect={onConnect}
        style={{ background: bgColor }}
        nodeTypes={nodeTypes}
        connectionLineStyle={connectionLineStyle}
        snapToGrid={true}
        snapGrid={snapGrid}
        defaultViewport={defaultViewport}
        fitView={true}
        attributionPosition="bottom-left"
      >
        <MiniMap
          nodeStrokeColor={(n: Node) => {
            if (n.type === 'input') return '#0041d0';
            if (n.type === 'selectorNode') return bgColor;
            if (n.type === 'output') return '#ff0072';
            return '';
          }}
          nodeColor={(n: Node) => {
            if (n.type === 'selectorNode') return bgColor;
            return '#fff';
          }}
        />
        <Controls />
      </ReactFlow>
    </>
  );
};
