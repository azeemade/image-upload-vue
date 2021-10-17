import Vuex from 'vuex';
    
export const store = new Vuex.Store({
  state () {
    return {
        action: "create",
        createSingle: "",
        updateSingle: "",
        createMulti: [],
        updateMulti: [],
    }
  },

  mutations: {
    updateAction(state, action){
      state.action = action
    },

    addCreateSingle(state, files){
      state.createSingle = files
    },
    delCreateSingle(state){
      state.createSingle = ""
    },

    addCreateMulti(state, files){
      state.createMulti.push(files)
    },
    delCreateMulti(state, index){
      state.createMulti.splice(index, 1);
    },

    addUpdateSingle(state, files){
      state.createSingle = files
    },
    delUpdateSingle(state){
      state.createSingle = ""
    },

    addUpdateMulti(state, files){
      state.updateMulti.push(files)
    },
    delUpdateMulti(state, index){
      state.updateMulti.splice(index, 1);
    },
  },

  getters: {
    action (state) {
      return state.action;
    },
    
    createSingle(state){
      return state.createSingle;
    },
    updateSingle(state){
      return state.updateSingle;
    },
    createMulti(state){
      return state.createMulti;
    },
    updateMulti(state){
      return state.updateMulti;
    },
}
});