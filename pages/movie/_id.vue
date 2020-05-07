<template>
  <DetailsIndex :details="movie" />
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { Context } from "@nuxt/types";
import { IMovieDetails } from "~/types/movie.interface";
import DetailsIndex from "~/components/Details/index.vue";

@Component({
  name: "MovieID",
  components: { DetailsIndex },
  async asyncData({
    $axios,
    params
  }: Context): Promise<{ movie: IMovieDetails }> {
    const movie = await $axios.$get(
      `/movie/${params.id}?api_key=${process.env.API_KEY}&append_to_response=videos,images,now_playing,similar,credits,recommendations,reviews,keywords`
    );
    return { movie };
  }
})
export default class MovieID extends Vue {}
</script>

<style scoped></style>
