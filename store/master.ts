import { acceptHMRUpdate, defineStore } from 'pinia'
import type { UserModel } from '@omc-space/api-client'

export const useMasterStore = defineStore('master', async () => {
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
    modified: '',
    postID: '',
    url: '',
    v: 0,
    lastLoginIp: '',
  })
  const master = await apiClient.master.getMasterInfo()
  Object.assign(masterInfo, master)
  return {
    masterInfo,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useMasterStore, import.meta.hot))
