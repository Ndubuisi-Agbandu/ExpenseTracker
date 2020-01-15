// This function sets the value of balance to the value of budget when the user sets the budget.
function getValueOfBudget() {
	let userBudget = parseInt(document.getElementById('budget').value);
	let userBalance = document.getElementById('balance').value = userBudget;
}


let addInputElements = document.querySelector('#add');
addInputElements.addEventListener('click', () => {
	/* Create the item field, give it an id of the default item field, give it a placeholder called Item and also the input required attribute.
		The reason for giving it the same id as the default is so that the the styles under that id will affect it.
	*/
	let userInputDiv = document.getElementById('userInput');
	let parent = document.createElement('div');
	parent.id = 'userInputChild';
	let itemInputElement = document.createElement('input');
	itemInputElement.id = 'item';
	itemInputElement.setAttribute('placeholder', 'Item');
	itemInputElement.setAttribute('required', '');
	parent.appendChild(itemInputElement);		


	/* Create the price field, give it an id of price, give it a placeholder called Price and also the input requied attribute.
	 The reason for giving it the same id as the default is so that the the styles under that id will affect it.
	*/
	let priceInputElement = document.createElement('input');
	priceInputElement.id = 'price';
	priceInputElement.setAttribute('placeholder', 'Price');
	priceInputElement.setAttribute('required', '');
	parent.appendChild(priceInputElement);


	/* Create the remove button, give it an id of remove and a class name of fa fa-close, give it a title called Remove.
	  The reason for giving it the same id as the default is so that the the styles under that id will affect it.
	 The reason for the class name fa fa-close is just font-awesome.
  */
	let removeButton = document.createElement('a');
	removeButton.id = 'remove';
	removeButton.className = 'fa fa-close';
	removeButton.setAttribute('title', 'Remove');
	parent.appendChild(removeButton);

	/* After creating the two input elements and the remove button, i appended it 
	  to a another div that called userInput which can be found in my HTML.
	*/
	userInputDiv.appendChild(parent);
	
	// What this function does is that it deletes a particular input box.
	removeButton.addEventListener('click', (e) => {
		e.target.parentNode.remove();
	});
});



// There are two input boxes that comes up on page load, so i decided to write it own separate function for deleting it.
let removeSingleElementButton = document.querySelector('#remove');
removeSingleElementButton.addEventListener('click', () => {
	let child = document.getElementById('userInputChild');
	child.remove();
});


/*
	This function is used to delete as many input box that's available and then call the getValueOfBudget function
	that reset the balance to become the value of budget and the reason for this is because, 
	as the user keeps adding new price for each item, the balance is reducing.
*/
let removeAllButton = document.querySelector('#removeAll');
removeAllButton.addEventListener('click', () => {
	let userInputDiv = document.querySelector('#userInput');
	userInputDiv.innerHTML = '';
	getValueOfBudget();
});



function showTotalAmount() {
	let firstPrice = document.getElementById('price').value;
	let totalAmount = document.getElementById('total').value = firstPrice;
}