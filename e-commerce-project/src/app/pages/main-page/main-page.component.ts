import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { Books, BooksId } from '../../models/books';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  public books: Books[] = [];
  public uniqueItem: BooksId[] = [];
  public imagesUrl: Array<string> = [];

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.filterByCategoryIds();

  }

  
  getBookByItem(itemId: string) {
    this.booksService.getBookByItem(itemId).subscribe({
      next: (bookId) => {
        for (let id of bookId) {
          this.uniqueItem = id['body'];
          this.imagesUrl.push(this.uniqueItem['pictures'][0].url);
        }
      },
      error: (err) => {
        return err.status,
        err.error.error,
        err.error.message;
      }
    })
  }

  filterByCategoryIds(): void {
    this.booksService.getCategoryBooks().subscribe({
      next: categories => {
        for (let category of categories['children_categories']) {
          this.getBooksByCategory(category.id);
        }
      }
    })
  }

  getBooksByCategory(categoryId: object) {
    this.booksService.getBooksById(categoryId).subscribe({
      next: books => {
        for (let book of books['results']) {

          this.getBookByItem(book['id'])

        }
      },
      error: (err) => {
        return err.status,
        err.error.error,
        err.error.message;
      }
    })
  }
}
