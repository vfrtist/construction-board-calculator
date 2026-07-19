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

export function getCutInput(): CutInput {
	return { id: crypto.randomUUID(), length: 0, qty: 1, name: "" };
}

export function getBoardData(): BoardData {
	return { name: "", boardLength: 96, cutInputs: [getCutInput()] };
}

export function getEmptyProject(): Project {
	return {
		id: crypto.randomUUID(),
		name: "New Project",
		updatedAt: new Date().toISOString(),
		boards: { [crypto.randomUUID()]: getBoardData() },
	}
}