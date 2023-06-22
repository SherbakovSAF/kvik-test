<template>
     <div> <!-- Врапер для всех таксок -->
          <div v-for="task in localTasksList" :key="task.id"> <!-- name="Врапер для всей таски" v-for тут -->
               <div> <!-- name="Врапер для текста таски" -->
                    <div v-if="!task.isEdit">{{task.taskValue}}</div>
                    <input v-else v-model="task.taskValue" type="text"> <!-- name="При редактировании будет инпут" -->
               </div>
               <div>  <!-- name="Врапер кнопок. Декоративный характер" -->
                    <button @click="editTask(task)">{{task.isEdit ? 'Готово' : 'Изменить'}}</button>
                    <button  @click="deleteTask(task)">Удалить</button>
               </div> 
          </div>
          <!-- <button @click="console.log([...this.$store.state.tasks])">Кнопка</button> -->
     </div>
</template>

<script>

import { mapState } from 'vuex'
export default {
     name: "TasksList",
     data(){
          return{
               localTasksList: []
          }
     },
     computed: {
          ...mapState(['tasks'])
     },
     methods: {     
          editTask(task){
               
               task.isEdit = !task.isEdit
               if(task.isEdit == false){
                    this.$store.commit('updateTask', [task.id, task.taskValue])
               }
          },
          deleteTask(task){
               this.$store.commit('deleteTask', task.id)
          },
          updateTasksList(){
               this.localTasksList = this.$store.state.tasks.slice()
          }
     },
     mounted() {
          this.$store.commit('initialiseStore')
          this.updateTasksList()
     },
     watch: {
          tasks:{
               handler(){
                    this.updateTasksList()
                    localStorage.setItem('localTasksList', JSON.stringify(this.localTasksList))
               },deep: true
          }
     }
}
</script>