import Task from './task';

export type Priority = 'low' | 'medium' | 'high'

export interface Project {
    id: number;
    code: string;
    name: string;
    description?: string;
    start: Date;
    end?: Date;
    priority: Priority;
    done: boolean;
    tasks: Task[]
}