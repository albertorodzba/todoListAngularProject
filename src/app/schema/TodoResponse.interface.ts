export interface TodoResponse{
    message: string;
    items: Item[];
}

export interface Item {
    id?: number;
    toDo: string;
    task_Created?: Date;
    completed?: boolean;
    userId: number;
}