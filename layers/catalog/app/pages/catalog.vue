<script setup lang="ts">
import {useCatalogView} from "#layers/catalog/app/composables/use-catalog-view";
import RegionsGroup from "#layers/regions/app/components/RegionsGroup/RegionsGroup.vue";

const {data, selectedRegionID} = useCatalogView()
</script>


<template>
  <div class="root">
    <template v-if="data">
      <div class="header">
        <RegionsGroup :regions="data.regions" v-model:selectedRegionID="selectedRegionID" />
      </div>

      <div class="content"></div>
    </template>
  </div>
</template>

<style scoped>
.root {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--padding-xl);
  gap: 28px;
}
.header, .content {
  width: 100%;
  max-width: 722px;
}
</style>