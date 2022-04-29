//лайк с этого компа
const liked3 = 'isLiked3';
const ctr3 = 'counter3';
let isLiked3 = false;
let likeCount3 = 10; // по умолчанию

//вывод значений на страницу.
function showLikes3(thingToShowOnPage) {document.querySelector("#likes3").innerText = thingToShowOnPage;}

//получение значений из storage, если они существуют.
if (localStorage.hasOwnProperty(liked3)) isLiked1 = localStorage.getItem(liked3);
if (localStorage.hasOwnProperty(ctr3)) likeCount1 = +localStorage.getItem(ctr3);

showLikes3(likeCount3);

//функция при нажатии на кнопку.
function plusOne3() {
  if (!isLiked3) {
    //склад значений обратно в storage.
    isLiked3 = true;
    localStorage.setItem(liked3, isLiked3); 
    likeCount3++;
    localStorage.setItem(ctr3, likeCount3);
    //вывод обновлённого значения количества лайков.
    showLikes3(likeCount3);
  }
}