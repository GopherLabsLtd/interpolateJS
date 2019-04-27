export const get = (obj, index) => {
    if (index === -1) {
        return obj[obj.length - 1];
    } else if (index === obj.length) {
        return obj[0];
    }

    return obj[index];
};

export const evaluateFunc = func => {
    if (typeof func === "function") return func();

    return func;
};