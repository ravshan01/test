import type { IPlanTypeDTO } from "../../dto/plan-types.dto"
import type { IPlanTypesService } from "../ports/plan-types-service.port"
import { MOCK_PLAN_TYPES } from "./mock/mock-plan-types.data"

export class PlanTypesServiceMockAdapter implements IPlanTypesService {
	async find(): Promise<IPlanTypeDTO[]> {
		return new Promise((resolve) =>
			setTimeout(() => resolve(MOCK_PLAN_TYPES), 100),
		)
	}
}
