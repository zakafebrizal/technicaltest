let str = 'I am A Great human';

function reverseText(txt) {
    let arr = txt.split(" ");
    console.log(arr)

    let arrTemp = []
    for (var i = 0; i < arr.length; i++){
        let arrRev = arr[i].split("").reverse()
        arrTemp.push(arrRev)
    }

    let arrTemp2 = []
    for(i = 0; i < arrTemp.length; i++){
        let partArr = arrTemp[i]
        if (partArr[4] != undefined) {
            partArr[4] = partArr[4].toLowerCase()
            partArr[0] = partArr[0].toUpperCase()
        }
        arrTemp2.push(partArr)
    }
    arrTemp2.forEach((part) => console.log(part.join("")))
}

reverseText(str)