import { Component, OnInit } from '@angular/core';
import { MedicineService } from '../service/medicine/medicine.service';
import { PacientService } from '../service/pacient/pacient.service';
import { Medicine } from '../shared/medicine';
import { Pacient } from '../shared/pacient';

@Component({
  selector: 'app-retirada',
  templateUrl: './retirada.component.html',
  styleUrls: ['./retirada.component.css']
})
export class RetiradaComponent implements OnInit {
  public pacient: Pacient = new Pacient();
  public searchPacient;
  public searchMedicine;
  public allPacientLst: Array<Pacient> = new Array<Pacient>();
  public medicine: Medicine = new Medicine();
  public allMedicineLst: Array<Medicine> = new Array<Medicine>();
  public qtdMedicine: any = [];
  public medicines: any = [1];

  constructor(
    private pacientSvc: PacientService,
    private medicineSvc: MedicineService
  ) { }

  ngOnInit(): void {
    this.getPacients();
    this.getMedicines();
  }

  verifyInputs() {
    let msg = ``
    let success = true;
    if (!this.pacient.name) {
      msg += ` O campo nome do paciente é requerido`;
      success = false;
    }
    if (!this.pacient.age) {
      msg += ` O campo idade do paciente é requerido`;
      success = false;
    }
    if (!this.pacient.bairro) {
      msg += ` O campo bairro do paciente é requerido`;
      success = false;
    }
    if (!this.pacient.cartaoSUS_RG) {
      msg += ` O campo cartao do SUS ou RG do paciente é requerido`;
      success = false;
    }
    if (!this.pacient.cpf) {
      msg += ` O campo CPF do paciente é requerido`;
      success = false;
    }
    if (!success) {
      console.log(msg, `Ok`, {
        duration: 3000,
      });
    }
    return success;
  }

  async funcaoCadaTecla(search){
    if(search === ''){
      this.getPacients();
    }
  }

  funcaoEnter(search){
    if(search !== ''){
      this.getPacientOne(search);
    }
    else{
      this.getPacients();
    }
  }

  async getPacientOne(search){
    this.allPacientLst = [];
    this.pacientSvc.getSpecificPacients(search).subscribe((result) =>{ 
      this.allPacientLst = result;
      console.log(this.allPacientLst)
    });
  }

  async addPacient(){
    if (this.verifyInputs()) {
      this.pacientSvc.registerPacient(this.pacient).subscribe(()=>{
        this.ngOnInit(); 
      });
      this.pacient = new Pacient();
    }
  }

  async getPacients(){
    this.pacientSvc.getAllPacients().subscribe((result) =>{
      this.allPacientLst = result; 
    });
  }

  async getMedicines(){
    this.medicineSvc.getAllMedicines().subscribe((result) =>{
      this.allMedicineLst = result;   
    });
  }

  async deletePacient(pacient){
    this.pacientSvc.deletePacient(pacient).subscribe(() =>{
      this.ngOnInit();  
    });
    this.pacient = new Pacient();
  }
  
  async updatePacient(){
    if (this.verifyInputs()) {
      this.pacientSvc.updatePacient(this.pacient).subscribe();
      this.pacient = new Pacient();
    }
  }

  setPacient(pacient){
    this.pacient = pacient;
  }

  removeMedicine(){
    let i = 1;
    this.medicines.pop(i);
  }

  addMedicine(){
    let i = 1;
    this.medicines.push(i);
  }

  addRetirada(){

  }

  removeRetirada(){}
}
