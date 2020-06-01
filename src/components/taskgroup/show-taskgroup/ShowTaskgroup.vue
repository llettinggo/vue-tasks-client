<template>
  <div>
    <div style='background-color: #F3F781;'>
    <h1>Taskgroup - id: {{ id }}</h1>
    <br />
    <label for="id">Id: {{taskgroup.id}}</label>
    <br />
    <label for="name">Nome: {{taskgroup.name}}</label>
    <br />
    <label for="description">Descrição: {{taskgroup.description}}</label>
    <br />
    <label for="frequence_type">Frequencia: {{taskgroup.frequence_type}}</label>
    </div>
    <br />
    <hr />
    <br />
    <div style='background-color: #2EFE9A;'>
      <list-taskitem></list-taskitem>
    </div>
    <br />
    <hr />
    <br />
    <div style='background-color: #819FF7;'>
    <h2>Criar Taskitem</h2>
      <div>
        <label>Usuário:</label>
        <input type="text" v-model="name" />
      </div>
      <div>
        <label>Description:</label>
        <input type="text" v-model="description" />
      </div>
      <br />
    <button @click="newTaskitem(name, description, taskgroup.id)">Novo taskitem</button>
    <button @click="goToTaskgroup()">Voltar</button>
    </div>
    
    
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { getTaskgroupApi, createTaskInTaskListApi } from './../../../services/api'
import ListTaskItem from './../../taskItem/list-taskitem/ListTaskItem'

export default {
  props: ['id'],
  data() {
    return {
      name: "",
      description: ""
      //taskgroups: [],
      //add: 0,
      //taskgroupitem: {
        //description: "",
        //frequence_type: "",
        //name: "",
        // userId: 0
      //}
    }
  },
  components: {
    "list-taskitem": ListTaskItem
  },
  computed: {
    ...mapState(["taskgroup"])
  },
  mounted: function() {
    getTaskgroupApi(this.id).then(response => {
      this.setTaskgroup(response.data.data)
      // console.log(this.taskgroups)
    })
  },
  methods: {
    ...mapMutations(['setTaskgroup']),
    newTaskitem(name, description, taskListID) {
      createTaskInTaskListApi({ name, description }, taskListID).then(
        result => this.$router.go(),
        error => console.error(error.response.data.error_message)
      )
    },
    goToTaskgroup() {
      this.$router.push({ name: 'listTaskGroup' })
    }
  }

};
</script>