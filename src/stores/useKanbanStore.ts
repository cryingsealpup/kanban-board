import { defineStore } from 'pinia';
import { v4 } from 'uuid';

export const useKanbanStore = defineStore('main', {
    state: () => ({
        tracks: [] as Array<any>,
    }),

    actions: {
        createTrack() {
            this.tracks.push({
                id: this.tracks.length + 1,
                title: 'New Track',
                tasks: []
            })
        },

        addTask(id: number) {
            
            this.tracks[id - 1].tasks.push({
                id: v4(),
                title: 'New Task',
                description: ''
            });
            
            console.log(this.tracks[id - 1])
        },

        getTasks(id: number) {
            return this.tracks[id - 1].tasks;
        }
    }
})