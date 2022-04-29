//лайк с этого компа
const liked2 = 'isLiked2';
const ctr2 = 'counter2';
let isLiked2 = false;
let likeCount2 = 9; // по умолчанию

//вывод значений на страницу.
function showLikes2(thingToShowOnPage) {document.querySelector("#likes2").innerText = thingToShowOnPage;}

//получение значений из storage, если они существуют.
if (localStorage.hasOwnProperty(liked2)) isLiked1 = localStorage.getItem(liked2);
if (localStorage.hasOwnProperty(ctr2)) likeCount1 = +localStorage.getItem(ctr2);

showLikes2(likeCount2);

//функция при нажатии на кнопку.
function plusOne2() {
  if (!isLiked2) {
    //склад значений обратно в storage.
    isLiked2 = true;
    localStorage.setItem(liked2, isLiked2); 
    likeCount2++;
    localStorage.setItem(ctr2, likeCount2);
    //вывод обновлённого значения количества лайков.
    showLikes2(likeCount2);
  }
}