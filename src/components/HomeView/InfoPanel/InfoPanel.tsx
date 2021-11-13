import React, { useState } from 'react';
import { Panel, Title, Button } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import '../QrCodePanel.css';
import { Icon24ChevronLeft } from '@vkontakte/icons';
import './InfoPanel.css';

export function InfoPanel({ id, setActivePanel }: { id: string; setActivePanel: any }): JSX.Element {
	const { vkEvents } = useSelector((state: RootState) => state);

	return (
		<Panel id={id} centered>
			<div className={'info__root'}>
				<Button
					mode={'secondary'}
					before={<Icon24ChevronLeft />}
					onClick={() => setActivePanel('mainHomePanel')}
					className={'back_button'}
				/>
				<Title level={'1'} weight={'medium'} className={'view_title'}>
					Справка
				</Title>
				<div className={'info__content'}>Тут скоро будет справочный раздел, я дорисовываю макеты...</div>
			</div>
		</Panel>
	);
}
