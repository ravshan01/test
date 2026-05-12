import { CatalogServiceMockAdapter } from "~~/layers/catalog/app/services/adapters/catalog-service-mock.adapter";
import type { ICatalogService } from "~~/layers/catalog/app/services/ports/catalog-service.port";
import { PlanTypesServiceFactory } from "~~/layers/plans/app/factories/plan-types-service.factory";
import { SubscriptionPlansServiceFactory } from "~~/layers/plans/app/factories/subscription-plans-service.factory";
import { RegionsServiceFactory } from "~~/layers/regions/app/factories/regions-service.factory";

export class CatalogServiceFactory {
	static instance: ICatalogService | null = null;

	static create() {
		return new CatalogServiceMockAdapter(
			RegionsServiceFactory.getInstance(),
			PlanTypesServiceFactory.getInstance(),
			SubscriptionPlansServiceFactory.getInstance(),
		);
	}
	static getInstance() {
		if (!CatalogServiceFactory.instance)
			CatalogServiceFactory.instance = CatalogServiceFactory.create();
		return CatalogServiceFactory.instance;
	}
}
