import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';
import { ReactFlowProvider } from 'reactflow'; // 🟢 Import this

function App() {
  return (
    <div>
      <PipelineToolbar />
      
      {/* 🟢 Wrap everything using ReactFlow hooks */}
      <ReactFlowProvider>
        <PipelineUI />
        <SubmitButton />
      </ReactFlowProvider>
    </div>
  );
}

export default App;
