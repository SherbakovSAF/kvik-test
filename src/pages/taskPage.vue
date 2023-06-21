<template>
     <div>
          <create-new-tasks />
          <tasks-list />
     </div>
</template>

<script>
import createNewTasks from '@/components/createNewTasks.vue';
import tasksList from '@/components/tasksList.vue';

export default {
     name: 'TaskPage',
     components: {
          createNewTasks,
          tasksList,
     },
     
}
</script>