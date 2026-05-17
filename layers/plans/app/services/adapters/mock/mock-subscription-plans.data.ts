import { simpleFaker } from "@faker-js/faker"
import type { IPlanGroupDTO } from "~~/layers/plans/app/dto/plan-groups.dto"
import type { ISubscriptionPlanDTO } from "~~/layers/plans/app/dto/subscription-plans.dto"
import {
	MOCK_PLAN_GROUPS_BY_TYPE_CODE,
	type MockPlanTypeCode,
} from "./mock-plan-groups.data"

const SUBSCRIPTION_PLAN_SEEDS_BY_TYPE_CODE = {
	Individual: {
		months: [1, 3, 6, 12],
		color: "#FFD2D7",
	},
	DUO: {
		months: [1, 3, 12],
		color: "#FFC862",
	},
	Family: {
		months: [6],
		color: "#A5BBD1",
	},
	Platinum: {
		months: [6],
		color: "#C4B1D4",
	},
} satisfies Record<MockPlanTypeCode, { months: number[]; color: string }>

export const MOCK_SUBSCRIPTION_PLANS = Object.entries(
	SUBSCRIPTION_PLAN_SEEDS_BY_TYPE_CODE,
).flatMap(([planTypeCode, seed]) =>
	seed.months.map((month) =>
		createMockSubscriptionPlan({
			groupID:
				MOCK_PLAN_GROUPS_BY_TYPE_CODE[planTypeCode as MockPlanTypeCode].id,
			months: month,
			color: seed.color,
		}),
	),
)

export function createMockSubscriptionPlan(options: {
	groupID: IPlanGroupDTO["id"]
	months: number
	color: string
}): ISubscriptionPlanDTO {
	const { groupID, months, color } = options

	const DEFAULT_PRICE = 263
	const DEFAULT_CURRENCY = "₽"

	return {
		id: simpleFaker.string.uuid(),
		groupID,
		durationMonths: months,
		price: DEFAULT_PRICE,
		currency: DEFAULT_CURRENCY,
		color: color,
		isActive: true,
	}
}
