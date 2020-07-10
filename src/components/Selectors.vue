<template>
  <div class="selectors">
    <div class="selectors__first">
      <ui-dropdown
          :style-element="{width: '130px'}"
          :value="selectFirst || 'Brands'"
          :items="brandsFist"
          :item-click-handler="changeSelectFirst"
      />
      <ui-dropdown
          :style-element="{width: '130px'}"
          :value="selectFirst || 'Brands'"
          :items="brandsFist"
          :item-click-handler="changeSelectFirst"
      />
    </div>
    <div class="selectors__second">
      <ui-dropdown
          :style-element="{width: '130px'}"
          :value="selectSecond || 'Brands'"
          :items="brandsSecond"
          :item-click-handler="changeSelectSecond"
      />
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "Selectors",
  computed: {
    ...mapGetters({
      brandsFist: 'brandsFist',
      brandsSecond: 'brandsSecond',
      selectFirst: 'selectFirst',
      selectSecond: 'selectSecond',
    })
  },
  methods: {
    ...mapActions({
      changeSelectFirst: 'changeSelectFirst',
      changeSelectSecond: 'changeSelectSecond',
    })
  }
}
</script>

<style lang="scss" scoped>
.selectors__first,
.selectors__second {
  margin: 20px 0;
}
</style>