import { Box, Grid, Pagination } from '@mui/material';
import { articles } from './constant';
import map from 'lodash/map';
import PostCard from './postCard/postCard';

function PostsSection() {
  return (
    <>
      <Grid px={1} container rowSpacing={{ xs: 1.5, md: 4 }} columnSpacing={4}>
        {map(articles, (article) => (
          <Grid key={articles.id} item xs={12} sm={12} md={6}>
            <PostCard article={article} />
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{ marginTop: { xs: 2, sm: 3, md: 4 } }}
        display="flex"
        justifyContent={{ xs: 'center', md: 'flex-end' }}
      >
        <Pagination count={10} color="primary" />
      </Box>
    </>
  );
}
export default PostsSection;
