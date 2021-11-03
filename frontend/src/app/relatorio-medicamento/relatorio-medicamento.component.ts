import { Component, OnInit } from '@angular/core';
import { MedicineService } from '../service/medicine/medicine.service';
import { Medicine } from '../shared/medicine';

@Component({
  selector: 'app-relatorio-medicamento',
  templateUrl: './relatorio-medicamento.component.html',
  styleUrls: ['./relatorio-medicamento.component.css']
})
export class RelatorioMedicamentoComponent implements OnInit {
  public medicine: Medicine = new Medicine();
  public search;
  public typeControl = 1;
  public allMedicineLst: Array<Medicine> = new Array<Medicine>();

  constructor(
    private medicineSvc: MedicineService
  ) { }

  ngOnInit(): void {
    this.getMedicinesControl(this.typeControl);
  }

  async funcaoCadaTecla(search){
    if(search === ''){
      this.getMedicinesControl(this.typeControl);
    }
  }

  funcaoEnter(search){
    if(search !== ''){
      this.getMedicinesOne(search);
    }
    else{
      this.getMedicinesControl(this.typeControl);
    }
  }

  async getMedicinesOne(search){
    this.allMedicineLst = [];
    this.medicineSvc.getSpecificMedicines(search).subscribe((result) =>{ 
      this.allMedicineLst = result;
    });
  }

  async getMedicinesControl(typeControl){
    this.medicineSvc.getAllMedicinesControl(typeControl).subscribe((result) =>{
      this.allMedicineLst = result;   
    });
  }

}
