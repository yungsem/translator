<script setup lang="ts">
import { reactive, ref, watch } from 'vue';
import i18n from '@/i18n/i18n';
import { $t } from '@/i18n/i18n';


// const changeLang = (lang : 'zh-CN' | 'en-US') => {
//   i18n.global.locale.value = lang;
// }

// 国际化下拉选项
const i18nOptions = ref([
  {
    label: $t("ZH_CN"),
    value: 'zh-CN'
  },
  {
    label: $t("EN_US"),
    value: 'en-US'
  },
])

// 监听国际化切换，更改菜单 label 的国际化
watch(
  () => i18n.global.locale.value,
  () => {
    i18nOptions.value = [
      {
        label: $t("ZH_CN"),
        value: 'zh-CN'
      },
      {
        label: $t("EN_US"),
        value: 'en-US'
      },
    ]
  }
)

// 设置表单
interface FormModel {
  lang : string;
  translateType : string;
  translateApiKey: string
}

const model : FormModel = reactive({
  lang: localStorage.getItem('lang') || '',
  translateType: localStorage.getItem('translateType') || '',
  translateApiKey: localStorage.getItem('translateApiKey') || ''
})

// 保存
const handleSubmit = () => {
  i18n.global.locale.value = model.lang as 'zh-CN' | 'en-US';
  localStorage.setItem('lang', model.lang)
  localStorage.setItem('translateType', model.translateType)
  localStorage.setItem('translateApiKey', model.translateApiKey)
}

</script>
<template>
  <div class="setting p-24px">
    <h1 class="font-bold text-size-20px m-b-20px">{{ $t("SETTING") }}</h1>
    <n-form ref="formRef" :model="model">
      <n-form-item class="ml-8px w-320px" path="lang" :label="$t('LANG')">
        <n-select v-model:value="model.lang" :options="i18nOptions" />
      </n-form-item>
      <n-form-item class="ml-8px w-320px" path="translateType" :label="$t('TRANSLATE_SUPPLIER')">
        <n-radio-group v-model:value="model.translateType" name="radiogroup">
          <n-space>
            <n-radio key="deepl" value="deepl">
              {{ $t("DEEPL_TRANSLATE") }}
            </n-radio>
            <n-radio key="openai" value="openai">
              {{ $t("OPEN_AI_TRANSLATE") }}
            </n-radio>
            <!-- <n-radio key="microsoft" value="microsoft">
              {{ $t("MICROSOFT_TRANSLATE")}}
            </n-radio> -->
          </n-space>
        </n-radio-group>
      </n-form-item>
      <n-form-item class="ml-8px w-320px" path="translateApiKey" label="API KEY">
        <n-input v-model:value="model.translateApiKey" type="text" placeholder="API KEY" />
      </n-form-item>
    </n-form>
    <n-flex class="ml-8px mt-8px w-320px" justify="end">
      <n-button type="primary" class="w-80px" @click="handleSubmit">
        {{ $t("SUBMIT") }}
      </n-button>
    </n-flex>
  </div>
</template>