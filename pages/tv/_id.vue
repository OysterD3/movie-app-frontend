<template>
  <DetailsIndex :details="tv" />
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import DetailsIndex from "~/components/Details/index.vue";
import { Context } from "@nuxt/types";
import { IMovieDetails } from "~/types/movie.interface";

@Component({
  name: "TvID",
  components: { DetailsIndex },
  async asyncData({
    $axios,
    params
  }: Context): Promise<{ movie: IMovieDetails }> {
    const tv = await $axios.$get(
      `/tv/${params.id}?api_key=${process.env.API_KEY}&append_to_response=videos,images,now_playing,similar,credits,recommendations,reviews,keywords`
    );
    return { tv };
  }
})
export default class TvID extends Vue {}
</script>

<style scoped></style>
