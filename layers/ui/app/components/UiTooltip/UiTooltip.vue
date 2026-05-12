<script setup lang="ts">
import {TooltipContent, TooltipPortal, TooltipRoot, TooltipTrigger} from 'radix-vue'

import styles from './UiTooltip.module.css'

export interface IUiTooltipProps {
  content: string
}

defineProps<IUiTooltipProps>()
</script>

<template>
  <TooltipRoot>
    <TooltipTrigger class="help-icon-trigger">
      <span :class="styles.icon">?</span>
    </TooltipTrigger>

    <TooltipPortal>
      <TooltipContent :class="styles.content">
        {{ content }}
      </TooltipContent>
    </TooltipPortal>
  </TooltipRoot>
</template>