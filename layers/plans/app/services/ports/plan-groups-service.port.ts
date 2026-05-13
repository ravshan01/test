import type { IPlanGroupDTO } from "../../dto/plan-groups.dto";

export interface IPlanGroupsService {
	find(): Promise<IPlanGroupDTO[]>;
}
