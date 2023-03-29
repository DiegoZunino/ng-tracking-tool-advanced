import { Priority } from "./project";

export interface SearchProject {
  name?: string;
  priority?: Priority;
  done?: boolean;
}