<template>
  <v-app>
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

<style scope></style>
