import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonButtons, } from '@ionic/angular/standalone';
import { RouterLinkWithHref } from '@angular/router';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.page.html',
  styleUrls: ['./workouts.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonButtons, CommonModule, RouterLinkWithHref]
})

export class WorkoutsPage {

  workouts: any[] = [];

  constructor(private storage: Storage) {
}

  async deleteWorkout(workoutId: string) {
    const workouts = await this.storage.get('workouts') || [];
  const updated = workouts.filter((w: any) => w.id !== workoutId);
  await this.storage.set('workouts', updated);
  this.workouts = updated;
  }
  
  async shareWorkout(workout: any) {
  const text = workout.exercises.map((e: any) => 
    `${e.name} — ${e.sets} sets x ${e.reps} reps`).join('\n');
  
  if (navigator.share) {
    await navigator.share({
      title: workout.name,
      text: text
    });
  } else {
    // fallback if browser doesn't support share
    alert('Sharing not supported on this browser');
  }
}

  async ionViewWillEnter() {
    await this.storage.create();
    this.workouts = await this.storage.get('workouts');
  }
}