<template>
  <div>
    <swiper class="swiper pa-4" :options="swiperOption">
      <swiper-slide v-for="el in poster" :key="el.image">
        <v-img
          eager
          :src="el.image"
          width="154px"
          class="oys-border-radius oys-shadow"
          style="position: relative; cursor: pointer;"
          @click="
            $router.push({
              name: el.type === 'tv' ? 'tv-id' : 'movie-id',
              params: { id: el.id }
            })
          "
        >
          <div class="oys-details-cast--act">
            <div class="font-weight-bold subtitle-2 px-3 pt-3 text-center">
              {{ el.name }}
            </div>
          </div>
        </v-img>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { SECURE_BASE_URL } from "~/constants/tmdb-image.constant";
import { ICombinedCreditsCast } from "~/types/person.interface";
import * as _ from "lodash";

@Component({
  name: "KnownFor"
})
export default class KnownFor extends Vue {
  @Prop(Array) readonly knownFor!: ICombinedCreditsCast[];

  swiperOption = {
    slidesPerView: (this.$nuxt as any).$device.isMobile ? 2 : 4,
    spaceBetween: 15,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  };

  get poster(): {
    id: number;
    image: string;
    name: string | undefined;
    type: string;
  }[] {
    return _.uniqBy(
      this.knownFor
        .filter(
          (el) =>
            el.poster_path &&
            (el.media_type === "tv" || el.media_type === "movie")
        )
        .map((el) => ({
          id: el.id,
          image: `${SECURE_BASE_URL}/w154${el.poster_path}`,
          name: el.name || el.title,
          type: el.media_type
        })),
      "image"
    );
  }
}
</script>

<style scoped></style>
