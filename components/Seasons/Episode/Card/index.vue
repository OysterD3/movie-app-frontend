<template>
  <v-card
    style="background: rgba(255, 255, 255, 0.2);"
    class="mx-10 oys-border-radius"
  >
    <v-row no-gutters>
      <v-col cols="12" md="2" v-if="still">
        <v-img
          class="d-block"
          :src="still"
          :style="{
            borderRadius: $device.isMobile ? '20px 20px 0 0' : '20px 0 0 0'
          }"
          height="100%"
        />
      </v-col>
      <v-col cols class="pa-3">
        <div class="d-flex no-gutters">
          <div class="col">
            <span class="font-weight-bold">#{{ episodeNumber }}</span>
            <v-chip color="black" class="d-inline-block" v-if="rating">
              <v-icon color="primary" left>mdi-star-circle-outline</v-icon>
              <span>{{ rating.toFixed(1) }}</span>
            </v-chip>
          </div>
          <div class="col text-right">
            {{ airDate }}
          </div>
        </div>
        <div class="title">
          {{ name }}
        </div>
        <p class="subtitle-2 font-weight-regular">
          {{ overview }}
        </p>
      </v-col>
    </v-row>
    <v-card-actions
      class="d-flex justify-center"
      style="border-top: 1px solid #7f828b;"
      v-if="!episodeData"
    >
      <div style="cursor: pointer;" @click="getEpisodeData">
        <v-icon>mdi-chevron-down</v-icon>
        Expand
      </div>
    </v-card-actions>
    <v-card-actions
      class="justify-md-center"
      style="border-top: 1px solid #7f828b;"
      v-else
    >
      <SeasonEpisodeCardData
        :crew="episodeData.crew"
        :guest-stars="episodeData.guest_stars"
        :images="episodeData.images.stills"
      />
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { SECURE_BASE_URL } from "~/constants/tmdb-image.constant";
import { IEpisodeVuex } from "~/store/seasons";
import SeasonEpisodeCardData from "~/components/Seasons/Episode/Card/Data.vue";

@Component({
  name: "EpisodeCardIndex",
  components: { SeasonEpisodeCardData }
})
export default class EpisodeCardIndex extends Vue {
  @Prop() readonly stillPath!: string | null;
  @Prop(Number) readonly episodeNumber!: number;
  @Prop(String) readonly airDate!: string;
  @Prop(Number) readonly rating!: number;
  @Prop(String) readonly name!: string;
  @Prop(String) readonly overview!: string;

  get still(): string | null {
    return this.stillPath ? `${SECURE_BASE_URL}/w185${this.stillPath}` : null;
  }

  get episodeData(): IEpisodeVuex | undefined {
    return this.$store.state.seasons.episodes.find(
      (el: IEpisodeVuex) => el.episode_number === this.episodeNumber
    );
  }

  getEpisodeData(): void {
    this.$store.dispatch("seasons/FETCH_EPISODE", {
      id: this.$route.params.id,
      season: this.$route.params.number,
      episode: this.episodeNumber
    });
  }
}
</script>

<style scoped></style>
