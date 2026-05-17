import type { IPlanGroupDTO } from "#layers/plans/app/dto/plan-groups.dto"
import type { IPlanTypeDTO } from "#layers/plans/app/dto/plan-types.dto"
import type { ISubscriptionPlanDTO } from "#layers/plans/app/dto/subscription-plans.dto"
import type { IRegionDTO } from "#layers/regions/app/dto/regions.dto"

export interface ISubscriptionPlanGroupView {
	planGroup: IPlanGroupDTO
	regions: IRegionDTO[]
	subscriptionPlans: ISubscriptionPlanDTO[]
}

export function getSubscriptionPlanGroupsByRegionAndPlanType(payload: {
	regionID: IRegionDTO["id"]
	planTypeID: IPlanTypeDTO["id"]
	regions: IRegionDTO[]
	planGroups: IPlanGroupDTO[]
	subscriptionPlans: ISubscriptionPlanDTO[]
}): ISubscriptionPlanGroupView[] {
	const { regionID, planTypeID, regions, planGroups, subscriptionPlans } =
		payload

	return planGroups
		.filter(
			(group) =>
				group.regionIDs.includes(regionID) && group.typeID === planTypeID,
		)
		.map((planGroup) => ({
			planGroup,
			regions: regions.filter((region) =>
				planGroup.regionIDs.includes(region.id),
			),
			subscriptionPlans: subscriptionPlans.filter(
				(plan) => plan.groupID === planGroup.id,
			),
		}))
}
