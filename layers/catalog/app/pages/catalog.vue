<script setup lang="ts">
import { useCatalogView } from "#layers/catalog/app/composables/use-catalog-view"

const {
	data,
	selectedSubscriptionPlanIDs,
	selectedRegionID,
	toggleSelectSubscriptionPlan,
} = useCatalogView()

const selectedMode = ref<"subscriptions" | "giftCards">("subscriptions")
</script>

<template>
	<div class="root">
		<template v-if="data">
			<CatalogModeSwitcher v-model="selectedMode" class="tabs" />

			<template v-if="selectedMode === 'subscriptions'">
				<RegionsGroup
					v-model:selected-region-i-d="selectedRegionID"
					class="regions"
					:regions="data.regions"
				/>

				<div class="content">
					<CatalogPlanTypeSection
						v-for="planType in data.planTypes"
						:key="planType.id"
						:catalog="data"
						:plan-type="planType"
						:selected-region-i-d="selectedRegionID"
						:selected-i-ds="selectedSubscriptionPlanIDs"
						@toggle-select="toggleSelectSubscriptionPlan"
					/>
				</div>
			</template>

			<CatalogGiftCardsEmptyState v-else class="content" />
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
