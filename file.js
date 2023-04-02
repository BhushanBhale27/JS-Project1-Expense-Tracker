const finalBtn = document.getElementById("btn");
console.log(finalBtn);
const ul = document.getElementById("listItems");

// Retrieve stored data and populate the list on page load
// window.onload = function () {
//   for (let i = 0; i < localStorage.length; i++) {
//     const key = localStorage.key(i);
//     const obj = JSON.parse(localStorage.getItem(key));

//     const li = document.createElement("li");
//     li.setAttribute("data-id", key);
//     li.textContent = `Amount: ${obj.amount} Description: ${obj.description} Category: ${obj.category}`;

//     const deleteBtn = document.createElement("button");
//     deleteBtn.className = "delete";
//     deleteBtn.textContent = "Delete";
//     li.appendChild(deleteBtn);

//     const editBtn = document.createElement("button");
//     editBtn.className = "edit";
//     editBtn.textContent = "Edit";
//     li.appendChild(editBtn);

//     ul.appendChild(li);
//   }
// };

finalBtn.addEventListener("click", function finalSubmit(event) {
  event.preventDefault();
  const amount = document.getElementById("exAmount").value;
  const description = document.getElementById("Description").value;
  const category = document.getElementById("category").value;

  const obj = {
    amount,
    description,
    category,
  };

  const id = Date.now().toString();
  localStorage.setItem(id, JSON.stringify(obj));

  const li = document.createElement("li");
  li.setAttribute("data-id", id);
  li.textContent = `Amount: ${obj.amount} Description: ${obj.description} Category: ${obj.category}`;

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete";
  deleteBtn.textContent = "Delete";
  li.appendChild(deleteBtn);

  const editBtn = document.createElement("button");
  editBtn.className = "edit";
  editBtn.textContent = "Edit";
  li.appendChild(editBtn);

  ul.appendChild(li);
});

// Delete button
ul.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    const id = e.target.parentNode.getAttribute("data-id");
    localStorage.removeItem(id);
    e.target.parentNode.remove();
  }
});

// Edit Button
ul.addEventListener("click", function editMe(e) {
  if (e.target.classList.contains("edit")) {
    const id = e.target.parentNode.getAttribute("data-id");
    const obj = JSON.parse(localStorage.getItem(id));
    const amountBox = document.getElementById("exAmount");
    const descriptionBox = document.getElementById("Description");
    const categoryBox = document.getElementById("category");

    amountBox.value = obj.amount;
    descriptionBox.value = obj.description;
    categoryBox.value = obj.category;

    localStorage.removeItem(id);
    e.target.parentNode.remove();
  }
});
