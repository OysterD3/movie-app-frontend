<template>
  <v-app>
    <v-content class="oys-container">
      <nuxt />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({
  name: "DefaultLayout"
})
export default class DefaultLayout extends Vue {}
</script>

<style scope></style>
