<template>
  <v-app id="oyster-app">
    <Snackbar />
    <v-content class="oys-container">
      <nuxt />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import Snackbar from "~/components/Snackbar.vue";

@Component({
  name: "DefaultLayout",
  components: { Snackbar }
})
export default class DefaultLayout extends Vue {}
</script>

<style scoped>
#oyster-app {
  background: linear-gradient(#0e1a3f, #0b1123);
}
</style>
