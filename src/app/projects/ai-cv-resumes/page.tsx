import ProjectPage from '@/components/projects/ProjectPage';
import AiCvResumes from '@/public/projects/ai-cv-resumes.png';

export default function Page() {
  return (
    <ProjectPage href='https://www.aicvresumes.com/' title='AI CV Resumes' image={AiCvResumes} imageWide tech={[]}>
      <p>
        AI CV Resumes is a reusable career-profile and job-application toolkit. Users can save their work history,
        education, projects, and skills once, then keep that information current in one organized place instead of
        rebuilding a resume for every application.
      </p>
      <p>
        When a role needs more specific materials, users can save the job details and generate a tailored resume and
        cover letter that emphasize the most relevant experience. The general resume remains reusable while targeted
        documents are available when they add value.
      </p>
      <p>
        A built-in application tracker keeps saved roles and application progress alongside the documents, turning the
        product into a central workspace for managing a job search from profile to submission.
      </p>
    </ProjectPage>
  );
}
