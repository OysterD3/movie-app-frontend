<template>
  <div>
    <Slider :images="images" />
    <LatestList heading="Latest Movies" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import Slider from "@/components/Homepage/Slider.vue";
import { IDiscoverMovie } from "@/types/discover-movie.interface";
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
  images: string[] = [];

  async mounted(): Promise<void> {
    this.images = ((await this.$axios.$get(
      `/discover/movie?api_key=${process.env.API_KEY}&sort_by=popularity.desc`
    )) as IDiscoverMovie).results.map(
      (el) => `${BASE_URL}/w780${el.poster_path}`
    );
  }
}
</script>

<style scope></style>
