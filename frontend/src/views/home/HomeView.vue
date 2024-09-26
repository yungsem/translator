<script setup lang="ts">
import SideBar from './modules/SideBar.vue'
import ContentWrapper from './modules/ContentWrapper.vue';
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useSideBarStore } from '@/stores/SideBar'

// home 页暂时没用
// 直接跳转到 /translate 页面
const sideBarStore = useSideBarStore();
const router = useRouter();
onMounted(() => {
  router.push('/translate')
  sideBarStore.setSelectedKey('/translate')
})
</script>

<template>
  <div class="relative w-full h-100vh flex bg-#EEF1F4">
    <SideBar />
    <ContentWrapper />
  </div>
</template>

<style scoped>

</style>