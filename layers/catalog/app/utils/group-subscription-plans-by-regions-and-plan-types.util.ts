import type { IPlanTypeDTO } from "~~/layers/plans/app/dto/plan-types.dto";
import type { ISubscriptionPlanDTO } from "~~/layers/plans/app/dto/subscription-plans.dto";
import type { IRegionDTO } from "~~/layers/regions/app/dto/regions.dto";

export type SubscriptionPlansByRegionsAndPlanTypes = Record<
	IRegionDTO["id"],
	Record<IPlanTypeDTO["id"], ISubscriptionPlanDTO[]>
>;

export function groupSubscriptionPlansByRegionsAndPlanTypes(payload: {
	regions: IRegionDTO[];
	planTypes: IPlanTypeDTO[];
	subscriptionPlans: ISubscriptionPlanDTO[];
}): SubscriptionPlansByRegionsAndPlanTypes {
	const { regions, planTypes, subscriptionPlans } = payload;
	const result: SubscriptionPlansByRegionsAndPlanTypes = {};

	regions.forEach((region) => {
		result[region.id] = {};

		planTypes.forEach((planType) => {
			result[region.id]![planType.id] =
				subscriptionPlans.filter(
					(el) => el.regionIDs.includes(region.id) && el.typeID === planType.id,
				) ?? [];
		});
	});

	return result;
}
