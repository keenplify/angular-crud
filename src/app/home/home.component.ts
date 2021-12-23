import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { AgentsService, Agent } from '../agents.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private agentService: AgentsService) {}
  agents: Agent[] = [];
  ngOnInit(): void {
    this.agentService.getAgents().subscribe((agents) => (this.agents = agents));
  }
}
