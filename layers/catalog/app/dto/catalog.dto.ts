import type { IPlanGroupDTO } from "~~/layers/plans/app/dto/plan-groups.dto";
import type { IPlanTypeDTO } from "~~/layers/plans/app/dto/plan-types.dto";
import type { ISubscriptionPlanDTO } from "~~/layers/plans/app/dto/subscription-plans.dto";
import type { IRegionDTO } from "~~/layers/regions/app/dto/regions.dto";

export interface ICatalogDTO {
	regions: IRegionDTO[];
	planTypes: IPlanTypeDTO[];
	planGroups: IPlanGroupDTO[];
	subscriptionPlans: ISubscriptionPlanDTO[];
}
