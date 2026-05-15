import { fakerRU, simpleFaker } from "@faker-js/faker"
import type { IPlanTypeDTO } from "~~/layers/plans/app/dto/plan-types.dto"

export const MOCK_PLAN_TYPES = [
	{
		id: simpleFaker.string.uuid(),
		code: "Individual" as const,
		name: "Индивидуальные подписки",
		description: fakerRU.lorem.paragraph(),
		accountsCount: 1,
	},
	{
		id: simpleFaker.string.uuid(),
		code: "DUO" as const,
		name: "Парные подписки",
		description: fakerRU.lorem.paragraph(),
		accountsCount: 2,
	},
	{
		id: simpleFaker.string.uuid(),
		code: "Family" as const,
		name: "Семейные подписки",
		description: fakerRU.lorem.paragraph(),
		accountsCount: 6,
	},
	{
		id: simpleFaker.string.uuid(),
		code: "Platinum" as const,
		name: "Платиновая подписка",
		description: fakerRU.lorem.paragraph(),
		accountsCount: 3,
	},
] satisfies IPlanTypeDTO[]
