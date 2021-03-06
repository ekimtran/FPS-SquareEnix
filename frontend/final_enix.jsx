import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { logout } from './actions/sessions_action';




document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store;

    window.logout = logout
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        const preloadedState = { ui: { modal: 'signup' } };
        store = configureStore();
    }


    window.getState = store.getState;
    window.dispatch = store.dispatch;

    ReactDOM.render(<Root store={store} />, root);

})