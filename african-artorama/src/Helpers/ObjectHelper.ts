export const ObjectHelper = {
    CopyAllProperties(copyFrom, copyTo) {
        for (const property in copyFrom) {
            copyTo[property] = copyFrom[property];
        }
    }
};
