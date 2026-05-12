import {simpleFaker} from "@faker-js/faker";
import type {IRegionDTO} from "#layers/regions/app/dto/regions.dto";

export const MOCK_REGIONS = [
	{
		id: simpleFaker.string.uuid(),
		name: "Египет",
		code: "EG" as const,
		flag: "/default-flag.svg",
	},
	{
		id: simpleFaker.string.uuid(),
		name: "Индия",
		code: "IN" as const,
		flag: "/default-flag.svg",
	},
	{
		id: simpleFaker.string.uuid(),
		name: "Нигерия",
		code: "NG" as const,
		flag: "/default-flag.svg",
	},
	{
		id: simpleFaker.string.uuid(),
		name: "Нидерланды",
		code: "NL" as const,
		flag: "/default-flag.svg",
	},
	{
		id: simpleFaker.string.uuid(),
		name: "Бразилия",
		code: "BR" as const,
		flag: "/default-flag.svg",
	},
] satisfies IRegionDTO[]
