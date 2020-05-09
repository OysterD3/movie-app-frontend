<template>
  <div>
    <h4 class="display-1 mx-4 pt-4">Similar</h4>
    <swiper class="swiper pa-4 pr-7" :options="swiperOption">
      <swiper-slide v-for="el in formattedSimilar" :key="el.image">
        <v-img
          eager
          :src="el.image"
          contain
          class="oys-border-radius oys-shadow"
          style="position: relative; cursor: pointer;"
          @click="
            $router.push({
              name: tv ? 'tv-id' : 'movie-id',
              params: { id: el.id }
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
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "nuxt-property-decorator";
import { ISimilar } from "~/types/movie.interface";
import { SECURE_BASE_URL } from "~/constants/tmdb-image.constant";

@Component({
  name: "DetailsSimilar"
})
export default class DetailsSimilar extends Vue {
  @Prop(Object) readonly similar!: ISimilar;
  @Prop({ type: Boolean, default: false }) readonly tv!: boolean;

  swiperOption = {
    slidesPerView: (this.$nuxt as any).$device.isMobile ? 1 : 4,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  };

  get formattedSimilar(): {
    title: string;
    id: number;
    image: string;
  }[] {
    return this.similar.results
      .filter((el) => el.backdrop_path)
      .map((el) => ({
        title: el.title,
        id: el.id,
        image: `${SECURE_BASE_URL}/w300${el.backdrop_path}`
      }));
  }
}
</script>

<style scoped></style>
