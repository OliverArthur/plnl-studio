<template>
  <section aria-labelledby="contact-info-heading" class="contact-page">
    <div class="contact-page__container">
      <div class="app--grid">
        <Card class="app--grid__item contact-info-section">
          <template #title>
            <h2 id="contact-info-heading" class="app--type-heading-02">
              Contact Information
            </h2>
          </template>
          <template #content>
            <address class="app--type-body-long-01 contact-address">
              <ul class="app--list--unordered contact-list">
                <li class="contact-list__item">
                  <span class="app--label"><strong>Email:</strong></span>
                  <a href="mailto:contact@plnlstudio.com" class="app--link"
                    >contact@plnlstudio.com</a
                  >
                </li>
                <li class="contact-list__item">
                  <span class="app--label"><strong>Phone:</strong></span>
                  <a href="tel:+1234567890" class="app--link"
                    >+31 (0) 6 21353015</a
                  >
                </li>
                <li class="contact-list__item">
                  <span class="app--label"><strong>Address:</strong></span>
                  <span>Jensuistraat 21, 3035VB Rotterdam</span>
                </li>
              </ul>
            </address>
          </template>
        </Card>
        <Card class="app--grid__item contact-form-section">
          <template #title>
            <h2 id="contact-form-heading" class="app--type-heading-02">
              Send Us a Message
            </h2>
          </template>
          <template #content>
            <Form
              v-slot="$form"
              :initial-values="form"
              :resolver="resolver"
              @submit="handleSubmit"
              class="contact-form"
            >
              <FormControl>
                <FloatLabel variant="on">
                  <InputText
                    id="name"
                    name="name"
                    type="text"
                    class="app--text-input"
                    variant="filled"
                    size="large"
                    required
                    autocomplete="name"
                  />
                  <label for="name" class="app--label">Name</label>
                </FloatLabel>
                <Message
                  v-if="$form.name?.invalid"
                  severity="error"
                  size="small"
                  variant="simple"
                  class="app--form-error-message"
                >
                  <span v-for="error in $form.name.errors" :key="error.message">
                    {{ error.message }}
                  </span>
                </Message>
              </FormControl>
              <FormControl>
                <FloatLabel variant="on">
                  <InputText
                    id="email"
                    name="email"
                    type="email"
                    class="app--text-input"
                    variant="filled"
                    size="large"
                    required
                    autocomplete="email"
                  />
                  <label for="email" class="app--label">Email</label>
                </FloatLabel>
                <Message
                  v-if="$form.email?.invalid"
                  severity="error"
                  size="small"
                  variant="simple"
                  class="app--form-error-message"
                >
                  <span
                    v-for="error in $form.email.errors"
                    :key="error.message"
                  >
                    {{ error.message }}
                  </span>
                </Message>
              </FormControl>
              <FormControl>
                <FloatLabel variant="on">
                  <InputText
                    id="pnone"
                    namd="phone"
                    type="tel"
                    class="app--text-input"
                    variant="filled"
                    size="large"
                    autocomplete="phone"
                  />
                  <label for="phone" class="app--label">Phone</label>
                </FloatLabel>
              </FormControl>
              <FormControl>
                <FloatLabel variant="on">
                  <Textarea
                    id="message"
                    name="message"
                    class="app--text-area"
                    variant="filled"
                    size="large"
                    required
                    autocomplete="message"
                  />
                  <label for="message" class="app--label">Message</label>
                </FloatLabel>
                <Message
                  v-if="$form.message?.invalid"
                  severity="error"
                  size="small"
                  variant="simple"
                  class="app--form-error-message"
                >
                  <span
                    v-for="error in $form.message.errors"
                    :key="error.message"
                  >
                    {{ error.message }}
                  </span>
                </Message>
              </FormControl>
              <div class="app--btn-group">
                <Button
                  type="button"
                  label="Clear"
                  class="app--btn app--btn--secondary carbon-btn"
                />
                <Button
                  type="submit"
                  label="Send"
                  class="app--btn app--btn--primary carbon-btn"
                />
              </div>
            </Form>
          </template>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { z } from "zod";
import { Form } from "@primevue/forms";
import { zodResolver } from "@primevue/forms/resolvers/zod";
import Button from "primevue/button";
import Message from "primevue/message";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import FloatLabel from "primevue/floatlabel";
import Card from "primevue/card";
import FormControl from "@/components/form-control/FormControl.vue";
import type { ContactForm } from "@/types";

const form = ref<ContactForm>({
  fullName: "",
  email: "",
  phone: "",
  message: "",
});

const resolver = zodResolver(
  z.object({
    fullName: z.string().min(1, { message: "Full name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    phone: z.string().optional(),
    message: z.string().min(1, { message: "Message is required" }),
  })
);

function handleSubmit() {}
</script>

<style lang="scss" scoped>
@use "@/styles/px-to-rem.scss" as func;

$app-border-radius: 0.25rem;
$app-spacing-03: 1rem;
$app-spacing-04: 1.5rem;
$app-font-size-02: 1rem;
$app-font-size-03: 1.125rem;
$app-font-weight-semibold: 600;

.contact-page {
  padding-block: func.px-to-rem(48);
}
.contact-info-section {
  margin-bottom: func.px-to-rem(32);
  background-color: transparent;
  border: none;
  box-shadow: none;
}
.contact-address {
  margin-top: func.px-to-rem(24);


}
.contact-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.contact-list__item {
  margin-bottom: func.px-to-rem(20);
  display: flex;
  flex-direction: column;

  .app--link {
    display: inline-block;
    width: fit-content;
  }
}
.contact-form-section {
  margin-bottom: func.px-to-rem(32);
  background-color: transparent;
  border: none;
  box-shadow: none;
}
.contact-form {
  margin-top: func.px-to-rem(24);
  display: flex;
  flex-direction: column;
  gap: $app-spacing-04;

  .p-inputtext,
  .p-textarea {
    background-color: transparent;
  }

  .p-inputtext:enabled:hover,
  .p-textarea:enabled:hover,
  .p-inputtext:enabled:focus,
  .p-textarea:enabled:focus {
    background-color: transparent;
  }

  .app--text-input,
  .app--text-area {
    border-radius: $app-border-radius;
    padding: $app-spacing-03;
    font-size: $app-font-size-02;
    transition: border-color 0.2s;
    width: 100%;
    box-sizing: border-box;
  }

  .app--label {
    background-color: var(--p-neutral-200);
    font-size: $app-font-size-02;
    font-weight: $app-font-weight-semibold;
    margin-bottom: 0.25rem;
    display: block;
    letter-spacing: 0.01em;
  }

  .app--form-error-message {
    font-size: 0.875rem;
    margin-top: 0.25rem;
    font-weight: 400;
    line-height: 1.3;
    letter-spacing: 0.01em;
  }

  .carbon-btn {
    border: none;
    border-radius: $app-border-radius;
    padding: 0 $app-spacing-04;
    height: func.px-to-rem(48);
    letter-spacing: 0.01em;
    cursor: pointer;
  }
}

.app--grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: func.px-to-rem(32);
}

.app--btn-group {
  display: flex;
  flex-direction: row;
  gap: $app-spacing-03;
  align-items: center;
  width: 100%;

  .carbon-btn {
    width: 100%;

    &.app--btn--secondary {
      background-color: var(--p-neutral-300);
      color: var(--p-neutral-900);
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
    gap: $app-spacing-03;
    .carbon-btn {
      width: 100%;
    }
  }
}
</style>
