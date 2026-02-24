import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  skills = [
    { name: 'Angular', icon: 'svglAngular' },
    { name: 'NestJS', icon: 'svglNestjs' },
    { name: 'MongoDB', icon: 'svglMongodb' },
    { name: 'SQL Server', icon: 'svglSqlServer' },
    { name: 'Azure', icon: 'svglAzure' },
    { name: 'Firebase', icon: 'svglFirebase' },
    { name: 'GithubDark', icon: 'svglGithubDark' },
    { name: 'Javascript', icon: 'svglJavascript' },
    { name: 'MySQL', icon: 'svglMysql' },
    { name: 'NodeJS', icon: 'svglNodejs' },
    { name: 'React', icon: 'svglReact' },
    { name: 'Python', icon: 'svglPython' },
    { name: 'Supabase', icon: 'svglSupabase' },
    { name: 'Cypress', icon: 'svglCypress' },
    { name: 'C#', icon: 'svglCsharp' },
  ];

  projects = [
    {
      name: 'Project 1',
      description: 'Description of Project 1',
      imageUrl:
        'https://tse1.mm.bing.net/th/id/OIP.8T5AeApbz9mT0n5SZ-M1OAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3',
      projectUrl: 'https://example.com/project1',
    },
    {
      name: 'Project 2',
      description: 'Description of Project 2',
      imageUrl:
        'https://tse1.mm.bing.net/th/id/OIP.8T5AeApbz9mT0n5SZ-M1OAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3',
      projectUrl: 'https://example.com/project2',
    },
    {
      name: 'Project 3',
      description: 'Description of Project 3',
      imageUrl:
        'https://tse1.mm.bing.net/th/id/OIP.8T5AeApbz9mT0n5SZ-M1OAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3',
      projectUrl: 'https://example.com/project3',
    },
    {
      name: 'Project 1',
      description: 'Description of Project 1',
      imageUrl:
        'https://tse1.mm.bing.net/th/id/OIP.8T5AeApbz9mT0n5SZ-M1OAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3',
      projectUrl: 'https://example.com/project1',
    },
    {
      name: 'Project 2',
      imageUrl:
        'https://tse1.mm.bing.net/th/id/OIP.8T5AeApbz9mT0n5SZ-M1OAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3',
      projectUrl: 'https://example.com/project2',
    },
    {
      name: 'Project 3',
      description: 'Description of Project 3',
      imageUrl:
        'https://tse1.mm.bing.net/th/id/OIP.8T5AeApbz9mT0n5SZ-M1OAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3',
      projectUrl: 'https://example.com/project3',
    },
    {
      name: 'Project 1',
      description: 'Description of Project 1',
      imageUrl:
        'https://tse1.mm.bing.net/th/id/OIP.8T5AeApbz9mT0n5SZ-M1OAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3',
      projectUrl: 'https://example.com/project1',
    },
    {
      name: 'Project 2',
      description: 'Description of Project 2',
      imageUrl:
        'https://tse1.mm.bing.net/th/id/OIP.8T5AeApbz9mT0n5SZ-M1OAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3',
      projectUrl: 'https://example.com/project2',
    },
    {
      name: 'Project 3',
      description: 'Description of Project 3',
      imageUrl:
        'https://tse1.mm.bing.net/th/id/OIP.8T5AeApbz9mT0n5SZ-M1OAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3',
      projectUrl: 'https://example.com/project3',
    },
  ];
  constructor() {}

  getSkills() {
    return this.skills;
  }

  getProjects() {
    return this.projects;
  }
}
