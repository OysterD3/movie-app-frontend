<template>
  <v-row dense>
    <v-col cols="4" v-if="formattedCrew">
      <div class="title">Crew</div>
      <div v-for="el in Object.keys(formattedCrew)">
        <span class="font-weight-bold">{{ el }}:</span>
        <span>{{ formattedCrew[el].map((i) => i.name).join(", ") }}</span>
      </div>
    </v-col>
    <v-col cols>
      <div class="title">Guest Stars</div>
      <v-row>
        <v-col cols="6" v-for="el in formattedGuestStars">
          <v-card class="transparent d-flex no-gutters" flat>
            <v-col cols="2">
              <v-img
                :src="el.image"
                :aspect-ratio="1"
                style="border-radius: 10px;"
              />
            </v-col>
            <v-col cols class="pa-3">
              <div class="font-weight-bold">{{ el.name }}</div>
              <div>{{ el.character }}</div>
            </v-col>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12">
      <v-divider />
    </v-col>
    <v-col cols="12">
      <div class="title">Media</div>
      <v-row dense v-if="formattedStill">
        <v-col cols="2" v-for="el in formattedStill" :key="el">
          <v-img :src="el" style="border-radius: 10px;" />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { IEpisodeCrew, IEpisodeGuestStars } from "~/types/tv-seasons";
import * as _ from "lodash";
import { SECURE_BASE_URL } from "~/constants/tmdb-image.constant";
import { IStills } from "~/store/seasons";

@Component({
  name: "SeasonEpisodeCardData"
})
export default class SeasonEpisodeCardData extends Vue {
  @Prop(Array) readonly crew!: IEpisodeCrew[];
  @Prop(Array) readonly guestStars!: IEpisodeGuestStars[];
  @Prop(Array) readonly images!: IStills[];

  get formattedCrew(): object {
    return _.groupBy(this.crew, "job");
  }

  get formattedGuestStars(): {
    image: string;
    character: string;
    name: string;
  }[] {
    return this.guestStars
      .filter((el) => el.profile_path)
      .map((el) => ({
        image: `${SECURE_BASE_URL}/w185${el.profile_path}`,
        character: el.character,
        name: el.name
      }));
  }

  get formattedStill(): string[] | null {
    return this.images
      ? this.images.map((el) => `${SECURE_BASE_URL}/w300${el.file_path}`)
      : null;
  }
}
</script>

<style scoped></style>
