var myarray = [ "hello", "w" , 97865, true];
console.log(myarray[2]);
for (var i=  0 ; i< myarray.length;i++) {
    console.log(myarray[i]);
}

var sumarray = [ "jacob", "daniel" , "rebeca", "micheal", "sam"];
console.log(sumarray)
console.log(sumarray[2])
for ( var i=0;i<sumarray.length;i++){
    console.log(sumarray[i]);
}
 var numbersarray=[110,307,320,400,500,670,900];
 console.log(numbersarray[3]);
 for (var i=0;i<numbersarray.length; i++){
     console.log(numbersarray[i]);
 }

 var array=[10,11,23,25,30,32,37,40,46,50];
 var temparray=[];
 var tempindex=0;

 console.log(array)
 for (var i=0;i<=array.length;i++){
    if (array[i]%2==0){
        temparray[tempindex++]=array[i]
        console.log(temparray[1])
        // console.log(array[i])
    }
 }

 var myarray=["hello", 2,"world","jacob",6,7,"bye",98];
 console.log(myarray);
 for (i=0;i<myarray.length;i++){
    if(myarray[i]*1 !=myarray[i]){
       console.log(myarray[i]);
    }
 }

 var printarray=[]
 printarray.push(9)
 console.log(printarray)

 var numbersarray=[]
 for (var i=0;i<10;i++){
    numbersarray.push(i)
 }
 console.log(numbersarray)

 var printarray=[]
 for (var i=0;i<=30;i++){
     if(i%2==0){

         printarray.push(i)
     }
 }
 console.log(printarray)
 


