<template>
     <div> <!-- Врапер для всех таксок -->
          <div v-for="task in localTasksList" :key="task.id"> <!-- name="Врапер для всей таски" v-for тут -->
               <div> <!-- name="Врапер для текста таски" -->
                    <div v-if="!task.isEdit">{{task.taskValue}}</div>
                    <input v-else v-model="task.taskValue" type="text"> <!-- name="При редактировании будет инпут" -->
               </div>
               <div>  <!-- name="Врапер кнопок. Декоративный характер" -->
                    <button @click="editTasks(task)">{{task.isEdit ? 'Готово' : 'Изменить'}}</button>
                    <button>Удалить</button>
               </div> 
          </div>
     </div>
</template>

<script>
export default {
     name: "TasksList",
     data(){
          return{
               localTasksList: [
                    {
                         id: 1,
                         taskValue: 'Купить шторы',
                         isEdit: false
                    },
                    {
                         id: 2,
                         taskValue: 'Не шторы',
                         isEdit: false
                    }
               ]
          }
     },
     methods: {
          editTasks(task){
               task.isEdit = !task.isEdit
          },
     },
     computed(){
          //Получение таксок из Store... !!!Возможно лучше это делать в page и передавать пропсами. Смотри как будет обновляться всё
     }
}
</script>