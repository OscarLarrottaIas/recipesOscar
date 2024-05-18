import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  form! : FormGroup 

  constructor(private formbuilder:FormBuilder){
    this.form = this.formbuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      preTime: ['', [Validators.required,Validators.min(10)] ],
      cookTime: ['', [Validators.required, this.rangeTime()] ],
    })
  }

  rangeTime = (): ValidatorFn => 
    (control: AbstractControl): ValidationErrors | null => {
      const time = control.value
      if(time >10  && time < 20){
        return null
      }
      return {'cooktime':false};
  };

  onSubmit(){
    if(this.form.valid){
      
    }
    
  }

}
