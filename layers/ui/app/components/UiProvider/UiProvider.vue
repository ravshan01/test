<script setup>
import { TooltipProvider } from 'radix-vue'
</script>

<template>
  <TooltipProvider :delay-duration="300" :skip-delay-duration="100">
    <slot/>
  </TooltipProvider>
</template>