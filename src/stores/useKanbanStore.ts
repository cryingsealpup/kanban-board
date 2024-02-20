import { defineStore } from 'pinia';
export const useKanbanStore = defineStore('main', {
    state: () => ({
        tracks: [] as any
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
                id: this.tracks[id - 1].tasks.length + 1,
                title: 'New Task',
                description: ''
            });
        },

        getTasks(id: number) {
            return this.tracks[id - 1].tasks;
        }
    }
})