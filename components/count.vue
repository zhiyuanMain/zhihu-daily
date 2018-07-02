<template>
    <div class="count">
        <button @click="handleDecrement">-</button>
        {{currentValue}}
        <button @click="handleIncrement">+</button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      currentValue: this.value
    };
  },
  props: {
      value: {
          type: Number,
          default: 0
      }
  },
  watch: {
      currentValue(newValue) {
          this.$emit('input', newValue);
      }
  },
  methods: {
      handleDecrement() {
          this.currentValue--;
      },
      handleIncrement() {
          this.currentValue++;
      }
  }
}
</script>

<style scoped>
    .count {
        color: #999;
    }
    .count button {
        padding: 0 10px;
        text-align: center;
        line-height: 24px;
    }
</style>
