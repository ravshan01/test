<script setup lang="ts">
import UiTooltip from "#layers/ui/app/components/UiTooltip/UiTooltip.vue";
import styles from "./PlanTypeSection.module.css"
import { type IPlanTypesSectionProps, usePlanTypeSection } from "./use-plan-type-section";

const props = defineProps({
	planType: { type: Object, required: true },
	selectedRegionID: { type: String, required: true },
	regions: { type: Array, required: true },
	planGroups: { type: Array, required: true },
	subscriptionPlans: { type: Array, required: true },
	selectedIDs: { type: Array, required: true },
})
const emits = defineEmits<{
	toggleSelect: [id: string]
}>()

const { title, subscriptionPlanGroups, getPlanGroupInfo } =
	usePlanTypeSection(props as unknown as IPlanTypesSectionProps)
</script>

<template>
  <div :class="styles.root">
    <div :class="styles.header">
      <p :class="styles.title">{{ title }}</p>
      <UiTooltip :content="planType.description" />
    </div>

    <template v-for="group in subscriptionPlanGroups" :key="group.planGroup.id">
      <div v-if="getPlanGroupInfo(group)" :class="styles.info">
        {{ getPlanGroupInfo(group) }}
      </div>

      <div :class="styles.body">
        <SubscriptionPlanCard
          v-for="el in group.subscriptionPlans"
          :key="el.id"
          :data="el"
          :planType="planType"
          :isSelected="selectedIDs.includes(el.id)"
          @click="emits('toggleSelect', el.id)"
        />
      </div>
    </template>
  </div>
</template>
