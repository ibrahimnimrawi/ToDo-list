let checkSort = document.getElementById("check-sort");
let checkbox = document.getElementsByName("checkbox");
let div = document.getElementById("check");
let count = 0;
let array = new Array();
 let sort = () => {
  checkbox.forEach((item) => {
    array.push(item.parentElement.getAttribute("id"));
  });
  array.sort();
};

export let ascending = () => {
  
  let item;
  sort();
  array.reverse();
  array.forEach((item) => {
    item = document.getElementById(`${item}`);
    div.prepend(item);
  });
};
export let descending = () => {
  sort();
  let item;
  array.forEach((item) => {
    item = document.getElementById(`${item}`);
    div.prepend(item);
  });
};
