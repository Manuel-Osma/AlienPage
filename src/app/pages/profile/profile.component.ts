import { Component } from '@angular/core';

@Component({
  templateUrl: 'profile.component.html',
  styleUrls: [ './profile.component.scss' ]
})

export class ProfileComponent {
  employee: any;
  colCountByScreen: object;

  constructor() {
    this.employee = {
      ID: 0,
      FirstName: 'Alien',
      LastName: 'N/A',
      Prefix: 'No Human',
      Position: 'The last start',
      Picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Alien01.svg/1200px-Alien01.svg.png',
      BirthDate: new Date('1000/10/5'),
      HireDate: new Date('1010/05/11'),
      /* tslint:disable-next-line:max-line-length */
      Notes: 'Este es un perfil creado por los aliens para obtener informacion sobre EVERTEC ya que algunos de los miembros de la empresa son practicantes del sena puede ser posible encontrar alguna debilidad en sus software por tal motivo es te perfil es alien "INCOGNITO" para sustraer la informacion de dicha empresa',
      Address: 'planet KOI-4458.01 '
    };
    this.colCountByScreen = {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4
    };
  }
}
