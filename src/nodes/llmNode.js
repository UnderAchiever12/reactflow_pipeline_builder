// llmNode.js
import { BaseNode } from './BaseNode';

export const LLMNode = ({ id, data }) => {

  return (
<BaseNode title={'LLM'} inputs={[`${id}-system`,`${id}-prompt`]} outputs={[`${id}-response`]}>
<p>This is LLM</p>
</BaseNode>
  );
}
