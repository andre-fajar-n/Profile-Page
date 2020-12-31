export const sortArrayOfObject = (arr) => {
    return arr.sort((a, b) => (a.y > b.y) ? -1 : (a.y === b.y) ? ((a.label > b.label) ? 1 : -1) : 1)
}

export const sortObjectByValueAndCreateArray = (obj) => {
    const sortable = Object.entries(obj).sort(([, a], [, b]) => b - a).reduce((r, [k, v]) => ({ ...r, [k]: v }), {})
    var label = []
    var data = []
    for (var key in sortable) {
        if (sortable[key] === 0) {
            break
        }
        label.push(key)
        data.push(sortable[key])
    }

    return {
        label,
        data
    }
}