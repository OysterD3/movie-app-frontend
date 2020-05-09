<template>
  <v-select
    label="Sort results"
    v-model="data"
    :items="items"
    outlined
    hide-details
    :menu-props="{ light: true }"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "nuxt-property-decorator";

@Component({
  name: "SortBy"
})
export default class SortBy extends Vue {
  @Prop({ type: Boolean, default: false }) readonly tv!: boolean;
  data = this.$nuxt.$route.query.sort_by || "popularity.desc";

  get items(): { text: string; value: string }[] {
    if (!this.tv) {
      return [
        { text: "Popularity Ascending", value: "popularity.asc" },
        { text: "Popularity Descending", value: "popularity.desc" },
        { text: "Release Date Ascending", value: "release_date.asc" },
        { text: "Release Date Descending", value: "release_date.desc" },
        { text: "Revenue Ascending", value: "revenue.asc" },
        { text: "Revenue Descending", value: "revenue.desc" },
        { text: "Title (A-Z)", value: "original_title.asc" },
        { text: "Title (Z-A)", value: "original_title.desc" },
        { text: "Rating Ascending", value: "vote_average.asc" },
        { text: "Rating Descending", value: "vote_average.desc" }
      ];
    }
    return [
      { text: "Popularity Ascending", value: "popularity.asc" },
      { text: "Popularity Descending", value: "popularity.desc" },
      { text: "First Air Date Ascending", value: "first_air_date.asc" },
      { text: "First Air Date Descending", value: "first_air_date.desc" },
      { text: "Rating Ascending", value: "vote_average.asc" },
      { text: "Rating Descending", value: "vote_average.desc" }
    ];
  }

  @Watch("data")
  onDataChanged(val: string): void {
    this.$router.push({
      name: this.$route.name as string,
      query: {
        ...this.$route.query,
        sort_by: val
      }
    });
  }
}
</script>

<style scoped></style>
