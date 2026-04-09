import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonAlert } from '@ionic/angular/standalone';
import { ExerciseService } from '../services/exercise-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonAlert],
})
export class HomePage implements OnInit {
  exercises: any[] = [];
  showAlert = false;
  selectedName = '';

  constructor(private exerciseService: ExerciseService, private router: Router ) {}

  ngOnInit() {
    this.exerciseService.getExercises().subscribe((data) => {
      this.exercises = data;
    });
  }

  onExerciseClick(exercise: any) {
    this.selectedName = exercise.id;
    this.router.navigate(['/exercise-details']);
  }
}