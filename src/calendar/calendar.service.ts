import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { google, calendar_v3 } from 'googleapis';

@Injectable()
export class CalendarService {
    calendar: calendar_v3.Calendar;

    constructor() {
        let credentials: {
            installed: any,
        };
        let token: object;
        try {
            credentials = JSON.parse(fs.readFileSync('credentials.json').toString());
            token = JSON.parse(fs.readFileSync('token.json').toString());
        } catch (e) {
            console.log(e);
            return;
        }
        const { client_secret, client_id, redirect_uris } = credentials.installed;
        const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
        oAuth2Client.setCredentials(token);

        this.calendar = google.calendar({ version: 'v3', auth: oAuth2Client });
    }

    /**
     * Lists all calendar.
     */
    listCalendars(): any {
        return new Promise((resolve, reject) => {
            this.calendar.calendarList.list({}, (err, res) => {
                if (err) {
                    return reject('The API returned an error: ' + err);
                }
                const { items } = res.data;
                resolve({
                    items,
                });
            });
        });
    }

    /**
     * Lists the next 10 events on a calendar.
     * @param calendarId - ID of the calendar.
     */
    listEvents(calendarId: string): any {
        return new Promise((resolve, reject) => {
            this.calendar.events.list({
                calendarId,
                timeMin: (new Date()).toISOString(),
                maxResults: 10,
                singleEvents: true,
                orderBy: 'startTime',
            }, (err, res) => {
                if (err) {
                    return reject('The API returned an error: ' + err);
                }
                const { items } = res.data;
                resolve({
                    items,
                });
            });
        });
    }

    /**
     * Get an event on a calendar.
     * @param calendarId - ID of the calendar.
     * @param eventId - ID of the event.
     */
    getEvent(calendarId: string, eventId: string): any {
        return new Promise((resolve, reject) => {
            this.calendar.events.get({
                eventId,
                calendarId,
            }, (err, res) => {
                if (err) {
                    return reject('The API returned an error: ' + err);
                }
                const events = res.data;
                resolve(events);
            });
        });
    }

    /**
     * Query events on a calendar with parameters such as time min & max, name, etc..
     * @param calendarId - ID of the calendar.
     * @param q - free text search terms to find events that match these terms in any field.
     * @param timeMin - minimum time of the events.
     * @param timeMax - maximum time of the events.
     */
    queryEvents(calendarId: string, q: string = null, timeMin: string = null, timeMax: string = null): any {
        return new Promise((resolve, reject) => {
            this.calendar.events.list({
                calendarId,
                q: q === null ? undefined : q,
                timeMin: timeMin === null ? undefined : timeMin,
                timeMax: timeMax === null ? undefined : timeMax,
            }, (err, res) => {
                if (err) {
                    return reject('The API returned an error: ' + err);
                }
                const events = res.data;
                resolve(events);
            });
        });
    }

    /**
     * Create an event on the user's primary calendar.
     * @param calendarId - ID of the calendar.
     * @param summary - title of the event.
     * @param location - location in string format.
     * @param start - starting date time.
     * @param end - ending date time.
     */
    createEvent({ calendarId, summary, location, start, end, useDefaultReminders }: {
        calendarId: string, summary: string, location: string, start: string, end: string, useDefaultReminders: boolean,
    }): any {
        return new Promise((resolve, reject) => {
            this.calendar.events.insert({
                calendarId,
                requestBody: {
                    summary,
                    location,
                    start: {
                        dateTime: start,
                    },
                    end: {
                        dateTime: end,
                    },
                    reminders: {
                        useDefault: useDefaultReminders,
                    },
                },
            }, (err, res) => {
                if (err) {
                    return reject('The API returned an error: ' + err);
                }
                resolve(res.data);
            });
        });
    }

    /**
     * Create an event on the user's primary calendar.
     * @param calendarId - ID of the calendar.
     * @param eventId - ID of the event.
     */
    deleteEvent(calendarId: string, eventId: string): any {
        return new Promise((resolve, reject) => {
            this.calendar.events.delete({
                calendarId,
                eventId,
            }, (err, res) => {
                if (err) {
                    return reject('The API returned an error: ' + err);
                }
                resolve();
            });
        });
    }
}
