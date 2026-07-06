export interface CutDimension {
  length: number;
  name: string;
}

export interface CutInput extends CutDimension {
  id: string;
  qty: number;
}

export interface BoardDimension {
  id: string;
  length: number;
  width: number;
  height: number;
  name: string;
}

export interface BoardData {
  dimension: BoardDimension;
  cuts: CutInput[];
}

export type BoardDictionary = Record<string, BoardData>;

export function getBoardDimension(): BoardDimension {
  return { id: crypto.randomUUID(), length: 96, width: 2, height: 4, name: "" };
}

export function getCutInput(): CutInput {
  return { id: crypto.randomUUID(), length: 0, qty: 1, name: "" };
}
