import type { IPlanTypeDTO } from "./plan-types.dto";
import type { IRegionDTO } from "./regions.dto";

export interface ISubscriptionPlanDTO {
  id: string;
  regionID: IRegionDTO["id"];
  typeID: IPlanTypeDTO["id"];
  price: number;
  currency: string;
  color: string;
  isActive: boolean;
}
