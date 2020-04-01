import React from 'react';
import ReactDOM from 'react-dom';
import bridge from "@vkontakte/vk-bridge";
import App from './App';
import { RouterProvider } from 'react-router5'
import createRouter from './create-router'

bridge.send('VKWebAppInit', {});

const router = createRouter()

router.start(() => {
    ReactDOM.render((
        <RouterProvider router={router}>
            <App router={router}/>
        </RouterProvider>
    ), document.getElementById('root'))
})
