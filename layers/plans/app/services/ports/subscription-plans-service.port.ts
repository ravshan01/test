import type { ISubscriptionPlanDTO } from "../../dto/subscription-plans.dto";

export interface ISubscriptionPlansService {
	find(): Promise<ISubscriptionPlanDTO[]>;
}
