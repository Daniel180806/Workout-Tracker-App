import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})

export class WorkoutService {

  
  constructor(private storage: Storage) {}

  async getWorkouts(): Promise<any[]> {
    const workouts = await this.storage.get('workouts');
    return workouts || [];
  }
  async saveWorkout(workout: any): Promise<void> {
    const workouts = await this.getWorkouts();
    workouts.push(workout);
    await this.storage.set('workouts', workouts);
  }
  async deleteWorkout(id: string): Promise<void> {
    const workouts = await this.getWorkouts();
    const updated = workouts.filter((w: any) => w.id !== id);
    await this.storage.set('workouts', updated);
  }
  async addExerciseToWorkout(workoutId: string, exercise: any): Promise<void> {
    const workouts = await this.getWorkouts();
    const workout = workouts.find((w: any) => w.id === workoutId);
    if (workout) {
      workout.exercises.push(exercise);
      await this.storage.set('workouts', workouts);
    }
  }
}