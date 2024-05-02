<template>
    <div class="task">
        <p class="task-title" v-focus contenteditable @input="emit('update:title',  $event)">
            {{ props.title }}
        </p>
    </div>
</template>

<script setup lang="ts">
const props = defineProps(['title']);
const emit = defineEmits(['update:title']);
const vFocus = {
  mounted: (el : HTMLElement) => el.focus()
}
</script>