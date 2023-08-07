import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: [],
  },
  getters: {
    validID(state){
      let localValue = 0
      for (let i = 0; i < state.tasks.length; i++) {
           if(state.tasks.findIndex(e=> e.id == i) >= 0){
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
      delete state.tasks[findIndexTask].isEdit
    },
    deleteTask(state, taskID){
      state.tasks = state.tasks.filter(e => e.id != taskID)
    },
    initialiseStore(state){
      let localStorageTasks = JSON.parse(localStorage.getItem('localTasksList'))
      if(localStorageTasks != null) state.tasks = localStorageTasks
    }
  },
});
