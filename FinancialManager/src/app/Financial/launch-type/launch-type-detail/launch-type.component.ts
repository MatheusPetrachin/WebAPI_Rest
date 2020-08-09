import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LaunchTypeService } from '../launch-type.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../user/user';
import { Observable } from 'rxjs';
import { LaunchType } from '../launch-type';

@Component({
  selector: 'app-launch-type',
  templateUrl: './launch-type.component.html',
  styleUrls: ['./launch-type.component.css']
})
export class LaunchTypeDetailComponent implements OnInit {

  launchTypeForm: FormGroup;

  private isEdit: boolean = this.activatedRoute.snapshot.paramMap.get('action') == 'edit';  
  private id: number = Number(this.activatedRoute.snapshot.paramMap.get('id'));

  constructor(
    private formBuilder: FormBuilder,
    private launchTypeService: LaunchTypeService,
    private router: Router,    
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.loadForm(new LaunchType());

    if(this.isEdit){
      this.launchTypeService.get(this.id).subscribe(p => {
        this.launchTypeForm.setValue({
          description: p.description
        });
      })
    }

  }

  loadForm(launchType: LaunchType) {

    this.launchTypeForm = this.formBuilder.group({
      description: [launchType.description, [Validators.required, Validators.maxLength(50)]],
    });
  }

  getUsers() {
    this.launchTypeService.gets().subscribe(
      success => console.log("success"),
      error => console.error(error)
    )
  }

  save() {

    if (this.launchTypeForm.invalid){
      return;
    }

    const launchType: LaunchType = this.launchTypeForm.getRawValue();
    
    var update: Observable<LaunchType>;

    
    if (this.isEdit) {      
      launchType.id = this.id;
      update = this.launchTypeService.update(launchType);
    }
    else{      
      update = this.launchTypeService.add(launchType);
    }

    update.subscribe(s => {
      this.router.navigate(['/launchType-master']);
    },err =>{
      console.error(err)
    }
    )
   
  }

  cancel() {
    this.router.navigate(['/launchType-master']);
  }

}
