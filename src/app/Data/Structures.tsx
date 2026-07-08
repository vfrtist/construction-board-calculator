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

export function getCutInput(): CutInput {
  return { id: crypto.randomUUID(), length: 0, qty: 1, name: "" };
}
