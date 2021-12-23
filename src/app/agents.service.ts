import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AgentsService {
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getAgents(): Observable<Agent[]> {
    return this.http.get<Agent[]>(`${environment.BACKEND_API}/Agents`);
  }

  getAgent(id: string): Observable<Agent> {
    return this.http.get<Agent>(`${environment.BACKEND_API}/Agents/${id}`);
  }

  editAgent(id: string, newAgent: Agent): Observable<any> {
    return this.http.put<any>(
      `${environment.BACKEND_API}/Agents/${id}`,
      newAgent
    );
  }

  addAgent(newAgent: Partial<Agent>): Observable<Agent> {
    return this.http.post<Agent>(
      `${environment.BACKEND_API}/Agents/`,
      newAgent
    );
  }

  deleteAgent(id: string): Observable<any> {
    return this.http.delete(`${environment.BACKEND_API}/Agents/${id}`);
  }
}

export type Agent = {
  createdAt: string;
  name: string;
  avatar: string;
  id: number;
};
