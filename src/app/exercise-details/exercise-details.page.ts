import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { ExerciseService } from '../services/exercise-service';

@Component({
  selector: 'app-exercise-details',
  templateUrl: './exercise-details.page.html',
  styleUrls: ['./exercise-details.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, CommonModule]
})
export class ExerciseDetailsPage implements OnInit {
  
  exercise: any;

  constructor(private route: ActivatedRoute, private exerciseService: ExerciseService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.exerciseService.getExercises().subscribe((data) => {
      this.exercise = data.find((e: any) => e.id === id);
    });
  }
}