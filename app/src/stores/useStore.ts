import { defineStore } from 'pinia'
import { api } from 'src/boot/axios';
import UseApi from 'src/composables/useAPI'
import { ref } from 'vue'

const userApi = new UseApi('user');
const roleApi = new UseApi('role')

const user = ref({
  userId: '',
  email: '',
  password: '',
  cpf: '',
  date: '',
  name: '',
  userName: '',
  roleName: '',
  roleId:''
})

interface Role {
  id: string;
  name: string;
}


const users = ref([]);

export const useUserStore = defineStore('user', {
  state: () => ({
    roles:  ref<Role[]>([]),
    users: users,
    userApi: userApi,
    roleApi: roleApi,
    user: user,
    api: api
  }),

  actions: {
    async login() {
      const response = await this.api.post('/login', {
        email: this.user.email,
        password: this.user.password
      })
      return response.data
    },
    put() {
      this.userApi.put(`${this.user.userId}`, user.value);
    },
    async post(){
      const response = await this.userApi.post(this.user)
      return response.data
    },
    async getRoles() {
      this.roles.values = await roleApi.get()
      console.log(this.roles.values)
    }
  },
})
