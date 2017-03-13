import { toArray } from './toArray.js'

export const toArraySpread = (...items) => {
    let array = [];
    for(let item of items) {
        array = array.concat(toArray(item))
    }
    return array;
}

export default toArraySpread;