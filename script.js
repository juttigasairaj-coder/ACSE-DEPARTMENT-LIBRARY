let books = [/* PASTE YOUR 200 BOOKS HERE */];

let borrowed = JSON.parse(localStorage.getItem("borrowed")) || [];
let history = JSON.parse(localStorage.getItem("history")) || [];

window.onload = () => {
    renderBooks();
    renderBorrowed();
    renderHistory();
    updateDropdown();
    updateChart();
};

document.getElementById("searchBook").addEventListener("input", function () {
    let value = this.value.toLowerCase();
    let filtered = books.filter(b => b.title.toLowerCase().includes(value));
    updateDropdown(filtered);
});

function updateDropdown(filteredBooks = books) {
    let select = document.getElementById("bookSelect");
    select.innerHTML = "";

    filteredBooks.forEach(book => {
        if (book.availableCopies > 0) {
            select.innerHTML += `<option value="${book.id}">
            ${book.title} (${book.availableCopies})
            </option>`;
        }
    });
}

function borrowBook() {
    let name = facultyName.value;
    let mobile = mobile.value;
    let bookId = bookSelect.value;

    let book = books.find(b => b.id == bookId);

    let returnDate = new Date();
    returnDate.setDate(returnDate.getDate() + 28);

    book.availableCopies--;

    let record = {
        id: Date.now(),
        name,
        mobile,
        book: book.title,
        returnDate: returnDate.toDateString()
    };

    borrowed.push(record);
    history.push(record);

    save();

    generatePDF(name, book.title, returnDate);

    renderBooks();
    renderBorrowed();
    renderHistory();
    updateChart();
}

function returnBook(id) {
    let record = borrowed.find(b => b.id === id);
    let book = books.find(b => b.title === record.book);

    book.availableCopies++;
    borrowed = borrowed.filter(b => b.id !== id);

    save();

    renderBooks();
    renderBorrowed();
    updateChart();
}

function save() {
    localStorage.setItem("borrowed", JSON.stringify(borrowed));
    localStorage.setItem("history", JSON.stringify(history));
}

function renderBooks() {
    let table = availableTable;

    table.innerHTML = `<tr><th>Title</th><th>Author</th><th>Category</th><th>Available</th></tr>`;

    books.forEach(b => {
        table.innerHTML += `<tr>
        <td>${b.title}</td>
        <td>${b.author}</td>
        <td>${b.category}</td>
        <td>${b.availableCopies}/${b.totalCopies}</td>
        </tr>`;
    });
}

function renderBorrowed() {
    borrowedTable.innerHTML = `<tr><th>Name</th><th>Book</th><th>Return</th><th>Action</th></tr>`;

    borrowed.forEach(b => {
        borrowedTable.innerHTML += `<tr>
        <td>${b.name}</td>
        <td>${b.book}</td>
        <td>${b.returnDate}</td>
        <td><button onclick="returnBook(${b.id})">Return</button></td>
        </tr>`;
    });
}

function renderHistory() {
    historyTable.innerHTML = `<tr><th>Name</th><th>Book</th><th>Date</th></tr>`;

    history.forEach(h => {
        historyTable.innerHTML += `<tr>
        <td>${h.name}</td>
        <td>${h.book}</td>
        <td>${h.returnDate}</td>
        </tr>`;
    });
}

function searchBooks() {
    let val = searchBooksTable.value.toLowerCase();

    let filtered = books.filter(b =>
        b.title.toLowerCase().includes(val) ||
        b.author.toLowerCase().includes(val)
    );

    availableTable.innerHTML = `<tr><th>Title</th><th>Author</th><th>Category</th><th>Available</th></tr>`;

    filtered.forEach(b => {
        availableTable.innerHTML += `<tr>
        <td>${b.title}</td>
        <td>${b.author}</td>
        <td>${b.category}</td>
        <td>${b.availableCopies}/${b.totalCopies}</td>
        </tr>`;
    });
}

function updateChart() {
    new Chart(document.getElementById("chart"), {
        type: "bar",
        data: {
            labels: ["Total Books", "Borrowed"],
            datasets: [{
                data: [books.length, borrowed.length]
            }]
        }
    });
}

function generatePDF(name, book, date) {
    let blob = new Blob([`Name:${name}\nBook:${book}\nReturn:${date}`], { type: "application/pdf" });
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "receipt.pdf";
    link.click();
}
