// Write your solution here


 const cats = ["Milo", "Otis", "Garfield"];
console.log(cats);



function destructivelyAppendCat(name){
   cats.push(name);
   console.log(cats);

}
 //destructivelyAppendCat();
 


function destructivelyPrependCat(name){
    cats.pop();
    cats.unshift(name);
    console.log(cats);    
}
//can use more than one array method(s) in a function 
//destructivelyPrependCat();
function destructivelyRemoveLastCat(){
    cats.shift();
    cats.pop();
    console.log(cats);
}
//destructivelyRemoveLastCat();  // this is how to call a function

function destructivelyRemoveFirstCat(){
    cats.push("Garfield");
    cats.shift();

}

function appendCat(name){
     cats.unshift("Milo");
     let newCats = [...cats, name];
     console.log(newCats);
     return newCats;

}
function prependCat(name){

   /*let newCats = [name,...cats];
    console.log(newCats);*/
    return [name,...cats];
}
function removeLastCat(){ 
   /* let newCats = cats.slice(0,2)
    return newCats;*/
    return cats.slice(0,2);  //we can return using this simple method because we are not using it for another purpose
}
    function removeFirstCat(){

       /* let newCats = cats.slice(1);
        return newCats;*/
       return cats.slice(1);
    }
 








   

   

