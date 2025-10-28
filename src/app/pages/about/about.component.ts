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
  profile = {
    name: "Ahmed Wael Mohamed Elawady",
    title: "Computers and Systems Engineer | Full-Stack .NET Developer Trainee",
    summary: "I’m a highly motivated Computers and Systems Engineering graduate with Excellent with Honors from the Faculty of Engineering. I’m passionate about using technology to create smart and practical solutions that make an impact. In 2023, I trained at Route IT Training Center, where I studied Flutter and gained hands-on experience in mobile app development. Currently, I’m expanding my skillset as a Full-Stack .NET Developer trainee at ITI – Alexandria branch, building a stronger foundation in software engineering and web technologies. During my academic journey, I worked on an AI/IoT-based Water Level Prediction System, a project that combined innovation with real-world problem-solving. I enjoy working in collaborative environments and bring strong problem-solving, communication, and time management skills to every team I join. I’m always eager to learn, grow, and take on new challenges in today’s dynamic tech world.",
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

