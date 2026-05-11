import type { IPlanTypeDTO } from "~/layers/plans/dto/plan-types.dto";

export interface IPlanTypesService {
  find(): Promise<IPlanTypeDTO[]>;
}
