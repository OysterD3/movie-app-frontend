<template>
  <v-card
    flat
    style="background: rgba(255, 255, 255, 0.2);"
    class="oys-border-radius mt-6 mr-5"
  >
    <v-card-text class="white--text">
      <SortBy />
      <v-divider class="my-4" />
      <Genres :genres.sync="genres" />
      <ReleaseDates :fromDate.sync="fromDate" :to-date.sync="toDate" />
    </v-card-text>
    <v-card-actions>
      <v-btn
        depressed
        block
        rounded
        color="white"
        class="primary--text"
        @click="applyFilters"
      >
        Apply Filters
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import SortBy from "~/components/Discover/Sidebar/SortBy.vue";
import Genres from "~/components/Discover/Sidebar/Genres.vue";
import ReleaseDates from "~/components/Discover/Sidebar/ReleaseDates.vue";

@Component({
  name: "DiscoverSidebar",
  components: { ReleaseDates, Genres, SortBy }
})
export default class DiscoverSidebar extends Vue {
  @Prop({ type: Boolean, default: false }) readonly tv!: boolean;
  genres = this.$nuxt.$route.query.with_genres
    ? (this.$nuxt.$route.query.with_genres as string).split(",")
    : [];
  fromDate = null;
  toDate = null;

  applyFilters(): void {
    console.log({
      ...this.$route.query,
      with_genres: this.genres.length > 0 ? this.genres.join(",") : undefined,
      "release_date.gte": !this.tv && this.fromDate ? this.fromDate : undefined,
      "release_date.lte": !this.tv && this.toDate ? this.toDate : undefined,
      "first_air_date.gte":
        this.tv && this.fromDate ? this.fromDate : undefined,
      "first_air_date.lte": this.tv && this.toDate ? this.toDate : undefined
    });
    this.$router.push({
      name: this.$route.name as string,
      query: {
        ...this.$route.query,
        with_genres: this.genres.length > 0 ? this.genres.join(",") : undefined,
        "release_date.gte":
          !this.tv && this.fromDate ? this.fromDate : undefined,
        "release_date.lte": !this.tv && this.toDate ? this.toDate : undefined,
        "first_air_date.gte":
          this.tv && this.fromDate ? this.fromDate : undefined,
        "first_air_date.lte": this.tv && this.toDate ? this.toDate : undefined
      }
    });
  }
}
</script>

<style scoped></style>
