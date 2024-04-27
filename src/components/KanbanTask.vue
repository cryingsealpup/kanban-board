<template>
    <div class="task">
        <p class="task-title" v-focus contenteditable @input="$emit('setText', (<HTMLInputElement>$event.target).innerHTML)">
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

defineEmits(['setText'])
const vFocus = {
  mounted: (el : HTMLElement) => el.focus()
}
</script>