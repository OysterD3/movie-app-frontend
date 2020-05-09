<template></template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import {
  IDiscoverMovieResults,
  IDiscoverTvResults
} from "~/types/discover-movie.interface";

@Component({
  name: "DiscoverIndex"
})
export default class DiscoverIndex extends Vue {
  @Prop(Array) readonly discover!:
    | IDiscoverMovieResults[]
    | IDiscoverTvResults[];
}
</script>

<style scoped></style>
