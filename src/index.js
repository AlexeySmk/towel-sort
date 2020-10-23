// You should implement your task here.

module.exports = function towelSort(matrix) {
    let array = [];
    if (!matrix) {
        return array;
    }
    for (let i = 0; i < matrix.length; i++) {

        if (i !== 0 && i % 2 === 1) {
            let rev = matrix[i].reverse();
            for (let j = 0; j < matrix[i].length; j++) {
                array.push(rev[j]);
            }

        } else {

            for (let j = 0; j < matrix[i].length; j++) {
                array.push(matrix[i][j]);
            }

        }


    }
    return array;
}