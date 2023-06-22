import { createRoot } from 'react-dom/client';
import './index.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ViewSinglePost } from './views/ViewSinglePost/ViewSinglePost';
import { Footer } from './components/footer/footer';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import React from 'react';
import { Navbar } from './components/navbar/navbar';
import { ChakraProvider, Stack } from '@chakra-ui/react';
import { Home } from './views/home/home';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Imprint } from './views/imprint/imprint';

const container = document.getElementById('root');
const root = createRoot(container!);

const client = new ApolloClient({
  uri: import.meta.env.VITE_GRAPHQL_URL,
  cache: new InMemoryCache(),
});

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ChakraProvider>
        <Navbar />
        <div
          style={{
            display: 'block',
            height: '50.5px',
          }}
        />
        {/* INFO calc used to fill page fully, if no posts are being shown and footer is on bottom */}
        <Stack minHeight={'calc(100vh - 98.5px)'} padding="0 15px">
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/articles/:id" component={ViewSinglePost} />
              <Route path="/imprint" component={Imprint} />
            </Switch>
          </Router>
        </Stack>

        <Footer />
      </ChakraProvider>
    </ApolloProvider>
  </React.StrictMode>,
);
