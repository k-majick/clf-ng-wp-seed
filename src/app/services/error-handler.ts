import { ErrorHandler, Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  constructor() { }

  handleError(error: Error | HttpErrorResponse): void {
    console.error('It happens:', error);
    throw error;
  }
}
