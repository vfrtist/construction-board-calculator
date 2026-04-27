interface CutBoard {
    length: number;
    name: string;
}

export class BoardClass {
    // For storing cut lengths of a single board
    length: number;
    cuts: CutBoard[] = [];
    remainingLength: number;

    constructor(length: number) {
        this.length = length;
        this.remainingLength = length;
    }

    cut(cutBoard: CutBoard) {
        if (cutBoard.length > this.remainingLength) {
            throw new Error("Not enough remaining length to cut");
        }
        this.cuts.push(cutBoard);
        // you can add blade width by adding .125 to the cut length
        this.remainingLength -= cutBoard.length;
        this.remainingLength -= 0.125; // blade width
    }

    get cutPlan(): CutBoard[] {
        return this.cuts;
    }

    get remainder(): number {
        return this.remainingLength;
    }

    get toString(): string {
        return `Cuts: ${this.cuts}, Remaining: ${this.remainder}`;
    }
}

export class ListNode {
    next: ListNode | null = null;
    value: number;
    items: BoardClass[] = [];

    constructor(value: number) {
        this.value = value;
    }
}

export class Stockpile {
    // This is a specialized linked list
    head: ListNode | null = null;
    length: number;
    cuts: CutBoard[] = [];

    constructor(boardLength: number) {
        this.length = boardLength;
    }

    calculate() {
        this.head = null;
        this.cutAllBoards();
    }

    get boardList(): BoardClass[] {
        this.calculate();

        let boards: BoardClass[] = [];

        if (this.head != null) {
            let current: ListNode | null = this.head;

            while (current !== null) {
                current.items.forEach((board) => {
                    boards.push(board);
                });
                current = current.next;
            }
        }
        return boards;
    }

    getNewboard(cutLength: CutBoard): BoardClass {
        const board = new BoardClass(this.length);
        board.cut(cutLength);
        return board;
    }

    addCut(cutLength: number, name: string, qty: number = 1) {
        for (let index = 0; index < qty; index++) {
            const cutBoard: CutBoard = { length: cutLength, name };
            this.cuts.push(cutBoard);
        }
    }

    cutAllBoards() {
        // sort all boards in reverse order
        this.cuts.sort((a, b) => b.length - a.length);
        this.cuts.forEach((cut) => {
            let previous: ListNode | null = null;
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

    insertBoard(board: BoardClass) {
        const remainder = board.remainder;
        const newNode = new ListNode(remainder);
        newNode.items.push(board);

        // Empty list check
        if (this.head === null) {
            this.head = newNode;
            return;
        }

        let previous: ListNode | null = null;
        let current: ListNode | null = this.head;

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

        // Insert a brand new node
        newNode.next = current;
        if (previous === null) {
            this.head = newNode;
        } else {
            previous.next = newNode;
        }
    }

    removeNode(previous: ListNode | null, node: ListNode) {
        // if there is no previous item, set the head to the next node.
        if (previous === null) {
            this.head = node.next;
        } else {
            previous.next = node.next;
        }
    }
}
