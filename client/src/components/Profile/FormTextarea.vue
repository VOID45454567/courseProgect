<template>
  <div class="mb-4">
    <label class="block text-sm font-medium text-gray-700 mb-1">{{ label }}</label>
    <textarea
      :value="value"
      @input="$emit('input', $event.target.value)"
      :rows="rows"
      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
    ></textarea>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    value: String,
    rows: {
      type: Number,
      default: 3,
    },
  },
};
</script>
