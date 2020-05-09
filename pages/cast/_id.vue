<template></template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { Context } from "@nuxt/types";
import { IPerson } from "~/types/person.interface";

@Component({
  name: "CastPage",
  async asyncData({ $axios, params }: Context): Promise<{ cast: IPerson }> {
    const cast = (await $axios.$get(
      `/person/${params.id}?api_key=${process.env.API_KEY}&append_to_response=combined_credits,images,tagged_images`
    )) as IPerson;
    return { cast };
  }
})
export default class CastPage extends Vue {}
</script>

<style scoped></style>
