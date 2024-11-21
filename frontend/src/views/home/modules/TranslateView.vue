<script setup lang="ts">
import { $t } from '@/i18n/i18n';
import { reactive } from 'vue';
import { Translate } from '../../../../wailsjs/go/main/App'

// 设置表单
interface FormModel {
  chineseContent : string;
  englishContent : string;
  twContent: string
}

const model : FormModel = reactive({
  chineseContent: '',
  englishContent:  '',
  twContent: ''
})

// 保存
const handleBlur = () => {
  console.log(model.chineseContent)
  Translate(model.chineseContent).then(result => {
    model.englishContent = result.English
    model.twContent = result.TraditionalChinese
  })
}

</script>
<template>
  <div class="setting p-24px">
    <h1 class="font-bold text-size-20px m-b-20px">{{ $t("TRANSLATE") }}</h1>
    <n-form ref="formRef" :model="model">
      <n-form-item class="w-400px" path="chineseContent" :label="$t('ZH_CN')">
        <n-input v-model:value="model.chineseContent" type="textarea" :placeholder="$t('ZH_CN')" @blur="handleBlur" />
      </n-form-item>
      <n-form-item class="w-400px" path="englishContent" :label="$t('EN_US')">
        <n-input v-model:value="model.englishContent" type="textarea" :placeholder="$t('EN_US')" />
      </n-form-item>
      <n-form-item class="w-400px" path="twContent" :label="$t('ZH_TW')">
        <n-input v-model:value="model.twContent" type="textarea" :placeholder="$t('ZH_TW')" />
      </n-form-item>
      
    </n-form>
    <n-button type="primary" class="w-80px">
        {{ $t("TRANSLATE") }}
      </n-button>
  </div>
</template>