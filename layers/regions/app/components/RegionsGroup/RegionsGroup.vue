<script setup lang="ts">
import {RadioGroupItem, RadioGroupRoot} from 'radix-vue'
import type {IRegionDTO} from "#layers/regions/app/dto/regions.dto";

import styles from './RegionsGroup.module.css'

export interface IRegionsGroupProps {
  regions: IRegionDTO[]
}

defineProps<IRegionsGroupProps>()
const selectedRegionID = defineModel<string | undefined>("selectedRegionID", { required: true })

</script>

<template>
  <RadioGroupRoot
    :class="styles.root"
    v-model="selectedRegionID"
  >
    <RadioGroupItem
      v-for="region in regions" :key="region.id"
      :id="region.id"
      :value="region.id"
      :class="styles.item"
    >
      <img :src="region.flag ?? ''" alt="flag" />
      <span>{{ region.name }}</span>
    </RadioGroupItem>
  </RadioGroupRoot>
</template>
