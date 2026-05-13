import { simpleFaker } from "@faker-js/faker";
import type { IPlanGroupDTO } from "~~/layers/plans/app/dto/plan-groups.dto";
import { MOCK_REGIONS } from "~~/layers/regions/app/services/adapters/mock/mock-regions.data";
import { MOCK_PLAN_TYPES } from "./mock-plan-types.data";

type MockPlanTypeCode = (typeof MOCK_PLAN_TYPES)[number]["code"];

export const MOCK_PLAN_GROUPS_BY_TYPE_CODE = {
	Individual: createMockPlanGroup({
		planTypeCode: "Individual",
	}),
	DUO: createMockPlanGroup({
		planTypeCode: "DUO",
	}),
	Family: createMockPlanGroup({
		planTypeCode: "Family",
	}),
	Platinum: createMockPlanGroup({
		planTypeCode: "Platinum",
	}),
} satisfies Record<MockPlanTypeCode, IPlanGroupDTO>;

export const MOCK_PLAN_GROUPS = Object.values(MOCK_PLAN_GROUPS_BY_TYPE_CODE);

function createMockPlanGroup(options: {
	planTypeCode: MockPlanTypeCode;
}): IPlanGroupDTO {
	const { planTypeCode } = options;

	const requiredRegionID = MOCK_REGIONS[0]!.id;
	const mockRegionsWithoutRequired = MOCK_REGIONS.slice(1);
	const regionIDs = [
		requiredRegionID,
		...simpleFaker.helpers
			.arrayElements(mockRegionsWithoutRequired)
			.map((region) => region.id),
	];

	return {
		id: simpleFaker.string.uuid(),
		regionIDs,
		typeID: MOCK_PLAN_TYPES.find((el) => el.code === planTypeCode)!.id,
	};
}
