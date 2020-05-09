<template>
  <TvDetailsIndex :details="tv" />
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { Context } from "@nuxt/types";
import { IMovieDetails } from "~/types/movie.interface";
import TvDetailsIndex from "~/components/TVDetails/index.vue";

@Component({
  name: "TvID",
  components: { TvDetailsIndex },
  async asyncData({
    $axios,
    params
  }: Context): Promise<{ movie: IMovieDetails }> {
    const tv = await $axios.$get(
      `/tv/${params.id}?api_key=${process.env.API_KEY}&append_to_response=videos,images,now_playing,similar,credits,recommendations,reviews,keywords,credits`
    );
    return { tv };
  }
})
export default class TvID extends Vue {}
</script>

<style scoped></style>
