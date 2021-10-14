import Vuex from 'vuex';
    
export const store = new Vuex.Store({
  state () {
    return {
        action: "create",
    }
  },

  mutations: {
    updateAction(state, action){
        state.action = action
    },
  },

  getters: {
    action (state) {
        return state.action;
    },
}
});