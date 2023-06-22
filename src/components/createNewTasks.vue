<template>
     <div>
          <input type="text" @keydown.enter="addNewTaskInState" v-model="taskValue">
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
               this.taskValue = ''
          }
     }
}
</script>
<style scoped>

div * {
     padding: 10px 19px;
     border-radius: 6px;
     border: none;
     font-weight: 400;
     font-size: 17px;
}
button {
    line-height: 1.471;
    color: white;
    background-color: #1abc9c;
    cursor: s;
    
}

input {
     border: #1abc9c 2px solid;
     outline: none;
     margin-right: 20px;
}

</style>