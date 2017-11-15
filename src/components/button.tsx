import * as React from 'react';
import {properties, stylable} from 'wix-react-tools';

import style from './button.st.css';

interface ButtonProps extends properties.Props {
    mainFile: string;
}

export const Button = stylable(style)(properties((props: ButtonProps) => (
    <button>
            <div className="icon"/>
            <span className="label">Click Here!</span>
        </button>
)));
