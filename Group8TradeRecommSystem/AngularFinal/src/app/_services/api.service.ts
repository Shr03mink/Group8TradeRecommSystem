import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Company } from '../Company';
import { TokenStorageService } from './token-storage.service';
/*export class portfolioData {
  constructor(
    public symbol: string,
    public open: number,
    public prev_close:number,
    public day_high:number,
    public day_low:number,
    public change:number
  ){

  }
}*/

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {
dindata=[];
url: string;

constructor(private http:HttpClient, private token:TokenStorageService) {
  this.url = "http://localhost:8080";
}



getAutoData(): Observable<Company[]>{
  let httpOptions = new HttpHeaders()
  .set('Authorization', 'Bearer ' +
      this.token.getToken());
  return this.http.get<Company[]>(`${this.url}/topGainersAutoMobileSector`, { headers: httpOptions });
  }

  getBankData(): Observable<Company[]>{
    let httpOptions = new HttpHeaders()
  .set('Authorization', 'Bearer ' +
      this.token.getToken());
    return this.http.get<Company[]>(`${this.url}/topGainersBankSector`, { headers: httpOptions });
  }

  getITData(): Observable<Company[]>{
    let httpOptions = new HttpHeaders()
  .set('Authorization', 'Bearer ' +
      this.token.getToken());
    return this.http.get<Company[]>(`${this.url}/topGainersITSector`, { headers: httpOptions});
  }

  getMediaData(): Observable<Company[]>{
    let httpOptions = new HttpHeaders()
  .set('Authorization', 'Bearer ' +
      this.token.getToken());
    return this.http.get<Company[]>(`${this.url}/topGainersMediaSector`, {headers: httpOptions});
  }

  getOGData(): Observable<Company[]>{
    let httpOptions = new HttpHeaders()
  .set('Authorization', 'Bearer ' +
      this.token.getToken());
    return this.http.get<Company[]>(`${this.url}/topGainersOilandGasSector`, { headers: httpOptions});
  }

  getPharmaData(): Observable<Company[]>{
    let httpOptions = new HttpHeaders()
  .set('Authorization', 'Bearer ' +
      this.token.getToken());
    return this.http.get<Company[]>(`${this.url}/topGainersPharmaSector`, {headers: httpOptions});
  }

  /*getPortfolio(){
    return this.http.get<portfolioData[]>("http://localhost:8080/portfolioData", httpOptions);
  }*/
}
