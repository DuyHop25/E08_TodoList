function newElement(){
    // Lấy giá trị của thẻ input
    const inputValue = document.getElementById("myInput").value;
   // Tạo 1 node "li"
    const node = document.createElement("li");
    // Tạo 1 text node 
    const textNode = document.createTextNode(inputValue);
    // Gán text cho thẻ node "li"
    node.appendChild(textNode); 
    // Nối nút li vào danh sách 
    document.getElementById("myUL").appendChild(node);

    // Tạo nút close và thêm vào sau mỗi thẻ con của danh sách
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    node.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
          var div = this.parentElement;
          div.style.display = "none";
        };
      }
}


// Tạo nút close và thêm vào sau mỗi thẻ con của danh sách
let myNodelist = document.getElementsByTagName("LI");
for (let i = 0; i < myNodelist.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Nhấn vào nút close sẽ ẩn đi thẻ cha của nó
let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";
  };
}

// Thêm ký hiệu "đã kiểm tra" khi nhấp vào một mục trong danh sách
let items = document.getElementsByTagName("li");
for (item of items) {
  item.addEventListener("click", function () {
    this.classList.toggle("checked");
  });
}
