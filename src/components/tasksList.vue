<template>
     <div> <!-- Врапер для всех таксок -->
          <div v-for="tasks in localTasksList" :key="tasks.id"> <!-- name="Врапер для всей таски" v-for тут -->
               <div> <!-- name="Врапер для текста таски" -->
                    <div>{{tasks.taskValue}}</div>
                    <input type="text"> <!-- name="При редактировании будет инпут" -->
               </div>
               <div>  <!-- name="Врапер кнопок. Декоративный характер" -->
                    <button>Изменить</button>
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
                         taskValue: 'Купить шторы'
                    },
                    {
                         id: 2,
                         taskValue: 'Не шторы'
                    }
               ]
          }
     },
     computed(){
          //Получение таксок из Store... !!!Возможно лучше это делать в page и передавать пропсами. Смотри как будет обновляться всё
     }
}
</script>