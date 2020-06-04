function solve() {
    let task = document.getElementById('task');
    let description = document.getElementById('description');
    let date = document.getElementById('date');
    let button = document.getElementById('add');
    let div = document.getElementsByClassName("wrapper")[0];
    let ar = div.getElementsByTagName('section')[1]
    button.addEventListener('click', addArticle)
    let nuer = 0;


    function addArticle(e) {
        if(task.value == '' || description.value == '' || date.value == ''){

        }else {
            let h3a = document.createElement('h3')
            h3a.innerText = `${task.value}`
            let p = document.createElement('p')
            p.innerText = `Description: ${description.value}`

            let p2 = document.createElement('p')
            p2.innerText = `Due date: ${date.value}`

            let buton1 = document.createElement('button')
            buton1.classList.add('green')
            buton1.textContent = 'Start'

            let buton2 = document.createElement('button')
            buton2.classList.add('red')
            buton2.textContent = 'Delete'
            buton2.setAttribute('za', nuer.toString())
            buton2.addEventListener("click", removeElement)

            let artcle = document.createElement("article");               // Create a <p> element
            artcle.append(h3a)
            artcle.append(p)
            artcle.append(p2)
            artcle.setAttribute("id", nuer.toString());
            nuer++;
            let diver = document.createElement('div')
            diver.classList.add("flex");
            artcle.append(diver)
            diver.append(buton1)
            diver.append(buton2)
            ar.getElementsByTagName('div')[1].append(artcle)
        }

        
        e.preventDefault();
    }

    function removeElement() {
        console.log(this);
        // Removes an element from the document
        var element = document.getElementById(this.event.i);
        element.parentNode.removeChild(element);
    }
}