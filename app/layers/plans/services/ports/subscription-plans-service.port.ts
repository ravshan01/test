import type { ISubscriptionPlanDTO } from "~/layers/plans/dto/subscription-plans.dto";

export interface ISubscriptionPlansService {
  find(): Promise<ISubscriptionPlanDTO[]>;
}
