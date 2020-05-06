<template>
  <section class="mx-2">
    <div class="my-10">
      <h3
        style="
          width: 100%;
          border-bottom: 1px solid #fff;
          line-height: 0.1em;
          margin: 10px 0 20px;
        "
      >
        <span style="background: #000; padding: 0 10px;">
          {{ heading }}
        </span>
      </h3>
    </div>
    <div class="text-right mb-3">
      <ul class="oys-genres-tab">
        <li v-for="(el, idx) in genres">
          <div class="d-inline-block">{{ el.name }}</div>
          <span
            class="oys-genres-tab-splitter"
            v-if="idx !== genres.length - 1"
          ></span>
        </li>
      </ul>
    </div>
    <v-row>
      <v-col cols="2" v-for="el in data" :key="el.id">
        <v-img :src="el.poster_path" />
      </v-col>
    </v-row>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { IGenres } from "~/types/genres.interface";
import { MOVIE_GENRES } from "~/constants/genres.constant";
import moment from "moment";
import {
  IDiscoverMovie,
  IDiscoverResults
} from "~/types/discover-movie.interface";
import { BASE_URL } from "~/constants/tmdb-image.constant";

@Component({
  name: "LatestList"
})
export default class LatestList extends Vue {
  @Prop({ type: String, default: "Latest" }) readonly heading!: string;
  @Prop({ type: Boolean, default: false }) readonly tv!: boolean;
  @Prop({ type: String, default: undefined }) readonly genresFilter!: string;
  data: IDiscoverResults[] = [];

  async mounted(): Promise<void> {
    const queryParameters = `api_key=${
      process.env.API_KEY
    }&region=US&sort_by=primary_release_date.desc&primary_release_date.lte=${moment()
      .utcOffset(8)
      .format("YYYY-MM-DD")}`;

    if (this.tv) {
      this.data = ((await this.$axios.$get(
        `/discover/tv?${queryParameters}`
      )) as IDiscoverMovie).results
        .slice(0, 12)
        .map((el) => {
          el.poster_path = el.poster_path
            ? `${BASE_URL}/w185${el.poster_path}`
            : "https://critics.io/img/movies/poster-placeholder.png";
          return el;
        });
    } else {
      this.data = ((await this.$axios.$get(
        `/discover/movie?${queryParameters}`
      )) as IDiscoverMovie).results
        .slice(0, 12)
        .map((el) => {
          el.poster_path = el.poster_path
            ? `${BASE_URL}/w185${el.poster_path}`
            : "https://critics.io/img/movies/poster-placeholder.png";
          return el;
        });
    }
  }

  get genres(): IGenres[] {
    return MOVIE_GENRES.slice(0, 7);
  }
}
</script>

<style scoped></style>
