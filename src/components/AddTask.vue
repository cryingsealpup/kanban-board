<template>
    <div class="btn-main__wrapper group">
        <div class="btn-main"></div>
        <button class="target" @click="store.addTask(props.id)">
            Add task
        </button>
    </div>
</template>

<script setup lang="ts">
import { useKanbanStore } from '../stores/useKanbanStore';

const store = useKanbanStore();

const props = defineProps({
    id: {
        type: Number,
        required: true,
        default: 0,
    }
});

</script>