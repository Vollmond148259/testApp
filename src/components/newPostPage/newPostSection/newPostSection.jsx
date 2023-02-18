import {
  Box,
  Paper,
  Typography,
  TextField,
  Stack,
  Button,
} from '@mui/material';
export default function newPostSection() {
  return (
    <>
      <Box
        display={'flex'}
        justifyContent="center"
        alignItems="center"
        sx={{ width: '100%', height: '100vh' }}
      >
        <Paper
          sx={{
            backgroundColor: '#1876d1',
            padding: '20px',
            width: '600px',
          }}
        >
          <Typography
            variant="h6"
            color="white"
            sx={{ textTransform: 'upperCase' }}
          >
            Create article
          </Typography>
          <Stack mt={2} direction="column" spacing={2}>
            <TextField
              fullWidth
              placeholder="Title"
              variant="outlined"
              sx={{ backgroundColor: 'white', borderRadius: '16px' }}
            />
            <TextField
              placeholder="Text"
              sx={{ backgroundColor: 'white', borderRadius: '16px' }}
              fullWidth
              variant="outlined"
              multiline
              maxRows={5}
            />
            <Box display="flex" justifyContent="flex-end">
              <Button sx={{ width: '170px' }} variant="outlined">
                Create
              </Button>
            </Box>
          </Stack>
        </Paper>
      </Box>
    </>
  );
}
