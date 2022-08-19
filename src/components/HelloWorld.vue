<template>
  <div class="hello">
    <h1>Language: {{ $t("language") }}</h1>
    <h1>Language: {{ t("language") }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n-composable";

export default defineComponent({
  name: "HelloWorld",
  setup() {
    const { t } = useI18n();
    return { t };
  },
});
</script>
