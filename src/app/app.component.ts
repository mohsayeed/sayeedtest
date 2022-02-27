import { Component, OnInit } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi, EventInput } from '@fullcalendar/angular';
import {  createEventId } from './event-utils';
import { GetcallsService } from 'src/app/services/getcalls.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
   INITIAL_EVENTS: EventInput[] = [];
  courseslist:any;
  dateslist: any;
  constructor(private getcallsservice:GetcallsService) { }
  ngOnInit(): void {
    this.getcallsservice.list()
      .subscribe(
        (response: any) => {
          this.courseslist = response;
          console.log(response)
        },
        (error: any) => {
          console.log(error);
        });
  }
  calendarVisible = false;
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialView: 'dayGridMonth',
    initialEvents: this.INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dragScroll:false,
    dayMaxEvents: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this)
    /* you can update a remote database when these fire:
    eventAdd:
    eventChange:
    eventRemove:
    */
  };
  currentEvents: EventApi[] = [];

  handleCalendarToggle() {
    this.calendarVisible = !this.calendarVisible;
  }

  handleWeekendsToggle() {
    const { calendarOptions } = this;
    calendarOptions.weekends = !calendarOptions.weekends;
  }
  selectioncopy:DateSelectArg;

  handleDateSelect(Selection: DateSelectArg) {
    this.selectioncopy = Selection
    const title = prompt('Please enter a new title for your event');
    console.log(title)
    const calendarApi = Selection.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: Selection.startStr,
        end: Selection.endStr,
        allDay: Selection.allDay,
        resourceEditable: true // resource not editable for this event

      });
    }
  }

  handleEventClick(clickInfo: EventClickArg) {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
  }

  selectedCourse:string;
  update(e){
    this.selectedCourse = e.target.value
    this.calendarVisible = false
    this.INITIAL_EVENTS = []
    console.log(this.selectedCourse)
    this.getcallsservice.listofEvents(this.selectedCourse)
      .subscribe(
        (response: any) => {
          this.dateslist = response;
          for(let val of this.dateslist){
            this.INITIAL_EVENTS.push({
              id: createEventId(),
              title: val.courseID,
              start : val.dates
            });
          }
          console.log(this.INITIAL_EVENTS)
          const { calendarOptions } = this;
          calendarOptions.initialEvents = this.INITIAL_EVENTS;
          this.calendarVisible = true
          console.log(response)
        },
        (error: any) => {
          console.log(error);
        });
  }

}
