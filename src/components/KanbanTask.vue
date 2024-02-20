<template>
    <div class="task">
        <p class="task-title" autofocus="autofocus" contenteditable="true">
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

</script>