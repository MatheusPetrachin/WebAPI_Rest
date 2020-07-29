import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.css"],
  preserveWhitespaces: true
})
export class UserDetailComponent implements OnInit {

  userForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit(): void {

    this.loadForm(new User());

  }

  loadForm(user: User) {
    this.userForm = this.formBuilder.group({
      name: [user.name, [Validators.required, Validators.maxLength(50)]],
      lastName: [user.lastName, [Validators.required, Validators.maxLength(50)]],
      email: [user.email],
      telephone: [user.telephone, [Validators.maxLength(15)]],
    });
  }

  getUsers(){
    this.userService.getUsers().subscribe(
      success => console.log("success"),
      error => console.error(error)
    )
  }

  save() {
    const user: User = this.userForm.getRawValue();
    console.log(user);
    this.userService.add(user).subscribe(
      success => console.log("success"),
      error => console.error(error)
    );
  }

}
