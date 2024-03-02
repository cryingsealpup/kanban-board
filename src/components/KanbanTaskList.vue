<template>
    <draggable group="tasks" class="track-items" :list="tracks[props.trackId - 1]?.tasks" item-key="id"  @start="drag=true" @end="drag=false">
        <template #item="{ element: task }">
            <KanbanTask v-bind="task" @set-text="(txt)=>task.title=txt" />
        </template>
    </draggable>
    <AddTask :id="props.trackId" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import draggable from "vuedraggable";
import KanbanTask from './KanbanTask.vue';
import AddTask from './AddTask.vue';
import { useKanbanStore } from '../stores/useKanbanStore';

const props = defineProps(['trackId']);
const store = useKanbanStore();
const { tracks } = storeToRefs(store);
const drag = ref(false);
</script>