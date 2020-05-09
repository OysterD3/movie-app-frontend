<template>
  <div class="oys-details-heading text-left">
    <div class="oys-details-heading--content">
      <h1 :style="{ fontSize: $device.isMobile ? '2.5rem' : '4.5rem' }">
        {{ title }}
      </h1>
      <div style="width: 100%;" class="text-no-wrap">
        <div class="d-inline-block text-center">
          {{ status }}
        </div>
        <div class="d-inline-block text-center px-2">
          |
        </div>
        <div class="d-inline-block text-center">{{ runtime }}mins</div>
        <div class="d-inline-block text-center px-2">
          |
        </div>
        <div class="d-inline-block text-center">
          {{ releaseDate }}
        </div>
      </div>
      <div class="mt-12">
        <TrailerMenu :videos="videos" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import VideoDialog from "~/components/Details/VideoDialog.vue";
import { IVideos } from "~/types/movie.interface";
import TrailerMenu from "~/components/Details/TrailerMenu.vue";

@Component({
  name: "DetailsHeader",
  components: { TrailerMenu, VideoDialog }
})
export default class DetailsHeader extends Vue {
  @Prop({ required: true, type: String }) readonly title!: string;
  @Prop({ required: true, type: String }) readonly status!: string;
  @Prop({ required: true, type: [Number, String] }) readonly runtime!:
    | string
    | number;
  @Prop({ required: true, type: String }) readonly releaseDate!: string;
  @Prop(Object) readonly videos!: IVideos;
}
</script>

<style scoped></style>
