import type { ICatalogDTO } from "#layers/catalog/app/dto/catalog.dto";
import type { IPlanTypeDTO } from "#layers/plans/app/dto/plan-types.dto";
import type { IRegionDTO } from "#layers/regions/app/dto/regions.dto";
import { getSubscriptionPlanGroupsByRegionAndPlanType } from "./utils/get-subscription-plan-groups-by-region-and-plan-type.util";

export interface ICatalogPlanTypeSectionProps {
	catalog: ICatalogDTO;
	planType: IPlanTypeDTO;
	selectedRegionID: IRegionDTO["id"];
	/** selected subscriptionPlans */
	selectedIDs: string[];
}

export function useCatalogPlanTypeSection(props: ICatalogPlanTypeSectionProps) {
	const title = computed(
		() => `${props.planType.name} (${props.planType.code})`,
	);

	const subscriptionPlanGroups = computed(() =>
		getSubscriptionPlanGroupsByRegionAndPlanType({
			regionID: props.selectedRegionID,
			planTypeID: props.planType.id,
			regions: props.catalog.regions,
			planGroups: props.catalog.planGroups,
			subscriptionPlans: props.catalog.subscriptionPlans,
		}),
	);

	const planGroupInfoByID = computed(() =>
		Object.fromEntries(
			subscriptionPlanGroups.value.map((group) => {
				const text: string[] = [];

				if (props.planType.accountsCount > 1)
					text.push(
						`В подписку может входить до ${props.planType.accountsCount} аккаунтов.`,
					);
				if (group.regions.length > 0)
					text.push(`Регион подписки: ${formatRegionNames(group.regions)}.`);

				return [group.planGroup.id, text.join(" ")];
			}),
		),
	);

	return {
		title,
		subscriptionPlanGroups,
		planGroupInfoByID,
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
