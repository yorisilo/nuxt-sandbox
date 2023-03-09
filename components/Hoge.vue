<script setup lang="ts">
const firstName = ref("hoge")
const lastName = ref("fuga")
// const fullname = ref("")

const fullname = computed(() => {
  return `${firstName.value} ${lastName.value}`
})

// const onInputText = (event: Event) => {
//   if (!event.target) {
//     return;
//   }
//
//   if (!isHTMLInputElement(event.target)) {
//     return;
//   }
//   firstName.value = event.target.value
// }
//
// const isHTMLInputElement = (target: EventTarget): target is HTMLInputElement => {
//   return target instanceof HTMLInputElement
// }

const { x, y } = useMouse()
</script>

<template>
  <h2>
    <slot />
  </h2>
  <input v-model="firstName" />
  <!-- <input :value="fullname" @input="onInputText" /> -->
  <p>{{ fullname }}</p>
</template>
