let filter = document.getElementById("check-filter");
let checkbox = document.getElementsByName("checkbox");

export let checked = ()=> {
    checkbox.forEach((item) => {
        item.parentElement.removeAttribute("hidden");
        if (!item.checked) {
          item.parentElement.setAttribute("hidden", "");
        }
      });

};
export let unChecked = ()=> {
    checkbox.forEach((item) => {
        item.parentElement.removeAttribute("hidden");
        if (item.checked) {
          item.parentElement.setAttribute("hidden", "");
        }
      });

};
export let all = () => {
    checkbox.forEach((item) => {
        item.parentElement.removeAttribute("hidden");
      });

};