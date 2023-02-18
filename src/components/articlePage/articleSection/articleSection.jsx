import { Typography, Stack, Button, Box } from '@mui/material';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import theme from '../../../styles/theme';
import useMediaQuery from '@mui/material/useMediaQuery';
import { convertDate } from '../../utils/utils';
import CommentsListSection from './commentsSection/commentsListSection';
import MobileCommentsListWrapper from './commentsSection/mobileCommentsListSection';
import AddCommentForm from './commentsSection/addCommentForm';
const TextContainer = styled(Box)(() => ({
  paddingRight: '20px',
  overflow: 'scroll',
}));

export default function ArticleSection() {
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const [showComments, setShowComments] = useState(false);

  const article = {
    id: '56c782f1978fdf9a0100df52',
    date: '2020-06-03T15:03:23.000Z',
    title: 'Hello world title',
    text: 'Culpa dolor deserunt veniam irure amet officia excepteur labore nisi labore ad labore laborum aute. Ea irure sit exercitation ex. Aliquip dolore duis ullamco labore qui. Et anim irure laborum quis ipsum. Adipisicing culpa est ea velit veniam dolor nisi. Sit cupidatat velit commodo eu.\n\nUt nulla ut irure cillum irure sint sunt cupidatat tempor laboris incididunt elit occaecat fugiat. Reprehenderit enim cupidatat consectetur pariatur ad pariatur consequat veniam do fugiat Lorem laborum do velit. Nulla aute magna magna nisi officia et. Aute adipisicing eu eiusmod tempor exercitation sint non enim laboris dolor adipisicing.\n\nEa do sint pariatur voluptate ad culpa irure. Cillum pariatur deserunt fugiat elit. Exercitation labore amet deserunt magna. Velit veniam aute officia aliqua ipsum veniam pariatur. Aliquip ullamco fugiat officia non sunt ad consequat ipsum est esse commodo reprehenderit. Ad quis consectetur est exercitation fugiat eiusmod. Laborum reprehenderit esse qui irure.Culpa dolor deserunt veniam irure amet officia excepteur labore nisi labore ad labore laborum aute. Ea irure sit exercitation ex. Aliquip dolore duis ullamco labore qui. Et anim irure laborum quis ipsum. Adipisicing culpa est ea velit veniam dolor nisi. Sit cupidatat velit commodo eu.\n\nUt nulla ut irure cillum irure sint sunt cupidatat tempor laboris incididunt elit occaecat fugiat. Reprehenderit enim cupidatat consectetur pariatur ad pariatur consequat veniam do fugiat Lorem laborum do velit. Nulla aute magna magna nisi officia et. Aute adipisicing eu ei',
  };
  return (
    <>
      <Stack direction="column" spacing={2}>
        <Typography variant="h4">{article.title}</Typography>
        <Typography variant="h5" fontWeight={300}>
          {convertDate(article.date)}
        </Typography>
        <TextContainer
          sx={{
            maxHeight: {
              xs: '430px',
              sm: '550px',
            },
          }}
        >
          <Typography variant="body">{article.text}</Typography>
        </TextContainer>
      </Stack>
      <Stack
        direction="row"
        spacing={2}
        justifyContent={'flex-end'}
        my={1}
        mb={2}
      >
        <Button
          onClick={() => {
            setShowComments(!showComments);
          }}
          sx={{ width: '170px' }}
          variant="contained"
        >
          {showComments ? 'hide comments' : 'show comments'}
        </Button>
        <AddCommentForm />
      </Stack>

      {matches ? (
        <MobileCommentsListWrapper
          showComments={showComments}
          setShowComments={setShowComments}
        >
          <CommentsListSection />
        </MobileCommentsListWrapper>
      ) : (
        <>{showComments && <CommentsListSection />}</>
      )}
    </>
  );
}
