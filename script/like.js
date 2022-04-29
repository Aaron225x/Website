//лайк с этого компа
const liked = 'isLiked';
const ctr = 'counter';
let isLiked = false;
let likeCount = 9; // по умолчанию

//вывод значений на страницу.
function showLikes(thingToShowOnPage) {document.querySelector("#likes").innerText = thingToShowOnPage;}

//получение значений из storage, если они существуют.
if (localStorage.hasOwnProperty(liked)) isLiked = localStorage.getItem(liked);
if (localStorage.hasOwnProperty(ctr)) likeCount = +localStorage.getItem(ctr);

showLikes(likeCount);

//функция при нажатии на кнопку.
function plusOne() {
  if (!isLiked) {
    //склад значений обратно в storage.
    isLiked = true;
    localStorage.setItem(liked, isLiked); 
    likeCount++;
    localStorage.setItem(ctr, likeCount);
    //вывод обновлённого значения количества лайков.
    showLikes(likeCount);
  }
}