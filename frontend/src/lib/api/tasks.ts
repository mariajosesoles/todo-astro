const API_URL = import.meta.env.PUBLIC_API_URL;

export type Task = {
  id: number;
  title: string;
  completed: boolean;
};

export async function fetchTasks(): Promise<Task[]> {
  const res = await fetch(`${API_URL}/api/tasks`);
  if (!res.ok) throw new Error("Failed to fetch tasks");
  return res.json();
}

export async function createTask(title: string): Promise<Task> {
  const res = await fetch(`${API_URL}/api/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title })
  });

  if (!res.ok) throw new Error("Failed to create task");
  return res.json();
}

export async function toggleTask(
  id: number,
  completed: boolean
): Promise<Task> {
  const res = await fetch(`${API_URL}/api/tasks/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ completed })
  });

  if (!res.ok) throw new Error("Failed to update task");
  return res.json();
}

export async function deleteTask(id: number): Promise<void> {
  const res = await fetch(`${API_URL}/api/tasks/${id}`, {
    method: "DELETE"
  });

  if (!res.ok) throw new Error("Failed to delete task");
}
