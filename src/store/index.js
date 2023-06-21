import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: [
      {
        id: 1,
        taskValue: "Привет",
      },
      {
        id: 2,
        taskValue: "",
      },
      {
        id: 3,
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
    },

  },
  mutations: {
    addNewTask (state, task){
      let localTask = {
        id: this.getters.validID,
        taskValue: task
      }
      state.tasks.unshift(localTask)
    },
    updateTask(state, task){
      let [id, value] = task
      let findIndexTask = state.tasks.findIndex(e => e.id == id)
      state.tasks[findIndexTask].taskValue = value
    }
  },
  actions: {},
  modules: {},
});
