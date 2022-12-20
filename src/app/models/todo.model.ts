export class Todo {
  id: number | string;
  userId: number;
  title: string;
  completed: boolean;

  constructor(userId: number, id: number | string, title: string) {
    this.userId = userId;
    this.id = id;
    this.title = title;
    this.completed = false;
  }
}
