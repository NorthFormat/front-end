import DiffMatchPatch from 'diff-match-patch'

const dmp = new DiffMatchPatch()

const differenceOnlyWithCorrections = (difference) => {
    for (let i = 0; i < difference.length; i++) {
        if (difference.at(i).at(0) === -1) {
            difference.splice(i, 1)
            i--
        }
    }
    return difference
}

export const differenceToString = (str1, str2) => {
    let difference = differenceOnlyWithCorrections(dmp.diff_main(str1, str2))
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

