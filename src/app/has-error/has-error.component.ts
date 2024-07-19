import { Component } from '@angular/core';

@Component({ template: `<button (click)="logMessage()">nested component error</button>` })
export class HasErrorComponent {
    logMessage() {
        throw new Error('Method not implemented.');
    }
}