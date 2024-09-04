import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {QuizService} from "../shared/services/quiz.service";
import {CategoriesService} from "../shared/services/categories.service";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  isQuizFinished = this.quizService.isQuizFinished;
  playerName = '';
  categorie: any;

  constructor(
    private quizService: QuizService,
    private router: Router,
    private route: ActivatedRoute,
    private categoriesService: CategoriesService
  ) {
  }

  ngOnInit(): void {
    const categoryId = +this.route.snapshot.paramMap.get('id')!;
    this.categoriesService.getCategoryById(categoryId).subscribe(category => {
      this.categorie = category;
    });
    this.route.params.subscribe(params => {
      this.quizService.playerName = params['playerName'];
      this.playerName = params['playerName'];
    });
  }

  goToResultPage() {
    this.router.navigate(['/result']);
  }
}
