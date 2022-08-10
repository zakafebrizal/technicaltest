function maxRedigit(num){
    if(Number.isInteger(num) == true && num.length == 3 ){
        return null
    }else{
        let numArray = String(num).split("").map((num) => {
            return Number(num)
        })
    
        let biggestSort = numArray.sort((a, b) => b-a)
    
        let joinArray = biggestSort.join('')
        console.log(joinArray)
    }
}

// maxRedigit(123)
// maxRedigit(231)
// maxRedigit(321)
// maxRedigit(-1)
// maxRedigit(0)
// maxRedigit(1000)