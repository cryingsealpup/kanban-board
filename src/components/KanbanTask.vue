<template>
    <div class="task">
        <p class="task-title" v-focus contenteditable="true">
            {{ props.title }}
        </p>
        {{ props.description }}
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    id: Number,
    title: String,
    description: String
});
const vFocus = {
  mounted: (el : HTMLElement) => el.focus()
}
</script>