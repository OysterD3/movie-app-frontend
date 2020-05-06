<template>
  <Homepage />
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import Homepage from "@/components/Homepage/index.vue";

@Component({
  name: "Home",
  components: {
    Homepage
  }
})
export default class Home extends Vue {}
</script>

<style scope></style>
