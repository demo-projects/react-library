import connect from '../infrastructure/orm-setup';
import {Book} from "../entities/book.model";
import {observable} from 'mobx';

export class BookStock {

  @observable
  public books: Book[];
  private bookRepository: any;

  constructor() {
    this.books = [];

    connect.then((connection: any) => {
      this.bookRepository = connection.getRepository(Book);
      this.getAllBooks();
    });
  }

  async addBookToCollection(bookDetails: any) {
    const book = new Book();

    book.title       = bookDetails.title;
    book.description = bookDetails.description;
    book.genre       = bookDetails.genre;

    await this.bookRepository.save(book);
    this.getAllBooks();
  }

  async getAllBooks() {
    this.books = await this.bookRepository.find();
  }
}