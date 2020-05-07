<template>
  <div
    :style="{
      backgroundImage: heroImage
        ? `linear-gradient(to right, rgba(13, 21, 49, 1.00) 30%, rgba(39, 67, 158, 0.84) 100%), url(${heroImage})`
        : undefined
    }"
    :class="{ 'oys-details-background': heroImage }"
  >
    <DetailsHeader />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { IMovieDetails } from "~/types/movie.interface";
import DetailsHeader from "~/components/Details/Header.vue";
import { SECURE_BASE_URL } from "~/constants/tmdb-image.constant";

@Component({
  name: "DetailsIndex",
  components: { DetailsHeader }
})
export default class DetailsIndex extends Vue {
  @Prop({ required: true, type: Object }) readonly details!: IMovieDetails;

  get heroImage(): string | null {
    return this.details.backdrop_path
      ? `${SECURE_BASE_URL}/w1280${this.details.backdrop_path}`
      : null;
  }

  get poster(): string | null {
    return this.details.poster_path
      ? `${SECURE_BASE_URL}/w500${this.details.poster_path}`
      : null;
  }
}
</script>

<style scoped></style>
