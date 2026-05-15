import { useCatalogStore } from "#layers/catalog/app/stores/catalog.store"

export function useCatalogView() {
	const { data } = useCatalogData()

	const store = useCatalogStore()
	const { selectedSubscriptionPlanIDs } = storeToRefs(store)

	watchEffect(() => {
		if (
			data.value?.regions &&
			data.value.regions.length > 0 &&
			!store.selectedRegionID
		)
			store.selectedRegionID = data.value.regions[0]!.id
	})

	const selectedRegionID = computed({
		get: () => store.selectedRegionID ?? data.value!.regions[0]!.id,
		set: (val) => {
			store.selectedRegionID = val
		},
	})

	return {
		data,
		selectedRegionID,
		selectedSubscriptionPlanIDs,
		toggleSelectSubscriptionPlan: store.toggleSelectSubscriptionPlan,
	}
}
