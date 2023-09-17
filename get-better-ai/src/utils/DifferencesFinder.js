import DiffMatchPatch from 'diff-match-patch'

export const dmp = new DiffMatchPatch()
export const differenceToPrettyHtml = (difference) => dmp.diff_prettyHtml(difference)
export const difference = (str1, str2) => dmp.diff_main(str1, str2)
export const differenceOnlyWithCorrections = (difference) => {
    for (let i = 0; i < difference.length; i++) {
        if (difference.at(i).at(0) === -1) {
            difference.splice(i, 1)
            i--
        }
    }
    return difference
}
export const differenceToString = (difference) => {
    let differenceString = ''
    for (let i = 0; i < difference.length; i++) {
        if (difference.at(i).at(0) === 1) {
            differenceString += `<corrected>${difference.at(i).at(1)}</corrected>`
        } else {
            differenceString += difference.at(i).at(1)
        }
    }
    return differenceString
}