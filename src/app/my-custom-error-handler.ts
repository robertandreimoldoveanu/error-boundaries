import { ErrorHandler } from '@angular/core';

export class MyCustomErrorHandler implements ErrorHandler {
    constructor(private _tag: string) {
        console.log('handler with tag: ' + _tag);
    }
    handleError(error: any): void {
        // NOTE: we can throw the error upwards to the next handler throw error;
        console.error(`[${this._tag}] An error occurred:`, error);
    }
}