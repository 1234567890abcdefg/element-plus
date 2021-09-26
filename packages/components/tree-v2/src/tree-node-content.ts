import { h, defineComponent, inject } from 'vue'
import { ROOT_TREE_INJECTION_KEY, treeNodeContentProps } from './virtual-tree'
import type { TreeContext } from './types'

export default defineComponent({
  name: 'ElTreeNodeContent',
  props: treeNodeContentProps,
  setup(props) {
    const tree = inject<TreeContext>(ROOT_TREE_INJECTION_KEY)
    return () => {
      const node = props.node
      const { data } = node!
      return tree?.ctx.slots.default
        ? tree.ctx.slots.default({ node, data })
        : h('span', { class: 'el-tree-node__label' }, [node?.label])
    }
  },
})
