import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
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
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() : void{
    this.activatedRoute.params.subscribe(async (params:any) => {
      let id: any = (params.userid)
      let response: any = await this.usersServices.getById(id);
      this.user=response;
    })
  }

  async deleteUserr(pId: any | undefined): Promise<void> {

    if(pId !== undefined)
    try {
      let response = await this.usersServices.delete(pId);
      console.log(response);
      if (response){
        alert(`El usuario ${response.first_name} ${response.last_name} con id ${response.id} ha sido borrado correctamente`);
        this.router.navigate(['/home']);
      }
    }catch(error){
      console.log(error);
    }
    
  }
}
