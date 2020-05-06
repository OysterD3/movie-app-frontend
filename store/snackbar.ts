import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";

@Module({ stateFactory: true })
export default class SnackbarVuex extends VuexModule {
  snack = "";
  color = null;
  isActive = false;

  @Mutation
  set({ msg, color = null }: { msg: string; color: null | string }) {
    this.snack = msg;
    this.color = color as null;
  }

  @Mutation
  updateStatus(status: boolean) {
    this.isActive = status;
  }

  @Action
  setSnack({ msg, color = null }: { msg: string; color: null | string }) {
    this.context.commit("updateStatus", true);
    this.context.commit("set", { msg, color });
    setTimeout(() => {
      this.context.commit("updateStatus", false);
    }, 3000);
  }
}
