<script setup lang="ts">
import {TooltipContent, TooltipPortal, TooltipRoot, TooltipTrigger} from 'radix-vue'
import QuestionCircleIcon from "#layers/ui/app/components/icons/QuestionCircleIcon.vue";
import styles from './UiTooltip.module.css'

export interface IUiTooltipProps {
  content: string
}

defineProps<IUiTooltipProps>()
</script>

<template>
  <TooltipRoot>
    <TooltipTrigger :class="styles.trigger">
      <QuestionCircleIcon :class="styles.icon" />
    </TooltipTrigger>

    <TooltipPortal>
      <TooltipContent :class="styles.content">
        {{ content }}
      </TooltipContent>
    </TooltipPortal>
  </TooltipRoot>
</template>