// Code your solution here
function findMatching(drivers,name){
    return drivers.filter((driver)=>driver.toLowerCase()===name.toLowerCase())
}

function fuzzyMatch(drivers,letters){
    return drivers.filter((name=>name.slice(0, name.length / 2).includes(letters,0)))

}

function matchName(drivers,name){
    return drivers.filter((driver=>driver.name===name))
}
