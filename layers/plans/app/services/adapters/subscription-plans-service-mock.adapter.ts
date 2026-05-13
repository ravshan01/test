import type { ISubscriptionPlanDTO } from "~~/layers/plans/app/dto/subscription-plans.dto";
import { MOCK_SUBSCRIPTION_PLANS } from "~~/layers/plans/app/services/adapters/mock/mock-subscription-plans.data";
import type { ISubscriptionPlansService } from "~~/layers/plans/app/services/ports/subscription-plans-service.port";

export class SubscriptionPlansServiceMockAdapter
	implements ISubscriptionPlansService
{
	find(): Promise<ISubscriptionPlanDTO[]> {
		return new Promise((resolve) =>
			setTimeout(() => resolve(MOCK_SUBSCRIPTION_PLANS), 100),
		);
	}
}
