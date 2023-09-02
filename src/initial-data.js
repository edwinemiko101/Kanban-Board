const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "Take a break", priority: "low" },
    "task-2": { id: "task-2", content: "Get interview", priority: "high" },
    "task-3": {
      id: "task-3",
      content: "Prepare for presentation in two weeks",
      priority: "medium",
    },
    "task-4": {
      id: "task-4",
      content: "Rest for awhile",
      priority: "low",
    },
    "task-5": {
      id: "task-5",
      content: "Wake up",
      priority: "high",
    },
    "task-6": {
      id: "task-6",
      content: "Parts Avatar Project",
      priority: "high",
    },
    "task-7": {
      id: "task-7",
      content: "Extra Work",
      priority: "medium",
    },
    "task-8": {
      id: "task-8",
      content: "Eat dinner",
      priority: "low",
    },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To Do",
      taskIds: ["task-1", "task-2"],
    },
    "column-2": {
      id: "column-2",
      title: "Doing",
      taskIds: ["task-3", "task-4", "task-5"],
    },
    "column-3": {
      id: "column-3",
      title: "Done",
      taskIds: ["task-6", "task-7", "task-8"],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3"],
};
export default initialData;
