import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Books, BooksId } from '../models/books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private booksUrlCategory = 'https://api.mercadolibre.com/sites/MLB/search?category=';

  private itemsById = 'https://api.mercadolibre.com/items?ids='

  private categoryBooks = 'https://api.mercadolibre.com/categories/MLB1196';

  constructor(private httpClient: HttpClient) { }
  
  getBooksById(categoryId: object): Observable<Books[]> {
    return this.httpClient.get<Books[]>(this.booksUrlCategory + `${categoryId}`);
  }

  getBookByItem(itemId: string): Observable<BooksId[]> {
    return this.httpClient.get<BooksId[]>(this.itemsById + `${itemId}`);
  }

  getCategoryBooks(): Observable<BooksId[]> {
    return this.httpClient.get<BooksId[]>(this.categoryBooks);
  };
}
