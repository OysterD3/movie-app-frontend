<template>
  <SeasonList :season="season" />
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { Context } from "@nuxt/types";
import { ITvSeasons } from "~/types/tv-seasons";
import SeasonList from "~/components/Seasons/List.vue";

@Component({
  name: "SeasonPage",
  components: { SeasonList },
  async asyncData({
    $axios,
    params
  }: Context): Promise<{ season: ITvSeasons }> {
    const season = (await $axios.$get(
      `/tv/${params.id}?api_key=${process.env.API_KEY}`
    )) as ITvSeasons;
    return { season };
  }
})
export default class SeasonPage extends Vue {}
</script>

<style scoped></style>
