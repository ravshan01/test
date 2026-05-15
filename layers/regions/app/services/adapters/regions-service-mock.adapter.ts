import { MOCK_REGIONS } from "~~/layers/regions/app/services/adapters/mock/mock-regions.data"
import type { IRegionDTO } from "../../dto/regions.dto"
import type { IRegionsService } from "../ports/regions-service.port"

export class RegionsServiceMockAdapter implements IRegionsService {
	// #count = 5;

	find(): Promise<IRegionDTO[]> {
		// const regions = Array.from({ length: this.#count }, createMockRegion);
		return new Promise((resolve) =>
			setTimeout(() => resolve(MOCK_REGIONS), 100),
		)
	}
}
