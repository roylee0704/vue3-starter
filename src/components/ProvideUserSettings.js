// This example attempts to mimic React.Context behaviour, allowing us to pass
// state globally to all Vue components.
import { provide, reactive, readonly, toRefs } from "vue";

export const UserSettingsStateSymbol = Symbol();
export const UserSettingsUpdateSymbol = Symbol();

export default {
  setup() {
    const state = reactive({
      language: "en",
      theme: "light"
    });

    // Using `toRefs()` makes it possible to use spreading in the consuming component.
    // Making the return value `readonly()` prevents users from mutating global state.
    provide(UserSettingsStateSymbol, toRefs(readonly(state)));

    const update = (property, value) => {
      state[property] = value;
    };

    provide(UserSettingsUpdateSymbol, update);
  },

  render() {
    // Out provider component is a renderless component
    // it does not render any markup on its own.
    return this.$slots.default();
  }
};
