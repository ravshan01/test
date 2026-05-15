<script setup lang="ts">
import type { IRegionDTO } from "#layers/regions/app/dto/regions.dto"
import { RadioGroupItem, RadioGroupRoot } from "radix-vue"

import styles from "./RegionsGroup.module.css"

export interface IRegionsGroupProps {
	regions: IRegionDTO[]
}

defineProps<IRegionsGroupProps>()
const selectedRegionID = defineModel<string | undefined>("selectedRegionID", {
	required: true,
})
</script>

<template>
	<RadioGroupRoot v-model="selectedRegionID" :class="styles.root">
		<RadioGroupItem
			v-for="region in regions"
			:id="region.id"
			:key="region.id"
			:value="region.id"
			:class="styles.item"
		>
			<img :src="region.flag ?? ''" alt="flag" />
			<span>{{ region.name }}</span>
		</RadioGroupItem>
	</RadioGroupRoot>
</template>
