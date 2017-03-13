export const toArray = (item) => {
    if (item) {
        if (Array.isArray(item)) {
            return item;
        }

        return [item];
    }

    return [];
}

export default toArray;