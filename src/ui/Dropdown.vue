<template>
  <div
      class="dropdown"
      :class="{'show': isActive}"
  >
    <ui-btn
        btn-primary
        dropdown-toggle
        :style-element="styleElement"
        @click.stop="activeToggle"
    >{{ value }}</ui-btn>
    <div
        class="dropdown-menu"
        :class="{'show': isActive}"
    >
      <button
          v-for="(item, index) in items"
          type="button"
          class="dropdown-item"
          :key="index"
          @click="itemClickHandler(item)"
      >{{ item }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  props: {
    value: {
      type: [String, Number],
      default: 'Dropdown',
    },
    items: {
      type: Array,
      require: true,
    },
    itemClickHandler: {
      type: Function,
      require: true,
    },
    styleElement: {
      type: Object,
      require: false,
    }
  },
  data() {
    return {
      isActive: false,
    }
  },
  methods: {
    activeToggle() {
      this.isActive = !this.isActive;
    },
  },
  watch: {
    isActive(val) {
      if (val) {
        document.addEventListener('click', this.activeToggle);
      } else {
        document.removeEventListener('click', this.activeToggle);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .dropdown {
    width: fit-content;
    display: inline-block;
  }
</style>