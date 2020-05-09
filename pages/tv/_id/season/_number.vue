<template>
  <EpisodeCardIndex :seasons="seasons" />
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { Context } from "@nuxt/types";
import { ITvSeasons } from "~/types/tv-seasons";
import EpisodeCardIndex from "~/components/Seasons/Episode/index.vue";

@Component({
  name: "SeasonNumberPage",
  components: { EpisodeCardIndex },
  async asyncData({
    $axios,
    params
  }: Context): Promise<{ seasons: ITvSeasons }> {
    const seasons = await $axios.$get(
      `/tv/${params.id}/season/${params.number}?api_key=${process.env.API_KEY}`
    );
    return { seasons };
  }
})
export default class SeasonNumberPage extends Vue {}
</script>

<style scoped></style>
