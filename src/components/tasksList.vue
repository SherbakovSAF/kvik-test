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
     </div>
</template>

<script>
export default {
     name: "TasksList",
     data(){
          return{
               localTasksList: []
          }
     },
     methods: {
          
          editTask(task){
               task.isEdit = !task.isEdit
          },
          deleteTask(task){
               this.localTasksList = this.localTasksList.filter(e=> e != task)
          },
     },
     mounted: function(){
          this.localTasksList = [...this.$store.state.tasks]
          this.localTasksList.map(e => e.isEdit = false)
     }
}
</script>