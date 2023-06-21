<template>
     <div>
          <input type="text" v-model="taskValue">
          <button @click="addNewTaskInState">Создать задачу</button>
     </div>
</template>

<script>
export default {
     name: "CreateNewTasks",
     data(){
          return{
               taskValue: ''
          }
     },
     methods: {
          addNewTaskInState(){
               this.$store.commit('addNewTask', this.taskValue)
          }
     }
}
</script>