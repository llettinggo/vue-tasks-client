import axios from "axios";

const HOST = "https://edimossilva-task-manager.herokuapp.com"
const LOGIN_URL = `${HOST}/auth/login`
const TASKGROUP_URL = `${HOST}/task_lists`
const TASKITEM_URL = `${HOST}/task_in_lists`
const TASK_URL = `${HOST}/tasks`
const TASKINTASKLIST_URL = `${HOST}/task_with_task_list`

export const getRequestConfig = () => {
  const token = localStorage.getItem('token');
  const requestConfig = {
    headers: {
      Authorization: `Basic ${token}`
    }
  }

  return requestConfig
}

export const doLoginApi = (username, password) => {
  const params = { username, password }

  return axios.post(LOGIN_URL, params)
}

export const createTaskgroupApi = (taskgroup) => {
  const params = taskgroup

  return axios.post(TASKGROUP_URL, params, getRequestConfig());
}

export const deleteTaskgroupApi = (id) => {
  const deleteTaskgroupApiURL = `${TASKGROUP_URL}/${id}`

  return axios.delete(deleteTaskgroupApiURL, getRequestConfig());
}

export const getTaskgroupsApi = () => {
  return axios.get(TASKGROUP_URL, getRequestConfig());
}


export const getTaskgroupApi = id => {
  const getTaskgroupApiURL = `${TASKGROUP_URL}/${id}`

  return axios.get(getTaskgroupApiURL, getRequestConfig())
}

export const updateTaskitemApi = taskitem => {
  const getUpdateTaskitemApiURL = `${TASKITEM_URL}/${taskitem.id}`
  const params = { checked: taskitem.checked }

  return axios.put(getUpdateTaskitemApiURL, params, getRequestConfig())
}

export const deleteTaskApi = (id) => {
  const getDeleteTaskApiURL = `${TASK_URL}/${id}`

  return axios.delete(getDeleteTaskApiURL, getRequestConfig());
}

export const updateTaskApi = (id, name) => {
  console.log(id, name)
  const getUpdateTaskApiURL = `${TASK_URL}/${id}`
  const params = {
    name
  }

  return axios.put(getUpdateTaskApiURL, params, getRequestConfig());
}

export const createTaskInTaskListApi = ({ name, description }, taskListID) => {
  const params = {
    name,
    description,
    task_list_id: taskListID
  }

  return axios.post(TASKINTASKLIST_URL, params, getRequestConfig())
}
