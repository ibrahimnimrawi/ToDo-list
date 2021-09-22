import { checked, unChecked, all } from "./filter.js";
import { submit } from "./add.js";
import { ascending, descending } from "./sort.js";
// import { ascending, descending } from "./sort";

//  *************** this is add section ***************

let submitBtn = document.getElementById("submit-btn");
let submitEnter = document.getElementById("add-bar");
submitBtn.addEventListener("click", () => {
  submit();

  let clear = document.getElementById("add-bar");

  clear.value = "";
});
submitEnter.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();

    submit();

    let clear = document.getElementById("add-bar");

    clear.value = "";
  }
});

//  *************** this is filter section ***************

let filter = document.getElementById("check-filter");

filter.addEventListener("change", () => {
  if (filter.value == "Checked") {
    //   call a function from filter.js (module)
    checked();
  } else if (filter.value == "Un-checked") {
    //   call a function from filter.js (module)
    unChecked();
  }
  //   the else is for changing from Checked / Unchecked to All again
  //   call a function from filter.js (module)
  else all();
});

//  *************** this is sort section ***************

let sort = document.getElementById("check-sort");

sort.addEventListener("change", () => {
  if (sort.value == "ascending") {
    ascending();
  } else {
    descending();
  }
});
