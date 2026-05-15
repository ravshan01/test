import type { IPlanGroupDTO } from "./plan-groups.dto"

export interface ISubscriptionPlanDTO {
	id: string
	groupID: IPlanGroupDTO["id"]
	durationMonths: number
	price: number
	currency: string
	color: string
	isActive: boolean
}
