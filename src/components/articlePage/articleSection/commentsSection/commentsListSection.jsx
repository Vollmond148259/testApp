import List from '@mui/material/List';
import { comments } from '../../../mainPage/postsSection/constant';
import Comment from './comment/comment';
import map from 'lodash/map';
import theme from '../../../../styles/theme';
export default function CommentsListSection() {
  return (
    <>
      <List
        sx={{
          width: '100%',

          borderRadius: '8px',
          bgcolor: theme.pallete.background.paper,
        }}
      >
        {map(comments, (comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </List>
    </>
  );
}
