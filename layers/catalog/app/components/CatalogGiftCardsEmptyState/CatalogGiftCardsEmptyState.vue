<script setup lang="ts">
import styles from "./CatalogGiftCardsEmptyState.module.css";
</script>

<template>
  <section :class="styles.root" aria-labelledby="gift-cards-empty-title">
    <div :class="styles.preview" aria-hidden="true">
      <div :class="styles.card">
        <div :class="styles.cardTop">
          <span :class="styles.cardChip" />
          <span :class="styles.cardValue">-15%</span>
        </div>

        <div :class="styles.cardBody">
          <span :class="styles.cardTitle">Gift card</span>
          <span :class="styles.cardCode">SPOTIFY-2026</span>
        </div>
      </div>
    </div>

    <div :class="styles.content">
      <h2 id="gift-cards-empty-title" :class="styles.title">
        Подарочные карты скоро появятся
      </h2>

      <p :class="styles.description">
        Сейчас можно выбрать подписку. Раздел с подарочными картами готовится к запуску.
      </p>

      <div :class="styles.meta">
        <span>Цифровые коды</span>
        <span>Быстрая активация</span>
      </div>
    </div>
  </section>
</template>
