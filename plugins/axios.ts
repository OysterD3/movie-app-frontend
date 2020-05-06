import { Context } from "@nuxt/types";

export default function ({ $axios, store }: Context) {
  $axios.onError((error) => {
    const code = error.response?.status;
    store.dispatch("snackbar/setSnack", {
      color: "error",
      msg: `Responded with code: ${code}`
    });
  });
}
