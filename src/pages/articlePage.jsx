import ArticleSection from '../components/articlePage/articleSection/articleSection';
import { Container, Box } from '@mui/material';
export default function PostPage() {
  return (
    <>
      <Container>
        <Box mt={3} mb={10} px={1}>
          <ArticleSection />
        </Box>
      </Container>
    </>
  );
}
