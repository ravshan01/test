import type { ISubscriptionPlanDTO } from "~~/layers/plans/app/dto/subscription-plans.dto";
import { MOCK_SUBSCRIPTION_PLANS_BY_TYPE_CODE } from "~~/layers/plans/app/services/adapters/mock/mock-subscription-plans.data";
import type { ISubscriptionPlansService } from "~~/layers/plans/app/services/ports/subscription-plans-service.port";

export class SubscriptionPlansServiceMockAdapter
	implements ISubscriptionPlansService
{
	find(): Promise<ISubscriptionPlanDTO[]> {
		const data = Object.values(MOCK_SUBSCRIPTION_PLANS_BY_TYPE_CODE).flat();
		return new Promise((resolve) => setTimeout(() => resolve(data), 100));
	}

	findByRegion(_: string): Promise<ISubscriptionPlanDTO[]> {
		throw new Error("Not implemented");
	}
}
