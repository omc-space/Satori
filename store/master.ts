import { acceptHMRUpdate, defineStore } from 'pinia'
import type { UserModel } from '../types/apiModles'
import { getMasterInfo } from '~/composables/api'

export const useMasterStore = defineStore('master', () => {
  const masterInfo = reactive<UserModel>({
    id: '',
    avatar: '',
    name: '',
    introduce: '',
    mail: '',
    socialIds: {},
    username: '',
    created: '',
    lastLoginTime: '',
    url: '',
    lastLoginIp: '',
    apiToken: '',
  })

  const headerInfo = reactive({
    show: false,
    subtitle: '',
    title: '',
    read: 0,
  })
  getMasterInfo().then((master) => {
    Object.assign(masterInfo, master)
  })
  return {
    masterInfo,
    headerInfo,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useMasterStore, import.meta.hot))
