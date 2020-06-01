<template>
  <div style='background-color: #FE2E2E;'>
    <h1>Novo taskgroup</h1>
    <div>
      <label>Nome:</label>
      <input type="text" v-model="name" />
    </div>
    <div>
      <label>Descrição:</label>
      <input type="text" v-model="description" />
    </div>
    <div>
      <label>Frequencia:</label>
      <input type="text" v-model="frequence_type" />
    </div>
    <button @click="createTaskgroup(name, description, frequence_type)">Novo Taskgroup</button>
    <button @click="goToTaskgroup()">Voltar</button>
  </div>
</template>

<script>
import { createTaskgroupApi } from './../../../services/api'
export default {
  data() {
    return {
      name: "",
      description: "",
      frequence_type: ""
    }
  },
  methods: {
    createTaskgroup(name, description, frequence_type) {
      createTaskgroupApi({ name, description, frequence_type }).then(
        result => this.$router.push({ name: 'listTaskGroup' }),
        error => console.error(error.response.data.error_message)
      )
    },
    goToTaskgroup() {
      this.$router.push({ name: 'listTaskGroup' })
    }
  }
}
</script>