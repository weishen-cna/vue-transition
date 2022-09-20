<script lang="jsx">
import { reactive, ref } from "vue";
import Table2 from "./Table2.vue";
export default {
  name: "",
  props: ["pagination"],
  setup(props, ctx) {
    return () => {
      return <Table2 {...props} {...ctx.attrs} vSlots={ctx.slots} />;
    };
  },
};
</script>
<style scoped lang="scss"></style>
