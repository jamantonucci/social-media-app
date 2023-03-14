import PageContainer from "../../components/PageContainer";
import Posts from '../../components/Posts';

export default function HomePage() {
  return (
    <PageContainer title="Welcome!">
      <h2>Promoted Posts:</h2>
      <Posts showOnlyPromoted={true} />
    </PageContainer>
  );
}
