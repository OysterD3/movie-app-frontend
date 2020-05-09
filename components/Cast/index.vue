<template>
  <v-row class="px-4">
    <v-col cols="4">
      <Profile
        :profile-picture="cast.profile_path"
        :aka="cast.also_known_as"
        :birth="cast.place_of_birth"
        :birthday="cast.birthday"
        :gender="cast.gender"
        :department="cast.known_for_department"
      />
    </v-col>
    <v-col cols="8">
      <div
        class="oys-border-radius pa-4"
        style="background: rgba(255, 255, 255, 0.2);"
      >
        <h3 class="display-1 pt-3 font-weight-bold">{{ cast.name }}</h3>
        <div class="headline mt-5">Biography</div>
        <p style="white-space: pre-line;" class="body-2">
          {{ cast.biography }}
        </p>
        <div class="headline mt-5">Known For</div>
        <KnownFor :known-for="cast.combined_credits.cast" />
      </div>
      <div
        class="oys-border-radius pa-4 mt-5"
        style="background: rgba(255, 255, 255, 0.2);"
      >
        <div class="headline">Filmography</div>
        <Timeline :cast="cast.combined_credits.cast" />
      </div>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { IPerson } from "~/types/person.interface";
import Profile from "~/components/Cast/Profile.vue";
import KnownFor from "~/components/Cast/KnownFor.vue";
import Timeline from "~/components/Cast/Timeline.vue";

@Component({
  name: "CastIndex",
  components: { Timeline, KnownFor, Profile }
})
export default class CastIndex extends Vue {
  @Prop(Object) readonly cast!: IPerson;
}
</script>

<style scoped></style>
