import type { IRegionDTO } from "~~/layers/regions/dto/regions.dto";
import type { IPlanTypeDTO } from "./plan-types.dto";

export interface ISubscriptionPlanDTO {
  id: string;
  regionIDs: IRegionDTO["id"][];
  typeID: IPlanTypeDTO["id"];
  price: number;
  currency: string;
  color: string;
  isActive: boolean;
}
