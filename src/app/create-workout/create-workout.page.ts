import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons, IonButton, IonItem, IonInput, IonList, IonListHeader, IonLabel, IonSearchbar, IonIcon } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { ExerciseService } from '../services/exercise-service';
import { Storage } from '@ionic/storage-angular'; 


@Component({
  selector: 'app-create-workout',
  templateUrl: './create-workout.page.html',
  styleUrls: ['./create-workout.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons, IonButton, IonItem, IonInput, IonList, IonListHeader, IonLabel, IonSearchbar, IonIcon, CommonModule, FormsModule]
})
export class CreateWorkoutPage implements OnInit {
  workoutName: string = '';
  exercises: any[] = [];
  filteredExercises: any[] = [];
  selectedExercises: any[] = [];
  searchTerm: string = '';
  showSearch: boolean = false;

  constructor(
    private exerciseService: ExerciseService,
    private router: Router,
    private storage: Storage
  ) {}

  ngOnInit() {
    this.exerciseService.getExercises().subscribe((data) => {
      this.exercises = data;
      this.filteredExercises = data;
    });
  }

  toggleSearch() {
    this.showSearch = !this.showSearch;
  }

  onSearch() {
    this.filteredExercises = this.exercises.filter(e =>
      e.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  addExercise(exercise: any) {
  this.selectedExercises.push({ 
    id: exercise.id,
    name: exercise.name,
    sets: 0, 
    reps: 0 
  });
  this.showSearch = false;
  this.searchTerm = '';
  this.filteredExercises = this.exercises;
}

  removeExercise(exercise: any) {
    this.selectedExercises = this.selectedExercises.filter(e => e.id !== exercise.id);
  }

  async saveWorkout() {
  const workouts = await this.storage.get('workouts') || [];
  const workout = {
    id: Date.now().toString(),
    name: this.workoutName,
    exercises: this.selectedExercises
  };
  workouts.push(workout);
  await this.storage.set('workouts', workouts);
  this.router.navigate(['/tabs/workouts']);
}
}