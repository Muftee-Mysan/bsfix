// Team members shown on the Project page. Photos live in src/assets/photos/team/.
// `focus` is the CSS object-position used when cropping the photo to a 4:5 portrait.
import demitha from '../assets/photos/team/demitha.jpeg';
import muftee from '../assets/photos/team/muftee.jpg';
import chamudi from '../assets/photos/team/chamudi.jpeg';
import lithira from '../assets/photos/team/lithira.jpeg';
import rusiru from '../assets/photos/team/rusiru.jpeg';

export const team = [
  { name: 'Mandu Demitha Manawadu', role: 'Project leader', photo: demitha, focus: 'center 30%' },
  { name: 'Muftee Mysan', role: 'Tech lead', photo: muftee, focus: 'center 25%' },
  { name: 'Chamudi Gamage', role: 'Business lead', photo: chamudi, focus: 'center 20%' },
  // TODO: full names and roles for Lithira and Rusiru.
  { name: 'Lithira', role: '', photo: lithira, focus: '50% 30%', todo: 'TODO: full name' },
  { name: 'Rusiru', role: '', photo: rusiru, focus: 'center 25%', todo: 'TODO: full name' },
];
