<template functional>
  <button
      class="btn"
      type="button"
      :class="{
        'btn-primary': props.btnPrimary,
        'btn-secondary': props.btnSecondary,
        'btn-success': props.btnSuccess,
        'btn-danger': props.btnDanger,
        'btn-warning': props.btnWarning,
        'btn-info': props.btnInfo,
        'btn-light': props.btnLight,
        'btn-dark': props.btnDark,
        'btn-link': props.btnLink,
        'dropdown-toggle': props.dropdownToggle,
        'btn-outline-secondary': props.btnOutlineSecondary,
      }"
      :style="props.styleElement"
      v-on="listeners"
      :disabled="props.disabled"
  >
    <slot/>
  </button>
</template>

<script>
export default {
  functional: true,
  name: "Btn",
  props: {
    btnPrimary: {
      type: Boolean,
      default: false,
    },
    btnSecondary: {
      type: Boolean,
      default: false,
    },
    btnSuccess: {
      type: Boolean,
      default: false,
    },
    btnDanger: {
      type: Boolean,
      default: false,
    },
    btnWarning: {
      type: Boolean,
      default: false,
    },
    btnInfo: {
      type: Boolean,
      default: false,
    },
    btnLight: {
      type: Boolean,
      default: false,
    },
    btnDark: {
      type: Boolean,
      default: false,
    },
    btnLink: {
      type: Boolean,
      default: false,
    },
    dropdownToggle: {
      type: Boolean,
      default: false,
    },
    btnOutlineSecondary: {
      type: Boolean,
      default: false,
    },
    styleElement: {
      type: Object,
      require: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    }
  }
}
</script>