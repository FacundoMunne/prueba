import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../Service/http-provider.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.scss']
})

export class EditClientComponent implements OnInit {
  editClientForm: clientForm = new clientForm();

  @ViewChild("clientForm")
  clientForm!: NgForm;

  isSubmitted: boolean = false;
  clientId: any;

  constructor(private toastr: ToastrService, private route: ActivatedRoute, private router: Router,
    private httpProvider: HttpProviderService) { }

  ngOnInit(): void {
    this.clientId = this.route.snapshot.params['clientId'];
    this.getClientDetailById();
  }

  getClientDetailById() {
    this.httpProvider.getClientDetailById(this.clientId).subscribe((data: any) => {
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.editClientForm.Id = resultData.id;
          this.editClientForm.Dni = resultData.dni;
          this.editClientForm.FirstName = resultData.firstName;
          this.editClientForm.LastName = resultData.lastName;
          this.editClientForm.Address = resultData.address;
          this.editClientForm.Phone = resultData.phone;
          this.editClientForm.Email = resultData.email;
          this.editClientForm.RegistrationDate = resultData.registrationDate;
        }
      }
    },
      (error: any) => { });
  }

  EditClient(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.httpProvider.saveClient(this.editClientForm).subscribe(async data => {
        if (data != null && data.body != null) {
          var resultData = data.body;
          if (resultData != null && resultData.isSuccess) {
            this.toastr.success(resultData.message);
            setTimeout(() => {
              this.router.navigate(['/Home']);
            }, 500);
          }
        }
      },
        async error => {
          this.toastr.error(error.message);
          setTimeout(() => {
            this.router.navigate(['/Home']);
          }, 500);
        });
    }
  }
}

export class clientForm {
  Id: number = 0;
  Dni: string = "";
  FirstName: string = "";
  LastName: string = "";
  Address: string = "";
  Phone: string = "";
  Email: string = "";
  RegistrationDate: string = "";
}
