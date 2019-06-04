var strat = document.getElementsByClassName("strat")[0],
  td = document.getElementsByTagName("td");
var arr = [0, 1, 2, 3, 4, 9, 14, 19, 24, 23, 22, 21, 20, 15, 10, 5];
var key = false;

strat.onclick = function() {
  if (key) return;
  key = true;
  var speen = 300,
    n = 0;
  index = ran(16, 0);
  console.log(index + 1);
  itme = setInterval(zhuan, speen);

  function zhuan() {
    for (var i = 0; i < td.length; i++) {
      td[i].className = "";
    }
    td[arr[n % 16]].className = "active";
    n++;
    if (n > 32 + index) {
      // console.log('a');
      clearInterval(itme);
      key = false;
    } else if (n > 5 && n < 32) {
      speen = 30;
      clearInterval(itme);
      itme = setInterval(zhuan, speen);
    } else if (n + 6 == 32 + index) {
      speen = 300;
      clearInterval(itme);
      itme = setInterval(zhuan, speen);
    }
  }
};
function ran(max, min) {
  return Math.floor(Math.random() * max - min) + min;
}
