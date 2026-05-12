import type { ICatalogDTO } from "~~/layers/catalog/app/dto/catalog.dto";

export const useCatalogStore = defineStore("catalog", {
	state: () => ({
		data: null as ICatalogDTO | null,
		selectedRegionID: undefined as string | undefined,
		selectedSubscriptionPlanIDs: [] as string[],
	}),

	actions: {
		toggleSelectSubscriptionPlan(id: string) {
			if (this.selectedSubscriptionPlanIDs.includes(id))
				this.unSelectSubscriptionPlan(id);
			else this.selectedSubscriptionPlanIDs.push(id);
		},
		selectSubscriptionPlan(id: string) {
			if (!this.selectedSubscriptionPlanIDs.includes(id))
				this.selectedSubscriptionPlanIDs.push(id);
		},
		unSelectSubscriptionPlan(id: string) {
			this.selectedSubscriptionPlanIDs =
				this.selectedSubscriptionPlanIDs.filter((el) => el !== id);
		},
	},
});
