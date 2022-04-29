//лайк с этого компа
const liked1 = 'isLiked1';
const ctr1 = 'counter1';
let isLiked1 = false;
let likeCount1 = 8; // по умолчанию

//вывод значений на страницу.
function showLikes1(thingToShowOnPage) {document.querySelector("#likes1").innerText = thingToShowOnPage;}

//получение значений из storage, если они существуют.
if (localStorage.hasOwnProperty(liked1)) isLiked1 = localStorage.getItem(liked1);
if (localStorage.hasOwnProperty(ctr1)) likeCount1 = +localStorage.getItem(ctr1);

showLikes1(likeCount1);

//функция при нажатии на кнопку.
function plusOne1() {
  if (!isLiked1) {
    //склад значений обратно в storage.
    isLiked1 = true;
    localStorage.setItem(liked1, isLiked1); 
    likeCount1++;
    localStorage.setItem(ctr1, likeCount1);
    //вывод обновлённого значения количества лайков.
    showLikes1(likeCount1);
  }
}