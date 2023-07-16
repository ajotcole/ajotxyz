import { createRoot } from 'react-dom/client';
import './index.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SinglePost } from './views/singlePost/singlePost';
import { Footer } from './components/footer/footer';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import React from 'react';
import { Navbar } from './components/navbar/navbar';
import { ChakraProvider, Stack } from '@chakra-ui/react';
import { Home } from './views/home/home';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Imprint } from './views/imprint/imprint';
import { NotFound } from './views/notFound/notFound';

const container = document.getElementById('root');
const root = createRoot(container!);

const client = new ApolloClient({
  uri: `${import.meta.env.VITE_STRAPI_URL}/graphql`,
  cache: new InMemoryCache(),
});

//TODO remove after environement variables work
console.log(import.meta.env);

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
        {/* INFO calc used to fill page fully, if no posts are being shown and footer is on bottom  */}
        <Stack minHeight={'calc(100vh - 98.5px)'} padding="0 15px">
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/articles/:id" component={SinglePost} />
              <Route path="/imprint" component={Imprint} />
              <Route path="*" component={NotFound} />
            </Switch>
          </Router>
        </Stack>

        <Footer />
      </ChakraProvider>
    </ApolloProvider>
  </React.StrictMode>,
);
