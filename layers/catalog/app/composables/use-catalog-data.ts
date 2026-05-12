import type { AsyncDataOptions } from "#app";
import { useCatalogFetch } from "~~/layers/catalog/app/composables/use-catalog-fetch";
import type { ICatalogDTO } from "~~/layers/catalog/app/dto/catalog.dto";
import { useCatalogStore } from "~~/layers/catalog/app/stores/catalog.store";

export function useCatalogData(options?: AsyncDataOptions<ICatalogDTO>) {
	const store = useCatalogStore();
	if (store.data) return useCatalogFetch({ ...options, dedupe: "defer" });

	const result = useCatalogFetch(options);
	watch(
		result.data,
		(data) => {
			if (data) store.data = data;
		},
		{ immediate: true },
	);

	return result;
}
