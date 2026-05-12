import type { ICatalogDTO } from "~~/layers/catalog/app/dto/catalog.dto";
import type { ICatalogService } from "~~/layers/catalog/app/services/ports/catalog-service.port";
import type { IPlanTypesService } from "~~/layers/plans/app/services/ports/plan-types-service.port";
import type { ISubscriptionPlansService } from "~~/layers/plans/app/services/ports/subscription-plans-service.port";
import type { IRegionsService } from "~~/layers/regions/app/services/ports/regions-service.port";

export class CatalogServiceMockAdapter implements ICatalogService {
	#regionsService: IRegionsService;
	#planTypesService: IPlanTypesService;
	#subscriptionPlansService: ISubscriptionPlansService;

	constructor(
		regionsService: IRegionsService,
		planTypesService: IPlanTypesService,
		subscriptionPlansService: ISubscriptionPlansService,
	) {
		this.#regionsService = regionsService;
		this.#planTypesService = planTypesService;
		this.#subscriptionPlansService = subscriptionPlansService;
	}

	async getAll(): Promise<ICatalogDTO> {
		const [regions, planTypes, subscriptionPlans] = await Promise.all([
			this.#regionsService.find(),
			this.#planTypesService.find(),
			this.#subscriptionPlansService.find(),
		] as const);

		return { regions, planTypes, subscriptionPlans };
	}
}
