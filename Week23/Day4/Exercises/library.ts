interface BookI {
    title:string;
    author:string;
    isbn:string;
    publishedYear:number;
    genre?: string;
}

class Library {
    private books: BookI[];
    constructor() {
        this.books = [];
    }
    public addBook(title:string, author:string, isbn:string, publishedYear:number, genre?:string){
        let newBook:BookI ={
            title,
            author,
            isbn,
            publishedYear,
            genre
        }
        this.books.push(newBook)
    }
    public getBookDetails(isbn: string){
        let book = this.books.find(item => item.isbn === isbn);
        if(book) return `${book.title} was written by ${book.author}. It was published in ${book.publishedYear}. Genre: ${book.genre}`;
        return `${isbn} not found`
    }
    protected getBooks(){
        return this.books;
    }
}

class DigitalLibrary extends Library {
    readonly website:string
    constructor(website: string) {
        super();
        this.website = website;
    }
    public listBooks():string[] {
        let titles:string[] = [];
        for(let book of this.getBooks()){
            titles.push(book.title)
        }
        return titles;
    }
}

let myLib:DigitalLibrary = new DigitalLibrary("mysite.com");
myLib.addBook("HP1", "J.K. Rowlings", "SomeISBN", 2000, "Fantasy");
myLib.addBook("HP2", "J.K. Rowlings", "SomeOtherISBN", 2001);
myLib.addBook("HP3", "J.K. Rowlings", "YetAnotherISBN", 2002);

console.log(myLib.getBookDetails("SomeISBN"))
console.log(myLib.listBooks())