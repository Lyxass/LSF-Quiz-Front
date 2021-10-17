import Vue from 'vue'
import Vuex from 'vuex'
import storeStruct from "./storeStruct";

Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store(storeStruct)

export default store
