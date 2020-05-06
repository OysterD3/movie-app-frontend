<template>
  <div class="mt-3">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="el in images" :key="el">
        <v-img :src="el" />
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
  @Prop({ required: true, type: Array }) readonly images!: string[];
  swiperOption = {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    overflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    },
    pagination: {
      el: ".swiper-pagination"
    },
    loop: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false
    },
    on: {
      slideChange() {
        // @ts-ignore
        if (this.isEnd) {
          // @ts-ignore
          this.loopDestroy();
          // @ts-ignore
          this.loopCreate();
        }
        // @ts-ignore
        if (this.isBeginning) {
          // @ts-ignore
          this.loopDestroy();
          // @ts-ignore
          this.loopCreate();
        }
      }
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
    background-color: #2c8dfb;
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
