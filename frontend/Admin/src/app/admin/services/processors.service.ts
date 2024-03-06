import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProcessorsService {

  constructor(
    private http: HttpClient) { }

    public getAllProcessors(): Observable<any>{
      return this.http.get<any>(`${environment.baseUrl}/api/v1/processor/get/all`);
    }
    public deleteProcessor(processorId: any, accessToken: any): Observable<any>{
      const headers = new HttpHeaders()
        .set('Authorization', `Bearer ${accessToken}`);
      return this.http.delete<any>(`${environment.baseUrl}/api/v1/processor/delete/${processorId}`, { headers: headers })
    }
    public getLocationDetails(params: HttpParams): Observable<any>{
      return this.http.get<any>(`https://api.geocode.earth/v1/reverse`, { params:params });
    }
}

