<template>
  <section class="mx-2">
    <div class="my-10">
      <h3 class="oys-heading over-line">
        {{ heading }}
      </h3>
    </div>
    <div class="text-right mb-3">
      <ul class="oys-genres-tab">
        <li v-for="(el, idx) in genres">
          <div class="d-inline-block">{{ el.name }}</div>
          <span class="oys-genres-tab-splitter"></span>
        </li>
        <li>
          <div class="d-inline-block">See more >></div>
        </li>
      </ul>
    </div>
    <v-row>
      <v-col
        cols="2"
        v-for="el in data"
        :key="el.id"
        @click="
          tv
            ? $router.push({ name: 'tv-id', params: { id: el.id } })
            : $router.push({ name: 'movie-id', params: { id: el.id } })
        "
        style="cursor: pointer; position: relative;"
      >
        <v-hover v-slot:default="{ hover }">
          <v-img class="oys-border-radius" :src="el.poster_path">
            <v-expand-transition>
              <div
                v-if="hover"
                style="height: 100%; background-color: #0e1a3f; opacity: 0.8;"
                class="d-flex justify-center align-center white--text text-center pa-3"
              >
                {{ tv ? el.name : el.title }}
              </div>
            </v-expand-transition>
          </v-img>
        </v-hover>
        <div
          :class="{
            'movie-rating': true,
            'py-1': true,
            'text-center': true,
            'oys-border-radius': true,
            success: el.vote_average >= 7.5,
            warning: el.vote_average >= 5 && el.vote_average < 7.5,
            error: el.vote_average >= 0 && el.vote_average < 5,
            'darken-2': true
          }"
        >
          {{ el.vote_average }}
        </div>
      </v-col>
    </v-row>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { IGenres } from "~/types/genres.interface";
import { MOVIE_GENRES, TV_GENRES } from "~/constants/genres.constant";
import moment from "moment";
import {
  IDiscover,
  IDiscoverMovieResults,
  IDiscoverTvResults
} from "~/types/discover-movie.interface";
import { BASE_URL } from "~/constants/tmdb-image.constant";

@Component({
  name: "LatestList"
})
export default class LatestList extends Vue {
  @Prop({ type: String, default: "Latest" }) readonly heading!: string;
  @Prop({ type: Boolean, default: false }) readonly tv!: boolean;
  @Prop({ type: String, default: undefined }) readonly genresFilter!: string;
  data: IDiscoverMovieResults[] | IDiscoverTvResults[] = [];

  async mounted(): Promise<void> {
    const queryParameters = `api_key=${
      process.env.API_KEY
    }&with_original_language=en&region=US&sort_by=primary_release_date.desc&${
      this.tv ? "first_air_date" : "primary_release_date"
    }.lte=${moment().utcOffset(8).format("YYYY-MM-DD")}`;

    if (this.tv) {
      this.data = (((await this.$axios.$get(
        `/discover/tv?${queryParameters}`
      )) as IDiscover).results as IDiscoverTvResults[])
        .slice(0, 12)
        .map((el) => {
          el.poster_path = el.poster_path
            ? `${BASE_URL}/w185${el.poster_path}`
            : "https://critics.io/img/movies/poster-placeholder.png";
          return el;
        });
    } else {
      this.data = (((await this.$axios.$get(
        `/discover/movie?${queryParameters}`
      )) as IDiscover).results as IDiscoverMovieResults[])
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
    return this.tv ? TV_GENRES.slice(0, 7) : MOVIE_GENRES.slice(0, 7);
  }
}
</script>

<style lang="scss">
.oys-heading {
  &.over-line {
    display: flex;
    align-items: center;
    &:after {
      content: "";
      margin-left: 0.5rem;
      background: #fff;
      height: 2px;
      flex: 1;
    }
  }
}

.movie-rating {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
}
</style>
