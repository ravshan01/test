<script setup lang="ts">
import {useCatalogView} from "#layers/catalog/app/composables/use-catalog-view";

const {
  data,
  selectedSubscriptionPlanIDs,
  selectedRegionID,
  toggleSelectSubscriptionPlan
} = useCatalogView()

const selectedMode = ref<"subscriptions" | "giftCards">("subscriptions")
</script>


<template>
  <div class="root">
    <template v-if="data">
      <CatalogModeSwitcher class="tabs" v-model="selectedMode" />

      <template v-if="selectedMode === 'subscriptions'">
        <RegionsGroup class="regions" :regions="data.regions" v-model:selectedRegionID="selectedRegionID" />

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
    </template>
  </div>
</template>

<style scoped>
.root {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--padding-xl);
}
.tabs,
.regions,
.content {
  width: 100%;
  max-width: 722px;
}

.regions {
  margin-top: var(--gap-sm);
}

.content {
  display: flex;
  flex-direction: column;
  gap: var(--gap-xxl);
  margin-top: 28px;
}
</style>
