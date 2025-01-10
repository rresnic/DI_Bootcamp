var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    Library.prototype.addBook = function (title, author, isbn, publishedYear, genre) {
        var newBook = {
            title: title,
            author: author,
            isbn: isbn,
            publishedYear: publishedYear,
            genre: genre
        };
        this.books.push(newBook);
    };
    Library.prototype.getBookDetails = function (isbn) {
        var book = this.books.find(function (item) { return item.isbn === isbn; });
        if (book)
            return "".concat(book.title, " was written by ").concat(book.author, ". It was published in ").concat(book.publishedYear, ". Genre: ").concat(book.genre);
        return "".concat(isbn, " not found");
    };
    Library.prototype.getBooks = function () {
        return this.books;
    };
    return Library;
}());
var DigitalLibrary = /** @class */ (function (_super) {
    __extends(DigitalLibrary, _super);
    function DigitalLibrary(website) {
        var _this = _super.call(this) || this;
        _this.website = website;
        return _this;
    }
    DigitalLibrary.prototype.listBooks = function () {
        var titles = [];
        for (var _i = 0, _a = this.getBooks(); _i < _a.length; _i++) {
            var book = _a[_i];
            titles.push(book.title);
        }
        return titles;
    };
    return DigitalLibrary;
}(Library));
var myLib = new DigitalLibrary("mysite.com");
myLib.addBook("HP1", "J.K. Rowlings", "SomeISBN", 2000, "Fantasy");
myLib.addBook("HP2", "J.K. Rowlings", "SomeOtherISBN", 2001);
myLib.addBook("HP3", "J.K. Rowlings", "YetAnotherISBN", 2002);
console.log(myLib.getBookDetails("SomeISBN"));
console.log(myLib.listBooks());
