import { simpleFaker } from "@faker-js/faker";
import { MOCK_REGIONS } from "~~/layers/regions/app/services/adapters/mock/mock-regions.data";
import type { ISubscriptionPlanDTO } from "../../../dto/subscription-plans.dto";
import { MOCK_PLAN_TYPES } from "./mock-plan-types.data";

type MockPlanTypeCode = (typeof MOCK_PLAN_TYPES)[number]["code"];

export const MOCK_SUBSCRIPTION_PLANS_BY_TYPE_CODE = {
	Individual: [1, 3, 6, 12].map((m) =>
		createMockSubscriptionPlan({
			planTypeCode: "Individual",
			months: m,
			color: "#FFD2D7",
		}),
	),
	DUO: [1, 3, 12].map((m) =>
		createMockSubscriptionPlan({
			planTypeCode: "DUO",
			months: m,
			color: "#FFC862",
		}),
	),
	Family: [6].map((m) =>
		createMockSubscriptionPlan({
			planTypeCode: "Family",
			months: m,
			color: "#A5BBD1",
		}),
	),
	Platinum: [6].map((m) =>
		createMockSubscriptionPlan({
			planTypeCode: "Platinum",
			months: m,
			color: "#C4B1D4",
		}),
	),
} satisfies Record<MockPlanTypeCode, ISubscriptionPlanDTO[]>;

function createMockSubscriptionPlan(options: {
	planTypeCode: MockPlanTypeCode;
	months: number;
	color: string;
}): ISubscriptionPlanDTO {
	const { planTypeCode, months, color } = options;

	const DEFAULT_PRICE = 263;
	const DEFAULT_CURRENCY = "₽";

  const requiredRegionID = MOCK_REGIONS[0]!.id
  const mockRegionsWithoutRequired = MOCK_REGIONS.slice(1)
  const regionIds = [requiredRegionID, ...simpleFaker.helpers.arrayElements(mockRegionsWithoutRequired).map((r) => r.id),]


	return {
		id: simpleFaker.string.uuid(),
		regionIDs: regionIds,
		// biome-ignore lint/style/noNonNullAssertion: _
		typeID: MOCK_PLAN_TYPES.find((el) => el.code === planTypeCode)!.id,
		durationMonths: months,
		price: DEFAULT_PRICE,
		currency: DEFAULT_CURRENCY,
		color: color,
		isActive: true,
	};
}
