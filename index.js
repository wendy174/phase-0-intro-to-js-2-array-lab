// Write your solution here!
const cats = ['Milo','Otis', 'Garfield']

function destructivelyAppendCat(name) {
    cats.push(name)
}

function destructivelyPrependCat(name) { 
    cats.unshift(name)
}

function destructivelyRemoveLastCat(name) { 
    cats.pop(name)
}

function destructivelyRemoveFirstCat(name) { 
    cats.shift(name)
}

function appendCat(name) {
    const allCats = [...cats,name]
    return(allCats)
}

function prependCat(name) { 
    const moreCats = [name,...cats]
    return(moreCats)
}

function removeLastCat() { 
    return(cats.slice(0,-1))
}

function removeFirstCat() {
    return(cats.slice(1))
}