export type TaskType = {
  content: string;
  description: string;
  status: boolean | undefined;
  priority: string | undefined;
  delay: Date | undefined;
  group: string;
};
