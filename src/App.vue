<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <ProvideUserSettings>
    <HelloWorld msg="Hello Vue 3.0 + Vite" />
    <button @click="increment">{{ count }}</button>
    <ThemeSwitcher />
  </ProvideUserSettings>
</template>

<script>
import ProvideUserSettings from './components/ProvideUserSettings'
import ThemeSwitcher from './components/ThemeSwitcher.vue'
import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue'

export default {
  name: 'App',
  components: {
    ProvideUserSettings,
    HelloWorld,
    ThemeSwitcher
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
