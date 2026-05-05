function* arrayReducer<T>(input: T[]): Generator<[number, T]> {
    if (input.length === 0) {
        return;
    }
    if (input.length === 1) {
        yield [0, input[0]];
        return;
    }
    let left = input[0];
    let count = 1;
    for (let index = 1; index < input.length; index++) {
        let right = input[index];
        if (right === left) {
            count++;
        } else {
            yield [count, left];
            left = right;
            count = 1;
        }
    }
    yield [count, left];
}