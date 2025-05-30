<template>
  <div class="mb-4">
    <label class="block text-sm font-medium text-gray-700 mb-1">{{ label }}</label>
    <input
      :type="type"
      :value="value"
      @input="$emit('input', $event.target.value)"
      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
    />
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    value: [String, Number],
    type: {
      type: String,
      default: "text",
    },
  },
};
</script>
