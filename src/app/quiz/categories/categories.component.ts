import {Component, OnInit} from '@angular/core';
import {CategoriesService} from "../../shared/services/categories.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories: any[] = [];
  search: string = '';

  constructor(private categoriesService: CategoriesService,
              private router: Router) {
  }

  ngOnInit() {
this.getCategories();
  }

  getCategories(): void {
    this.categoriesService.getCategories().subscribe((data: any[]) => {
      this.categories = data;
    });
  }
  navigateToQuiz(categoryId: number): void {
    this.router.navigate(['/quiz', categoryId]);
  }

  resetFilter(): void {
    this.search = '';
  }
  filterCategories(): any[] {
    return this.categories.filter(category => category.name.toLowerCase().includes(this.search.toLowerCase()));
  }


}

