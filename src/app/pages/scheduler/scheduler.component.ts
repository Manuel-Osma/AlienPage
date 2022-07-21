import { Component, OnInit } from '@angular/core';
import { Appointment } from '../../interfaces/Appointment .interfaces';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss']
})




export class SchedulerComponent implements OnInit {
  view:any[] = ['day','week','agenda','month'];

   appointments: Appointment[] = [
    {
        title: "crear base de datos",
        startDate: new Date("2022-05-23T08:45:00.000Z"),
        endDate: new Date("2022-05-23T09:45:00.000Z")
    }, {
        title: "terminar el trabajo",
        startDate: new Date("2022-05-24T09:00:00.000Z"),
        endDate: new Date("2022-05-24T11:00:00.000Z")
    }, {
        title: "comer",
        startDate: new Date("2022-05-25T10:15:00.000Z"),
        endDate: new Date("2022-05-25T13:30:00.000Z")
    }, {
        title: "ver tutoriales de youtube",
        startDate: new Date("2022-05-26T08:00:00.000Z"),
        endDate: new Date("2022-05-26T10:00:00.000Z"),
        dayLong: true,
        recurrence: "FREQ=WEEKLY;BYDAY=TU,FR;COUNT=10"
    }, {
        title: "hacer las bitacoras del sena",
        startDate: new Date("2022-05-27T08:00:00.000Z"),
        endDate: new Date("2022-05-27T10:30:00.000Z")
    }, {
        title: "textear",
        startDate: new Date("2022-05-23T09:00:00.000Z"),
        endDate: new Date("2022-05-23T10:00:00.000Z"),
        recurrence: "FREQ=WEEKLY;INTERVAL=2;COUNT=2"
    }, {
        title: "hablar con daniel",
        startDate: new Date("2022-05-24T10:00:00.000Z"),
        endDate: new Date("2022-05-24T11:15:00.000Z"),
        recurrence: "FREQ=DAILY;BYDAY=WE;UNTIL=20211001"
    }, {
        title: "ver mi progreso",
        startDate: new Date("2022-05-25T08:00:00.000Z"),
        endDate: new Date("2022-05-25T09:00:00.000Z"),
        recurrence: "FREQ=YEARLY",
    }, {
        title: "saber que hacer",
        startDate: new Date("2022-07-21T09:30:00.000Z"),
        endDate: new Date("2022-05-26T10:45:00.000Z"),
        recurrence: "FREQ=MONTHLY;BYMONTHDAY=28;COUNT=1"
    }, {
        title: "terminar el dia",
        startDate: new Date("2022-07-21T09:30:00.000Z"),
        endDate: new Date("2021-05-27T19:00:00.000Z"),
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }



}
