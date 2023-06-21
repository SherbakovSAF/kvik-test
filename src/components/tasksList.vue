<template>
     <div> <!-- Врапер для всех таксок -->
          <div> <!-- name="Врапер для всей таски" v-for тут -->
               <div> <!-- name="Врапер для текста таски" -->
                    <div>Задача</div>
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

          }
     }
}
</script>