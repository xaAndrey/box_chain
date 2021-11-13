import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import { AdaptivityProvider, ConfigProvider } from '@vkontakte/vkui';
import bridge from '@vkontakte/vk-bridge';
import '@vkontakte/vkui/dist/vkui.css';
import store from './store/store';
import { Provider } from 'react-redux';
import { setVkEventData } from './store/vkEvents';

// init app and listen to vk events
bridge.subscribe((e) => {
	store.dispatch(setVkEventData(e.detail));
});
bridge.send('VKWebAppInit', {});

ReactDOM.render(
	<ConfigProvider scheme='space_gray'>
		<AdaptivityProvider>
			<Provider store={store}>
				<App />
			</Provider>
		</AdaptivityProvider>
	</ConfigProvider>,
	document.getElementById('root'),
);
