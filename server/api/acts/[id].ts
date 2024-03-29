import { createDirectory, getMockById } from "@/server/helper";

const folder = "server/mock/acts/";

export default defineEventHandler(async (event) => {
  if (event.node.req.method === "GET") {
    const id = getRouterParam(event, "id");

    createDirectory(folder);
    const mockData = getMockById(folder, id);

    return mockData;
  }
});
