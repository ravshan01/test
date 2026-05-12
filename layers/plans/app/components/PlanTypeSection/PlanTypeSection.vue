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
const emits = defineEmits<{
  toggleSelect: [id: string]
}>()

const title = computed(() => `${props.planType.name} (${props.planType.code})`);
const info =
  props.planType.accountsCount > 1
    ? `В подписку может входить до ${props.planType.accountsCount} аккаунтов.`
    : null
</script>

<template>
  <div :class="styles.root">
    <div :class="styles.header">
      <p :class="styles.title">{{title}}</p>
      <UiTooltip :content="planType.description" />
    </div>

    <div v-if="info" :class="styles.info">
      {{info}}
    </div>

    <div :class="styles.body">
      <SubscriptionPlanCard
        v-for="el in subscriptions"
        :key="el.id"
        :data="el"
        :planType="planType"
        :isSelected="selectedIDs.includes(el.id)"
        @click="emits('toggleSelect', el.id)"
      />
    </div>
  </div>
</template>