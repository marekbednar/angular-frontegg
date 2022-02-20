import {Component, OnInit} from '@angular/core';
import {FronteggAppService, FronteggAuthService} from "@frontegg/angular";
import {Observable} from "rxjs";
import {AuthState} from "@frontegg/redux-store";

@Component({
  selector: 'user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  isLoading$: Observable<boolean>;
  user$?: Observable<AuthState['user']>;

  constructor(private fronteggAuthService: FronteggAuthService, private fronteggAppService: FronteggAppService) {
    this.isLoading$ = fronteggAppService.isLoading$;
    this.user$ = this.fronteggAuthService?.user$;
  }

  ngOnInit(): void {
  }

}
