import React, { useEffect } from 'react';
import { useAdaptivity, AppRoot, SplitLayout, SplitCol, ViewWidth, PanelHeader, Root } from '@vkontakte/vkui';
import './App.css';
import { LoadingView } from './views/LoadingView';
import { QuickGuideView } from './views/QuickGuideView';
import bridge from '@vkontakte/vk-bridge';
import { HomeView } from './views/HomeView';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';

export function App(): JSX.Element {
	const { viewWidth } = useAdaptivity();
	const { route } = useSelector((state: RootState) => state);

	useEffect(() => {
		bridge.send('VKWebAppGetUserInfo');
	}, []);

	return (
		<AppRoot>
			<SplitLayout header={<PanelHeader separator={false} />}>
				<SplitCol spaced={viewWidth && viewWidth > ViewWidth.MOBILE}>
					<Root activeView={route}>
						<LoadingView id={'loadingView'} />
						<QuickGuideView id={'quickGuideView'} />
						<HomeView id={'homeView'} />
					</Root>
				</SplitCol>
			</SplitLayout>
		</AppRoot>
	);
}
