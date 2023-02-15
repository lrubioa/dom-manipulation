var books = [
    {
        title: 'The Design of EveryDay Things',
        author: 'Don Norman',
        alreadyRead: false
    }, {
        title: 'The Most Human Human',
        author: 'Brian Christian',
        alreadyRead: true
    }
];

var body = document.body

for (var i = 0; i < 2; i++) {
    var titleAndAuthor = document.createElement("p")
    titleAndAuthor.setAttribute("id", "titleAuthor")

    titleAndAuthor.textContent = books[i].title + " by " + books[i].author;
    body.appendChild(titleAndAuthor)
};
