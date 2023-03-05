import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms'
import {FormControl} from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  title: string = 'Registro'
  userForm: FormGroup;

  constructor(private usersService: UsersService, private router: Router, private activatedRoute: ActivatedRoute){
    this.userForm = new FormGroup({
      first_name: new FormControl("",[]),
      last_name: new FormControl("",[]),
      email: new FormControl("",[]),
      image: new FormControl("",[]),
    },[]);

    
  }

  ngOnInit(): void{
    this.activatedRoute.params.subscribe(async (params: any) => {
      let id= params.userid
      console.log(id);

      if (id){
        this.title='Actualizar'
        const response = await this.usersService.getById(id);
        const user: User = response;
        
        console.log(user);
        this.userForm = new FormGroup({
          id: new FormControl(id,[]),
          first_name: new FormControl(user?.first_name,[]),
          last_name: new FormControl(user?.last_name,[]),
          email: new FormControl(user?.email,[]),
          image: new FormControl(user?.image,[]),
        },[]);
     
      }
    })
  }

  async getDataForm(){
    let user: User = this.userForm.value;

    if(user.id){
      //ACTUALIZANDO
      let response = await this.usersService.update(user);
      console.log(response)
      if (response.id){
        alert(`Usuario ${response.first_name} con id ${response.id} se ha acutualizado correctamente`)
        this.router.navigate(['/home'])
      }

    }else{
      //REGISTRO
      try{
        let response = await this.usersService.create(user)
        if(response.id){
          alert(`El Usuario ${response.first_name} con id ${response.id} creado correctamente`);
          this.router.navigate(['/home']);
        }
      }
      catch (err) {
        console.log(err)
      }
  }
  }
}
