// For maximum efficiency it would be best to
// cut all planks in order from longest to shortest
// and when checking the remainders checking shortest to longest.

class Board {
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

    get remainder() { return this.remainingLength }
}

class ListNode {
    next: ListNode | null = null;
    value: number | null = null;
    items: Board[] = [];

    constructor(value: number | null = null) {
        this.value = value;
    }
}

class Stockpile {
    // This is a specialized linked list
    head: ListNode = new ListNode();
    length: number;

    constructor(length: number) {
        this.length = length;
    }

    addCut(newCut: number) {
        let pointer = this.head;

        do {
            // newCut is less than or equal to the remainder value
            if (newCut <= pointer.value!) {
                const cutBoard: Board = pointer.items.pop()!;
                cutBoard.cut(newCut);
                if (pointer.items.length === 0) {
                    this.popNode(pointer);
                }
                this.sortBoard(cutBoard);
                return;
            }
        } while (pointer.next !== null)

        // no unused board existed, so we append one to the end of the list
        const newNode = new ListNode(this.length);
        const cutBoard: Board = new Board(this.length);
        cutBoard.cut(newCut);
        newNode.items.push(cutBoard);
        pointer.next = newNode;
    }

    sortBoard(board: Board) {
        let pointer = this.head;
        do {
            if (board.remainder == pointer.value) {
                pointer.items.push(board);
                return;
            }
            else if (board.remainder < pointer.value!) {
                const newNode = new ListNode(board.remainder);
                newNode.items.push(board);
                newNode.next = pointer;
                pointer = newNode;
                return;
            }
        } while (pointer.next !== null)
    }

    popNode(node: ListNode) {
        // if node is head, set head to node.next
        // If node is not head, find the previous node and set its next to node.next
        // If the last node, set the previous node's next to null
    }
}

export function calculateCutPlan(cutLengths: number[]): void {
    // 1) Sort cut lengths in decending order 
    // cutLengths.sort((a, b) => b - a);

    // 2) Create the array of cut boards
    const results: Board[] = [];

    // for (const cutLength of cutLengths) {
    //     // 3) Try to fit the cut on an existing board
    //     let fitted = false;
    //     for (const board of results) {
    //         if (cutLength <= board.remainder) {
    //             board.cut(cutLength);
    //             fitted = true;
    //             break;
    //         }
    //     }
    //     // 4) If no existing board can accommodate the cut, create a new one
    //     if (!fitted) {
    //         const newBoard = new Board(96);
    //         newBoard.cut(cutLength);
    //         results.push(newBoard);
    //     }
    // }
}