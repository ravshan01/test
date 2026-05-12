<script setup lang="ts">
import {useCatalogData} from "~~/layers/catalog/app/composables/use-catalog-data";

const {data, pending, error}  = useCatalogData()
</script>


<template>
  <div class="root">
    <div class="content">
      CATALOG PAGE
    </div>
  </div>
</template>

<style scoped>
.root {
  display: flex;
  justify-content: center;
  padding: var(--padding-xl)
}
.content {
  width: 100%;
  max-width: 722px;
}
</style>