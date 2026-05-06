import SpecialistPlaceholder from '@/shared/assets/images/placeholder.svg';

export type LOCATIONS = 'center' | 'buiucani';

export interface Specialist {
  id: string;
  token: string;
  image: string;
  location: LOCATIONS[];
  tags: string[]
}

export const SPECIALISTS_LIST: Specialist[] = [
  { id: 'sp8', token: 'specialists:team.sp8', image: '/images/team/eugenia_poleacova.webp', location: ['buiucani', 'center'], tags: ['specialist'] },
  { id: 'sp1', token: 'specialists:team.sp1', image: '/images/team/marina_jarrar.webp', location: ['buiucani'], tags: ['specialist'] },
  { id: 'sp2', token: 'specialists:team.sp2', image: '/images/team/daria_carpova.webp', location: ['buiucani'], tags: ['specialist'] },
  { id: 'sp3', token: 'specialists:team.sp3', image: '/images/team/svetlana_portnov.webp', location: ['buiucani'], tags: ['specialist'] },
  { id: 'sp12', token: 'specialists:team.sp12', image: '/images/team/svetlana_iarovaia.webp', location: ['center'], tags: ['specialist'] },
  { id: 'sp13', token: 'specialists:team.sp13', image: '/images/team/tatiana_creciun.webp', location: ['center'], tags: ['specialist'] },
  { id: 'sp14', token: 'specialists:team.sp14', image: '/images/team/angela_luta.webp', location: ['center'], tags: ['specialist'] },
  { id: 'sp15', token: 'specialists:team.sp15', image: '/images/team/ksenia_kolesnichenko.webp', location: ['center'], tags: ['specialist'] },
  { id: 'sp6', token: 'specialists:team.sp6', image: '/images/team/melisa_zaltur.webp', location: ['center'], tags: ['specialist'] },
  { id: 'sp5', token: 'specialists:team.sp5', image: '/images/team/madalina_sinchevici.webp', location: ['buiucani'], tags: ['specialist'] },
  { id: 'sp4', token: 'specialists:team.sp4', image: '/images/team/jana_craciun.webp', location: ['buiucani'], tags: ['specialist'] },
  { id: 'sp7', token: 'specialists:team.sp7', image: '/images/team/irina_voznevscaia.webp', location: ['buiucani'], tags: ['specialist'] },
  { id: 'sp9', token: 'specialists:team.sp9', image: '/images/team/veaceslav_poleacov.webp', location: ['center'], tags: ['administrator'] },
  { id: 'sp10', token: 'specialists:team.sp10', image: '/images/team/alena_trofimov.webp', location: ['buiucani', 'center'], tags: ['administrator'] },
  { id: 'sp11', token: 'specialists:team.sp11', image: '/images/team/alina_kravets.webp', location: ['buiucani'], tags: ['administrator'] },
];
