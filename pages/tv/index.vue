<template>
  <DiscoverIndex :discover="discover" tv />
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
  name: "TvPage",
  components: { DiscoverIndex },
  watchQuery: true,
  async asyncData({
    $axios,
    query
  }: Context): Promise<{
    discover: IDiscoverTvResults[] | IDiscoverMovieResults[];
  }> {
    const queryParams = Object.entries(query)
      .map(([key, value]) => `${key}=${value}`)
      .filter((el) => !el.includes("undefined"))
      .join("&");
    const discover = ((await $axios.$get(
      `/discover/tv?api_key=${process.env.API_KEY}${
        queryParams.length > 0 ? `&${queryParams}` : ""
      }`
    )) as IDiscover).results;
    return { discover };
  }
})
export default class TvPage extends Vue {}
</script>

<style scoped></style>
