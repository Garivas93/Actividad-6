import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  arrUser: User[] = [];

  constructor(private usersService: UsersService) {}

  async ngOnInit(): Promise<void> {
    let response = await this.usersService.getAll()
    console.log(response);
    this.arrUser = response.results
    console.log(this.arrUser)
  }

}
