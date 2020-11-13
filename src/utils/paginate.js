export const paginate = (datas) => {
    var result = []
    var slice = []
    for (var i = 0; i < datas.length; i++) {
        slice.push(datas[i])
        if ((i + 1) % 6 === 0) {
            result.push(slice)
            slice = []
        }
    }
    result.push(slice)
    return result
}