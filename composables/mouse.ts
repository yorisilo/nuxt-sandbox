export const useMouse = () => {
  const x = ref(0)
  const y = ref(0)

  const xy = ref({
    x: 0,
    y: 0,
  })

  const update = (event: Event): void => {
    if (event instanceof MouseEvent) {
      xy.value.x = event.pageX
      xy.value.y = event.pageY
      x.value = event.pageX
      y.value = event.pageY
    }
  }

  onMounted(() => window.addEventListener('mousemove', update))
  onUnmounted(() => window.removeEventListener('mousemove', update))

  const x1 = xy.value.x
  return { x, y, x1 }
}
