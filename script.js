function displayAffirmation() {

    document.getElementById("display").innerHTML = "";

    var p = document.createElement("h2");

    affirmations = 
    ["i wish i could go to a park with you rn", 
    "*bites you*", 
    "whenever i think about you i actually start giggling and kicking my feet /srs", 
    "you're so blorbo", 
    "i feel bad for angels. it's hard knowing you're a human and yet you're more beautiful than them",
    "roman god physiogymy looking ass",
    "AND IF THE FIVE NIGHTS AT FREDDYS BUS....... CRASHES INNTOO UUUUSSSSSS... TO DIE BY YOUR SIDE......... IS SUCH A HEAVENLY WAY TO DIE!!!",
    "sooo cuteee!!!!!!!!!",
    "haiiiiii handsomeeeee :3 :3 :DDD",
    "dork",
    "best boyfie evar",
    "i don't think the feeling i have of both being so loved and loving you so deeply will ever fade",
    "i looooove youuuuu",
    "someday we're gonna have our very own house with a little family of kitties and you'll always come home to being loved",
    "my sweetness",
    "btw i already have a plan for how im gonna propose to you",
    "me (me) and the bad bitch (you) i scored by being autistic",
    "my sweet little thing",
    "my little guy",
    "tiny little guy",
    "mwwahmwahmwahmwahmwahmwahmwahmwah",
    "...mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmwah~!!",
    "*pokes your nose* *and bites you as well also*",
    "you are a little freak WOWWW yeah okay yeah i saw what you have in your discord message search with me...",
    "*curls up in your lap*"];

    index = Math.floor(Math.random() * affirmations.length);
    p.innerText = affirmations[index];

    document.getElementById("display").appendChild(p)
    document.getElementById("display").style.display = "flex";
}
function checkPassword() {
    isPasswordChecked = true;

    submittedPassword = document.getElementById("password").value;
    var p = document.createElement("p");
    p.style.color = "red";
    p.innerText = "wrong password..."

    if (submittedPassword == 'Md3"v8z7Zs#W') {
        window.location.href = window.location.pathname.replace("/index.html", "") + "/6Bb05WUOsFdl.html"
    }
    else {
        document.getElementById("index").appendChild(p)
    }
}