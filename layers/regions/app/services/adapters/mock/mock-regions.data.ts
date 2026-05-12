import { simpleFaker } from "@faker-js/faker";
import type { IRegionDTO } from "../../../dto/regions.dto";

export const MOCK_REGIONS: IRegionDTO[] = [
  {
    id: simpleFaker.string.uuid(),
    name: "Египет",
    code: "EG",
    flag: "/default-flag.svg",
  },
  {
    id: simpleFaker.string.uuid(),
    name: "Индия",
    code: "IN",
    flag: "/default-flag.svg",
  },
  {
    id: simpleFaker.string.uuid(),
    name: "Нигерия",
    code: "NG",
    flag: "/default-flag.svg",
  },
  {
    id: simpleFaker.string.uuid(),
    name: "Нидерланды",
    code: "NL",
    flag: "/default-flag.svg",
  },
  {
    id: simpleFaker.string.uuid(),
    name: "Бразилия",
    code: "BR",
    flag: "/default-flag.svg",
  },
];
