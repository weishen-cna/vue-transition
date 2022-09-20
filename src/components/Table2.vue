<template>
  <s-table v-bind="{ ...$attrs, ...$props }" v-on="$listeners"
    ><template
      v-for="(_, key, index) in $slots"
      :key="index"
      v-slot:[key]="args"
    >
      <slot :name="key" v-bind="args"></slot> </template
  ></s-table>
</template>
<script>
import { reactive, ref } from "vue";
export default {
  name: "",
  props: ["pagination"],
  setup(props, ctx) {
    // return () => {
    //   return <s-table {...props} {...ctx.attrs} vSlots={ctx.slots} />;
    // };
  },
};
</script>
<style scoped lang="scss"></style>
