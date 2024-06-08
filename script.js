/*write a program to write&print elmts.
var arr=["player1","3","cricket","Student"]
for(var i=0;i<arr.length;i++){
  console.log(arr[i]);
}
console.log("your Array is",arr);
___________________________________________________________________________________________*/

/*write a program to print negative elmnts
//of array...
var arr=["-1","-3","Alphabet","7","-5"];
console.log("Your array is",arr);
for(var i=0;i<arr.length;i++){
  if(arr[i]<0){
    console.log("-ve element",arr[i]);
  }
}

____________________________________________________________________________________________*/

/*write a program to print sum of all elements array...


var arr=[4,5,6,-7,-8,10];
var sum=0;
for(var i=0;i<arr.length;i++){
  sum=sum+arr[i];
  }
console.log("sum of all elemets is",sum);

_____________________________________________________________________________________________*/

/*write a program to finf maximum or minimum number...


var arr=[15,20,25,45,30,29];
console.log("Your array is",arr);
var max=arr[0];
var min=arr[0];
for(var i=0;i<arr.length;i++){
  if(arr[i]>max){
    max=arr[i];
    
  }
}
for(var i=0;i<arr.length;i++){
  if(arr[i]<min){
    min=arr[i];
    
  }
}
console.log("Max num is",max);
console.log("Min num is",min);
_______________________________________________________________________________________*/

/*Write a program to finf second largest element of an array....

var arr=[65,78,83,67,70,95,90,87];
console.log("Your array is",arr);
console.log("Your sorted array is",arr.sort());
console.log("Second largest elements is",arr.sort()[arr.length-2]);


___________________________________________________________________________________________*/

/*Write a program to count total number of even and odd in an array...

var arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,20];
console.log("Your array is",arr);
var Evencount=0;
var Oddcount=0;
for(var index=0;index<arr.length;index++){
  if(arr[index]%2==0){
    Evencount++;
  }
  
}
for(var i=0;i<arr.length;i++){
  if(arr[i]%2!=0){
    Oddcount++;
  }
  
}
console.log("Total number of ODD in Array",Oddcount);
console.log("Total number of Even in Array",Evencount);

______________________________________________________________________________________________*/


/*Write a program to find total number of nwegative elements in an array...

var arr=[1,2,3,4,5,-1,-2,-3,-4,-5,-6,-7,-8,9,10,-9,-10,101,-20];
console.log("Your array is",arr);
var negative_count=0;
for(var index=0;index<arr.length;index++){
  if(arr[index]<0){
    negative_count++;
  }
}
  console.log("Total negative numbers in this array:",negative_count);

_________________________________________________________________________________________________*/

/*Write a program to copy all elements of an array to another array...

var arr=[1,2,3,4,5,6,7,8,9,"NAME","Rollno"];
console.log("Your array is",arr);
console.log("-------------------------------------------------------------------");
var newarr=arr.slice();
console.log("New array is",newarr);

____________________________________________________________________________________________________*/

/*Write a program to insert an elemnt in an array....

var array=["Cricket","Hockey","Bedminton","Vollyball","Table Tennis"];
console.log("Your array is",array);
array.push("Football");
console.log("Youtr new array is",array);

_____________________________________________________________________________________________________*/

/*Write a program to delete an element from an array from a specified place...

var array=["Cricket","Hockey","Bedminton","Vollyball","Table Tennis"];
console.log("Your array is",array);
array.splice(2,0,"Football","Horse Riding");
//NOW TWO ELEMENTS FOOTBALL AND HORSE RIDING ARE INSERTED AT THE SECOND INDEX=BEDMINTON IN THE GIVEN ARRAY...
console.log("Your new array is",array);
_____________________________________________________________________________________________________*/


/*Write a program to count frequency of each element in an array...

var array=[1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,4,5,4];
var frequency={};

for(var i=0;i<array.length;i++){
  var element=array[i];
  if(frequency[element]!=undefined){
     frequency[element]++;
  }
  else{
    frequency[element]=1;
  }
}
console.log("Frequency",frequency);

____________________________________________________________________________________________________*/

/*Write a program to find all uniqe elements in an array...

var array=[1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,4,5,4];

var array=new Set (array);
var uniqeelements=array;
console.log("UNIQUE ELEMENTS IN ARRAY ARE",uniqeelements);

____________________________________________________________________________________________________*/

/*Write a program to find reverse of an array...

var array=[1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,4,5,4];
console.log("Your current array is:",array);
console.log("------------------------------------");
console.log("Reverse array is:",array.reverse());

_______________________________________________________________________________________________________*/

/*Write a program to search an element in an array...
var array=[1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,4,5,4];
var key=6;
var found=false;
for(var i=0;i<array.length;i++){
  if(array[i]==key){
    console.log("Your key",key,"is found at",i);
    found=true;
    break;
  }
}
  if(!found){
    console.log("Youe key is not found in array");
 }
_________________________________________________________________________________________________________*/

/*write a program that sorts an array in asending and disanding order...


var array=[1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,4,5,4];
console.log("Your array is:",array)
console.log("Your asending order array is",array.sort((a,b)=>a-b));
console.log("Your disending order array is",array.sort((a,b)=>b-a));

_______________________________________________________________________________________________________*/

/*Write a program to merge two arrays in a third array...
function mergedarray(array1,array2){
return[...array1,...array2]}
var array1=["Hockey","Cricket","Football"];
var array2=["Badminton","Table tennis","Soccer"]

var array3=mergedarray(array1,array2);

console.log ("Merged array is",array3);
__________________________________________________________________________________________________*/

/*write a program that put even and odd elements of an araay in a aeparate array


var array=[1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,4,5,4];
var evenarray=[];
var oddarray=[];
for(var i=0;i<array.length;i++){
  if(array[i]%2==0){
    evenarray.push(array[i])
  }
  else{
    oddarray.push(array[i])
  }
}
console.log("Array of even elements is",evenarray);
console.log("Array of odd elements is",oddarray);

___________________________________________________________________________________________________*/

/*Write a program that rotate right the values of array...

var array=[1,2,3,4,5,6,7,8];
console.log("Your current array is",array);
var numbersrotate=4;
for(var i=0;i<=numbersrotate;i++){
  array.unshift(array.pop());
  console.log(array);
  
}
__________________________________________________________________________________________________*/

/*write a program to rotate left array elements...*/

var array=[1,2,3,4,5,6,7,8];
console.log("Your current array is",array);
var numofrotations=4;
for(var i=0;i<numofrotations;i++){
  array.push(array.shift());
  console.log("After rotation",array);
}
