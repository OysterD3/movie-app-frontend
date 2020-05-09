<template>
  <div>
    <v-card height="200px" class="d-flex align-center transparent" flat>
      <v-row dense class="pl-6" align="center">
        <v-col cols="3" md="1">
          <v-img :src="poster" v-if="poster" max-height="150px" contain />
        </v-col>
        <v-col cols>
          <h3
            :class="{
              'display-1': !$device.isMobile,
              headline: $device.isMobile,
              'font-weight-bold': true
            }"
          >
            Season {{ seasons.season_number }}
            <span class="headline font-weight-regular">({{ year }})</span>
          </h3>
          <div
            style="cursor: pointer;"
            class="mt-2 d-inline-block grey--text"
            @click="
              $router.push({
                name: 'tv-id-season',
                params: { id: $route.params.id }
              })
            "
          >
            <v-icon left color="grey">mdi-keyboard-backspace</v-icon>
            Back to season list
          </div>
        </v-col>
      </v-row>
    </v-card>
    <v-divider class="py-4" />
    <template v-for="el in seasons.episodes">
      <EpisodeCardIndex
        :air-date="el.air_date"
        :episode-number="el.episode_number"
        :still-path="el.still_path"
        :rating="el.vote_average"
        :name="el.name"
        :overview="el.overview"
        class="mb-10"
      />
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { SECURE_BASE_URL } from "~/constants/tmdb-image.constant";
import moment from "moment";
import EpisodeCardIndex from "~/components/Seasons/Episode/Card/index.vue";
import { ITvSeasons } from "~/types/tv-seasons";

@Component({
  name: "SeasonIndex",
  components: { EpisodeCardIndex }
})
export default class SeasonIndex extends Vue {
  @Prop(Object) readonly seasons!: ITvSeasons;

  get poster(): string | null {
    return this.seasons.poster_path
      ? `${SECURE_BASE_URL}/w154${this.seasons.poster_path}`
      : null;
  }

  get year(): string {
    return moment(this.seasons.air_date).format("YYYY");
  }
}
</script>

<style scoped></style>
