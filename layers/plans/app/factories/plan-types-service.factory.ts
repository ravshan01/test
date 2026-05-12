import { PlanTypesServiceMockAdapter } from "~~/layers/plans/app/services/adapters/plan-types-service-mock.adapter";
import type { IPlanTypesService } from "~~/layers/plans/app/services/ports/plan-types-service.port";

export class PlanTypesServiceFactory {
	static instance: IPlanTypesService | null = null;

	static create() {
		return new PlanTypesServiceMockAdapter();
	}
	static getInstance() {
		if (!PlanTypesServiceFactory.instance)
			PlanTypesServiceFactory.instance = PlanTypesServiceFactory.create();
		return PlanTypesServiceFactory.instance;
	}
}
