// eslint-disable-next-line no-unused-vars
import api from "../../api";
import * as types from "../mutation-types";
import SETTINGS from "../../settings";

// initial state
const state = {
  error: null,
  notice: null,
  loading: true,
  loading_progress: 0
};

// getters
const getters = {
  isLoading: state => state.loading_progress < 100,
  loadingProgress: state => state.loading_progress,
  // eslint-disable-next-line no-unused-vars
  loadingIncrement: state => {
    return 100 / SETTINGS.LOADING_SEGMENTS;
  }
};

// actions
const actions = {};

// mutations
const mutations = {
  // eslint-disable-next-line no-unused-vars
  [types.INCREMENT_LOADING_PROGRESS](state, val) {
    state.loading_progress = Math.min(
      state.loading_progress + getters.loadingIncrement(),
      100
    );
  },

  [types.RESET_LOADING_PROGRESS](state) {
    state.loading_progress = 0;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
