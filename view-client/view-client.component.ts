import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpProviderService } from '../Service/http-provider.service';
import { WebApiService } from '../Service/web-api.service';

@Component({
  selector: 'app-view-client',
  templateUrl: './view-client.component.html',
  styleUrls: ['./view-client.component.scss']
})

export class ViewClientComponent implements OnInit {

  clientId: any;
  clientDetail : any= [];
   
  constructor(public webApiService: WebApiService, private route: ActivatedRoute, private httpProvider : HttpProviderService) { }
  
  ngOnInit(): void {
    this.clientId = this.route.snapshot.params['petId'];      
    this.getClientDetailById();
  }

  getClientDetailById(): void {
    this.httpProvider.getClientDetailById(this.clientId).subscribe({
      next: (response: any) => {
        if (response != null && response.data != null) {
          this.clientDetail = response.data; // Accessing the nested data object
          console.log('Pet details:', this.clientDetail);
        } else {
          console.error('No data found in response:', response);
        }
      },
      error: (error: any) => {
        console.error('Error fetching pet details', error);
      },
      complete: () => {
        console.log('Fetch pet details complete');
      }
    });
  }

  clientPet(): void{
    this.httpProvider.getPetDetailById(this.clientId).subscribe({
      
    })
  }
}