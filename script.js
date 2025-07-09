var Homeaddbutton = document.getElementById("homeadd");
var Createbook = document.getElementById("create-book");
var Cancelbutton = document.getElementById("cancel-books");


Homeaddbutton.addEventListener("click", function () {
    Createbook.style.display = "block";
    Createbook.style.display = "flex";
})

Cancelbutton.addEventListener("click", function (event) {
    event.preventDefault();
    Createbook.style.display = "none";
})

//create varr for addbook, book-name,author-name, book-genre, book-description, add-book(button)

var Addbook = document.getElementById("addbook");
var Bookname = document.getElementById("book-name");
var Authorname = document.getElementById("author-name");
var Bookgenre = document.getElementById("book-genre");
var Bookdescription = document.getElementById("book-description");
var Addbookbutton = document.getElementById("add-book");
var Default = document.getElementById("default");

Addbookbutton.addEventListener("click", function (event) {
    event.preventDefault();
    if (Bookname.value === "" || Authorname.value === "" || Bookgenre.value === "" || Bookdescription.value === "") {
        alert("Please fill in all fields.");
        return;
    }
    if (Bookname.value.length < 3) {
        alert("Book name must be at least 3 characters long.");
        return;
    }
    if (Authorname.value.length > 3) {
        var div = document.createElement("div");
        div.setAttribute("class", "default");
        div.innerHTML = `
    <h2>${Bookname.value}</h2>
    <p>by ${Authorname.value}</p>
    <p>Genre: ${Bookgenre.value}</p>
    <p>${Bookdescription.value}</p>
    <button class="delete-book" onclick="deleteBook(event)">Delete</button>
    `;
    Addbook.appendChild(div);
    }
    Bookname.value = "";
    Authorname.value = "";
    Bookgenre.value = "";
    Bookdescription.value = "";
    Createbook.style.display = "none";

})
function deleteBook(event) {
    event.target.parentElement.remove();
}