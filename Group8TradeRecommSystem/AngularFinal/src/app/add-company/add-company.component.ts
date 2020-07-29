import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/_services/company.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {
  company = {
    symbol: '',
    open: 0,
    previous_closed: 0,
    day_low: 0,
    day_high: 0,
    perc_change: 0
  };
  submitted = false;
  userid: number;

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
  }

  saveCompany() {
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

  newCompany() {
    this.submitted = false;
    this.company = {
      symbol: '',
      open: 0,
      previous_closed: 0,
      day_low: 0,
      day_high: 0,
      perc_change: 0
    };
  }

}
