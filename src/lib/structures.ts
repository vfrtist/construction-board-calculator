export interface CutDimension {
	length: number;
	name: string;
}

export interface CutInput extends CutDimension {
	id: string;
	qty: number;
}

export class ListNode {
	next: ListNode | null = null;
	value: number;
	constructor(value: number) {
		this.value = value;
	}
}

export interface BoardData {
	name: string;
	boardLength: number;
	cutInputs: CutInput[];
}

export type ProjectBoards = Record<string, BoardData>;

export interface Project {
	id: string;
	name: string;
	updatedAt: string;
	boards: ProjectBoards;
}

export interface Template extends Project {
	description: string;
}
