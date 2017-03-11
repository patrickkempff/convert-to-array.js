export const toArray = (item) => {
    if (item) {
        if (Array.isArray(item)) {
            return item;
        }

        return [item];
    }

    return [];
}

export const toArraySpread = (...items) => {
    let array = [];
    for(let item of items) {
        array = array.concat(toArray(item))
    }
    return array;
}

export default toArray;