<script setup lang="ts">
import type {ICatalogDTO} from "#layers/catalog/app/dto/catalog.dto";
import type {IPlanTypeDTO} from "#layers/plans/app/dto/plan-types.dto";
import type {IRegionDTO} from "#layers/regions/app/dto/regions.dto";
import UiTooltip from "#layers/ui/app/components/UiTooltip/UiTooltip.vue";
import styles from "./CatalogPlanTypeSection.module.css";
import {
	useCatalogPlanTypeSection,
} from "./use-catalog-plan-type-section";

export interface ICatalogPlanTypeSectionProps {
  catalog: ICatalogDTO;
  planType: IPlanTypeDTO;
  selectedRegionID: IRegionDTO["id"];
  /** selected subscriptionPlans */
  selectedIDs: string[];
}

const props = defineProps<ICatalogPlanTypeSectionProps>();
const emits = defineEmits<{
	toggleSelect: [id: string];
}>();

const { title, subscriptionPlanGroups, planGroupInfoByID } =
	useCatalogPlanTypeSection(props as unknown as ICatalogPlanTypeSectionProps);
</script>

<template>
  <div :class="styles.root">
    <div :class="styles.header">
      <p :class="styles.title">{{ title }}</p>
      <UiTooltip :content="planType.description" />
    </div>

    <!--  Группа всегда одна  -->
    <template v-for="group in subscriptionPlanGroups" :key="group.planGroup.id">
      <div v-if="planGroupInfoByID[group.planGroup.id]" :class="styles.info">
        {{ planGroupInfoByID[group.planGroup.id] }}
      </div>

      <div :class="styles.body">
        <SubscriptionPlanCard
          v-for="el in group.subscriptionPlans"
          :key="el.id"
          :data="el"
          :planType="planType"
          :isSelected="selectedIDs.includes(el.id)"
          @click="emits('toggleSelect', el.id)"
        />
      </div>
    </template>
  </div>
</template>
