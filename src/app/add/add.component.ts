import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AgentsService } from '../agents.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  constructor(
    private agentService: AgentsService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {}

  addAgentForm = this.formBuilder.group({
    name: '',
    avatar: '',
  });

  addAgentFormSubmit() {
    const action = this.agentService.addAgent(this.addAgentForm.value);
    action.subscribe((result) => this.router.navigate(['view', result.id]));
  }
}
