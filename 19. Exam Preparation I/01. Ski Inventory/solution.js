function solve() {
    let itemInput = document.querySelectorAll('#add-new input');
    let addButton = document.querySelector('#add-new button');
    let productsList = document.querySelector('#myProducts ul');

    addButton.addEventListener('click, addItemHandler');

    function addItemHandler(e) {
        e.preventDefault();

        let newItemLine = document.createElement('li');
        let itemName = document.createElement('span');
        itemName.innerText = itemInput[0].value;

        let itemQuantity = document.createElement('strong');
        itemQuantity.innerText = itemInput[1].value;

        newItemLine.appendChild(itemName);
        newItemLine.appendChild(itemQuantity);

        let priceContainer = document.createElement('div');

        let priceElement = document.createElement('strong');
        priceElement.innerText = itemInput[2].value;

        let addButton = document.createElement('button');
        addButton.innerText = `Add to Client's List`;

        priceContainer.appendChild(priceElement);
        priceContainer.appendChild(addButton);

        newItemLine.appendChild(priceContainer);
        productsList.appendChild(newItemLine);
        productsList.innerHTML
    }
}