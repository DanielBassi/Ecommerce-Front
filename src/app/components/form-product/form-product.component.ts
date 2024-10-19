import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ProductDTO } from '../../DTO/ProductDTO';
import { DxFormComponent } from 'devextreme-angular';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss'],
})
export class FormProductComponent implements OnInit {
  @ViewChild(DxFormComponent, { static: false }) form!: DxFormComponent;
  @Output() crudEvent: EventEmitter<any> = new EventEmitter<any>();
  @Input() crud: any = { product: new ProductDTO(), action: 'INSERT' };

  modoView: boolean = false;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(crud: SimpleChanges) {
    this.modoView = this.crud.action === 'VIEW';
    //this.form?.instance?.resetValues()
  }


  submit(event: Event) {
    event.preventDefault();
    this.crudEvent.emit({ ...this.crud });
    this.crud.product = new ProductDTO();
  }
  
  buttonOptionsSave = {
    text: 'Guardar',
    type: 'default',
    icon: 'fa fa-save',
    width: '200',
    useSubmitBehavior: true,
  };

}
