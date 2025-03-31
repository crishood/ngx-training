import { Component } from '@angular/core';
import { CALIFORNIA_PLATE, LICENSE_PLATES } from './mock-data';
import { LicensePlate } from './license-plate';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { NavigationComponent } from './navigation/navigation.component';

@Component({
  selector: 'app-root',
  imports: [NavigationComponent, JumbotronComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  licensePlates: LicensePlate[] = LICENSE_PLATES;
  licensePlate: LicensePlate = CALIFORNIA_PLATE;
}
