import type { IRegionDTO } from "../../dto/regions.dto";
import type { IRegionsService } from "../ports/regions-service.port";
import { createMockRegion } from "./mock/create-mock-region.util";

export class RegionsServiceMockAdapter implements IRegionsService {
	#count = 5;

	find(): Promise<IRegionDTO[]> {
		const regions = Array.from({ length: this.#count }, createMockRegion);
		return new Promise((resolve) => setTimeout(() => resolve(regions), 100));
	}
}
