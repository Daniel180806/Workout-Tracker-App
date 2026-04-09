import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { ExerciseService } from '../services/exercise-service';

@Component({
  selector: 'app-exercise-details',
  templateUrl: './exercise-details.page.html',
  styleUrls: ['./exercise-details.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink, IonButtons, IonBackButton]
})
export class ExerciseDetailsPage implements OnInit {

  constructor(private exerciseService: ExerciseService) { }

  ngOnInit() {
    
  }

}
