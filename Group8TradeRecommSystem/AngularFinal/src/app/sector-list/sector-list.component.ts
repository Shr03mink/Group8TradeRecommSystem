import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../_services/api.service';
import { Company } from '../Company';
import { AuthService } from '../_services/auth.service';


@Component({
  selector: 'app-sector-list',
  templateUrl: './sector-list.component.html',
  styleUrls: ['./sector-list.component.css']
})
export class SectorListComponent implements OnInit {


  constructor(private api: ApiService, private router:Router,private auth:AuthService) {}
  comp: Company[];


  ngOnInit() {

  }

  getAuto()
  {
    this.api.getAutoData().subscribe (
      data=> this.comp = data
    );
    this.router.navigate(["sector"]);
  }

  getBanking()
  {
    this.api.getBankData().subscribe (
      data=> this.comp = data
    );
    this.router.navigate(["sector"]);
  }

  getIT()
  {
    this.api.getITData().subscribe (
      data=> this.comp = data
    );
    this.router.navigate(["sector"]);
  }

  getMedia(){
    this.api.getMediaData().subscribe (
      data=> this.comp = data
    );
    this.router.navigate(["sector"]);
  }

  getOG()
  {
    this.api.getOGData().subscribe (
      data=> this.comp = data
    );
    this.router.navigate(["sector"]);
  }

  getPharma()
  {
    this.api.getPharmaData().subscribe (
      data=> this.comp = data
    );
    this.router.navigate(["sector"]);
  }

}
