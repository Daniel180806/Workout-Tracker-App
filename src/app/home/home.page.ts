import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonAlert, IonSearchbar } from '@ionic/angular/standalone';
import { ExerciseService } from '../services/exercise-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonAlert, IonSearchbar, FormsModule],
})
export class HomePage implements OnInit {
  exercises: any[] = [];
  showAlert = false;
  selectedName = '';
  filteredExercises: any[] = [];
  searchTerm: string = '';

  constructor(private exerciseService: ExerciseService, private router: Router ) {}

  ngOnInit() {
    this.exerciseService.getExercises().subscribe((data) => {
      this.exercises = data;
      this.filteredExercises = data;
    });
  }

  onExerciseClick(exercise: any) {
    this.selectedName = exercise.id;
    this.router.navigate(['/exercise-details', exercise.id]);
  }

  onSearch() {
  this.filteredExercises = this.exercises.filter(e =>
    e.name.toLowerCase().includes(this.searchTerm.toLowerCase())
  );
}
}