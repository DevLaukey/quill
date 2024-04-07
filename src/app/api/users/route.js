import { createNextRouteHandler } from "uploadthing/next";

import Users from "./users";

export const { GET, POST } = createNextRouteHandler({
  router: Users,
});
