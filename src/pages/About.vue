<template>
  <section class="about-page">
    <div class="about-page__container">
      <div class="about-page__header">
        <h2 class="app--type-heading-02">{{ $t("about.plnl.title") }}</h2>
      </div>
      <div class="about-page__content">
        <h3 class="app--type-productive-heading-03">{{ $t("about.plnl.subtitle_one") }}</h3>
        <p class="app--type-body-long-01">{{ $t("about.plnl.content_one.paragraph_one") }}</p>
        <p class="app--type-body-long-01">{{ $t("about.plnl.content_one.paragraph_two") }}</p>
        <p class="app--type-body-long-01">{{ $t("about.plnl.content_one.paragraph_three") }}</p>

        <h3 class="app--type-productive-heading-03">{{ $t("about.plnl.subtitle_two") }}</h3>
        <p class="app--type-body-long-01">{{ $t("about.plnl.content_two.paragraph_one") }}</p>
        <p class="app--type-body-long-01">{{ $t("about.plnl.content_two.paragraph_two") }}</p>
        <p class="app--type-body-long-01">{{ $t("about.plnl.content_two.paragraph_three") }}</p>
        <ul class="app-list">
          <li><a href="https://www.kesp-architectuur.nl/" title="Kesp Architectuur" target="_blank">Kesp Architectuur</a></li>
          <li><a href="https://www.strupinski.net/" title="Michal Strupinski" target="_blank">Michal Strupinski</a></li>
          <li><a href="https://www.onustudio.com/" title="Studio Onu" target="_blank">Studio Onu</a></li>
        </ul>
        <p class="app--type-body-long-01">{{ $t("about.plnl.content_two.paragraph_four") }}</p>

        <h3 class="app--type-productive-heading-03">{{ $t("about.plnl.subtitle_three") }}</h3>
        <p class="app--type-body-long-01">{{ $t("about.plnl.content_three.paragraph_one") }}</p>
        <p class="app--type-body-long-01">{{ $t("about.plnl.content_three.paragraph_two") }}</p>
        <p class="app--type-body-long-01">{{ $t("about.plnl.content_three.paragraph_three") }}</p>
        <p class="app--type-body-long-01">{{ $t("about.plnl.content_three.paragraph_four") }}</p>
        <p class="app--type-body-long-01">{{ $t("about.plnl.content_three.paragraph_five") }}</p>
        <p class="app--type-body-long-01">{{ $t("about.plnl.content_three.paragraph_six") }}</p>
      </div>
    </div>

    <div class="about-page__container">
      <div class="about-page__header">
        <h2 class="app--type-heading-02">{{ $t("about.magda.title") }}</h2>
      </div>
      <div class="about-page__content">
        <p class="app--type-body-long-01">{{ $t("about.magda.content.paragraph_one") }}</p>
        <p class="app--type-body-long-01">{{ $t("about.magda.content.paragraph_two") }}</p>
        <p class="app--type-body-long-01">{{ $t("about.magda.content.paragraph_three") }}</p>
        <p class="app--type-body-long-01">{{ $t("about.magda.content.paragraph_four") }}</p>
        <p class="app--type-body-long-01">{{ $t("about.magda.content.paragraph_five") }}</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "sass:math";
@use "@/styles/px-to-rem" as func;

// Carbon Design System Tokens (simulation)
// Spacing
$spacing-05: func.px-to-rem(16);
$spacing-06: func.px-to-rem(24);
$spacing-07: func.px-to-rem(32);
$spacing-08: func.px-to-rem(48);

// Type
$app-heading-02-font-size: func.px-to-rem(28); // heading-02
$app-heading-02-line-height: 1.3;
$app-heading-02-font-weight: 400;

$app-productive-heading-03-font-size: func.px-to-rem(20); // productive-heading-03
$app-productive-heading-03-line-height: 1.4;
$app-productive-heading-03-font-weight: 700;

$app-body-long-01-font-size: func.px-to-rem(16); // body-long-01
$app-body-long-01-line-height: 1.5;
$app-body-long-01-font-weight: 400;

// Base page styling
.about-page {
  padding: $spacing-06 0;
  p {
    margin: 0;
    padding: 0;
    line-height: 1.5;
  }
}

.about-page__container {
  width: 100%;
  max-width: func.px-to-rem(960);
  padding: 0 $spacing-05;

  &:not(:last-child) {
    margin-bottom: $spacing-08;
  }
}

.about-page__header {
  margin-bottom: $spacing-07;
}

.app--type-heading-02 {
  font-size: $app-heading-02-font-size;
  font-weight: $app-heading-02-font-weight;
  line-height: $app-heading-02-line-height;
  letter-spacing: 0;
}

.app--type-productive-heading-03 {
  font-size: $app-productive-heading-03-font-size;
  font-weight: $app-productive-heading-03-font-weight;
  line-height: $app-productive-heading-03-line-height;
  letter-spacing: 0;
  margin-bottom: $spacing-06;
}

.app--type-body-long-01 {
  font-size: $app-body-long-01-font-size;
  font-weight: $app-body-long-01-font-weight;
  line-height: $app-body-long-01-line-height;
  letter-spacing: 0.16px;
}

// List styles
.app-list {
  list-style: none;
  padding: 0;
  margin: $spacing-06 0;

  li {
    &:not(:last-child) {
      margin-bottom: math.div($spacing-05, 2);
    }
  }

  a {
    font-size: $app-body-long-01-font-size;
    color: #0f62fe;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>