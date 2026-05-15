import { RegionsServiceMockAdapter } from "~~/layers/regions/app/services/adapters/regions-service-mock.adapter"
import type { IRegionsService } from "~~/layers/regions/app/services/ports/regions-service.port"

export class RegionsServiceFactory {
	static instance: IRegionsService | null = null

	static create() {
		return new RegionsServiceMockAdapter()
	}
	static getInstance() {
		if (!RegionsServiceFactory.instance)
			RegionsServiceFactory.instance = RegionsServiceFactory.create()
		return RegionsServiceFactory.instance
	}
}
