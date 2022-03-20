import { createStore } from "vuex";

export default createStore({
  state: {
    token:localStorage.getItem('token')||null
  },
  mutations: {
    login(state,payload){
     state.token=payload.token
     localStorage.setItem('user',JSON.stringify(payload))
     localStorage.setItem('token',state.token)
    }
  },
  actions: {},
  modules: {},
});
