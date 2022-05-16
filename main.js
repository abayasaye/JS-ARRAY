// var myarray = [ "hello", "w" , 97865, true];
// console.log(myarray[2]);
// for (var i=  0 ; i< myarray.length;i++) {
//     console.log(myarray[i]);
// }

// var sumarray = [ "jacob", "daniel" , "rebeca", "micheal", "sam"];
// console.log(sumarray)
// console.log(sumarray[2])
// for ( var i=0;i<sumarray.length;i++){
//     console.log(sumarray[i]);
// }
//  var numbersarray=[110,307,320,400,500,670,900];
//  console.log(numbersarray[3]);
//  for (var i=0;i<numbersarray.length; i++){
//      console.log(numbersarray[i]);
//  }

//  var array=[10,11,23,25,30,32,37,40,46,50];
//  var temparray=[];
//  var tempindex=0;

//  console.log(array)
//  for (var i=0;i<=array.length;i++){
//     if (array[i]%2==0){
//         temparray[tempindex++]=array[i]
//         console.log(temparray[1])
//         // console.log(array[i])
//     }
//  }


//  var myarray=["hello", 2,"world","jacob",6,7,"bye",98];
//  console.log(myarray);
//  for (i=0;i<myarray.length;i++){
//     if(myarray[i]*1 !=myarray[i]){
//        console.log(myarray[i]);
//     }
//  }

 
//  var printarray=[]
//  printarray.push(9)
//  console.log(printarray)

//  var numbersarray=[]
//  for (var i=0;i<10;i++){
//     numbersarray.push(i)
//  }
//  console.log(numbersarray)

//  var printarray=[]
//  for (var i=0;i<=30;i++){
//      if(i%2==0){

//          printarray.push(i)
// //      }
// //  }
// // //  console.log(printarray)

// var sumarray =[5,3,7,8,11];
// var sum=0;
// for(var i=0; i<sumarray.length;i++){
//     console.log(sumarray[i]);
//     sum +=sumarray[i];
// }
// console.log(sum);

// // var namesarray=["abayneh","daniel","or","chen","lior"]
// // for(var i=0;i<namesarray.length;i++){
// //     console.log(namesarray[i]);

// // }
// // function Numbers(num,array){
// //     for (var i=0 ;i<array.length;i++) {
// //         if (num==array[i]){
    
// //             return true
// //         }
// //     }
// //     return false

// // }
// // console.log(Numbers(8,[6,9,8,2]))


// // function myarray(arrayNum){
// //     var save=0
// //     for (var i=0; i<arrayNum.length;i++){
// //         if(arrayNum[i]%2==0){
// //             save++;
// //         }
// //     }
// //     console.log(save);
// // }
// // // myarray([4,5,7,8,10,12]);

// // function array(array1,array2){
// // if (array1.length == array2.length){

// //     return console.log(true);
// // }
// // return console.log (false);

// // }


// // array([5,4,7,9],[2,10,8,6,11]);

// function myFunc(arrayA){
//     var maxArray = 0;
//     for (var i=0 ;i<arrayA.length;i++){
//         if (arrayA[i]>maxArray){
//             maxArray=arrayA[i];
//         }
//     }
//     return maxArray;
// }
// console.log(myFunc([4,5,8,9]));


// var arrayOrder = [23,88,90,11,43,22]   
// for (var i=0 ; i<arrayOrder.length-1;i++){
//     if(arrayOrder[i]>arrayOrder[i+1]){
//         arrayOrder.unshift(arrayOrder.splice(i+1,1)[0])
//         i=-1;
//     }
 
// }
// console.log(arrayOrder)

// function minArrays(arrayMin){
//     var min = arrayMin[0];
//     var minIndex =0;
//     for(var i=0;i<arrayMin.length;i++){
//         if(min>arrayMin[i]){
//             min=arrayMin[i];
//             minIndex = i;
//         }
//     }
//     return minIndex;
// }
//  console.log(minArrays([56,5,22,10,3]))

// function sumrray(sumArray){
//          var sum=0
//     for (var i=0; i<sumArray.length;i++){
//         sum+=sumArray[i]
//     }
    
//     console.log(sum)
// }
// sumrray([12,34,1,20,7,5])


// var maxMinNumbers=[50,4,12,23,33]
// function arrayNumbers(x){
//     var max=x[0]
//     var min=x[0]
//     for (var i=0; i<x.length; i++){
//         if (max<x[i]){
//             max=x[i]
//         }
       
//         if(min>x[i]){
//         min=x[i]
//     }
    
// }
// return max*min
    
// }
// console.log (arrayNumbers(maxMinNumbers))


// var evenArray=[34,22,11,44,3,7,8]
// var num=evenArray[0]
// for(var i=0 ; i<evenArray.length;i++){
//     if (evenArray[i]%2==0){
//         if (num<evenArray[i]){
//             num=evenArray[i]
//             var index=i;
//         }
//     }

// }

// console.log(num,index)

// var oddNumbers=[1,23,12,44,3,59]
// var oddSum=0
// for (var i=0 ; i<oddNumbers.length;i++){
//     if(oddNumbers[i]%2==1){
//        oddSum +=oddNumbers[i]
//     }
// }
// // console.log(oddSum)

// function namesFun(namesArray,namesA){
//     namesArray.push(namesA)
//     return namesArray;
// }

// console.log(namesFun(["dan","smith","or","daniel","znavo"],"eldad "))

// // function mailarray(arrayMail,emailA){
// //     arrayMail.unshift(emailA)
// //     return arrayMail;
// // }
// // console.log(mailarray (["ada@gmail.com","ssaa@gmail.com","bbaa@gmail.com","men@gmail.com"],"eway@gmail.com"))

// function arrayNumsf(numbersArrays,numsArray){
//      for (i=0; i<numbersArrays.length; i++){
//          if(numsArray%2==0){
//              numbersArrays.unshift(numsArray)
//              return numbersArrays;
//             }
//             numbersArrays.push(numsArray)
//             return numbersArrays;
//      }
// }
// console.log(arrayNumsf([23,12,20,41,7,8],11))

// function arr(arraySp,arrayS) {
//     for (var i=0; i<arraySp; i++) {
//         if (arrayS==arraySp[i]) {
//             arraySp.splice(arrayS);
//             return  arraySp;
//         }
//         arraySp.push(arrayS);
//         return arraySp;
//     }
// }
// console.log(arr([24,4,12,33,11,6],24))

// function numbersAA (numbersArrayy,num){
// for (var i=0;i<numbersArrayy.length;i++ ){
//     if(num>numbersArrayy[i]){
    
//     }
//     numbersArrayy.push(num);


// }
// }
// numbersAA([3,44,1,23,31],88)



// function myArray(maxMinArray){
//     var maxarray=0;
//     var minarray=maxMinArray[0];
//     for (i=0; i<maxMinArray.length;i++){
//         if(maxarray<maxMinArray[i]){
//             maxarray=maxMinArray[i]
            
//         }

//         if(minarray>maxMinArray[i]){
//             minarray=maxMinArray[i]
//         }
//     }
//     console.log (maxarray*minarray);
    
// }
// myArray([4,8,20,11])

