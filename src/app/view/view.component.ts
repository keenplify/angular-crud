import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Agent, AgentsService } from '../agents.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
  public agent: Agent | null = null;
  public id: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private agentService: AgentsService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  editAgentForm = this.formBuilder.group({
    name: '',
    avatar: '',
  });

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.loadAgentDetails();
  }

  loadAgentDetails(): void {
    if (this.id !== null) {
      this.agentService.getAgent(this.id).subscribe((agent) => {
        this.agent = agent;
        this.editAgentForm.setValue({
          name: this.agent.name,
          avatar: this.agent.avatar,
        });
      });
    }
  }

  editAgentFormSubmit(): void {
    if (!this.id) return console.log('no id!');

    this.agentService
      .editAgent(this.id, this.editAgentForm.value)
      .subscribe(() => this.loadAgentDetails());
  }

  public deleteAgent(id: string) {
    this.agentService
      .deleteAgent(id)
      .subscribe(() => this.router.navigate(['']));
  }
}
