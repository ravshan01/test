import type { ICatalogDTO } from "~~/layers/catalog/app/dto/catalog.dto"

export interface ICatalogService {
	getAll(): Promise<ICatalogDTO>
}
