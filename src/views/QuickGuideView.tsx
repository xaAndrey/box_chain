import React, { useState } from 'react';
import { View, Panel, Title, Button } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import './QuickGuideView.css';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store/store';
import { Icon20ChevronRightOutline } from '@vkontakte/icons';
import avatarBorder from '../img/greeting/avatarBorder.svg';
import recyclingIcon from '../img/firstGuide/recyclingIcon.svg';
import getGoodsIcon from '../img/SVG/Icons 2.svg';
import levelUpIcon from '../img/SVG/Icons 3.svg';
import { setRoute } from '../store/routes';
import { TestAvatar } from '../components/TestAvatar';

export type Panels = 'startPanel' | 'firstGuidePanel' | 'secondGuidePanel' | 'thirdGuidePanel' | 'configureMascotView';

export function QuickGuideView({ id }: { id: string }): JSX.Element {
	const { vkEvents } = useSelector((state: RootState) => state);
	const [activePanel, setActivePanel] = useState<Panels>('startPanel');
	const dispatch = useAppDispatch();
	const [mascotColor, setMascotColor] = useState<any>('green');

	return (
		<View id={id} activePanel={activePanel}>
			<Panel id={'startPanel'} centered>
				{vkEvents.userInfo.data && (
					<div className={'guide__root'}>
						<img className={'guide__avatarBorder'} src={avatarBorder} alt={'border'} />
						<img className={'guide__avatar'} src={vkEvents.userInfo.data.photo_200} alt={'avatar'} />
						<span className={'guide__title'}>Привет, {vkEvents.userInfo.data.first_name}!</span>
						<span className={'guide__points'}>...</span>
						<Title level={'2'} weight={'medium'} className={'guide__description'}>
							Перед тобой приложение BoxChain, помогающее быстро доставить опасный мусор до точек сдачи.
						</Title>
						<Button
							size={'l'}
							stretched
							after={<Icon20ChevronRightOutline />}
							className={'guide__button white'}
							onClick={() => setActivePanel('firstGuidePanel')}
						>
							ДАЛЬШЕ
						</Button>
					</div>
				)}
			</Panel>
			<Panel id={'firstGuidePanel'} centered>
				<div className={'guide__root'}>
					<img className={'guide__vstu_logo'} src={recyclingIcon} alt={'recyclingIcon'} />
					<div className={'guide__bottom_panel'}>
						<Title level={'1'} weight={'medium'} className={'bottom_panel__title'}>
							Сдавай и получай монетки
						</Title>
						<Title level={'3'} weight={'medium'} className={'bottom_panel__desc'}>
							{/* eslint-disable-next-line react/no-unescaped-entities */}
							Сдавай свой мусор в наши коробочки, чтобы "попутчики" доставили его до места сбора. За это
							ты получишь бонусы!
						</Title>
						<Button
							mode={'secondary'}
							size={'l'}
							stretched
							after={<Icon20ChevronRightOutline />}
							className={'guide__button'}
							onClick={() => setActivePanel('secondGuidePanel')}
						>
							ДАЛЬШЕ
						</Button>
					</div>
				</div>
			</Panel>
			<Panel id={'secondGuidePanel'} centered>
				<div className={'guide__root'}>
					<img className={'guide__vstu_logo'} src={getGoodsIcon} alt={'recyclingIcon'} />
					<div className={'guide__bottom_panel'}>
						<Title level={'1'} weight={'medium'} className={'bottom_panel__title'}>
							Обменивай монетки на вещи
						</Title>
						<Title level={'3'} weight={'medium'} className={'bottom_panel__desc'}>
							Накопленные баллы ты можешь потратить на призы и скидки у наших партнеров.
						</Title>
						<Button
							mode={'secondary'}
							size={'l'}
							stretched
							after={<Icon20ChevronRightOutline />}
							className={'guide__button'}
							onClick={() => setActivePanel('thirdGuidePanel')}
						>
							ДАЛЬШЕ
						</Button>
					</div>
				</div>
			</Panel>
			<Panel id={'thirdGuidePanel'} centered>
				<div className={'guide__root'}>
					<img className={'guide__vstu_logo'} src={levelUpIcon} alt={'recyclingIcon'} />
					<div className={'guide__bottom_panel'}>
						<Title level={'1'} weight={'medium'} className={'bottom_panel__title'}>
							Прокачивай свой уровень
						</Title>
						<Title level={'3'} weight={'medium'} className={'bottom_panel__desc'}>
							Накопление монеток и получение продукции повышает уровень твоего персонажа. Почти как
							Тамагочи, только он не умирает)).
						</Title>
						<Button
							mode={'secondary'}
							size={'l'}
							stretched
							after={<Icon20ChevronRightOutline />}
							className={'guide__button'}
							onClick={() => setActivePanel('configureMascotView')}
						>
							ДАЛЬШЕ
						</Button>
					</div>
				</div>
			</Panel>
			<Panel id={'configureMascotView'} centered>
				<div className={'guide__root'}>
					<TestAvatar color={mascotColor} className={'guide__mascot'} />
					<div className={'guide__colors'}>
						<div className={'guide__mascot_color red'} onClick={() => setMascotColor('red')} />
						<div className={'guide__mascot_color orange'} onClick={() => setMascotColor('orange')} />
						<div className={'guide__mascot_color yellow'} onClick={() => setMascotColor('yellow')} />
						<div className={'guide__mascot_color green'} onClick={() => setMascotColor('green')} />
						<div className={'guide__mascot_color blue'} onClick={() => setMascotColor('blue')} />
						<div className={'guide__mascot_color violet'} onClick={() => setMascotColor('violet')} />
					</div>
					<div className={'guide__bottom_panel mini_panel'}>
						<input type='text' placeholder={'Имя персонажа...'} className={'bottom_panel__input'} />
						<Button
							mode={'secondary'}
							size={'l'}
							stretched
							className={'guide__button'}
							onClick={() => dispatch(setRoute('homeView'))}
						>
							СОХРАНИТЬ
						</Button>
					</div>
				</div>
			</Panel>
		</View>
	);
}
