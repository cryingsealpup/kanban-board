<template>
    <div class="board-actions">
        <div class="btn-main__wrapper group">
            <div class="btn-main"></div>
            <button class="target" @click="createTrack.createTrack()">
                Add track
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useKanbanStore } from '../stores/useKanbanStore';
import { ref } from 'vue';
const track = useKanbanStore();
const createTrack = ref(track);
</script>