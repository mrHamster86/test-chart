import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import getId from "@/functions/getId";

const state = {
  brands: [],
  models: {},
  prices: {},
  date: [],
  formElement: [
    {
      id: getId(),
      selectBrand: '',
      selectModel: '',
    },
  ]
};

const getters = {
  brands: (state) => state.brands.map((it) => it.brand),
  brandModel: (state) => (brand) => state.models[brand] ? state.models[brand].map((it) => it.model) : [],
  formElement: (state) => state.formElement,
  selectBrands: (state) => {
    const brandsSet = new Set();

    for (let element of state.formElement) {
      element.selectBrand && brandsSet.add(element.selectBrand);
    }

    return [...brandsSet];
  },
  selectModels: (state) => {
    const modelsSet = new Set();

    for (let element of state.formElement) {
      element.selectModel && modelsSet.add(element.selectModel);
    }

    return [...modelsSet];
  },
  sortBrandsByName: (state) => {
    const obj = {};
    for (let {brand, id} of state.brands) {
      obj[brand] = id;
    }

    return obj;
  },
  sortModelsByName: (state) => {
    const obj = {};
    for (let brand in state.models) {
      for (let {model, id} of state.models[brand]) {
        obj[model] = id;
      }
    }

    return obj;
  },
  chartData: (state) => {
    const labels = state.date;
    const datasets = [];

    for (let model in state.prices) {
      if (state.prices[model]) {
        datasets.push({
          label: model,
          borderWidth: 2,
          data: Object.values(state.prices[model]),
        })
      }
    }

    return {labels, datasets};
  }
};

const actions = {
  async getBrands({commit}) {
    const brands = await axios.get('/brands');
    commit('setBrands', brands);
  },
  addElement({commit}) {
    const id = getId();
    commit('addElement', id);
  },
  async changeSelectBrand({commit, state, getters}, {brand, index}) {
    commit('setSelectBrand', {brand, index});
    commit('setSelectModel', {model: '', index});
    commit('clearModels', getters.selectBrands);
    if (!state.models[brand]) {
      const brandId = getters.sortBrandsByName[brand];
      const models = await axios('/models', {params: {brandId}});
      commit('setModels', {models, brand})
    }
  },
  async changeSelectModel({commit, state, getters}, {model, index}) {
    commit('setSelectModel', {model, index});
    commit('clearPrices', getters.selectModels)

    if (!state.prices[model]) {
      const modelId = getters.sortModelsByName[model];
      const prices = await axios('/prices', {params: {modelId}});
      commit('setPrices', {prices, model});
    }
  },
};

const mutations = {
  setBrands(state, brands) {
    state.brands = brands;
  },
  setModels(state, {models, brand}) {
    state.models = {
      ...state.models,
      [brand]: models,
    };
  },
  setPrices(state, {prices, model}) {
    state.prices = {
      ...state.prices,
      [model]: prices,
    };

    if (!state.date.length) {
      state.date = Object.keys(prices);
    }
  },
  clearModels(state, brands) {
    const newModels = {};

    for (let brand of brands) {
      newModels[brand] = state.models[brand];
    }

    state.models = newModels;
  },
  clearPrices(state, models) {
    const newPrices = {};

    for (let model of models) {
      newPrices[model] = state.prices[model];
    }

    state.prices = newPrices;
  },
  addElement(state, id) {
    state.formElement.push({
      id,
      selectBrand: '',
      selectModel: '',
    })
  },
  setSelectBrand(state, {brand, index}) {
    state.formElement[index].selectBrand = brand;
  },
  setSelectModel(state, {model, index}) {
    state.formElement[index].selectModel = model;
  },
};

const debug = process.env.NODE_ENV !== 'production';

Vue.use(Vuex);
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  strict: debug,
});