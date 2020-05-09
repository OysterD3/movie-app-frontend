<template>
  <div>
    <Slider :images="images" />
    <LatestList heading="Latest Movies" />
    <LatestList heading="Latest TVs" tv />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import Slider from "@/components/Homepage/Slider.vue";
import {
  IDiscover,
  IDiscoverMovieResults
} from "@/types/discover-movie.interface";
import { BASE_URL } from "~/constants/tmdb-image.constant";
import LatestList from "~/components/Homepage/LatestList.vue";

@Component({
  name: "HomepageIndex",
  components: {
    LatestList,
    Slider
  }
})
export default class HomepageIndex extends Vue {
  images: { link: string; id: number }[] = [];

  async mounted(): Promise<void> {
    this.images = (((await this.$axios.$get(
      `/discover/movie?api_key=${process.env.API_KEY}&sort_by=popularity.desc`
    )) as IDiscover).results as IDiscoverMovieResults[]).map((el) => ({
      link: `${BASE_URL}/w780${el.poster_path}`,
      id: el.id
    }));
  }
}
</script>

<style scope></style>
