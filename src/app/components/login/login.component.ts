import { Component, OnInit } from '@angular/core';
import { FronteggAppService } from '@frontegg/angular';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private fronteggAppService: FronteggAppService) { }

  showApp(): void {
    this.fronteggAppService?.showAdminPortal();
  }

  ngOnInit(): void {
    this.showApp();
  }

}
