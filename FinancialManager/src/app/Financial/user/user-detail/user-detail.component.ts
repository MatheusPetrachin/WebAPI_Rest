import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.css"],
  preserveWhitespaces: true
})
export class UserDetailComponent implements OnInit {

  userForm: FormGroup;

  private isEdit: boolean = this.activatedRoute.snapshot.paramMap.get('action') == 'edit';  
  private id: number = Number(this.activatedRoute.snapshot.paramMap.get('id'));

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,    
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.loadForm(new User());

    if(this.isEdit){
      this.userService.getUser(this.id).subscribe(p => {
        this.userForm.setValue({
          name: p.name,
          lastName: p.lastName,
          email: p.email,
          telephone: p.telephone,
        });
      })
    }

  }

  loadForm(user: User) {

    this.userForm = this.formBuilder.group({
      name: [user.name, [Validators.required, Validators.maxLength(50)]],
      lastName: [user.lastName, [Validators.required, Validators.maxLength(50)]],
      email: [user.email],
      telephone: [user.telephone, [Validators.maxLength(15)]],
    });
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      success => console.log("success"),
      error => console.error(error)
    )
  }

  save() {
    const user: User = this.userForm.getRawValue();
    console.log(user);
    this.userService.add(user).subscribe(
      success => {
        this.router.navigate(['/user-master']);
      },
      error => console.error(error)
    );
  }

  cancel() {
    this.router.navigate(['/user-master']);
  }

}
