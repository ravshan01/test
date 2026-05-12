import type { ICatalogDTO } from "~~/layers/catalog/app/dto/catalog.dto";
import type { IPlanTypeDTO } from "~~/layers/plans/app/dto/plan-types.dto";
import type { ISubscriptionPlanDTO } from "~~/layers/plans/app/dto/subscription-plans.dto";
import type { IRegionDTO } from "~~/layers/regions/app/dto/regions.dto";

export const useCatalogStore = defineStore("catalog", {
	state: () => ({
		data: null as ICatalogDTO | null,
		selectedRegionID: undefined as string | undefined,
		selectedSubscriptionPlanIDs: [] as string[],
	}),

	getters: {
		subscriptionPlansByRegionsAndPlanTypes: ({ data }) => {
			const result: Record<IRegionDTO["id"], Record<IPlanTypeDTO["id"], ISubscriptionPlanDTO[]>> = {};

			data?.regions.forEach((region) => {
				result[region.id] = {};

				data.planTypes.forEach((planType) => {
					result[region.id]![planType.id] =
						data.subscriptionPlans.filter(
							(el) => el.regionIDs.includes(region.id) && el.typeID === planType.id,
						) ?? [];
				});
			});

			return result;
		},
	},

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
