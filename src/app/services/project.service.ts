import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projects: Project[] = [
    {
      id: 1,
      title: "Water Level Prediction System (Graduation Project)",
      shortDescription: "AI & IoT system for real-time water level prediction.",
      technologies: ["Flutter", "Dart", "AI", "ML", "IoT", "Python"],
      imageUrl: "/assets/images/water-project.png",
      details: "Developed an intelligent system that integrates AI, machine learning, deep learning algorithms, and IoT sensors to monitor and predict water levels. Built both the mobile and desktop applications using Flutter and contributed to improving the accuracy and performance of AI models."
    },
    {
      id: 2,
      title: "Islami App",
      shortDescription: "Mobile application for Islamic content (Route Diploma).",
      technologies: ["Flutter", "Dart", "API"],
      imageUrl: "/assets/images/islami-app.png",
      details: "Created a mobile app for Islamic resources during the Route IT Training Center diploma, focusing on API integration, a clean and user-friendly UI, and efficient data handling."
    },
    {
      id: 3,
      title: "Restaurant Website",
      shortDescription: "Simple responsive restaurant website (ITI Task).",
      technologies: ["HTML", "CSS", "Bootstrap"],
      imageUrl: "/assets/images/restaurant-website.png",
      details: "Designed and developed a responsive static website for a restaurant as part of the ITI training program. The project focused on Bootstrap components, layout design, and mobile responsiveness."
    },
    {
      id: 4,
      title: "Connect4 Game App",
      shortDescription: "The classic Connect4 game in C# (ITI Task).",
      technologies: ["C#", ".NET", "OOP", "Windows Forms"],
      imageUrl: "/assets/images/connect4-app.png",
      details: "Built a desktop version of the classic Connect 4 game using Windows Forms in C#, applying object-oriented programming concepts and clean code structure to implement the game logic."
    },
    {
      id: 5,
      title: "To-Do List App",
      shortDescription: "A classic To-Do list application.",
      technologies: ["Flutter", "Dart", "State Management"],
      imageUrl: "/assets/images/todo-app.png",
      details: "Developed a simple and functional task management app to organize daily activities, built with Flutter and demonstrating state management principles."
    }
  ];

  constructor() { }

  getProjects(): Project[] {
    return this.projects;
  }

  getProjectById(id: number): Project | undefined {
    return this.projects.find(p => p.id === id);
  }
}

