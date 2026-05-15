import type { IRegionDTO } from "#layers/regions/app/dto/regions.dto"
import { simpleFaker } from "@faker-js/faker"
import icon from "./mock-default-flag.svg"

export const MOCK_REGIONS = [
	{
		id: simpleFaker.string.uuid(),
		name: "Египет",
		code: "EG" as const,
		flag: icon,
	},
	{
		id: simpleFaker.string.uuid(),
		name: "Индия",
		code: "IN" as const,
		flag: icon,
	},
	{
		id: simpleFaker.string.uuid(),
		name: "Нигерия",
		code: "NG" as const,
		flag: icon,
	},
	{
		id: simpleFaker.string.uuid(),
		name: "Нидерланды",
		code: "NL" as const,
		flag: icon,
	},
	{
		id: simpleFaker.string.uuid(),
		name: "Бразилия",
		code: "BR" as const,
		flag: icon,
	},
] satisfies IRegionDTO[]
