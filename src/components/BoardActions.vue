<template>
    <div class="board-actions">
        <div class="btn-main__wrapper group">
            <div class="btn-main"></div>
            <button class="target" @click="track.createTrack()">
                Add track
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useKanbanStore } from '../stores/useKanbanStore';

const track = useKanbanStore();
</script>