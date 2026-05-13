import type { IPlanGroupDTO } from "#layers/plans/app/dto/plan-groups.dto";
import type { IPlanTypeDTO } from "#layers/plans/app/dto/plan-types.dto";
import type { ISubscriptionPlanDTO } from "#layers/plans/app/dto/subscription-plans.dto";
import type { IRegionDTO } from "#layers/regions/app/dto/regions.dto";
import {
	getSubscriptionPlanGroupsByRegionAndPlanType,
	type ISubscriptionPlanGroupView,
} from "./utils/get-subscription-plan-groups-by-region-and-plan-type.util";

export interface IPlanTypesSectionProps {
	planType: IPlanTypeDTO;
	selectedRegionID: IRegionDTO["id"];
	regions: IRegionDTO[];
	planGroups: IPlanGroupDTO[];
	subscriptionPlans: ISubscriptionPlanDTO[];
	/** selected subscriptionPlans */
	selectedIDs: string[];
}

export function usePlanTypeSection(props: IPlanTypesSectionProps) {
	const title = computed(
		() => `${props.planType.name} (${props.planType.code})`,
	);

	const subscriptionPlanGroups = computed(() =>
		getSubscriptionPlanGroupsByRegionAndPlanType({
			regionID: props.selectedRegionID,
			planTypeID: props.planType.id,
			regions: props.regions,
			planGroups: props.planGroups,
			subscriptionPlans: props.subscriptionPlans,
		}),
	);

	function getPlanGroupInfo(group: ISubscriptionPlanGroupView) {
		const text: string[] = [];

		if (props.planType.accountsCount > 1)
			text.push(
				`В подписку может входить до ${props.planType.accountsCount} аккаунтов.`,
			);
		if (group.regions.length > 0)
			text.push(`Регион подписки: ${formatRegionNames(group.regions)}.`);

		return text.join(" ");
	}

	return {
		title,
		subscriptionPlanGroups,
		getPlanGroupInfo,
	};
}

function formatRegionNames(regions: IRegionDTO[]) {
	if (regions.length === 1) return regions[0]!.name;

	const [lastRegion, ...otherRegions] = regions.toReversed();
	return `${otherRegions
		.toReversed()
		.map((region) => region.name)
		.join(", ")} или ${lastRegion!.name} (случайным образом)`;
}
