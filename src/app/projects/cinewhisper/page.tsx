import ProjectPage from '@/components/projects/ProjectPage';
import CineWhisper from '@/public/projects/cinewhisper.png';

export default function Page() {
  return (
    <ProjectPage href='https://www.cinewhisper.com/' title='CineWhisper' image={CineWhisper} imageWide tech={[]}>
      <p>
        CineWhisper is a conversational film and show recommender built around the way people actually describe what
        they want to watch. Users can share their mood, their taste, or the last title they loved instead of working
        through a long series of filters.
      </p>
      <p>
        The conversation can ask follow-up questions to narrow the experience, then return curated recommendations with
        real ratings and streaming information directly in the chat.
      </p>
      <p>
        It replaces endless browsing with a focused exchange, making it easier to find something thoughtful, familiar,
        surprising, or simply right for the evening.
      </p>
    </ProjectPage>
  );
}
