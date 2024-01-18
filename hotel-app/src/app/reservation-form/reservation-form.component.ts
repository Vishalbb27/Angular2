import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css',
})
export class ReservationFormComponent implements OnInit {
  reservationForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private reservationSservice: ReservationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {} //Dependency injection

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', Validators.required],
    });

    let id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      let reservation = this.reservationSservice.getReservation(id);
      if (reservation) this.reservationForm.patchValue(reservation);
    }
  } //Checking whether the form data contians all the required values and the formcontrol name is same as formgroup

  onSubmit() {
    if (this.reservationForm.valid) {
      let reservation: Reservation = this.reservationForm.value;

      let id = this.activatedRoute.snapshot.paramMap.get('id');

      if (id) {
        //Update

        this.reservationSservice.updateReservation(id, reservation);
      } else {
        //Create
        this.reservationSservice.addReservation(reservation);
      }
      this.router.navigate(['/list']);
    }
  }
}
