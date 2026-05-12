<script setup lang="ts">
import {RegionsGroup} from "#components";
import {useCatalogView} from "#layers/catalog/app/composables/use-catalog-view";

const {data, selectedRegionID} = useCatalogView()
</script>


<template>
  <div class="root">
    <div class="content">
      <template v-if="data">
        <RegionsGroup :regions="data.regions" v-model:selectedRegionID="selectedRegionID" />
      </template>
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