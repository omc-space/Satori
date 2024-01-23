import { acceptHMRUpdate, defineStore } from 'pinia'

export const useMasterStore = defineStore('master', () => {
  const masterInfo = reactive({

  })

  return {
    masterInfo,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useMasterStore, import.meta.hot))
