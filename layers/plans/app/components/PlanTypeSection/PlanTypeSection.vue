<script setup lang="ts">
import type {IPlanTypeDTO} from "#layers/plans/app/dto/plan-types.dto";
import type {ISubscriptionPlanDTO} from "#layers/plans/app/dto/subscription-plans.dto";
import UiTooltip from "#layers/ui/app/components/UiTooltip/UiTooltip.vue";

import styles from './PlanTypeSection.module.css'

export interface IPlanTypesSectionProps {
  planType: IPlanTypeDTO
  subscriptions: ISubscriptionPlanDTO[]
  /** selected subscriptionPlans */
  selectedIDs: string[]
}

const props = defineProps<IPlanTypesSectionProps>();

const title = computed(() => `${props.planType.name} (${props.planType.code})`);
</script>

<template>
  <div :class="styles.root">
    <div :class="styles.header">
      <p :class="styles.title">{{title}}</p>
      <UiTooltip :content="planType.description" />
    </div>

    <div :class="styles.body">
      SUBSCRIPTION_PLANS
    </div>
  </div>
</template>