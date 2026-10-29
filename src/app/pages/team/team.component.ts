import { Component, ChangeDetectionStrategy } from '@angular/core';

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
  link?: string;
}

@Component({
  selector: 'app-team',
  standalone: true,
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamComponent {
  readonly members: TeamMember[] = [
    {
      name: 'Sqwack',
      role: 'Président',
      image: 'sqwack.png',
      description: '',
      link: 'https://linktr.ee/sqwack'
    },
    {
      name: 'Demonoidmaniac',
      role: 'Vice-Président',
      image: 'demonoid_maniac.png',
      description: ''
    },
    {
      name: 'Crookies',
      role: 'Secrétaire',
      image: 'crokies.png',
      description: ''
    },
    {
      name: 'Erkiel',
      role: 'Trésorier',
      image: 'erkiel.png',
      description: '',
      link: 'https://linktr.ee/erkiel_'
    }
  ];
}
