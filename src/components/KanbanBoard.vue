<template>
    <draggable group="track" class="tracks" :list="tracks" item-key="id" @start="drag=true" @end="drag=false" >
        <template #item="{ element: track }">
            <div class="track">
                <div class="title-track" contenteditable="true">
                    {{ track.title }}
                </div>
                <draggable class="track-items" v-model="track.tasks" group="tasks" item-key="id">
                    <template #item="{ element }">
                        <KanbanTask v-bind="element" />
                    </template>
                </draggable>
                <AddTask :id="track.id" />
            </div>
        </template>
    </draggable>
    <BoardActions />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import KanbanTask from './KanbanTask.vue';
import BoardActions from './BoardActions.vue';
import AddTask from './AddTask.vue';
import draggable from "vuedraggable";
import { useKanbanStore } from '../stores/useKanbanStore';


const store = useKanbanStore();
const tracks = ref(store.tracks);
const drag = ref(false);
</script>
