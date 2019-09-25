import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  private results = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  get_products(){
        this.httpClient.get('https://swapi.co/api/people/?format=json').subscribe((res : any)=>{
            console.log(res['results']);
            this.results = res['results'];
        });
    }

}