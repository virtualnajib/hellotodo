const addButton = document.getElementById("submitButton");
const listMind = document.getElementById("listMind");
const search = document.getElementById("search");
const searchButton = document.getElementById("searchButton");
let mind = [];

addButton.addEventListener("click", () => {
  addMind();
  showMind();
})

searchButton.addEventListener("click", () => {
  searchTodo();
})

const addMind = () => {
  const inputMind = document.getElementById("inputMind").value
  if(inputMind !== 0){
      mind.push(inputMind);
      console.log(inputMind  + " as added");
      localStorage.mind = JSON.stringify(mind);
      document.getElementById("inputMind").value = "";
  }else{
    alert("Input can't be empty")
  }
}


const showMind = () => {
  listMind.innerHTML = "";
  mind.map(function(minds, index){
    const div = document.createElement("div");
    div.id = index;

    div.innerHTML = `
    <button onclick="deleteContact(${index})">delete</button>
    <button onclick="editContact(${index})">edit</button>

    ${minds}
    `;
    listMind.appendChild(div);
  })
}

const editContact = (index) => {
  let edit = prompt("Edit mind");
  mind[index] = edit;
  localStorage.mind = JSON.stringify(mind);
  showMind();
}

const deleteContact = (index) => {
  mind.splice(index, 1) // Delete data from store
  localStorage.mind = JSON.stringify(mind); // Add list to localStorage
  showMind() // Show list
}


if (localStorage.mind){ //function to keep previous array of addressBook
  mind = JSON.parse(localStorage.mind);
  showMind()
}

const searchTodo = function() {
  var text = search.value.toLowerCase() // Get the text and set to lowercase
  let find = mind.filter(word => word.toLowerCase().includes(text)); // Filter todo based on textbox
  alert(find.join(', ')) // Alert the result
}
