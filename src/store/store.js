import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    taskgroup: {},
    taskitems: []
  },
  mutations: {
    setTaskgroup(state, taskgroup) {
      state.taskgroup = taskgroup
      state.taskitems = taskgroup.task_in_lists
    },
    setTaskitem(state, taskitem) {
      const stateTaskitem = state.taskitems.find(e => e.id === taskitem.id)
      const mutableTaskitem = {
        ...stateTaskitem,
        checked: taskitem.checked
      }

      const index = state.taskitems.indexOf(stateTaskitem)
      Object.assign(state.taskitems[index], mutableTaskitem)
    }
  }
})

export default store
