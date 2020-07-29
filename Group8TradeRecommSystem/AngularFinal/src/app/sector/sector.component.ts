import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_services/api.service';
import { SectorListComponent } from '../sector-list/sector-list.component';
import { CompanyService } from '../_services/company.service';

@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.css']
})
export class SectorComponent implements OnInit {

  company = {
    symbol: '',
    open: 0,
    previous_closed: 0,
    day_low: 0,
    day_high: 0,
    perc_change: 0
  };
  submitted = false;

  constructor(private api:ApiService, public sec: SectorListComponent,private companyService: CompanyService) { }

  ngOnInit() {

  }

  saveComp(com){
    const data = {
      symbol: this.company.symbol,
      open: this.company.open,
      previous_closed: this.company.previous_closed,
      day_low: this.company.day_low,
      day_high: this.company.day_high,
      perc_change: this.company.perc_change
    };

    this.companyService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

}
