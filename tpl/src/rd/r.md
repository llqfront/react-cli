#### 安装
```cmd
    yarn add @rematch/core
```
#### 导入
```tsx
    react/react-cli/tpl/src/App.tsx
    import {Provider} from 'react-redux';
    import {store} from '@/core/';
    <Provider store={store}>
    </Provider>

    import React from 'react';

    import { BrowserRouter, HashRouter} from 'react-router-dom';
    import {Provider} from 'react-redux';
    import Router from '@/router/';
    import {store} from '@/core/';

    const App = () => (
        <BrowserRouter>
            <Provider store={store}>
                <Router/>
            </Provider>
        </BrowserRouter>
    )
    export default App;
```
#### init store
```ts
react/react-cli/tpl/src/core/index.ts
```
#### model
```ts
react/react-cli/tpl/src/models/index.ts
```

#### view 页面
```tsx
类组件
react/react-cli/tpl/src/views/Rematch/index.tsx
函数组件
react/react-cli/tpl/src/views/Rematchfn/index.tsx
```
