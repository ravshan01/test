<script setup lang="ts">
import {useCatalogStore} from "#layers/catalog/app/stores/catalog.store";
import RegionsGroup from "#layers/regions/app/components/RegionsGroup/RegionsGroup.vue";
import {useCatalogData} from "~~/layers/catalog/app/composables/use-catalog-data";

const {data}  = useCatalogData()
const store = useCatalogStore()

watchEffect(() => {
  if (data.value?.regions && data.value.regions.length > 0 && !store.selectedRegionID)
    store.selectedRegionID = data.value.regions[0]!.id
})

const selectedRegionID = computed({
  get: () => store.selectedRegionID ?? data.value?.regions?.[0]?.id,
  set: (val) => { store.selectedRegionID = val },
 })
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