import { z } from "zod";
import { defineSchema, type GetHandler, type PostHandler } from "@boilrjs/core";
import { tasksService } from "../../../services/tasks.service.js";

const Task = z.object({
  id: z.number(),
  title: z.string(),
  completed: z.boolean()
});

export const schema = defineSchema({
  get: {
    response: {
      200: z.array(Task)
    }
  },
  post: {
    body: z.object({
      title: z.string().min(1)
    }),
    response: {
      201: Task
    }
  }
});

export const get: GetHandler<typeof schema> = async () => {
  return tasksService.list();
};

export const post: PostHandler<typeof schema> = async (request) => {
  return tasksService.create(request.body.title);
};
