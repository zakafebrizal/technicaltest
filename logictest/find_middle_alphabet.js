function middle_three(str) {
    if (str.length % 2!= 0) {
    
     mid = (str.length + 1)/2;
     return str.slice(mid - 2, mid + 1);
     }
   return str;
 }
 console.log(middle_three('QRSTU'));
 console.log(middle_three('RSTU'));
 console.log(middle_three('TUVWXYZ'));
 console.log(middle_three('QRSTUVWXYZ'));
