<template>
     <div>
          <create-new-tasks />
          <tasks-list />
     </div>
</template>

<script>
import createNewTasks from '@/components/CreateNewTasks.vue';
import tasksList from '@/components/TasksList.vue';

export default {
     name: 'TaskPage',
     components: {
          createNewTasks,
          tasksList,
     },
     
}
</script>