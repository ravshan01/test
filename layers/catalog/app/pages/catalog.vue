<script setup lang="ts">
import {useCatalogView} from "#layers/catalog/app/composables/use-catalog-view";

const {
  data,
  selectedSubscriptionPlanIDs,
  selectedRegionID,
  toggleSelectSubscriptionPlan
} = useCatalogView()
</script>


<template>
  <div class="root">
    <template v-if="data">
      <div class="header">
        <RegionsGroup :regions="data.regions" v-model:selectedRegionID="selectedRegionID" />
      </div>

      <div class="content">
        <CatalogPlanTypeSection
          v-for="planType in data.planTypes"
          :key="planType.id"
          :catalog="data"
          :planType="planType"
          :selectedRegionID="selectedRegionID"
          :selectedIDs="selectedSubscriptionPlanIDs"
          @toggleSelect="toggleSelectSubscriptionPlan"
        />
      </div>
    </template>
  </div>
</template>

<style scoped>
.root {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--padding-xl);
  gap: var(--gap-xxl);
}
.header, .content {
  width: 100%;
  max-width: 722px;
}

.content {
  display: flex;
  flex-direction: column;
  gap: var(--gap-xxl);
}
</style>
