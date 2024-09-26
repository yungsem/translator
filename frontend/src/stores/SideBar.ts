import { defineStore } from 'pinia'
import { ref} from 'vue'

export const useSideBarStore = defineStore('sideBar', () => {

  // selectedKey
  const selectedKey = ref<string|undefined>('/')
  const setSelectedKey = (key : string) => {
    selectedKey.value = key
  }

  return { selectedKey, setSelectedKey }
})
