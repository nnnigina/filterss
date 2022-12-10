let aboutMe = {
    externalData: {
        hairColor: 'lightbrown',
        eyeColor: 'darkgreen',
        growth: 176,
        gemder: 'female'
    },
        data: {
        name: 'Nigina',
        surname: 'Aslamova',
        birthday: 10.2005,
        zodiacSign: 'scales',
        isMarried: 'false'
    },
    favBooks: ['Poor dad, rich dad', 'The subconscious can do anything',
                'Samurai without a sword',
                'The subconscious can do anything',
                'Personal brand']
}

let newAssigned = Object.assign({}, aboutMe.externalData, aboutMe.data)
let keys = Object.keys(newAssigned)
let vals = Object.values(newAssigned)
let both = keys + vals


let types = {
    string: [],
    number: [],
    object: [],
    boolean: []
}

console.log(types);
console.log(keys, vals,);
console.log(both);