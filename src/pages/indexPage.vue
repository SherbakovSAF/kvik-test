<template>
     <div>
          <h1>Добрый день. Надеюсь Вы сидите, потому что сейчас будет чудо</h1>
          <router-link to="tasks">
               <div>Переход к задачам</div>
               <div class="arrow-down">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
          </router-link>
     </div>
</template>

<script>
export default {
     name: "IndexPage",
}
</script>

<style>
h1 {
     font-size: 20px;
}

a{
     display: flex;
     justify-content: center;
     align-items: center;
     font-size: 30px;
     text-decoration: underline;
}

a:visited{
     color: inherit;
}

.arrow-down {
     margin-left:  60px;
     width: 10px;
     height: 10px;
     transform: rotate(270deg);
 }
 .arrow-down span {
     display: block;
     width: inherit;
     height: inherit;
     border-bottom: 5px solid #000000;
     border-right: 5px solid #000000;
     margin: -8px;
     animation: arrow-down 2s infinite;
 }
 .arrow-down span:nth-child(2){
     animation-delay: -0.2s;
 }
 .arrow-down span:nth-child(3){
     animation-delay: -0.4s;
 }
 @keyframes arrow-down {
     0%{
         opacity: 0;
         transform: rotate(45deg) translate(-20px,-20px);
     }
     50%{
         opacity: 1;
     }
     100%{
         opacity: 0;
         transform: rotate(45deg) translate(20px,20px);
     }

 }
</style>