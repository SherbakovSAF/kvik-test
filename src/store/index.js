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
      for (let i = 0; i < state.tasks.length; i++) {
           if(state.tasks[i].id === i){
                localValue++
           } else {
                return localValue
           }       
      }
      return localValue
    }
  },
  mutations: {
    addNewTask (state, task){
      let localTask = {
        id: this.getters.validID,
        taskValue: task
      }
      state.tasks.unshift(localTask)
      console.log(state.tasks)
    }
  },
  actions: {},
  modules: {},
});
