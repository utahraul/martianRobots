var verifyMarsSize = function (marsSize) {
    const gridMaxWidth = marsSize[0];
    const gridMaxHeight = marsSize[1];

    if (gridMaxWidth > 50 || gridMaxWidth < 0 || gridMaxHeight > 50 || gridMaxHeight < 0) {
        throw new Error('Incorrect upper-right coordinates');
    }
    return;
}

module.exports = verifyMarsSize;