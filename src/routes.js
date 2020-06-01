import Login from './components/login/Login'
import CreateTaskGroup from './components/taskgroup/create-taskgroup/CreateTaskGroup'
import ListTaskGroup from './components/taskgroup/list-taskgroup/ListTaskGroup'
import ShowTaskGroup from './components/taskgroup/show-taskgroup/ShowTaskGroup'
import EditTask from './components/task/edit-task/EditTask'

export const routes = [
  {
    name: 'login',
    path: '/login',
    component: Login
  },
  {
    name: 'createTaskGroup',
    path: '/taskgroup/new',
    component: CreateTaskGroup,
    meta: {
      requiresAuth: true
    }
  },
  {
    name: 'listTaskGroup',
    path: '/taskgroup/list',
    component: ListTaskGroup,
    meta: {
      requiresAuth: true
    }
  },
  {
    name: 'showTaskGroup',
    path: '/taskgroup/show/:id',
    component: ShowTaskGroup,
    props: true,
    meta: {
      requiresAuth: true
    }
  },
  {
    name: 'editTask',
    path: '/taskitem/:idtask',
    component: EditTask,
    props: true,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '*',
    component: Login
  }
]
