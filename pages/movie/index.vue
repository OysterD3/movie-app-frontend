<template>
  <DiscoverIndex :discover="discover" />
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { Context } from "@nuxt/types";
import {
  IDiscover,
  IDiscoverMovieResults,
  IDiscoverTvResults
} from "~/types/discover-movie.interface";
import DiscoverIndex from "~/components/Discover/index.vue";

@Component({
  name: "MoviePage",
  components: { DiscoverIndex },
  async asyncData({
    $axios
  }: Context): Promise<{
    discover: IDiscoverTvResults[] | IDiscoverMovieResults[];
  }> {
    const discover = ((await $axios.$get(
      `/discover/movie?api_key=${process.env.API_KEY}`
    )) as IDiscover).results;
    return { discover };
  }
})
export default class MoviePage extends Vue {}
</script>

<style scoped></style>
