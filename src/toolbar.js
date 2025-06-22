// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div style={{ padding: '10px' }}>
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='mathNode' label='Math' />
                <DraggableNode type='dateNode' label='Date' />
                <DraggableNode type='loggerNode' label='Logger' />
                <DraggableNode type='apiNode' label='API' />
                <DraggableNode type='customTextNode' label='Custom Text' />
                {/* <DraggableNode type='baseNode' label='Base Node' /> */}
            </div>
        </div>
    );
};
