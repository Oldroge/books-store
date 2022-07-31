import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { Books, BooksId } from '../../models/books';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  public books: Books[];
  public itemsById: BooksId[];
  public allPicturesBooks: Array<string> = [];

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.getBooksById();
  }

  getBooksById(): void {
    this.booksService.getBooksById().subscribe({
      next: books => {
        this.books = books['results'];
        for (let bookId of this.books) {
          this.getItemsById(bookId['id']);
        }
      },
      error: (err) => {
        return err.status,
        err.error.error,
        err.error.message;
      }
    })
  }

  getItemsById(id: string[]) {
    this.booksService.getItemsById(id).subscribe({
      next: (bookId) => {
        for (let id of bookId) {
          this.itemsById = id['body'];
          this.allPicturesBooks.push(this.itemsById['pictures'][0].url)
        }
        
        return this.allPicturesBooks;
      },
      error: (err) => {
        return err.status,
        err.error.error,
        err.error.message;
      }
    })
  }

}
