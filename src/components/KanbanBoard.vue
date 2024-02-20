<template>
    <draggable group="track" class="tracks" v-model="store.tracks" item-key="id">
        <template #item="{ element }">
            <KanbanTrack v-bind="element" />
        </template>
    </draggable>
    <BoardActions />
</template>

<script setup lang="ts">
import KanbanTrack from './KanbanTrack.vue';
import BoardActions from './BoardActions.vue';
import draggable from "vuedraggable";
import { useKanbanStore } from '../stores/useKanbanStore';


const store = useKanbanStore();

</script>
