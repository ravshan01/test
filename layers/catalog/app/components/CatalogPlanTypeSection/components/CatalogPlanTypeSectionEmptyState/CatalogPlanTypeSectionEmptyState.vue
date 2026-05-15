<script setup lang="ts">
import styles from "./CatalogPlanTypeSectionEmptyState.module.css"
</script>

<template>
	<div :class="styles.root">
		<span :class="styles.icon" aria-hidden="true">?</span>
		<span :class="styles.text">
			Для выбранного региона этот тип подписки пока недоступен
		</span>
	</div>
</template>
