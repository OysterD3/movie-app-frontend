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
        <v-btn rounded color="primary">
          <v-icon left>mdi-play</v-icon>
          Watch Trailer
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({
  name: "DetailsHeader"
})
export default class DetailsHeader extends Vue {
  @Prop({ required: true, type: String }) readonly title!: string;
  @Prop({ required: true, type: String }) readonly status!: string;
  @Prop({ required: true, type: [Number, String] }) readonly runtime!:
    | string
    | number;
  @Prop({ required: true, type: String }) readonly releaseDate!: string;
}
</script>

<style scoped></style>
