import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { ReactLoadable } from '@components/hocs/loadable'
import DefaultLayout from '@components/hocs/default-layout'
import FallbackRoutes from './fallback'

const routes = [{
  path: '/',
  component: () => import(/* webpackChunkName: 'intro' */'@pages/intro')
},
{
  path: '/posts',
  component: () => import(/* webpackChunkName: 'posts' */'@pages/posts')
},
{
  path: '/article',
  component: () => import(/* webpackChunkName: 'article' */'@pages/article')
}]

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        {FallbackRoutes.map((route, index) =>
          <Route
            exact
            key={index}
            path={route.path}
            component={ReactLoadable(route.component)} />
        )}
        {routes.map((route, index) =>
          <DefaultLayout
            exact
            key={index}
            path={route.path}
            component={ReactLoadable(route.component)} />
        )}
        <Redirect to='/404' />
      </Switch>
    </BrowserRouter>
  )
}