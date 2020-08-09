import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Launch } from '../launch';
import { LaunchService } from '../launch.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.css']
})
export class LaunchDetailComponent implements OnInit {
  
  formGroup: FormGroup;

  private isEdit: boolean = this.activatedRoute.snapshot.paramMap.get('action') == 'edit';  
  private id: number = Number(this.activatedRoute.snapshot.paramMap.get('id'));

  constructor(
    private formBuilder: FormBuilder,
    private launchService: LaunchService,
    private router: Router,    
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.loadForm(new Launch());

    if(this.isEdit){
      this.launchService.get(this.id).subscribe(p => {
        this.formGroup.setValue({
          description: p.description,
          launchDate: p.launchDate,
          value: p.value,
          launchType: p.launchType
        });
      })
    }

  }

  loadForm(launchType: Launch) {

    this.formGroup = this.formBuilder.group({
      description: [launchType.description, [Validators.required, Validators.maxLength(50)]],      
      launchDate: [launchType.launchDate, [Validators.required, Validators.maxLength(50)]],       
      value: [launchType.value, [Validators.required, Validators.maxLength(50)]],       
      launchType: [launchType.launchType, [Validators.required, Validators.maxLength(50)]],
    });
  }

  getUsers() {
    this.launchService.gets().subscribe(
      success => console.log("success"),
      error => console.error(error)
    )
  }

  save() {

    if (this.formGroup.invalid){
      return;
    }

    const launch: Launch = this.formGroup.getRawValue();
    
    var update: Observable<Launch>;

    
    if (this.isEdit) {      
      launch.id = this.id;
      update = this.launchService.update(launch);
    }
    else{      
      update = this.launchService.add(launch);
    }

    update.subscribe(s => {
      this.router.navigate(['/launch-master']);
    },err =>{
      console.error(err)
    }
    )
   
  }

  cancel() {
    this.router.navigate(['/launch-master']);
  }

}
