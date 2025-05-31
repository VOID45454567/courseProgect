<template>
  <button :class="class">
    {{ text }}
  </button>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    class: {
      type: String,
      required: true,
    },
  },
};
</script>
