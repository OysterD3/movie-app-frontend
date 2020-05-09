import Vue, { CreateElement, RenderContext, VNode } from "vue";

export default Vue.extend({
  functional: true,
  props: {
    title: {
      type: String,
      required: true
    },
    first: {
      type: Boolean,
      default: false
    }
  },
  render(
    createElement: CreateElement,
    { props, children }: RenderContext
  ): VNode[] {
    return [
      createElement(
        "div",
        { class: { title: true, "mt-5": !props.first } },
        props.title
      ),
      createElement("div", { class: { "body-1": true } }, children)
    ];
  }
});
