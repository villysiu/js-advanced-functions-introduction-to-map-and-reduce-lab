// Your code here
let mapToNegativize = (sourceArray) => {
    return sourceArray.map(x => x * -1)
}
let mapToNoChange= (sourceArray) => {
    return sourceArray.map(x => x)
}
let mapToDouble = (sourceArray) => sourceArray.map(x=>x*2)

let mapToSquare = (sourceArray) => sourceArray.map(x => x * x)

let reduceToTotal = (sourceArray, startingPoint=0) => {
    return sourceArray.reduce(((prev, curr) => prev+curr), startingPoint)
}
let reduceToAllTrue = (sourceArray) =>{
    return sourceArray.reduce((p,c ) => !!c && !!p)
}
let reduceToAnyTrue = sourceArray => {
    return sourceArray.reduce((p,c) => !!c || !!p)
}
// test