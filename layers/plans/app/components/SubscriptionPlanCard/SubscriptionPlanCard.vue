<script setup lang="ts">
import type { IPlanTypeDTO } from "#layers/plans/app/dto/plan-types.dto"
import type { ISubscriptionPlanDTO } from "#layers/plans/app/dto/subscription-plans.dto"
import icon from "./images/default-plan-icon.svg"
import styles from "./SubscriptionPlanCard.module.css"

export interface ISubscriptionPlanCardProps {
	data: ISubscriptionPlanDTO
	planType: IPlanTypeDTO
	isSelected: boolean
}

const { data } = defineProps<ISubscriptionPlanCardProps>()

const formattedPrice = computed(
	() => `${new Intl.NumberFormat("ru-RU").format(data.price)} ${data.currency}`,
)
const formattedDuration = computed(() =>
	new Intl.NumberFormat("ru-RU", {
		style: "unit",
		unit: "month",
		unitDisplay: "long",
	}).format(data.durationMonths),
)
</script>

<template>
	<div
		:class="[styles.root, { [styles.root_selected as string]: isSelected }]"
		:style="{ backgroundColor: data.color }"
	>
		<div v-if="isSelected" :class="styles.badge">Выбрано</div>

		<img :class="styles.icon" :src="icon" alt="icon" />

		<div :class="styles.content">
			<div :class="styles.info">
				{{ planType.code }} • {{ formattedDuration }}
			</div>
			<div :class="styles.price">
				{{ formattedPrice }}
			</div>
		</div>
	</div>
</template>
