<template>
  <div
    :style="{
      backgroundImage
    }"
    :class="{ 'oys-details-background': heroImage }"
  >
    <DetailsHeader
      :title="details.title"
      :status="details.status"
      :runtime="details.runtime"
      :release-date="details.release_date"
      :videos="details.videos"
    />
    <v-row no-gutters>
      <v-col md="8" cols="12">
        <DetailsCast :cast="details.credits.cast" @hover-cast="onHoverCast" />
        <DetailsSimilar :similar="details.similar" />
      </v-col>
      <v-col md="4" cols="12" class="px-4">
        <h4 class="display-1 mb-4">Recommendations</h4>
        <div
          class="overflow-x-auto recommendation"
          style="max-height: 550px;"
          v-if="!$device.isMobile"
        >
          <v-img
            eager
            v-for="el in recommendation"
            :key="el.id"
            :src="el.image"
            contain
            class="oys-border-radius oys-shadow mb-4"
            style="position: relative; cursor: pointer;"
            @click="
              $router.push({
                name: 'movie-id',
                params: { id: el.id.toString() }
              })
            "
          >
            <div class="oys-details-cast--act">
              <div class="font-weight-bold subtitle-2 px-3 pt-3">
                {{ el.title }}
              </div>
            </div>
          </v-img>
        </div>
        <swiper class="swiper pa-4 pr-7" :options="swiperOption">
          <swiper-slide v-for="el in recommendation" :key="el.id">
            <v-img
              eager
              :src="el.image"
              contain
              class="oys-border-radius oys-shadow"
              style="position: relative; cursor: pointer;"
              @click="
                $router.push({
                  name: 'movie-id',
                  params: { id: el.id.toString() }
                })
              "
            >
              <div class="oys-details-cast--act">
                <div class="font-weight-bold subtitle-2 px-3 pt-3">
                  {{ el.title }}
                </div>
              </div>
            </v-img>
          </swiper-slide>
        </swiper>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { IMovieDetails } from "~/types/movie.interface";
import DetailsHeader from "~/components/Details/Header.vue";
import { SECURE_BASE_URL } from "~/constants/tmdb-image.constant";
import DetailsCast from "~/components/Details/Cast.vue";
import DetailsSimilar from "~/components/Details/Similar.vue";

@Component({
  name: "DetailsIndex",
  components: { DetailsSimilar, DetailsCast, DetailsHeader }
})
export default class DetailsIndex extends Vue {
  @Prop({ required: true, type: Object }) readonly details!: IMovieDetails;
  image = "";
  swiperOption = {
    slidesPerView: (this.$nuxt as any).$device.isMobile ? 1 : 4,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  };

  get heroImage(): string | null {
    if (this.image === "")
      return this.details.backdrop_path
        ? `${SECURE_BASE_URL}/w1280${this.details.backdrop_path}`
        : null;
    return this.image;
  }

  onHoverCast(e: string): void {
    this.image = e.replace("w185", "h632");
  }

  get backgroundImage(): string | undefined {
    if ((this as any).$device.isMobile) {
      return `linear-gradient(to bottom, rgba(13, 21, 49, 0.8) 0%, rgba(39, 67, 158, 0.84) 100%), url(${this.heroImage})`;
    } else {
      return this.heroImage
        ? `linear-gradient(to right, rgba(13, 21, 49, 1.00) 30%, rgba(39, 67, 158, 0.84) 100%), url(${this.heroImage})`
        : undefined;
    }
  }

  get poster(): string | null {
    return this.details.poster_path
      ? `${SECURE_BASE_URL}/w500${this.details.poster_path}`
      : null;
  }

  get recommendation():
    | { id: number; title: string; image: string }[]
    | undefined {
    return this.details.recommendations?.results
      .filter((el) => el.backdrop_path)
      .map((el) => ({
        id: el.id,
        title: el.title,
        image: `${SECURE_BASE_URL}/w780${el.backdrop_path}`
      }));
  }
}
</script>

<style scoped>
.recommendation::-webkit-scrollbar {
  display: none;
}

.recommendation {
  -ms-overflow-style: none;
}
</style>
