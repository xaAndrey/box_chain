import React, { useEffect } from 'react';
import { View, Panel, Title } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import './LoadingView.css';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store/store';
import spinner from '../img/loading/spinner.svg';
import logo from '../img/loading/logo.svg';
import { setRoute } from '../store/routes';
import { auth } from '../store/user';

export function LoadingView({ id }: { id: string }): JSX.Element {
	const { vkEvents, user } = useSelector((state: RootState) => state);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (vkEvents.userInfo.data) dispatch(auth(vkEvents.userInfo.data.id));
	}, [vkEvents.userInfo]);

	useEffect(() => {
		setTimeout(() => {
			if (user.status === 200) dispatch(setRoute('homeView'));
			else if (user.status === 404) dispatch(setRoute('quickGuideView'));
		}, 2000);
	}, [user.status]);

	return (
		<View id={id} activePanel={'loadingPanel'}>
			<Panel id={'loadingPanel'} centered>
				{vkEvents.userInfo.data && (
					<div className={'root'}>
						<img src={logo} className={'logo'} alt={'logo'} />
						<Title weight={'bold'} level={'3'} className={'title'}>
							BOX
						</Title>
						<Title weight={'bold'} level={'3'} className={'title'}>
							CHAIN
						</Title>
						<span className={'greeting'}>Привет, {vkEvents.userInfo.data.first_name}!</span>
						<img src={spinner} className={'spinner'} alt={'spinner'} />
					</div>
				)}
			</Panel>
		</View>
	);
}
