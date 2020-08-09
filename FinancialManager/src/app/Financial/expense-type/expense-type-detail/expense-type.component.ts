import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ExpenseTypeService } from '../expense-type.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ExpenseType } from '../expense-type';
import { LaunchType } from '../../launch-type/launch-type';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-expense-type',
  templateUrl: './expense-type.component.html',
  styleUrls: ['./expense-type.component.css']
})
export class ExpenseTypeDetailComponent implements OnInit {

  formGroup: FormGroup;

  private isEdit: boolean = this.activatedRoute.snapshot.paramMap.get('action') == 'edit';  
  private id: number = Number(this.activatedRoute.snapshot.paramMap.get('id'));

  constructor(
    private formBuilder: FormBuilder,
    private expenseTypeService: ExpenseTypeService,
    private router: Router,    
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.loadForm(new ExpenseType());

    if(this.isEdit){
      this.expenseTypeService.get(this.id).subscribe(p => {
        this.formGroup.setValue({
          description: p.description
        });
      })
    }

  }

  loadForm(launchType: ExpenseType) {

    this.formGroup = this.formBuilder.group({
      description: [launchType.description, [Validators.required, Validators.maxLength(50)]],
    });
  }

  getUsers() {
    this.expenseTypeService.gets().subscribe(
      success => console.log("success"),
      error => console.error(error)
    )
  }

  save() {

    if (this.formGroup.invalid){
      return;
    }

    const launchType: LaunchType = this.formGroup.getRawValue();
    
    var update: Observable<LaunchType>;

    
    if (this.isEdit) {      
      launchType.id = this.id;
      update = this.expenseTypeService.update(launchType);
    }
    else{      
      update = this.expenseTypeService.add(launchType);
    }

    update.subscribe(s => {
      this.router.navigate(['/expenseType-master']);
    },err =>{
      console.error(err)
    }
    )
   
  }

  cancel() {
    this.router.navigate(['/expenseType-master']);
  }

}
