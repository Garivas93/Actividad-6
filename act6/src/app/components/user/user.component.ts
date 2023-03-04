import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
 
  user: User | any;

  constructor(
    private usersServices: UsersService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() : void{
    this.activatedRoute.params.subscribe(async (params:any) => {
      let id: any = (params.userid)
      let response: any = await this.usersServices.getById(id);
      this.user=response;
    })
  }
}
