import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']

})
export class SellComponent implements OnInit {

  action: 'Add' | 'Edit' = 'Add';
  form!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    // this.buildForm();
  }

  // private buildForm(): void {
  //   this.form = this.fb.group({
  //     id: [],
  //     name: ['', Validators.required],
  //     quantity: ['', Validators.required],
  //     price: ['', Validators.required],
  //   });
  // }

  private buildForm(): void {
    this.form = this.fb.group({
      id: [],
      name: ['', Validators.required],
      quantity: ['', Validators.required],
      price: ['', Validators.required],
    });
  }
}
