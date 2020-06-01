<template>
  <div>
    <h1>Lista Taskitem</h1>

    <br />
    <label for="taskItemsOverview">{{taskItemsOverview}}</label>
    <ul>
      <li v-for="taskitem in formattedTaskitems" :key="taskitem.id">
        <label>Marca:</label>
        <input type="checkbox" v-model="taskitem.checked"  @click="updateTaskitem(taskitem)"/>
        <br />
        <label for="task_name">Nome: {{taskitem.name}}</label>
        <br />
        <label for="task_description">Descricao: {{taskitem.description}}</label>
        <br />
        <button @click="deleteTask(taskitem.task_id)">Excluir</button>
        <button @click="editTask(taskitem.task_id)">Editar</button>
        <br />
        <br />
      </li>
    </ul>
  </div>
</template>

<script>
import { updateTaskitemApi, deleteTaskApi, updateTaskApi } from './../../../services/api'
import { mapState, mapMutations } from 'vuex';
export default {
  computed: {
    ...mapState(["taskitems"]),
    formattedTaskitems: function() {
      const { taskitems, formatTaskItem } = this



      return taskitems.map(formatTaskItem);
    },
    taskItemsOverview: function() {
      const { formattedTaskitems, isTaskItemChecked } = this
      const totalCount = formattedTaskitems.length
      const checkedCount = formattedTaskitems.filter(isTaskItemChecked).length
      return `${checkedCount} of ${totalCount} task items que estao marcados`
    }
  },
  methods: {
    ...mapMutations(['setTaskitem']),
    formatTaskItem(taskitem) {
      return {
        id: taskitem.id,
        checked: taskitem.checked,
        name: taskitem.task.name,
        description: taskitem.task.description,
        task_id: taskitem.task.id
      }
    },
    isTaskItemChecked(taskitem) {
      return taskitem.checked
    },
    updateTaskitem(taskitem) {
      const mutableTaskItem = {
        id: taskitem.id,
        checked: !taskitem.checked
      }

      updateTaskitemApi(mutableTaskItem).then(result => {
        this.setTaskitem(mutableTaskItem)
      })
    },
    deleteTask(taskitemID) {
      deleteTaskApi(taskitemID).then(
        result => this.$router.go(),
        error => console.error(error.response.data.error_message)
      )
    },
    editTask(taskitemID) {
      this.$router.push({ name: 'editTask', params: { idtask: taskitemID }})
    }
  },
}
</script>