<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <button @click="increment">{{ count }}</button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup () {
    const count = ref(0)
    const increment = () => {
      count.value++
    }
    return {
      count,
      increment
    }
  }
}
</script>
