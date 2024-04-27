<template>
    <div class="track">
        <div class="title-track" contenteditable="true">
            {{ props.title }}
        </div>
        <draggable class="track-items" v-model="props.tasks" group="tasks" item-key="id">
            <template #item="{ element }">
                <KanbanTask v-bind="element" />
            </template>
            
        </draggable>
        <AddTask :id="props.id" />
    </div>
    
</template>

<script setup>
import KanbanTask from './KanbanTask.vue';
import AddTask from './AddTask.vue';
import draggable from "vuedraggable";

const props = defineProps({
    id: Number,
    title: String,
    tasks: Array
});
</script>
