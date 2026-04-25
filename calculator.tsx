export class Board {
    // For storing cut lengths of a single board
    length: number;
    cuts: number[] = [];
    remainingLength: number;

    constructor(length: number) {
        this.length = length;
        this.remainingLength = length;
    }

    cut(cutLength: number) {
        if (cutLength > this.remainingLength) {
            throw new Error("Not enough remaining length to cut");
        }
        this.cuts.push(cutLength);
        this.remainingLength -= cutLength;
    }

    get cutPlan(): number[] {
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
    items: Board[] = [];

    constructor(value: number) {
        this.value = value;
    }
}

export class Stockpile {
    // This is a specialized linked list
    head: ListNode | null = null;
    length: number;

    constructor(boardLength: number) {
        this.length = boardLength;
    }

    getNewboard(cutLength: number): Board {
        const board = new Board(this.length);
        board.cut(cutLength);
        return board;
    }

    addCut(cutLength: number, qty: number = 1) {
        for (let index = 0; index < qty; index++) {
            let previous: ListNode | null = null;
            let current = this.head;

            // find the first node with enough remainder
            while (current !== null) {
                if (cutLength <= current.value && current.items.length > 0) {
                    const board = current.items.pop()!;
                    if (current.items.length === 0) {
                        this.removeNode(previous, current);
                    }
                    board.cut(cutLength);
                    this.insertBoard(board);
                    break;
                }
                previous = current;
                current = current.next;
            }

            // No matching board, create a new one.
            if (current === null) {
                const board = this.getNewboard(cutLength);
                this.insertBoard(board);
            }
        }
    }

    insertBoard(board: Board) {
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

    get boardList(): string[] {
        const boards: string[] = [];
        let current = this.head;

        while (current !== null) {
            current.items.forEach((board) => {
                boards.push(board.toString);
            });
            current = current.next;
        }

        return boards;
    }
}
