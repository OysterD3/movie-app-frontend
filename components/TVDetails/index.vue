<template>
  <div
    :style="{
      backgroundImage: heroImage
        ? `linear-gradient(to right, rgba(13, 21, 49, 1.00) 30%, rgba(39, 67, 158, 0.84) 100%), url(${heroImage})`
        : undefined,
      transition: 'background-image 0.2s ease-in-out'
    }"
    :class="{ 'oys-details-background': heroImage }"
  >
    <TvDetailsHeader
      :title="details.name"
      :genres="details.genres"
      :runtime="details.episode_run_time"
      :videos="details.videos"
      :overview="details.overview"
    />
    <div class="d-flex no-gutters">
      <div class="col-md-8 col-12 oys-details-cast">
        <DetailsCast tv :cast="details.credits.cast" />
        <v-divider class="my-4" />
        <TvDetailsCurrentSeason :seasons="details.seasons" />
        <v-divider class="my-4" />
        <DetailsSimilar :similar="details.similar" tv />
      </div>
      <div class="col-md-4 px-4 mb-4 col-12">
        <h4 class="display-1 mb-4">Recommendations</h4>
        <div class="overflow-x-auto recommendation" style="max-height: 800px;">
          <v-img
            eager
            v-for="el in recommendation"
            :key="el.id"
            :src="el.image"
            contain
            class="oys-border-radius oys-shadow mb-4"
            style="position: relative; cursor: pointer;"
            @click="
              $router.push({ name: 'tv-id', params: { id: el.id.toString() } })
            "
          >
            <div class="oys-details-cast--act">
              <div class="font-weight-bold subtitle-2 px-3 pt-3">
                {{ el.name }}
              </div>
            </div>
          </v-img>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { ITvDetails } from "~/types/tv.interface";
import { SECURE_BASE_URL } from "~/constants/tmdb-image.constant";
import TvDetailsHeader from "~/components/TVDetails/Header.vue";
import DetailsCast from "~/components/Details/Cast.vue";
import DetailsSimilar from "~/components/Details/Similar.vue";
import TvDetailsCurrentSeason from "~/components/TVDetails/CurrentSeason.vue";

@Component({
  name: "TvDetailsIndex",
  components: {
    TvDetailsCurrentSeason,
    DetailsSimilar,
    DetailsCast,
    TvDetailsHeader
  }
})
export default class TvDetailsIndex extends Vue {
  @Prop(Object) readonly details!: ITvDetails;

  get heroImage(): string | null {
    return this.details.backdrop_path
      ? `${SECURE_BASE_URL}/w1280${this.details.backdrop_path}`
      : null;
  }

  get recommendation():
    | { id: number; name: string; image: string }[]
    | undefined {
    return this.details.recommendations?.results
      .filter((el) => el.backdrop_path)
      .map((el) => ({
        id: el.id,
        name: el.name,
        image: `${SECURE_BASE_URL}/w780${el.backdrop_path}`
      }));
  }
}
</script>

<style scoped>
.recommendation::-webkit-scrollbar {
  display: none;
}

.recommendation {
  -ms-overflow-style: none;
}
</style>
