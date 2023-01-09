import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  handleError(error: Error | HttpErrorResponse) {
    if (error.name === 'HttpErrorResponse') {
      // muss in der component behandelt werden
      throw error;
    } else {
      console.error(error);
    }
  }
}
