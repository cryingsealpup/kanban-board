<template>
  <draggable group="track" v-model="tracks" class="tracks" item-key="id">
    <template #item="{ element: track }">
      <div class="track">
        <div class="title-track" contenteditable="true"
          @input="({ target }) => track.title = (target as HTMLInputElement)?.innerHTML">
          {{ track.title }}
        </div>
        <draggable group="tasks" v-model="track.tasks" item-key="id">
          <template #item="{ element: task }">
            <KanbanTask @update:title="(e) => { console.log(e.target); task.title =  e.target?.textContent }" :title="task.title" />
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
import BoardActions from './BoardActions.vue';
import KanbanTask from './KanbanTask.vue';
import AddTask from './AddTask.vue';
import draggable from "vuedraggable";
import { useKanbanStore } from '../stores/useKanbanStore';


const store = useKanbanStore();
const tracks = ref(store.tracks);
</script>
