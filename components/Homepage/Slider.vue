<template>
  <div class="mt-3">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="el in images" :key="el.id">
        <v-img
          :src="el.link"
          class="oys-border-radius"
          @click="$router.push({ name: 'movie-id', params: { id: el.id } })"
          style="position: relative; cursor: pointer;"
        >
          <div class="oys-details-cast--act">
            <div class="font-weight-bold subtitle-2 px-3 pt-3 text-center">
              {{ el.title }}
            </div>
          </div>
        </v-img>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";

@Component({
  name: "Slider"
})
export default class Slider extends Vue {
  @Prop({ required: true, type: Array }) readonly images!: {
    title: string;
    link: string;
    id: number;
  }[];
  swiperOption = {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: -50,
      depth: 100,
      modifier: 1,
      slideShadows: true
    },
    pagination: {
      el: ".swiper-pagination"
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false
    }
  };
}
</script>

<style lang="scss" scoped>
.swiper {
  height: 100%;
  width: 100%;

  .swiper-slide {
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 450px;
    text-align: center;
    font-weight: bold;
    background-position: center;
    background-size: cover;
    color: #fff;
  }

  .swiper-pagination {
    ::v-deep .swiper-pagination-bullet.swiper-pagination-bullet-active {
      background-color: #fff;
    }
  }
}
</style>
