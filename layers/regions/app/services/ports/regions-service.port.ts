import type { IRegionDTO } from "../../dto/regions.dto"

export interface IRegionsService {
	find(): Promise<IRegionDTO[]>
}
