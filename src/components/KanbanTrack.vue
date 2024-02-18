<template>
    <div class="track" v-for="track in store.tracks" :key="track.id">
        <div class="title-track" contenteditable="true">
            {{ track.title }}
        </div>
        <div class="track-items">
            <KanbanTask />
        </div>
        <div class="btn-main__wrapper group">
            <div class="btn-main"></div>
            <button class="target" :click="store.addTask(track.id)">
                Add task
            </button>
        </div>


    </div>
</template>

<script setup lang="ts">
import KanbanTask from './KanbanTask.vue';
import { useKanbanStore } from '../stores/useKanbanStore';

const store = useKanbanStore();
</script>
