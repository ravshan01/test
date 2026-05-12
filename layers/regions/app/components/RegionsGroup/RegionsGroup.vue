<script setup lang="ts">
import {RadioGroupItem, RadioGroupRoot} from 'radix-vue'
import type {IRegionDTO} from "#layers/regions/app/dto/regions.dto";

export interface IRegionsGroupProps {
  regions: IRegionDTO[]
}

defineProps<IRegionsGroupProps>()
const selectedRegionID = defineModel<string | undefined>("selectedRegionID", { required: true })

</script>

<template>
  <RadioGroupRoot
    class="root"
    v-model="selectedRegionID"
  >
    <RadioGroupItem
      v-for="region in regions" :key="region.id"
      :id="region.id"
      :value="region.id"
      class="item"
    >
      <img :src="region.flag ?? ''" alt="flag" />
      <span>{{ region.name }}</span>
    </RadioGroupItem>
  </RadioGroupRoot>
</template>

<style scoped>
.root{
  display: flex;
  gap: var(--gap-sm)
}

.item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 138px;
  height: 44px;
  gap: 4px;
  padding: 13px 22px;

  background-color: var(--surface-bg-color-100);
  color: var(--text-base-color);
  border-radius: 54px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    opacity: 0.7;
  }
}
.item[data-state="checked"] {
  background-color: #E8E8E8;
  color: var(--text-alternate-color);
}

.item span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>