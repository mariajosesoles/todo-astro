export type Task = {
  id: number;
  title: string;
  completed: boolean;
};

let tasks: Task[] = [];
let idCounter = 1;

export const taskStore = {
  getAll() {
    return tasks;
  },

  create(title: string): Task {
    const task: Task = {
      id: idCounter++,
      title,
      completed: false
    };

    tasks.push(task);
    return task;
  },

  update(id: number, completed: boolean): Task | null {
    const task = tasks.find(t => t.id === id);
    if (!task) return null;

    task.completed = completed;
    return task;
  },

  delete(id: number): boolean {
    const index = tasks.findIndex(t => t.id === id);
    if (index === -1) return false;

    tasks.splice(index, 1);
    return true;
  }
};
