<template>
  <div class="oys-details-heading text-left">
    <div class="oys-details-heading--content">
      <h1 :style="{ fontSize: $device.isMobile ? '2.5rem' : '4.5rem' }">
        {{ title }}
      </h1>
      <div class="subtitle-2 font-italic"></div>
      <div
        :class="{
          title: !$device.isMobile,
          'subtitle-2': $device.isMobile,
          'text-no-wrap': true
        }"
      >
        <div class="d-inline-block">{{ formattedGenres }}</div>
        <div class="d-inline-block">
          <span v-if="formattedGenres">•</span>
          {{ formattedRuntime }}
        </div>
      </div>
      <div class="mt-3">
        <div class="title">Overview</div>
        <p class="body-2">{{ overview }}</p>
      </div>
      <div class="mt-5">
        <TrailerMenu :videos="videos" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { IVideos } from "~/types/movie.interface";
import { IGenres } from "~/types/genres.interface";
import TrailerMenu from "~/components/Details/TrailerMenu.vue";

@Component({
  name: "TvDetailsHeader",
  components: { TrailerMenu }
})
export default class TvDetailsHeader extends Vue {
  @Prop({ required: true, type: String }) readonly title!: string;
  @Prop({ required: true, type: Array }) readonly genres!: IGenres[];
  @Prop({ required: true, type: Array }) readonly runtime!: number[];
  @Prop(String) readonly overview!: string;
  @Prop(Object) readonly videos!: IVideos;

  get formattedGenres(): string {
    return this.genres.map((el) => el.name).join(", ");
  }

  get formattedRuntime(): string {
    return this.runtime.map((el) => `${el}m`).join(", ");
  }
}
</script>

<style scoped></style>
