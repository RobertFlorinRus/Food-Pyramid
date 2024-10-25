function increaseItemCount(centerId) {
  var countElement = document.getElementById(centerId + '-count');
  var count = parseInt(countElement.innerText, 10);
  countElement.innerText = count + 1;
}

function decreaseItemCount(centerId) {
  var countElement = document.getElementById(centerId + '-count');
  var count = parseInt(countElement.innerText, 10);
  if(count > 0) {
      countElement.innerText = count - 1;
  }
}