import { cssBundleHref } from '@remix-run/css-bundle';
import type { LinksFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { TweetProvider } from '~/contexts/TweetProvider';
import stylesHref from '~/styles/style.css';
import resetCSS from '~/styles/reset.css';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: resetCSS },
  { rel: 'stylesheet', href: stylesHref },
  // Google Font for Nabla, Source Code Pro
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Nabla&family=DotGothic16&family=Source+Code+Pro:ital,wght@0,600;0,900;1,300;1,400;1,700&display=swap',
  },
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
];

export default function App() {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body>
        <TweetProvider>
          <Outlet />
        </TweetProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
