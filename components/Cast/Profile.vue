<template>
  <v-card
    class="oys-border-radius"
    style="background: rgba(255, 255, 255, 0.1);"
  >
    <v-img :src="photo" v-if="photo" style="border-radius: 20px 20px 0 0;" />
    <div class="pa-4">
      <div class="headline font-weight-bold">Personal Info</div>
      <PersonalInfo title="Known For" first>
        {{ department }}
      </PersonalInfo>
      <PersonalInfo title="Gender">
        {{ formatGender }}
      </PersonalInfo>
      <PersonalInfo title="Birthday">{{ birthday }} ({{ age }})</PersonalInfo>
      <PersonalInfo title="Place of Birth">{{ birth }}</PersonalInfo>
      <PersonalInfo title="Also Known As">
        <div v-for="el in aka" :key="el">{{ el }}</div>
      </PersonalInfo>
    </div>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { SECURE_BASE_URL } from "~/constants/tmdb-image.constant";
import PersonalInfo from "~/components/Cast/PersonalInfo";
import moment from "moment";

@Component({
  name: "Profile",
  components: { PersonalInfo }
})
export default class Profile extends Vue {
  @Prop() readonly profilePicture!: string | null;
  @Prop(String) readonly department!: string;
  @Prop(String) readonly birthday!: string;
  @Prop(String) readonly birth!: string;
  @Prop(Array) readonly aka!: string[];
  @Prop(Number) readonly gender!: number;

  get photo(): string | null {
    return this.profilePicture
      ? `${SECURE_BASE_URL}/original${this.profilePicture}`
      : null;
  }

  get formatGender(): string {
    if (this.gender === 0) return "Not Specified";
    if (this.gender === 1) return "Female";
    if (this.gender === 2) return "Male";
  }

  get age(): string {
    return `${moment().diff(this.birthday, "years", false)} years old`;
  }
}
</script>

<style scoped></style>
