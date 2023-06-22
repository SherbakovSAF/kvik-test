<template>
     <div v-if="localTasksList.length" class="tasks__wrap">
          <div  class="tasks__content__wrap">
               <article v-for="task in localTasksList" :key="task.id" class="task__card"> <!-- name="Врапер для всей таски" v-for тут -->
                    <div> <!-- name="Врапер для текста таски" -->
                         <div v-if="!task.isEdit">{{task.taskValue}}</div>
                         <input v-else v-model="task.taskValue" type="text" placeholder="Напишите свою задачу, пожалуйста"> <!-- name="При редактировании будет инпут" -->
                    </div>
                    <div class="btn__wrap">  <!-- name="Врапер кнопок. Декоративный характер" -->
                         <button @click="editTask(task)">
                              {{ task.isEdit ? '✔' : '✏' }}
                         </button>
                         <button  @click="deleteTask(task)">🗑</button>
                    </div> 
               </article>
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

<style scoped>
.tasks__wrap{
     background-color: #eff0f2;
     padding: 20px 10px;
     border-radius: 20px;
}

.tasks__content__wrap {
     padding: 10px 30px;
     display: grid;
     grid-row-gap: 10px;
}

.task__card {
     padding: 15px 20px;
     display: flex;
     align-self: center;
     justify-content: space-between;
     background-color: #e7e7e7;
     border-radius: 15px;
     color: #1abc9c;
     font-weight: 600;
     font-size: 16px;
}

.task__card input {
     height: 100%;
     background-color: inherit;
     border: none;
     font-size: inherit;
     outline: none;
     color: inherit;
     font-weight: inherit;
}

.task__card input::placeholder {
     font-size: 10px;
     color: grey;
     font-weight: 400;
}

.btn__wrap{
     display: grid;
     grid-template-columns: repeat(2, 1fr);
     grid-column-gap: 10px;
}

button {
     cursor: pointer;
     background-color: #1abc9c;;
     border: none;
     color: white;
     font-size: 20px;
     width: 50px;
     border-radius: 10px;
}



</style>