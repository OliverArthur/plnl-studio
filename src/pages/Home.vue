<template>
  <div class="home-container">
    <section class="masonry-grid" aria-label="Featured projects and introduction">
      <article class="grid-item">
        <div class="app-logo">
          <img src="@/assets/logo.svg" alt="PLNL Studio Logo" />
        </div>
        <p class="page-description">
          Welcome to PLNL Studio, an independent architecture practice focused on creating thoughtful, sustainable, and innovative spaces. As a solo practitioner, I bring a personal touch to every project, ensuring direct communication and attention to detail throughout the design process.
        </p>
      </article>
      <article class="grid-item">
        <img
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=80"
          alt="Contemporary interior design with natural light"
          loading="lazy"
        />
      </article>
      <article class="grid-item">
        <img
            src="@/assets/DSCF0996%20Pano%20Edit.jpg"
            alt="Modern architectural building with glass facade"
            loading="lazy"
        />
      </article>
      <article class="grid-item">
        <img
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80"
          alt="Sustainable architecture project exterior"
          loading="lazy"
        />
      </article>
      <article class="grid-item">
        <img
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80"
          alt="Innovative workspace design"
          loading="lazy"
        />
      </article>
      <article class="grid-item">
        <div class="content-placeholder">
          <h2>Coming Soon</h2>
          <p>Check back soon for more information</p>
        </div>
        <Button label="Contact Us" class="carbon-btn" aria-label="Contact PLNL Studio" />
      </article>
    </section>
  </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button'
</script>

<style lang="scss" scoped>
@use "@/styles/px-to-rem" as func;

.page-title {
  font-size: func.px-to-rem(64);
  font-weight: 600;
  line-height: func.px-to-rem(80);
  letter-spacing: 0;
  color: var(--text-color);
}

.page-description {
  font-size: func.px-to-rem(24);
  font-weight: 400;
  line-height: func.px-to-rem(32);
  letter-spacing: 0;
  color: var(--text-color);
}

.masonry-grid {
  display: block;
  column-count: 1;
  column-gap: func.px-to-rem(16);

  @media (min-width: func.px-to-rem(768)) {
    column-count: 2;
    column-gap: func.px-to-rem(32);
  }

  .grid-item {
    width: 100%;
    padding: func.px-to-rem(8);
    margin-bottom: func.px-to-rem(16);

    @media (min-width: func.px-to-rem(768)) {
      padding: func.px-to-rem(16);
      margin-bottom: func.px-to-rem(32);
    }

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }

    .content-placeholder {
      h2 {
        font-size: func.px-to-rem(24);
        font-weight: 600;
        line-height: func.px-to-rem(32);
        letter-spacing: 0;
        color: var(--text-color);
      }

      p {
        font-size: func.px-to-rem(16);
        font-weight: 400;
        line-height: func.px-to-rem(24);
        letter-spacing: 0;
        color: var(--text-color);
      }
    }
  }
}

.carbon-btn {
  padding-left: func.px-to-rem(16);
  padding-right: func.px-to-rem(64);
  margin-right: func.px-to-rem(16);
  width: auto;
  font-size: func.px-to-rem(16);
  font-weight: 600;
  line-height: func.px-to-rem(19);
  letter-spacing: 0.01rem;
  border-radius: func.px-to-rem(4);
  color: #fff;
  border: none;
  cursor: pointer;
  height: func.px-to-rem(48);

  &.p-button:hover,
  &.p-button:active {
    border: none;
  }
}

.app-logo {
  width: func.px-to-rem(280);
  margin-bottom: func.px-to-rem(32);

  img {
    height: auto;
    width: 100%;
    object-fit: contain;
  }
}
</style>