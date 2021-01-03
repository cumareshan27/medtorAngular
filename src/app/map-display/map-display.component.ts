import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { DriverDetails } from '../driver-details';
import { AgmInfoWindow } from '@agm/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-map-display',
  templateUrl: './map-display.component.html',
  styleUrls: ['./map-display.component.css'],
})
export class MapDisplayComponent implements OnInit {
  public map: any = {
    lat: 26.6139,
    lng: 80.209,
  };

  locationNameFetched: string = '';

  visible: boolean = false;

  markerData: any = null;

  driverDetails: DriverDetails[];

  formData: DriverDetails;

  nearestDriver: DriverDetails;

  firstName: String;

  lastName: String;

  city: String;

  constructor(private _apiService: ApiService) {
    this.formData = new DriverDetails();
    this.nearestDriver = new DriverDetails();
  }

  ngOnInit(): void {
    //this.getDriverDetails();
  }

  public registerUser(): void {
    alert(this.firstName);
    //create new component named as provider registration.
    //create a model name UserRegistrationDetails and put all the values which are required for registration.
    // Include all the values inside the form in the HTML page as well.
    // Create one class name RegisterUser in spring boot application.
    // Create an api inside that class with POsT mapping and name that api as registerUser
    // Create a similar model in java same as angular user model.
  }

  private getDriverDetails(): void {
    this._apiService.getDriverDetails().subscribe((data) => {
      this.driverDetails = JSON.parse(data) as DriverDetails[];
    });
  }

  public mapClicked(_$event): void {
    this.visible = false;
    this.map.lat = _$event.coords['lat'];
    this.map.lng = _$event.coords['lng'];
  }

  public markerClicked(infowindow): void {}

  public bookDriver() {
    this._apiService.findAvailableDriver(this.formData).subscribe((data) => {
      if (null != data && data != '') {
        this.nearestDriver = JSON.parse(data) as DriverDetails;
        this.formData.customerBookingName = null;
        this.formData.latitude = null;
        this.formData.longitude = null;
        this.updateBookedStatus();
      } else {
        this.formData.customerBookingName = null;
        this.formData.latitude = null;
        this.formData.longitude = null;
        alert('All Drivers are busy. Try Again Later');
      }
    });
  }

  private updateBookedStatus(): void {
    if (this.nearestDriver.customerBookingName != null) {
      this._apiService
        .saveDriverBookingData(this.nearestDriver)
        .subscribe((data) => {
          this.getDriverDetails();
        });
    }
  }
}
