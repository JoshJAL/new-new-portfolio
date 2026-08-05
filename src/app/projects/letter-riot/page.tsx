import ProjectPage from '@/components/projects/ProjectPage';
import LetterRiot from '@/public/projects/letter-riot.png';

export default function Page() {
  return (
    <ProjectPage href='https://letterriot.com/' title='LetterRiot' image={LetterRiot} imageWide tech={[]}>
      <p>
        LetterRiot is a no-filter word game designed for solo sessions, local game nights, and shared online rooms. The
        same core game can be played alone, passed around in person, or opened to remote players without changing the
        quick, social feel.
      </p>
      <p>
        Casual play supports fast rounds, including games that allow two-letter words. Ranked rooms add point-based
        competition and placement tracking for players who want a more structured challenge.
      </p>
      <p>
        The result is a flexible word game that works equally well as a short solo break, an informal party game, or an
        ongoing online competition.
      </p>
    </ProjectPage>
  );
}
