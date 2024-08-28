import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor() {}

  addBook(book: Book): Observable<Book> {
    return of(book);
  }
}
