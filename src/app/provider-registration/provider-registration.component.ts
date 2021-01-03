import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { UserRegistrationDetails } from '../models/user-registration-details';

@Component({
  selector: 'app-provider-registration',
  templateUrl: './provider-registration.component.html',
  styleUrls: ['./provider-registration.component.css'],
})
export class ProviderRegistrationComponent implements OnInit {
  userDetails: UserRegistrationDetails;
  constructor(private _apiService: ApiService) {
    this.userDetails = new UserRegistrationDetails();
  }

  ngOnInit(): void {}

  public registerUser(): void {
    console.log(this.userDetails);
    this._apiService
      .saveUserRegistration(this.userDetails)
      .subscribe((data) => {
        alert('Saved');
      });
    //create new component named as provider registration.
    //create a model name UserRegistrationDetails and put all the values which are required for registration.
    // Include all the values inside the form in the HTML page as well.
    // Create one class name RegisterUser in spring boot application.
    // Create an api inside that class with POsT mapping and name that api as registerUser
    // Create a similar model in java same as angular user model.
  }
}
