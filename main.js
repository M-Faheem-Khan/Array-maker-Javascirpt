var item_array = new Array();
var count = 0;
var show = document.getElementById("item");

show.style.display = "none";
function add(){
     if (document.getElementById("input").value.length == 0){
          console.log("null");
          show.style.display = "none";
     } else if(document.getElementById("input").value.length >= 1){
          //con_clear();
          item_array.push(" " + document.getElementById("input").value)
          console.log("Item Added");
          console.log("Item added to array: " + item_array[count]);
          show.textContent = item_array;
          show.style.display = "block";
          document.getElementById("input").value = "";
          if (item_array.length == 0) {
               console.log("Array empty");
               console.log(item_array.length);
               console.log("Add items to array!!");
          } else if (item_array.length > 0){
               console.log(item_array[count]);
               count++;
               return count;
          }
     }
}

//Flushing Array
function flush() {
     if(count == 0){
          console.log("Array is empty");
     } else {
          item_array = [];
          document.getElementById("input").value = "";
          show.textContent = item_array;
          show.style.display = "none";
          console.log("Array is Flushed");
          con_clear();
          count = 0;
          return count;
          return item_array;
     }
}

//Console Clearing function
function con_clear(){
     console.API;
     if (typeof console._commandLineAPI !== 'undefined') {
          console.API = console._commandLineAPI; //chrome
     } else if (typeof console._inspectorCommandLineAPI !== 'undefined') {
          console.API = console._inspectorCommandLineAPI; //Safari
     } else if (typeof console.clear !== 'undefined') {
          console.API = console;
     }
     console.API.clear();
}
