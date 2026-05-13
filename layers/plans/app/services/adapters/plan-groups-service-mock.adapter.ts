import type { IPlanGroupDTO } from "~~/layers/plans/app/dto/plan-groups.dto";
import { MOCK_PLAN_GROUPS } from "~~/layers/plans/app/services/adapters/mock/mock-plan-groups.data";
import type { IPlanGroupsService } from "~~/layers/plans/app/services/ports/plan-groups-service.port";

export class PlanGroupsServiceMockAdapter implements IPlanGroupsService {
	find(): Promise<IPlanGroupDTO[]> {
		return new Promise((resolve) =>
			setTimeout(() => resolve(MOCK_PLAN_GROUPS), 100),
		);
	}
}
