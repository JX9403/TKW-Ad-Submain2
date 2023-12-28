
var show = function (item , list, cnt) {
  
  item.addEventListener("click", function () {
    cnt++;
    if (cnt % 2 != 0) {
      list.classList.add("show");
    } else {
      list.classList.remove("show");
    }
  });
};

var open = function (item , list, list2) {
  
  item.addEventListener("click", function () {
      list.classList.add("show");
      list.classList.remove("notShow");
      list2.classList.add("notShow");
      list2.classList.remove("show");
  });
};


var exit = function (item , list, list2) {

  item.forEach(element => {
    element.addEventListener("click", function () {
    list.classList.remove("show");
    list2.classList.remove("notShow");
  });
  });
  
};

 