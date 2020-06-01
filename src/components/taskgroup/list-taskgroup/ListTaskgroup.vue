<template>
  <div style='background-color: #819FF7;'>
    <h1>Lista taskgroup</h1>
    <ul>
      <li v-for="taskgroup in taskgroups" :key="taskgroup.id">
        <router-link
          :to="{ name: 'showTaskGroup', params: { id: taskgroup.id } }">
            {{taskgroup.name}}
        </router-link>
        <button @click="deleteTaskgroup(taskgroup.id)">Remover</button>
      </li>
    </ul>
    <button @click="newTaskgroup()">Novo taskgroup</button>
    <br />
    <br />
    <button @click="doLogout()">Sair</button>
  </div>
</template>

<script>
import { getTaskgroupsApi, deleteTaskgroupApi } from './../../../services/api'
export default {
 data() {
   return {
     taskgroups: []
   }
 },
 mounted: function() {
   getTaskgroupsApi().then(response => {
     this.taskgroups = response.data.data;
     // console.log(this.taskgroups)
   })
 },
 methods: {
   doLogout() {
     localStorage.removeItem('token')
     this.$router.push({ name: 'login' })
   },
   newTaskgroup() {
     this.$router.push({ name: 'createTaskGroup' })
   },
   deleteTaskgroup(id) {
     deleteTaskgroupApi(id).then(
       result => {
         console.log('Deletado'),
         this.$router.go()
        },
       error => console.error('Deu MERDAAAA'))
       // error => console.error('FAILLL')
   }
 }
}
</script>
