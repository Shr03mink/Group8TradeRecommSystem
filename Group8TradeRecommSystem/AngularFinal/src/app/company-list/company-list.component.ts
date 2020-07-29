import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/_services/company.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  companies: any;
  currentCompany = null;
  currentIndex = -1;

  constructor(private companyService: CompanyService, private auth: AuthService) { }

  ngOnInit() {
    this.retrieveCompanies();
  }


  retrieveCompanies() {
    this.companyService.getByUser()
      .subscribe(
        data => {
          this.companies = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  refreshList() {
    this.retrieveCompanies();
    this.currentCompany = null;
    this.currentIndex = -1;
  }

  setActiveCompany(company, index) {
    this.currentCompany = company;
    this.currentIndex = index;
  }

  }
