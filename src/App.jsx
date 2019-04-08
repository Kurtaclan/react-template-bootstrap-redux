import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loading from './components/elements/Loading';
import Layout from './components/Layout';
const Home = React.lazy(() => import('./components/Home'));

export default () => (
    <Layout>
        <React.Suspense fallback={<Loading padding='p-5' margin='m-3' />}>
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
        </React.Suspense>
    </Layout>
);