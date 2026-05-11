import { fakerRU, simpleFaker } from "@faker-js/faker";
import type { IRegionDTO } from "~/layers/regions/dto/regions.dto";

export function createMockRegion(): IRegionDTO {
  return {
    id: simpleFaker.string.uuid(),
    name: fakerRU.location.country(),
    code: fakerRU.location.countryCode(),
    flag: null,
  };
}
