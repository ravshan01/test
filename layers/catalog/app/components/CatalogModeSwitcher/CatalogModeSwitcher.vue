<script setup lang="ts">
import { RadioGroupItem, RadioGroupRoot } from "radix-vue";
import styles from "./CatalogModeSwitcher.module.css";

export type CatalogMode = "subscriptions" | "giftCards";
const selectedMode = defineModel<CatalogMode>({ required: true });

const modes = [
	{ value: "subscriptions", label: "Подписки" },
	{ value: "giftCards", label: "Подарочные карты" },
] satisfies { value: CatalogMode; label: string }[];

const selectedModeIndex = computed(() =>
	modes.findIndex((mode) => mode.value === selectedMode.value),
);
</script>

<template>
  <RadioGroupRoot v-model="selectedMode" :class="styles.root">
    <div
      :class="styles.indicator"
      :style="{ transform: `translateX(${selectedModeIndex * 100}%)` }"
    />

    <RadioGroupItem
      v-for="mode in modes"
      :key="mode.value"
      :value="mode.value"
      :class="styles.item"
    >
      {{ mode.label }}
    </RadioGroupItem>
  </RadioGroupRoot>
</template>
