import path from 'path';
import React from 'react';
import { createReactAppExpress } from '@cra-express/core';

let Ssr = require('../src/Ssr').default;
const clientBuildPath = path.resolve(__dirname, '../client');

const app = createReactAppExpress({
  clientBuildPath,
  universalRender: (req, res) => <Ssr />,
});

if (module.hot) {
  module.hot.accept('../src/Ssr', () => {
    Ssr = require('../src/Ssr').default;
    console.log('✅ Server hot reloaded App');
  });
}

export default app;
