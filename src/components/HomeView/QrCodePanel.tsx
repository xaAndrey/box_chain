import React from 'react';
import { Panel, Title, Button } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import './QrCodePanel.css';
import QRCode from 'react-qr-code';

export function QrCodePanel({ id, setActivePanel }: { id: string; setActivePanel: any }): JSX.Element {
	const { vkEvents } = useSelector((state: RootState) => state);

	return (
		<Panel id={id} centered>
			<div className={'qr_root bg_qr'}>
				<div className={'qr_border'}>
					<QRCode value={vkEvents.userInfo.data.id.toString()} size={300} />
					<Title level={'1'} weight={'medium'} className={'qr_bottom_panel__desc'}>
						{vkEvents.userInfo.data.id}
					</Title>
				</div>
				<div className={'qr_bottom_panel'}>
					<Title level={'2'} weight={'medium'} className={'qr_bottom_panel__desc'}>
						Поместите этот код перед сканером точки сбора
					</Title>
					<Button
						mode={'secondary'}
						size={'l'}
						stretched
						className={'qr__button'}
						onClick={() => setActivePanel('mainHomePanel')}
					>
						ГОТОВО
					</Button>
				</div>
			</div>
		</Panel>
	);
}
