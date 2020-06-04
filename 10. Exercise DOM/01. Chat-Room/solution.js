function solve() {
    let textArea = document.querySelector('#chat-box-footer, textarea');
    let sendButton = document.querySelector('#chat-box-footer, button');
    let targetDiv = document.getElementsByClassName('my-message')[0];
    let messageArea = document.getElementById('chat_messages');

    sendButton.addEventListener('click', clickFunction);

    function clickFunction() {
       let targetDivClone = targetDiv.cloneNode(true);
       let textAreaContent = textArea.value;

       if(textAreaContent !== ''){
           targetDivClone.textContent = textAreaContent;
           messageArea.appendChild(targetDivClone);

           textArea.value = '';
       }
    }
}


