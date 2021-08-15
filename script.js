var btns = document.querySelectorAll(".btn");
var cards = document.querySelectorAll(".item");
var changetext = document.querySelector(".change")
var searchBar = document.querySelector("input")

btns.forEach(function(button){
    button.addEventListener("click",function(){
        var btnClick = button.textContent.toLowerCase();
        if (btnClick == "all") {
            cards.forEach(function(card){
                card.style.display = "block";
                changetext.textContent="Members"
            })
        } 
        else 
        {
            cards.forEach(function(card){
                if (card.classList.contains(btnClick)) {
                    card.style.display = "block" ;
                    changetext.textContent = btnClick.charAt(0).toUpperCase() + btnClick.slice(1);

                }
                else {
                    card.style.display = "none";
                }
            });
        }
    });
});

searchBar.addEventListener("keyup", function(){
    var userInput = event.target.value.toLowerCase().trim();
    cards.forEach(function(card){
        if (card.textContent.toLowerCase().trim().includes(userInput)) {
        card.style.display = "block";
    } else {
        card.style.display = "none";
    }

    });
});
console.log(cards[0].textContent.toLowerCase().trim());

// btns[0].addEventListener("click", function(){
//     cards.forEach(function(card){
//         card.style.display = "block"
//         changetext.textContent = "Members"
//     })
// });
// btns[1].addEventListener("click", function(){
//     var btnClick = btns[1].textContent.toLowerCase
//     cards.forEach(function(card){
//         if (card.classList.contains("cat")) {
//             card.style.display = "block" ;
//             changetext.textContent = "Cats"
//         }
//         else {
//             card.style.display = "none"
//         }
//     })
// });
// btns[2].addEventListener("click", function(){
//     var btnClick = btns[2].textContent.toLowerCase
//     cards.forEach(function(card){
//         if (card.classList.contains("dog")) {
//             card.style.display = "block" ;
//             changetext.textContent = "Dogs"
//         }
//         else {
//             card.style.display = "none"
//         }
//     })
// });
// btns[3].addEventListener("click", function(){
//     var btnClick = btns[3].textContent.toLowerCase
//     cards.forEach(function(card){
//         if (card.classList.contains("hamster")) {
//             card.style.display = "block" ;
//             changetext.textContent = "Hamsters"
//         }
//         else {
//             card.style.display = "none"
//         }
//     })
// });
// btns[4].addEventListener("click", function(){
//     var btnClick = btns[4].textContent.toLowerCase
//     cards.forEach(function(card){
//         if (card.classList.contains("others")) {
//             card.style.display = "block" ;
//             changetext.textContent = "Special Ones"
//         }
//         else {
//             card.style.display = "none"
//         }
//     })
// });

var imageAll = document.querySelectorAll(".card-img-top")
imageAll.forEach(function (element){
    element.addEventListener("mouseover", function(){
        element.style.width = "100%";
        element.style.height = "70%";
    });
});

imageAll.forEach(function (element) {
    element.addEventListener("mouseout", function () {
        element.style.width = "100%";
        element.style.height = "55%";
    });
});
