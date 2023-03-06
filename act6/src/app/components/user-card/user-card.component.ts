import { Component, Input } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  @Input() elUser: User | any;

  constructor(private userServices: UsersService){

  }

  async deleteUser(pId: any | undefined): Promise<void> {

    if(pId !== undefined)
    try {
      let response = await this.userServices.delete(pId);
      console.log(response);
      if (response){
        alert(`El usuario ${response.first_name} ${response.last_name} con id ${response.id} ha sido borrado correctamente`)
      }
    }catch(error){
      console.log(error);
    }
    
  }

  async confirmacion(pId: any | undefined, pName: any | undefined, pLName: any | undefined) {
    let opc:boolean = confirm(`¿Deseas borrar al usuario ${pName} ${pLName}`);
    if (opc === true){
     this.deleteUser(pId);
   }else{
 
   }
   }
}
