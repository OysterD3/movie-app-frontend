<template>
  <div>
    <v-card height="200px" class="d-flex align-center transparent" flat>
      <v-row dense class="pl-6" align="center">
        <v-col cols="1">
          <v-img :src="poster" v-if="poster" max-height="150px" contain />
        </v-col>
        <v-col cols>
          <h3 class="display-1 font-weight-bold">
            {{ season.name }}
            <span class="headline font-weight-regular">({{ year }})</span>
          </h3>
          <div
            style="cursor: pointer;"
            class="mt-2 d-inline-block grey--text"
            @click="
              $router.push({
                name: 'tv-id',
                params: { id: $route.params.id }
              })
            "
          >
            <v-icon left color="grey">mdi-keyboard-backspace</v-icon>
            Back to main
          </div>
        </v-col>
      </v-row>
    </v-card>
    <v-divider class="py-4" />
    <template v-for="el in season.seasons">
      <SeasonCard :data="el" class="mb-10" />
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import moment from "moment";
import { SECURE_BASE_URL } from "~/constants/tmdb-image.constant";
import { ITvDetails } from "~/types/tv.interface";
import SeasonCard from "~/components/Seasons/Card.vue";

@Component({
  name: "SeasonList",
  components: { SeasonCard }
})
export default class SeasonList extends Vue {
  @Prop(Object) readonly season!: ITvDetails;

  get poster(): string | null {
    return this.season.poster_path
      ? `${SECURE_BASE_URL}/w154${this.season.poster_path}`
      : null;
  }

  get year(): string {
    return moment(this.season.first_air_date).format("YYYY");
  }
}
</script>

<style scoped></style>
