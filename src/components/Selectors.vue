<template>
  <div class="selectors">
    <div
        v-for="(element, index) in formElement"
        :key="element.id"
        class="selectors__line"
    >
      <ui-dropdown
          :id="index"
          :style-element="{width: '130px'}"
          :value="element.selectBrand || 'Select brand'"
          :items="brands"
          :item-click-handler="(brand, i) => changeSelectBrand({brand, index: i})"
      />
      <ui-dropdown
          :id="index"
          :style-element="{width: '130px'}"
          :value="element.selectModel || 'Select model'"
          :items="brandModel(element.selectBrand)"
          :disabled="!element.selectBrand"
          :item-click-handler="(model, i) => changeSelectModel({model, index: i})"
      />
    </div>
    <div class="selectors__add">
      <ui-btn
          btn-success
          @click="addElement"
      >Add</ui-btn>
    </div>
    <div v-if="chartData.datasets.length" class="selectors__chart">
      <Chart :chartData="chartData" :options="{responsive: true, maintainAspectRatio: false}"/>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import Chart from "@/components/Chart";

export default {
  name: "Selectors",
  components: {Chart},
  computed: {
    ...mapGetters({
      formElement: 'formElement',
      brands: 'brands',
      brandModel: 'brandModel',
      chartData: 'chartData',
    }),
  },
  methods: {
    ...mapActions({
      addElement: 'addElement',
      changeSelectBrand: 'changeSelectBrand',
      changeSelectModel: 'changeSelectModel',
    }),
  }
}
</script>

<style lang="scss" scoped>
.selectors__line {
  margin: 20px 0;
}
</style>