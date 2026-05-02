import { BoardDimension } from "../Utility/calculator";
import { BoardDictionary } from "./SessionContext";

export const NoahList: BoardDictionary = {
    [crypto.randomUUID()]: {
        dimension: new BoardDimension(96, 2, 4, "Two by Four"),
        cuts: [
            { dimensions: { length: 93, name: "" }, qty: 6 },
            { dimensions: { length: 48, name: "" }, qty: 6 },
            { dimensions: { length: 72, name: "" }, qty: 14 },
            { dimensions: { length: 45, name: "" }, qty: 11 },
            { dimensions: { length: 17, name: "" }, qty: 6 },
            { dimensions: { length: 24, name: "" }, qty: 4 },
            { dimensions: { length: 9, name: "" }, qty: 7 },
            { dimensions: { length: 21, name: "" }, qty: 16 },
            { dimensions: { length: 4, name: "" }, qty: 11 },
            { dimensions: { length: 40.5, name: "" }, qty: 4 },
            { dimensions: { length: 79, name: "" }, qty: 1 },
            { dimensions: { length: 39.5, name: "" }, qty: 2 },
            { dimensions: { length: 20, name: "" }, qty: 6 },
        ],
    },

    [crypto.randomUUID()]: {
        dimension: new BoardDimension(144, 1, 6, "One by Six Long"),
        cuts: [
            { dimensions: { length: 144, name: "Porch Roof Front Trim" }, qty: 1 },
            { dimensions: { length: 72, name: "Roof Base Trim" }, qty: 1 },
            { dimensions: { length: 36, name: "Upper Wall Base Trim" }, qty: 2 },
        ],
    },

    [crypto.randomUUID()]: {
        dimension: new BoardDimension(96, 1, 6, "One by Six Short"),
        cuts: [
            { dimensions: { length: 28.5, name: "Porch Roof Side Trim" }, qty: 2 },
        ],
    },

    [crypto.randomUUID()]: {
        dimension: new BoardDimension(70, 0.5, 4, "Half by Four"),
        cuts: [{ dimensions: { length: 25, name: "Floor Board" }, qty: 40 }],
    },

    [crypto.randomUUID()]: {
        dimension: new BoardDimension(96, 4, 4, "Four by Four"),
        cuts: [{ dimensions: { length: 90, name: "Porch Supports" }, qty: 4 }],
    },

    [crypto.randomUUID()]: {
        dimension: new BoardDimension(96, 1, 4, "One by Four"),
        cuts: [
            { dimensions: { length: 25.25, name: "Upper Wall Side Trim" }, qty: 2 },
            { dimensions: { length: 77.5, name: "Lower Wall Side Trim" }, qty: 2 },
        ],
    },

    [crypto.randomUUID()]: {
        dimension: new BoardDimension(96, 1, 3, "One by Three"),
        cuts: [
            { dimensions: { length: 29, name: "Window Trim Rails" }, qty: 4 },
            { dimensions: { length: 36, name: "Window Trim Stiles" }, qty: 4 },
            { dimensions: { length: 31, name: "Window Sills" }, qty: 2 },
            { dimensions: { length: 48, name: "Door Rail" }, qty: 1 },
            { dimensions: { length: 71.5, name: "Door Stiles" }, qty: 2 },
        ],
    },

    [crypto.randomUUID()]: {
        dimension: new BoardDimension(72, 0.25, 0.5, "Battens"),
        cuts: [
            { dimensions: { length: 25.25, name: "Upper Wall Short" }, qty: 2 },
            { dimensions: { length: 37.125, name: "Upper Wall Long" }, qty: 3 },
            { dimensions: { length: 16.25, name: "Above Window" }, qty: 2 },
            { dimensions: { length: 19.5, name: "Below Window" }, qty: 2 },
            { dimensions: { length: 3.5, name: "Above Door" }, qty: 3 },
        ],
    },
};
