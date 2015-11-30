function card(name, suit, value)
 {
	this.name=name;
	this.suit=suit;
	this.value=value;
}


function deck() 
{
	this.names=["A", "2","3","4","5","6","7", "8","9","10","J","Q","K"];
	this.suits=["Spades", "Hearts","Diamonds","Clubs"];
	var cards = [];

for (var n=0; n<this.names.length; n++){
	for (var s=0; s<this.suits.length; s++) {
		cards.push(new card( this.names[n], this.suits[s], n+1 ));
		}
			
	}

	return cards; 
}


function player(number, hand) {
	this.number=number;
	this.hand=hand;
}

function deal (){
	var hand=[]

	//I know that I need to pop a card from the deck and push it into the hand array. 
	//I need help writing the method for this...I know that I need a counter to keep track of the cards in the deck...


}

function drawCard() {

//need to write a method that allows a player to draw a card.


}








	

