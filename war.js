class Card {
    constructor(suit,rank,score) {
    this.suit = suit,
    this.rank = rank,
    this.score = score
}
}
class Deck {
   constructor(){
       this.cards = [];
   }
 createDeck() {
       let suits = ["clubs","diamonds","hearts","spades"];
       let scores = [1,2,3,4,5,6,7,8,9,10,11,12,13];
       let ranks = ["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"];
       for (let i=0;i < suits.length; i++){ // 
           for (let j = 0;j < ranks.length;j++) {
               this.cards.push(new Card(suits[i],ranks[j], scores[j])); //
           }
       }
   }
       shuffle() {
           let num,num2,num3;
           for (let i = 0; i < 1000; i++) {
               num = Math.floor((Math.random() * this.cards.length));
               num2 = Math.floor((Math.random() * this.cards.length));
               num3 = this.cards[num];
               this.cards[num] = this.cards[num2];
               this.cards[num2] = num3;
           }
       }
}
var player1 = {
    name: "Player1",
    card: [],
    totalCards: 0,//The player's actual total
}

var player2 = {
    name: "Player2",
    card: [],
    totalCards: 0, //The player's actual total
}


function splitCards (){
    const newDeck = new Deck();
newDeck.createDeck();
newDeck.shuffle();
   // giving player 26 cards from newDeck
  // console.log(player1.card.length)
  player1.card = newDeck.cards.splice(0,26)
  player2.card =newDeck.cards          // giving player 2 the rest of the newDeck cards
// console.log(player2.card.length)



// Drawing function:
// const draw = newDeck.cards.pop()
// console.log(newDeck.cards.pop()) 

 console.log("Welcome to War!"); 


}


function playGame(){ 
  // console.log(player2.card)
  // console.log(player1.card[0]) //We are accessing the first card from player 1's array
  // console.log(player2.card[0])//We are accessing the first card from player 2's array

  //Each card is an object Suit, Rank score
  //Player card is an array holding card objects
console.log(player1.card[0].score)
console.log(player2.card[0].score)
//Conditional to see if player one has a higher card
if (player1.card[0].score > player2.card[0].score) {
  
  //player 2's card (player2.card[0]) and put it to the back of player 1's deck (player1.card)
  console.log("player 1 is winning")
  player1.totalCards += player2.card[0].score + player1.card[0].score
  console.log (`Player one's score ${player1.totalCards}`)
  //player1.card == groceryBag
  var player1oldCard = player1.card.shift() //removes player 1 card and named it player1oldCard
  player1.card.push(player1oldCard); //adding player 1's old card to the back
  //unshifting of player 2's deck
var player2oldCard = player2.card.shift() //going to player 2's deck and taking the first card, and naming it player2oldCard
  player1.card.push(player2oldCard)
  console.log("player 2 cards left:")
 console.log(player1.card.length)




}
else if(player2.card[0].score > player1.card[0].score) {
  //take player 1 card move it to the back of player 2's deck
  //player 2's card and put it to the back of player 2's deck
  console.log("player 2 is winning")
  player2.totalCards += player1.card[0].score + player2.card[0].score 
  console.log (`Player one's score ${player2.totalCards}`)
  var player2oldCard = player2.card.shift()
  player2.card.push(player2oldCard);
  var player1oldCard = player1.card.shift()
  player2.card.push(player1oldCard)
  console.log("player 2 cards left:")
 console.log(player2.card.length)




  

}else {console.log("This means WAR!")
}






//End of Play function
}


var groceryBag = []
var fruits = ["grapefruit", "Banana", "Orange", "Apple", "Mango"];
var x = fruits.shift();    // the value of x is "Banana"
groceryBag.push(x)
// then we need to draw cards from each playerx = fruits.shift();    // the value of x is "Banana"
console.log(x)
groceryBag.push(x)
console.log(groceryBag)
console.log(fruits)

//WORKING:


// loop through the length of cards 

// if player does not have enough cards, the player loses/forfeits. 
// the highest ranked card wr will lose.
//The other player collects all 52 and wins!
// Keep looping until one player has no cards (player1 or player2.length == 0)


//DONE:
// Player One need 26 cards
// Player Two needs 26 cards
// then we need to draw cards from each player


// Notes:



splitCards() //to split cards and give player cards
playGame()