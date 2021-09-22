let count = 0;
export let submit = () => {
  let date = new Date();
  let command = document.getElementById("add-bar").value;
  if (String(command).length == 0) {
    alert("enter item first");
  } else {
    let list = document.getElementById("check");
    let newItem = document.createElement("div");
    newItem.className = "item";

    let input = document.createElement("input");
    input.type = "checkbox";
    input.name = "checkbox";
    newItem.id = date;
    count++;
    // newItem.setAttribute("data", date); 
    let label = document.createElement("label");
    label.append(command);
    newItem.append(input);
    newItem.append(label);
    list.append(newItem);
  }
};
