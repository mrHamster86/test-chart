import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

const state = {
  brands: [],
  selectFirst: '',
  selectSecond: '',
};

const getters = {
  brands: (state) => state.brands.map((it) => it.brand),
  selectFirst: (state) => state.selectFirst,
  selectSecond: (state) => state.selectSecond,
  brandsFist: (state, getters) => {
    return getters.brands.filter((brand) => {
      return brand !== state.selectSecond;
    });
  },
  brandsSecond: (state, getters) => {
    return getters.brands.filter((brand) => {
      return brand !== state.selectFirst;
    });
  },
};

const actions = {
  async getBrands({commit}) {
    const brands = await axios.get('/brands');
    commit('setBrands', brands);
  },
  async changeSelectFirst({commit}, selectFirst) {
    commit('setSelectFirst', selectFirst);
  },
  async changeSelectSecond({commit}, selectSecond) {
    commit('setSelectSecond', selectSecond);
  },
};

const mutations = {
  setBrands(state, brands) {
    state.brands = brands;
  },
  setSelectFirst(state, selectFirst) {
    state.selectFirst = selectFirst;
  },
  setSelectSecond(state, selectSecond) {
    state.selectSecond = selectSecond;
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