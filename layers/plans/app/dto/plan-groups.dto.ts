import type { IRegionDTO } from "~~/layers/regions/app/dto/regions.dto"
import type { IPlanTypeDTO } from "./plan-types.dto"

export interface IPlanGroupDTO {
	id: string
	regionIDs: IRegionDTO["id"][]
	typeID: IPlanTypeDTO["id"]
}
