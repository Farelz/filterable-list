//Get Input Element

let filterInput = document.getElementById("filterInput");

//Add Event Listener

filterInput.addEventListener("keyup", filterNames);

function filterNames() {
  //Get Value Of Input
  let filterValue = document.getElementById('filterInput').value.toUpperCase();
  console.log(filterValue);
}