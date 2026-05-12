import type { AsyncDataOptions } from "#app";
import type { ICatalogDTO } from "~~/layers/catalog/app/dto/catalog.dto";
import { CatalogServiceFactory } from "~~/layers/catalog/app/factories/catalog-service.factory";

export function useCatalogData(options?: AsyncDataOptions<ICatalogDTO>) {
	return useAsyncData<ICatalogDTO>(
		"catalog",
		() => CatalogServiceFactory.getInstance().getAll(),
		options,
	);
}
