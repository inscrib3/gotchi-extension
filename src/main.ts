import { render } from './routes';
import './style.css'

import * as Sentry from '@sentry/browser';
import { CaptureConsole } from '@sentry/integrations';

Sentry.init({
  dsn: 'https://6289575241ec47db88cfc233f8efb0fc@o4505511446642688.ingest.sentry.io/4505511448608768',
  integrations: [
    new CaptureConsole({
      levels: ['log']
    })
  ],
  release: '1.0.0',
  environment: 'prod',
  maxBreadcrumbs: 50
})

render()
