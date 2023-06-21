import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: [
      {
        id: 0,
        taskValue: "",
      },
      {
        id: 1,
        taskValue: "",
      },
      {
        id: 2,
        taskValue: "",
      },
    ],
  },
  getters: {
    validID(state){
      let localValue = 0
      for (let i = 0; i < state.length; i++) {
           if(state[i].id === i){
                localValue++
           } else {
                return localValue
           }       
      }
    }
  },
  mutations: {
    addTask (state, task){
      let localTask = {
        id: getters.validID,
        taskValue: task
      }

      state.unshift(localTask)
    }
  },
  actions: {},
  modules: {},
});
