function solve() {
    let password = document.getElementById("str").value;
    let text = document.getElementById("text").value
    let ResultElement = document.getElementById("result")

    let northRegex = /(north)[^\d]*([0-9]{2})[^,]*,[^,]*?([0-9]{6})/igm;
    let eastRegex = /(east)[^\d]*([0-9]{2})[^,]*,[^,]*?([0-9]{6})/igm;


    let matches = text.match(northRegex);
    let lastMatchNorth = text.match(northRegex).pop();
    let lastMatchEast = text.match(eastRegex).pop();
    let matchesNorth = northRegex.exec(lastMatchNorth);
    let matchesEast = eastRegex.exec(lastMatchEast);

    let northLocation = matchesNorth[matchesNorth.length-2] + "." + matchesNorth[matchesNorth.length-1] + " N";
    let eastLocation = matchesEast[matchesEast.length-2] + "." + matchesEast[matchesEast.length-1] + " E";
    console.log(northLocation);
    console.log(eastLocation);
    let firstMention = text.indexOf(password);
    let secondMention = text.indexOf(password, (firstMention +1));

    let encodedMessage ="Message: " +  text.substring((firstMention+password.length),secondMention)


    appentToParent(northLocation)
    appentToParent(eastLocation)
    appentToParent(encodedMessage)

    function appentToParent(text) {
        let p = document.createElement("p");
        p.textContent=text;
        ResultElement.appendChild(p);
    }
}