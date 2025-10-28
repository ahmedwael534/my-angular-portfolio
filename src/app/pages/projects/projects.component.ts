import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../interfaces/project';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [];
  selectedProject: Project | null = null;

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

  selectProject(project: Project): void {
    this.selectedProject = project;
    console.log("Selected Project:", this.selectedProject);
  }

  closeModal(): void {
    this.selectedProject = null;
    console.log("Modal Closed");
  }
}

