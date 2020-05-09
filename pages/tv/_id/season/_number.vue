<template>
  <SeasonIndex :seasons="seasons" />
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { Context } from "@nuxt/types";
import { ITvSeasons } from "~/types/tv-seasons";
import SeasonIndex from "~/components/Seasons/index.vue";

@Component({
  name: "SeasonPage",
  components: { SeasonIndex },
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
export default class SeasonPage extends Vue {}
</script>

<style scoped></style>
