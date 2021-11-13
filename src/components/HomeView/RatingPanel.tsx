import React from 'react';
import { Panel, Title, Button, List } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import './QrCodePanel.css';
import { Icon24ChevronLeft } from '@vkontakte/icons';
import './RatingPanel.css';
import topArrow from '../../img/topArrow.svg';

export function RatingPanel({ id, setActivePanel }: { id: string; setActivePanel: any }): JSX.Element {
	const { vkEvents } = useSelector((state: RootState) => state);

	return (
		<Panel id={id} centered>
			<div className={'rating__root'}>
				<Button
					mode={'secondary'}
					before={<Icon24ChevronLeft />}
					onClick={() => setActivePanel('mainHomePanel')}
					className={'back_button'}
				/>
				<Title level={'1'} weight={'medium'} className={'view_title'}>
					Рейтинг
				</Title>
				<div className={'rating__topThree'}>
					<div className={'rating__circle_corner'}>
						<img
							className={'rating__circle_corner'}
							src={vkEvents.userInfo.data.photo_200}
							alt={'avatar'}
						/>
						<Title level={'3'} weight={'medium'} className={'rating__circle_corner_title'}>
							Кек Кекович
						</Title>
					</div>
					<div className={'rating__circle_center'}>
						<img
							className={'rating__circle_center'}
							src={vkEvents.userInfo.data.photo_200}
							alt={'avatar'}
						/>
						<Title level={'3'} weight={'medium'} className={'rating__circle_center_title'}>
							Андрюха Величайший
						</Title>
					</div>
					<div className={'rating__circle_corner'}>
						<img
							className={'rating__circle_corner'}
							src={vkEvents.userInfo.data.photo_200}
							alt={'avatar'}
						/>
						<Title level={'3'} weight={'medium'} className={'rating__circle_corner_title'}>
							Кряк Крякович
						</Title>
					</div>
				</div>
				<List className={'rating__list'}>
					{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((elem, index) => (
						<div className={'rating__list_item'} key={index}>
							<Title level={'2'} weight={'medium'}>
								{elem + 3}. Саня Пушкин
							</Title>
							<Title level={'2'} weight={'medium'}>
								666
							</Title>
						</div>
					))}
				</List>
				<div className={'rating__bottom_panel'}>
					<img className={'rating__arrow'} src={topArrow} alt={'border'} />
					<Title level={'1'} weight={'medium'} className={'rating__bottom_panel__desc'}>
						0 место
					</Title>
					<img className={'rating__arrow'} src={topArrow} alt={'border'} />
				</div>
			</div>
		</Panel>
	);
}
