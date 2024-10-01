<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtRouteAnnouncer />
    <ConfigProvider :use-id="useIdFunction">
      <NuxtPage />
    </ConfigProvider>
  </div>
</template>

<script setup>
import { ConfigProvider } from "radix-vue";

const useIdFunction = () => useId();

const nuxtApp = useNuxtApp();
nuxtApp.hook("page:finish", () => {
  window.scrollTo(0, 0);
});
</script>
