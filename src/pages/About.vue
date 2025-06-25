<template>
  <section class="about-page">
    <div class="about-page__container">
      <div class="about-page__header">
        <h1 class="app--type-heading-01">About PLNL Studio</h1>
      </div>
      <div class="about-page__content">
        <p class="app--type-body-long-01">
          PLNL Studio is an architecture and design studio based in Rotterdam,
          The Netherlands.

          We are a team of architects and designers who are passionate about
          creating beautiful, functional buildings and spaces.

          Our work is characterized by a strong focus on sustainability,
          innovation, and a commitment to creating spaces that are both
          beautiful and functional.

          Our approach is to work closely with our clients to understand their
          needs and aspirations, and to deliver design solutions that are
          tailored to their specific requirements.

          We believe that design is a powerful tool for creating positive
          change, and we are committed to using our skills and expertise to
          make a difference in the world.

          We are a team of architects and designers who are passionate about
          creating beautiful, functional buildings and spaces.

          Our work is characterized by a strong focus on sustainability,
          innovation, and a commitment to creating spaces that are both
          beautiful and functional.
        </p>
        <h2 class="app--type-heading-02">About Magdalena Sakowicz</h2>
        <p class="app--type-body-long-01">
          Magdalena is a licensed architect with a passion for creating
          sustainable, functional spaces that are both beautiful and
          functional.

          She has a strong focus on sustainability, innovation, and a
          commitment to creating spaces that are both beautiful and
          functional.

          Her approach is to work closely with her clients to understand their
          needs and aspirations, and to deliver design solutions that are
          tailored to their specific requirements.
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "@/styles/px-to-rem" as func;

// app typography tokens
$app-heading-02-size: 2rem;
$app-heading-02-weight: 400;
$app-heading-02-line-height: 2.5rem;
$app-heading-02-letter-spacing: 0;

$app-body-long-01-size: 1rem;
$app-body-long-01-weight: 400;
$app-body-long-01-line-height: 1.5rem;
$app-body-long-01-letter-spacing: 0.01em;

$app-strong-weight: 600;

.about-page,
.contact-page {
  font-family: 'IBM Plex Sans', Arial, sans-serif;

  h2, .app--type-heading-02 {
    font-size: $app-heading-02-size;
    font-weight: $app-heading-02-weight;
    line-height: $app-heading-02-line-height;
    letter-spacing: $app-heading-02-letter-spacing;
  }

  p, .app--type-body-long-01 {
    font-size: $app-body-long-01-size;
    font-weight: $app-body-long-01-weight;
    line-height: $app-body-long-01-line-height;
    letter-spacing: $app-body-long-01-letter-spacing;
  }

  strong, b {
    font-weight: $app-strong-weight;
  }
}

.about-page__container {
    width: 100%;
    max-width: func.px-to-rem(960);
}
</style>