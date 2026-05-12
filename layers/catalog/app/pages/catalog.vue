<script setup lang="ts">
import {useCatalogView} from "#layers/catalog/app/composables/use-catalog-view";

const {
  data,
  subscriptionPlansByRegionsAndPlanTypes,
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
        <PlanTypeSection
          v-for="planType in data.planTypes"
          :key="planType.id"
          :planType="planType"
          :subscriptions="subscriptionPlansByRegionsAndPlanTypes[selectedRegionID]![planType.id]!"
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