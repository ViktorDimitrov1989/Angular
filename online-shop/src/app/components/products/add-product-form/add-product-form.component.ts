import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.css']
})
export class AddProductFormComponent implements OnInit {

  public productForm: FormGroup;

  private sizes = [
    "M",
    "L",
    "XL"];
  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.productForm = this.fb.group({
      fit: [''],
      quality: [''],
      picture: [''],
      price: [''],
      description: [''],
      type: [''],
      brand: [''],
      status: [''],
      sizes: this.fb.array([]),
      isAvailable: false
    })
  }
  //[Validators.required, Validators.maxLength(30), Validators.minLength(3)]
  submitProduct(productForm) {

  }

  onChange(size: string, isChecked: boolean) {
    const sizesFormArray = <FormArray>this.productForm.controls.sizes;

    if (isChecked) {
      sizesFormArray.push(new FormControl(size));
    } else {
      let index = sizesFormArray.controls.findIndex(x => x.value == size)
      sizesFormArray.removeAt(index);
    }
  }

}
