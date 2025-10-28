import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  backgroundImageUrl: string = 'assets/images/profile.png';

  profile = {
    name: "Ahmed Wael Mohamed Elawady",
    title: "Computers and Systems Engineer | Full-Stack .NET Developer Trainee",
    summary: `I’m a highly motivated Computers and Systems Engineering graduate (Excellent w/ Honors) passionate about leveraging technology to create impactful solutions. Following my graduation in July 2024, I completed a Flutter Development Diploma at Route IT Training Center (Nov 2023). Currently enhancing my skillset as a Full-Stack .NET Developer trainee at ITI – Alexandria branch, focusing on robust software engineering and web technologies. My academic journey included leading the development of an AI/IoT-based Water Level Prediction System, demonstrating innovation and practical problem-solving. I thrive in collaborative environments, bringing strong analytical, communication, and time management skills. Always eager to learn, grow, and embrace new challenges in the dynamic tech world.`,
    track: "Information Technology Institute (ITI) - Full-Stack .NET Development Track"
  };

  skills = {
    mobile: ["Dart", "Flutter Framework"],
    web: ["C#", ".NET", "Angular", "HTML", "CSS", "JavaScript", "TypeScript", "Bootstrap"],
    ai: ["AI & Machine Learning (Basics)", "Python (Basics)"],
    generalProgramming: ["C++ (Basics)"],
    softSkills: [
      "Logical Thinking & Problem-Solving",
      "Teamwork & Collaboration",
      "Presentation Skills",
      "Oral & Written Communication",
      "Conflict Resolution",
      "Time Management",
      "Agile Methodologies"
    ]
  };
}


