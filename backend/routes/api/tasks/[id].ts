import { z } from "zod";
import {
  defineSchema,
  type PatchHandler,
  type DeleteHandler
} from "@boilrjs/core";
import { tasksService } from "../../../services/tasks.service.js";

const Task = z.object({
  id: z.number(),
  title: z.string(),
  completed: z.boolean()
});

export const schema = defineSchema({
  patch: {
    params: z.object({
      id: z.string().transform(Number)
    }),
    body: z.object({
      completed: z.boolean()
    }),
    response: {
      200: Task
    }
  },
  delete: {
    params: z.object({
      id: z.string().transform(Number)
    }),
    response: {
      204: z.null()
    }
  }
});

export const patch: PatchHandler<typeof schema> = async (request) => {
  return tasksService.toggle(
    request.params.id,
    request.body.completed
  );
};

export const del: DeleteHandler<typeof schema> = async (request) => {
  tasksService.remove(request.params.id);
  return null;
};
