<template>
    <div class="task">
        <p class="task-title" v-focus contenteditable="true" @input="handleText">
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

const emits = defineEmits(['setText'])
const handleText = (e: Event) => emits('setText', (e.target as HTMLInputElement)?.innerHTML);
const vFocus = {
  mounted: (el : HTMLElement) => el.focus()
}
</script>