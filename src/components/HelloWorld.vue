<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>
    Edit <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <p>The current theme is {{ theme }}</p>
</template>

<script>
import { inject } from 'vue'
import { UserSettingsStateSymbol } from './ProvideUserSettings'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup () {
    const { theme } = inject(UserSettingsStateSymbol)
    return { theme }
  },

  data () {
    return {
      count: 0
    }
  }
}
</script>
