<template>
  <div>
    <h4 class="display-1 mx-4 pt-4">Current season</h4>
    <v-card class="transparent pt-3 pl-4" flat>
      <v-row no-gutters align="center">
        <v-col cols="2">
          <v-img
            :src="formatPosterPath(currentSeason.poster_path)"
            class="oys-border-radius"
          />
        </v-col>
        <v-col cols class="pa-4">
          <div class="title">
            {{ currentSeason.name }}
          </div>
          <div class="subtitle-1 d-inline-block">
            {{ currentSeason.air_date }}
          </div>
          <div class="subtitle-1 d-inline-block">|</div>
          <div class="subtitle-1 d-inline-block">
            {{ currentSeason.episode_count }}
            {{ currentSeason.episode_count !== 1 ? "episodes" : "episode" }}
          </div>
          <p class="py-4">
            {{ currentSeason.overview }}
          </p>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { ISeasons } from "~/types/tv.interface";
import { SECURE_BASE_URL } from "~/constants/tmdb-image.constant";

@Component({
  name: "TvDetailsCurrentSeason"
})
export default class TvDetailsCurrentSeason extends Vue {
  @Prop({ type: Array, default: () => [] }) readonly seasons: ISeasons[];

  get currentSeason(): ISeasons {
    return this.seasons[this.seasons.length - 1];
  }

  formatPosterPath(image: string): string {
    return `${SECURE_BASE_URL}/w342${image}`;
  }
}
</script>

<style scoped></style>
