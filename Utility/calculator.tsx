import { BoardData } from "../Data/SessionContext";

export interface CutDimension {
    length: number;
    name: string;
}
export interface CutInput {
    dimensions: CutDimension;
    qty: number;
}

export class BoardDimension {
    length: number;
    width: number;
    height: number;
    name: string;

    constructor(
        length: number = 96,
        width: number = 2,
        height: number = 4,
        name: string = ""
    ) {
        this.length = length;
        this.width = width;
        this.height = height;
        this.name = name;
    }
}

export class CutBoard {
    // For storing cut lengths of a single board
    length: number;
    cuts: CutDimension[] = [];
    remainingLength: number;

    constructor(length: number) {
        this.length = length;
        this.remainingLength = length;
    }

    cut(cutBoard: CutDimension) {
        if (cutBoard.length > this.remainingLength) {
            throw new Error("Not enough remaining length to cut");
        }
        this.cuts.push(cutBoard);
        this.remainingLength -= cutBoard.length;
        this.remainingLength -= 0.125; // blade width
    }

    get cutPlan(): CutDimension[] {
        return this.cuts;
    }

    get remainder(): number {
        return this.remainingLength;
    }

    equals(board: CutBoard): boolean {
        // If they aren't the same length we already know they don't match.
        if (this.cutPlan.length != board.cutPlan.length) {
            return false;
        }
        // if they are the same length we can check their individual values in order.
        this.cutPlan.map((cut, index) => {
            if (cut.length != board.cutPlan[index].length) {
                console.log(
                    `${cut.length} does not equal ${board.cutPlan[index].length}`
                );
                return false;
            }
        });
        return true;
    }
}

export class ListNode {
    next: ListNode | null = null;
    value: number;
    constructor(value: number) {
        this.value = value;
    }
}

export class BoardNode extends ListNode {
    items: CutBoard[] = [];
    next: BoardNode | null = null;
}

export class BoardList {
    // This is a specialized linked list
    head: BoardNode | null = null;
    dimension: BoardDimension;
    cuts: CutDimension[] = [];

    constructor(boardType: BoardDimension) {
        this.dimension = boardType;
    }

    calculate() {
        this.head = null;
        this.cutAllBoards();
    }

    get length(): number {
        return this.dimension.length;
    }

    get boardList(): CutBoard[] {
        this.calculate();

        let boards: CutBoard[] = [];

        if (this.head != null) {
            let current: BoardNode | null = this.head;

            while (current !== null) {
                current.items.forEach((board) => {
                    boards.push(board);
                });
                current = current.next;
            }
        }
        return boards;
    }

    setCuts(cuts: CutDimension[]) {
        this.cuts = cuts;
    }

    static expandCuts(cuts: CutInput[]): CutDimension[] {
        const expanded: CutDimension[] = [];

        cuts.forEach(({ dimensions, qty }) => {
            for (let i = 0; i < qty; i++) {
                expanded.push(dimensions);
            }
        });

        return expanded;
    }

    static fromBoardData(boardState: BoardData): CutBoard[] {
        const list = new BoardList(boardState.dimension);
        list.setCuts(BoardList.expandCuts(boardState.cuts));
        return list.boardList;
    }

    getNewboard(cutLength: CutDimension): CutBoard {
        const board = new CutBoard(this.length);
        board.cut(cutLength);
        return board;
    }

    addCut(cutLength: number, name: string, qty: number = 1) {
        for (let index = 0; index < qty; index++) {
            const cutBoard: CutDimension = { length: cutLength, name };
            this.cuts.push(cutBoard);
        }
    }

    cutAllBoards() {
        // sort all boards in reverse order
        this.cuts.sort((a, b) => b.length - a.length);
        this.cuts.forEach((cut) => {
            let previous: BoardNode | null = null;
            let current = this.head;

            // find the first node with enough remainder
            while (current !== null) {
                if (cut.length <= current.value && current.items.length > 0) {
                    const board = current.items.pop()!;
                    if (current.items.length === 0) {
                        this.removeNode(previous, current);
                    }
                    board.cut(cut);
                    this.insertBoard(board);
                    break;
                }
                previous = current;
                current = current.next;
            }

            // No matching board, create a new one.
            if (current === null) {
                const board = this.getNewboard(cut);
                this.insertBoard(board);
            }
        });
    }

    insertBoard(board: CutBoard) {
        const remainder = board.remainder;
        const newNode = new BoardNode(remainder);
        newNode.items.push(board);

        // Empty list check
        if (this.head === null) {
            this.head = newNode;
            return;
        }

        let previous: BoardNode | null = null;
        let current: BoardNode | null = this.head;

        // Find the node where the remainder fits in.
        while (current !== null && current.value < remainder) {
            previous = current;
            current = current.next;
        }

        // If the reaminder is equal, push the board
        if (current !== null && current.value === remainder) {
            current.items.push(board);
            return;
        }

        // Insert a brand new node to either the head or the tail
        newNode.next = current;
        if (previous === null) {
            this.head = newNode;
        } else {
            previous.next = newNode;
        }
    }

    removeNode(previous: BoardNode | null, nodeToRemove: BoardNode) {
        // if there is no previous item, set the head to the next node.
        if (previous === null) {
            this.head = nodeToRemove.next;
        } else {
            previous.next = nodeToRemove.next;
        }
    }
}
