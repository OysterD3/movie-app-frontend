<template>
  <div>
    <v-row no-gutters class="px-4">
      <v-col cols="12" md="3">
        <DiscoverSidebar :tv="tv" />
      </v-col>
      <v-col cols="12" md="9">
        <v-row>
          <v-col cols="6" md="3" v-for="el in discoverSynced" :key="el.id">
            <DiscoverCard
              :title="el.title || el.name"
              :image="el.poster_path"
              :rating="el.vote_average"
              :id="el.id"
              :tv="!!el.first_air_date"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <InfiniteLoading @infinite="infiniteHandler" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, PropSync, Vue, Watch } from "nuxt-property-decorator";
import {
  IDiscover,
  IDiscoverMovieResults,
  IDiscoverTvResults
} from "~/types/discover-movie.interface";
import DiscoverCard from "~/components/Discover/Card.vue";
import DiscoverSidebar from "~/components/Discover/Sidebar/Index.vue";
import InfiniteLoading from "vue-infinite-loading";

@Component({
  name: "DiscoverIndex",
  components: { DiscoverSidebar, DiscoverCard, InfiniteLoading }
})
export default class DiscoverIndex extends Vue {
  @PropSync("discover") discoverSynced!:
    | IDiscoverMovieResults[]
    | IDiscoverTvResults[];
  @Prop({ type: Boolean, default: false }) readonly tv!: boolean;
  page = 1;

  @Watch("$route.query")
  onQueryChanged(): void {
    this.page = 1;
  }

  infiniteHandler($state: any): void {
    const queryParams = Object.entries(this.$route.query)
      .map(([key, value]) => `${key}=${value}`)
      .filter((el) => !el.includes("undefined"))
      .join("&");
    this.page += 1;
    this.$axios
      .$get(
        `/discover/${
          this.$route.name?.includes("movie") ? "movie" : "tv"
        }?api_key=${process.env.API_KEY}&page=${this.page}${
          queryParams.length > 0 ? `&${queryParams}` : ""
        }`
      )
      .then((data: IDiscover) => {
        if (data.results.length) {
          this.discoverSynced.push(...(data.results as any));
          $state.loaded();
        } else {
          $state.complete();
        }
      });
  }
}
</script>

<style scoped></style>
