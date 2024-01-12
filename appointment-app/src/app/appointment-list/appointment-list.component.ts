import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css',
})
export class AppointmentListComponent implements OnInit {
  newAppointmentTitle: string = '';
  newAppointmentDate: Date = new Date();

  appointment: Appointment[] = [];

  ngOnInit(): void {
    let savedAppointment = localStorage.getItem('appointment');
    this.appointment = savedAppointment ? JSON.parse(savedAppointment) : [];
  }

  addAppointment() {
    if (this.newAppointmentTitle.trim().length && this.newAppointmentDate) {
      let newAppoint: Appointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate,
      };

      this.appointment.push(newAppoint);

      this.newAppointmentTitle = '';

      this.newAppointmentDate = new Date();

      localStorage.setItem('appointment', JSON.stringify(this.appointment));
    }
  }

  deleteAppointment(index: number) {
    this.appointment.splice(index, 1);
    localStorage.setItem('appointment', JSON.stringify(this.appointment));
  }
}
