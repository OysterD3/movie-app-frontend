<template>
  <v-card
    style="background: rgba(255, 255, 255, 0.2);"
    class="mx-10 oys-border-radius"
    :to="{
      name: 'tv-id-season-number',
      params: { id: $route.params.id, number: data.season_number }
    }"
  >
    <v-row no-gutters align="start" align-md="center">
      <v-col cols="4" md="1" v-if="poster">
        <v-img
          class="d-block"
          :src="poster"
          style="border-radius: 20px 0 0 20px;"
          height="100%"
        />
      </v-col>
      <v-col cols class="pa-3">
        <div class="d-flex no-gutters" v-if="!$device.isMobile">
          <div class="col">
            <span class="font-weight-bold">{{ data.name }}</span>
            <span class="font-weight-bold">|</span>
            <span class="font-weight-bold">{{ data.air_date }}</span>
            <span class="font-weight-bold">|</span>
            <span class="font-weight-bold">
              {{ data.episode_count }}
              {{ data.episode_count !== 1 ? "episodes" : "episode" }}
            </span>
          </div>
        </div>
        <div v-else>
          <div class="title font-weight-bold">{{ data.name }}</div>
          <div class="font-weight-medium">
            {{ data.air_date }} | {{ data.episode_count }}
            {{ data.episode_count !== 1 ? "episodes" : "episode" }}
          </div>
        </div>
        <p class="subtitle-2 font-weight-regular">
          {{ data.overview }}
        </p>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { ISeasons } from "~/types/tv.interface";
import { SECURE_BASE_URL } from "~/constants/tmdb-image.constant";

@Component({
  name: "SeasonCard"
})
export default class SeasonCard extends Vue {
  @Prop(Object) readonly data!: ISeasons;

  get poster(): string | null {
    return this.data.poster_path
      ? `${SECURE_BASE_URL}/w185${this.data.poster_path}`
      : null;
  }
}
</script>

<style scoped></style>
