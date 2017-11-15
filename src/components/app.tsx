import * as React from 'react';
import {properties, stylable} from 'wix-react-tools';

import {Header} from './header';
import {Content} from './content';
import style from './app.st.css';
import {CheckBox} from './components/checkbox/src/components/checkbox';
import {Button} from './button';

export const App: React.SFC = stylable(style)(properties(() => (
    <div>
        <Header message="Welcome to React with Stylable" />
        <Content mainFile="src/index.tsx" />
        <CheckBox />
        <Button mainFile="src/index.tsx" />
    </div>
)));
