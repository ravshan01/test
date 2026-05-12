import { SubscriptionPlansServiceMockAdapter } from "~~/layers/plans/app/services/adapters/subscription-plans-service-mock.adapter";
import type { ISubscriptionPlansService } from "~~/layers/plans/app/services/ports/subscription-plans-service.port";

export class SubscriptionPlansServiceFactory {
	static instance: ISubscriptionPlansService | null = null;

	static create() {
		return new SubscriptionPlansServiceMockAdapter();
	}
	static getInstance() {
		if (!SubscriptionPlansServiceFactory.instance)
			SubscriptionPlansServiceFactory.instance =
				SubscriptionPlansServiceFactory.create();
		return SubscriptionPlansServiceFactory.instance;
	}
}
