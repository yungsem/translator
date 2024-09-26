<script setup lang="ts">
import { h, type Component ,ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { NIcon } from 'naive-ui'
import { AlbumsOutline, SettingsOutline } from '@vicons/ionicons5'
import { $t } from '@/i18n/i18n';
import i18n from '@/i18n/i18n';
import { useSideBarStore } from '@/stores/SideBar'

// router
const router = useRouter();

// 渲染图标
const renderIcon = (icon: Component) => {
  return () => h(NIcon, null, { default: () => h(icon) })
}

// pinia
const sideBarStore = useSideBarStore();

// 菜单数据
const menuOptions = ref([
  {
    label: $t("TRANSLATE"),
    key: '/translate',
    icon: renderIcon(AlbumsOutline),
  },
  {
    label: $t("SETTING"),
    key: '/setting',
    icon: renderIcon(SettingsOutline),
  }
])

// 选中菜单，跳转到指定菜单对应的路由
const handleUpdateValue = (key: string) => {
  router.push(key);
}

// 监听国际化切换，更改菜单 label 的国际化
watch(
  () => i18n.global.locale.value,
  () => {
    menuOptions.value = [
      {
        label: $t("TRANSLATE"),
        key: '/translate',
        icon: renderIcon(AlbumsOutline),
      },
      {
        label: $t("SETTING"),
        key: '/setting',
        icon: renderIcon(SettingsOutline),
      }
    ]
  }
)
</script>

<template>
  <div class="sidebar w-50px bg-#fff">
    <n-menu 
    :collapsed="true"
    v-model:value="sideBarStore.selectedKey"
    @update:value="handleUpdateValue"
    :options="menuOptions"/>
  </div>
</template>

<style scoped>

</style>