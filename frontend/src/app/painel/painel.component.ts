import { Component, OnInit } from '@angular/core';
import { MedicineService } from '../service/medicine/medicine.service';
import { Medicine } from '../shared/medicine';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  public medicine: Medicine = new Medicine();
  public allMedicineLst: Array<Medicine> = new Array<Medicine>();

  constructor(
    private medicineSvc: MedicineService,
  ) { }

  ngOnInit(): void {
    this.getMedicines();
  }

  verifyInputs() {
    let msg = ``
    let success = true;
    if (!this.medicine.name) {
      msg += ` O campo nome do medicamento é requerido`;
      success = false;
    }
    if (!success) {
      console.log(msg, `Ok`, {
        duration: 3000,
      });
    }
    return success;
  }

  async addMedicine(){
    if (this.verifyInputs()) {
      this.medicineSvc.registerMedicine(this.medicine).subscribe(()=>{
        this.ngOnInit(); 
      });
      this.medicine = new Medicine();
    }    
  }

  async getMedicines(){
    this.medicineSvc.getAllMedicines().subscribe((result) =>{
      this.allMedicineLst = result;   
    });
  }

  async deleteMedicine(medicine){
    this.medicineSvc.deleteMedicine(medicine).subscribe(() =>{
      this.ngOnInit();  
    });
    this.medicine = new Medicine();
  }

  async updateMedicine(){
    if (this.verifyInputs()) {
      this.medicineSvc.updateMedicine(this.medicine).subscribe();
      this.medicine = new Medicine();
    }
  }

  setMedicine(allMedicine){
    this.medicine = allMedicine;
  }
}
