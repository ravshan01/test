import { PlanGroupsServiceMockAdapter } from "~~/layers/plans/app/services/adapters/plan-groups-service-mock.adapter"
import type { IPlanGroupsService } from "~~/layers/plans/app/services/ports/plan-groups-service.port"

export class PlanGroupsServiceFactory {
	static instance: IPlanGroupsService | null = null

	static create() {
		return new PlanGroupsServiceMockAdapter()
	}
	static getInstance() {
		if (!PlanGroupsServiceFactory.instance)
			PlanGroupsServiceFactory.instance = PlanGroupsServiceFactory.create()
		return PlanGroupsServiceFactory.instance
	}
}
