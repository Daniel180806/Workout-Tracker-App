import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class WorkoutService {
  
  constructor(private storage: Storage) {}

  async saveWorkout(workout: any) {
    let workouts = await this.storage.get('workouts') || [];
    workouts.push(workout);
    await this.storage.set('workouts', workouts);
  }

  async getWorkouts() {
    return await this.storage.get('workouts') || [];
  }
}
