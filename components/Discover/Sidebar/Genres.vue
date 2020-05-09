<template>
  <div>
    <div class="title">Genres</div>
    <v-chip-group v-model="genresSynced" column multiple>
      <v-chip
        v-for="el in allGenres"
        :key="el.id"
        color="primary"
        :value="el.id.toString()"
        filter
      >
        {{ el.name }}
      </v-chip>
    </v-chip-group>
  </div>
</template>

<script lang="ts">
import { Component, PropSync, Vue } from "nuxt-property-decorator";
import { MOVIE_GENRES, TV_GENRES } from "~/constants/genres.constant";

@Component({
  name: "Genres"
})
export default class Genres extends Vue {
  @PropSync("genres") genresSynced!: string[];

  get allGenres(): { id: number; name: string }[] {
    return this.$route.name?.includes("movie") ? MOVIE_GENRES : TV_GENRES;
  }
}
</script>

<style scoped></style>
