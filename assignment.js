
function feetToMile( feet){
    var maile  = feet / 5280;
    return maile;
}
var result = feetToMile(5000);

//woodCalculator

function woodCalculator(chear, table, bed){
    var chearCount = chear *1;
    var tableCount = table *2;
    var bedCount = bed *3;
    
    var totalWood= chearCount+tableCount+bedCount;

    return totalWood;

}
var resultWood = woodCalculator(4,2,2);



//brickCalculator
function brickCalculator( bulding){
  if(bulding >0 && bulding<=10){
    var TotalNumberBrack = 0;

    TotalNumberBrack = bulding *15 *1000;
    return TotalNumberBrack
  }
  else if(bulding> 10 && bulding<=20){
    TotalNumberBrack =(10 * 15)+(bulding =10 *12 * 1000);
    return TotalNumberBrack;
  }else{
    TotalNumberBrack = (10*15*1000)+((bulding=10)*10*1000);
  }
   
}

//tinyFriend

function tinyFriend() {
  let myFriends = ["morshad", "khan", "rohman", "jahid"]
  let smallestFridend = myFriends[0];
  for (i = 0; i < myFriends.length; i++) {
      if (myFriends[i] < smallestFridend) {
          smallestFridend = myFriends[i];
      }
  }
  return smallestFridend   
}

