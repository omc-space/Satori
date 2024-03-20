import { createVNode, render, shallowReactive } from 'vue'
import type { ComponentInternalInstance, VNode } from 'vue'
import Notification from '~/components/common/Notification.vue'

type MessageType = 'warning' | 'success' | 'error'
interface NotificationContext {
  id: string
  vNode: VNode
  vm: ComponentInternalInstance | null
  props: any
}

export const instances = shallowReactive<NotificationContext[]>([])

let seed = 1
const offset = 68
function createMessage(type: MessageType, msg: string) {
  let bottom = 12
  if (instances.length) {
    const pre = instances[instances.length - 1]
    bottom = pre.props.bottom + offset
  }
  const container = document.createElement('div')
  let instance: NotificationContext
  const props = {
    msg,
    bottom: bottom,
    type,
    onClose: () => {
      closeMessage(instance)
    },
    onDestroy: () => {
      render(null, container)
    },
  }

  const vNode = createVNode(Notification, props)
  const vm = vNode.component
  render(vNode, container)
  document.body.appendChild(container.firstElementChild!)
  instance = {
    id: `message_${seed++}`,
    vNode,
    vm,
    props: vNode.component?.props,
  }
  instances.push(instance)
  return instance
}

function closeMessage(instance: NotificationContext) {
  const idx = instances.findIndex(i => i.id === instance.id)
  if (idx === -1)
    return
  instances.splice(idx, 1)
  instances.forEach((i) => {
    i.props.bottom -= offset
  })
}

export const success = (msg: string) => {
  createMessage('success', msg)
}

export const warning = (msg: string) => {
  createMessage('warning', msg)
}

export const error = (msg: string) => {
  createMessage('error', msg)
}

export default {
  success,
  warning,
  error,
}
