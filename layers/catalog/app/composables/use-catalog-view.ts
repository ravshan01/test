import { useCatalogStore } from "#layers/catalog/app/stores/catalog.store";
import { groupSubscriptionPlansByRegionsAndPlanTypes } from "#layers/catalog/app/utils/group-subscription-plans-by-regions-and-plan-types.util";

export function useCatalogView() {
	const { data } = useCatalogData();

	const store = useCatalogStore();
	const { selectedSubscriptionPlanIDs } = storeToRefs(store);

	watchEffect(() => {
		if (
			data.value?.regions &&
			data.value.regions.length > 0 &&
			!store.selectedRegionID
		)
			store.selectedRegionID = data.value.regions[0]!.id;
	});

	const selectedRegionID = computed({
		get: () => store.selectedRegionID ?? data.value!.regions[0]!.id,
		set: (val) => {
			store.selectedRegionID = val;
		},
	});

	const subscriptionPlansByRegionsAndPlanTypes = computed(() => {
		if (!data.value) return {};
		return groupSubscriptionPlansByRegionsAndPlanTypes({
			regions: data.value.regions,
			planTypes: data.value.planTypes,
			subscriptionPlans: data.value.subscriptionPlans,
		});
	});

	return {
		data,
		subscriptionPlansByRegionsAndPlanTypes,
		selectedRegionID,
		selectedSubscriptionPlanIDs,
		toggleSelectSubscriptionPlan: store.toggleSelectSubscriptionPlan,
	};
}
