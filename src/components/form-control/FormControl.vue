<template>
    <div class="form-control">
        <slot />
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
.form-control {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    input,
    textarea {
        width: 100%;
    }
}
</style>