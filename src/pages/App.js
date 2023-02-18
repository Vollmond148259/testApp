import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import PropTypes from 'prop-types';
import createEmotionCache from '../styles/createEmotionCache';
import theme from '../styles/theme';
import Home from '../components/mainPage';
import CreatePostPage from './createPostPage';
import Layout from '../components/layout/layout';
import PostPage from './articlePage';
App.propTypes = {
  emotionCache: PropTypes.object,
};
const clientSideEmotionCache = createEmotionCache();
function App({ emotionCache = clientSideEmotionCache }) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          {/* <CreatePostPage /> */}
          <Home />
          {/* <PostPage /> */}
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
