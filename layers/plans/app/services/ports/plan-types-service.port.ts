import type { IPlanTypeDTO } from "../../dto/plan-types.dto";

export interface IPlanTypesService {
	find(): Promise<IPlanTypeDTO[]>;
}
