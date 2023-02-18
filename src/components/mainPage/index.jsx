import { Container, Box } from '@mui/material';
import PostsSection from './postsSection/postsSection';
import FilterSection from './filterSection/filterSection';
export default function Home() {
  return (
    <>
      <Container>
        <Box>
          <Box my={4}>
            <FilterSection />
          </Box>
          <PostsSection />
        </Box>
      </Container>
    </>
  );
}
