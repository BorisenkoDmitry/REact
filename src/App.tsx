import { hot } from 'react-hot-loader/root';
import React from "react";

import './main.global.css'
import {Layout} from './shared/layout/Layout';
import { HeaderComponent } from './shared/header/header';
import { ContentComponent } from './shared/content';

function AppComponent() {

    return (
        <Layout>
            <HeaderComponent />
            <ContentComponent />
        </Layout>
    );
}
export const App = hot(AppComponent);