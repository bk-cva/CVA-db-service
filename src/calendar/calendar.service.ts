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
     * Lists the next 10 events on the user's primary calendar.
     */
    listEvents(): any {
        return new Promise((resolve, rej) => {
            this.calendar.events.list({
                calendarId: 'primary',
                timeMin: (new Date()).toISOString(),
                maxResults: 10,
                singleEvents: true,
                orderBy: 'startTime',
            }, (err, res) => {
                if (err) {
                    return rej('The API returned an error: ' + err);
                }
                const events = res.data.items;
                resolve({
                    events,
                });
            });
        });
    }
    /**
     * Lists the next 10 events on the user's primary calendar.
     */
    getOneEvent(eventId: string): any {
        return new Promise((resolve, rej) => {
            this.calendar.events.get({
                eventId,
                calendarId: 'primary',
            }, (err, res) => {
                if (err) {
                    return rej('The API returned an error: ' + err);
                }
                const events = res.data;
                resolve(events);
            });
        });
    }
}
