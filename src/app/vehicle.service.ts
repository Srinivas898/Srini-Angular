import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private _httpClient:HttpClient) { }

  baseUrl:string="https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction";

  getVehicles():Observable<any>{
    return this._httpClient.get(this.baseUrl);
  }

  getVehicle(id:any):Observable<any>{
    return this._httpClient.get(this.baseUrl+"/"+id);
  }
  getFilteredVehicles(term:any):Observable<any>{
    return this._httpClient.get(this.baseUrl+"?filter="+term);
  }

  getSortedVehicles(column:any,order:any):Observable<any>{
    return this._httpClient.get(this.baseUrl+"?sortBy="+column+"&order="+order);
  }

  deleteVehicle(id:any):Observable<any>{
    return this._httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id);
  }

  getpaginatedVehicles(limit:any,page:any):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?limit="+limit+"&page"+page);
  }

  createVehicle(data:any):Observable<any>{
    return this._httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction",data)
  }

  updateVehicle(id:any,data:any):Observable<any>{
    return this._httpClient.put("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id,data)
  }
}
