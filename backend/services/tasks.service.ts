import { taskStore } from "../storage/tasks.store.js";
import { NotFoundException } from "@boilrjs/core";

export const tasksService = {
  list() {
    return taskStore.getAll();
  },

  create(title: string) {
    return taskStore.create(title);
  },

  toggle(id: number, completed: boolean) {
    const task = taskStore.update(id, completed);
    if (!task) {
      throw new NotFoundException("Task not found");
    }
    return task;
  },

  remove(id: number) {
    const deleted = taskStore.delete(id);
    if (!deleted) {
      throw new NotFoundException("Task not found");
    }
  }
};
