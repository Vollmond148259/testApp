import Card from '@mui/material/Card';
import { Button } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { styled, alpha } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import { convertDate } from '../../../utils/utils';
const StyledCard = styled(Card)(({ theme }) => ({
  minWidth: '300px',
  backgroundColor: theme.pallete.background.paper,
  overflow: 'hidden',

  '.MuiCardHeader-root': {
    paddingBottom: 0,
  },
  '.MuiCardHeader-title': {
    fontSize: '18px',
    fontWeight: 500,
  },
  '&:hover': {
    backgroundColor: alpha(theme.pallete.background.paper, 0.55),
  },
}));
const StyledAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.pallete.background.avatar,
}));
const createPrewiew = (text) => {
  let tempArray = text.split(' ');
  return tempArray.slice(0, 15).join(' ');
};

export default function PostCard({ article }) {
  return (
    <StyledCard sx={{ height: '170px' }}>
      <CardHeader
        avatar={<StyledAvatar aria-label="post">R</StyledAvatar>}
        action={
          <IconButton aria-label="settings">
            <DeleteIcon />
          </IconButton>
        }
        title={article.title}
        subheader={convertDate(article.date)}
      />
      <CardContent>
        <Typography variant="body">
          {createPrewiew(article.text)}
          <Button sx={{ textTransform: 'none' }} size="small">
            ...Read More
          </Button>
        </Typography>
      </CardContent>
      <CardActions disableSpacing></CardActions>
    </StyledCard>
  );
}
