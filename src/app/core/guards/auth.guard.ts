import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '@app/services/auth.service';

@Injectable()
export class GuardsComponent implements CanActivate {

  constructor(private authorizer: AuthService) { }

  canActivate(): boolean {
    if (!this.authorizer.loggedIn) {
      return false;
    }

    return true;
  }

}
