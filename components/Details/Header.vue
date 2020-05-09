<template>
  <div class="oys-details-heading text-left">
    <div class="oys-details-heading--content">
      <h1>
        {{ title }}
      </h1>
      <div
        class="d-flex justify-lg-space-between no-gutters"
        style="width: 100%;"
      >
        <v-col cols class="text-center text-no-wrap">
          {{ status }}
        </v-col>
        <v-col cols class="text-center text-no-wrap">
          |
        </v-col>
        <v-col cols class="text-center text-no-wrap">{{ runtime }}mins</v-col>
        <v-col cols class="text-center text-no-wrap">
          |
        </v-col>
        <v-col cols class="text-center text-no-wrap">
          {{ releaseDate }}
        </v-col>
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
