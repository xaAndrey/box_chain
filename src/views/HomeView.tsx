import React, { useState } from 'react';
import { View, Panel, Progress, Text, Title, List, Cell, Avatar } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import './HomeView.css';
import { Icon24GiftOutline } from '@vkontakte/icons';
import { Icon28TshirtOutline } from '@vkontakte/icons';
import { Icon24CupOutline } from '@vkontakte/icons';
import { Icon24Qr } from '@vkontakte/icons';
import { Icon24CrownOutline } from '@vkontakte/icons';
import { Icon24HelpOutline } from '@vkontakte/icons';
import { TestAvatar } from '../components/TestAvatar';
import messageCloud from '../img/homePage/messageCloud.svg';
import { QrCodePanel } from '../components/HomeView/QrCodePanel';
import { RatingPanel } from '../components/HomeView/RatingPanel';
import { useSwipeable } from 'react-swipeable';
import { MarketPanel } from '../components/HomeView/MarketPanel/MarketPanel';
import { PopoutProvider } from '../context/PopoutProvider';
import { InfoPanel } from '../components/HomeView/InfoPanel/InfoPanel';
import coin from '../img/coin.svg';
import star from '../img/star.svg';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export type Panels =
	| 'mainHomePanel'
	| 'customizationPanel'
	| 'qrCodePanel'
	| 'ratingPanel'
	| 'marketPanel'
	| 'achievementsPanel'
	| 'mapPanel'
	| 'infoPanel';

export function HomeView({ id }: { id: string }): JSX.Element {
	const { vkEvents } = useSelector((state: RootState) => state);
	const [activePanel, setActivePanel] = useState<Panels>('mainHomePanel');
	const handlers = useSwipeable({
		onSwipedUp: () => setIsExpanded(true),
		onSwipedDown: () => setIsExpanded(false),
		trackMouse: true,
	});
	const [isExpanded, setIsExpanded] = useState<boolean>(false);
	const [popout, setPopout] = useState(null);

	return (
		<PopoutProvider value={{ popout, setPopout }}>
			<View id={id} activePanel={activePanel} popout={popout}>
				<Panel id={'mainHomePanel'} centered>
					<div className={'home_root'}>
						<img src={messageCloud} alt={'message'} className={'message_cloud'} />
						<Title level={'2'} weight={'medium'} className={'message_cloud_title'}>
							Киса:
						</Title>
						<Text weight={'medium'} className={'message_cloud_text'}>
							Ты все еще не сортируешь отходы? Сейчас самое время!
						</Text>
						<div className={'mascot'}>
							<TestAvatar color={'green'} />
						</div>
						<div className={'bottom_panel' + (isExpanded ? ' expanded' : '')} {...handlers}>
							<span className={'bottom_panel__points'}>...</span>
							{isExpanded && (
								<List className={'home__list'}>
									<Cell before={<Avatar src={star} />}>Собрать 150 батареек (100/150)</Cell>
									<Cell before={<Avatar src={star} />}>Сдать 10кг макулатуры (9/10)</Cell>
									<Cell before={<Avatar src={coin} />}>300</Cell>
									<Cell before={<Avatar src={vkEvents.userInfo.data.photo_200} />}>
										Уровень 2 (75/200)
									</Cell>
								</List>
							)}
							<Progress value={40} className={'bottom_panel__progressbar'} />
							<div className={'home__toolbar'}>
								<div className={'toolbar__button green'} onClick={() => setActivePanel('marketPanel')}>
									<Icon24GiftOutline width={40} height={40} />
								</div>
								<div className={'toolbar__button orange'} onClick={() => setActivePanel('ratingPanel')}>
									<Icon24CupOutline width={40} height={40} />
								</div>
								<div className={'toolbar__button blue'}>
									<Icon24CrownOutline width={40} height={40} />
								</div>
								<div className={'toolbar__button orange'}>
									<Icon28TshirtOutline width={40} height={40} />
								</div>
								<div className={'toolbar__button green'} onClick={() => setActivePanel('qrCodePanel')}>
									<Icon24Qr width={40} height={40} />
								</div>
								<div className={'toolbar__button blue'}>
									<Icon24HelpOutline
										width={40}
										height={40}
										onClick={() => setActivePanel('infoPanel')}
									/>
								</div>
							</div>
						</div>
					</div>
				</Panel>
				<QrCodePanel id={'qrCodePanel'} setActivePanel={setActivePanel} />
				<RatingPanel id={'ratingPanel'} setActivePanel={setActivePanel} />
				<MarketPanel id={'marketPanel'} setActivePanel={setActivePanel} />
				<InfoPanel id={'infoPanel'} setActivePanel={setActivePanel} />
			</View>
		</PopoutProvider>
	);
}
