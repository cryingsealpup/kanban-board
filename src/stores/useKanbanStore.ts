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
        const currentTrack = this.tracks[id - 1].tasks;
        currentTrack.push({
            title: 'New Task',
            description: ''
        })
    }
  },
})