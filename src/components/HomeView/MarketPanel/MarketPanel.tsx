import React, { useState } from 'react';
import { Panel, Title, Button } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import '../QrCodePanel.css';
import { Icon24ChevronLeft } from '@vkontakte/icons';
import './MarketPanel.css';
import coin from '../../../img/coin.svg';
import { BuyGoodBottomPanel } from './BuyGoodBottomPanel';
import photo1 from '../../../img/Magnit.jpg';
import photo2 from '../../../img/Perecrestok.jpg';
import photo3 from '../../../img/podpiska_yandex_plus.png';
import photo4 from '../../../img/Ticket.jpeg';
import photo5 from '../../../img/Bilet-v-kino.jpeg';
import photo6 from '../../../img/T-shirt.jpg';

export function MarketPanel({ id, setActivePanel }: { id: string; setActivePanel: any }): JSX.Element {
	const { vkEvents } = useSelector((state: RootState) => state);
	const [openGood, setOpenGood] = useState<boolean>(false);

	return (
		<Panel id={id} centered>
			<div className={'market__root'}>
				<Button
					mode={'secondary'}
					before={<Icon24ChevronLeft />}
					onClick={() => setActivePanel('mainHomePanel')}
					className={'back_button'}
				/>
				<Title level={'1'} weight={'medium'} className={'view_title'}>
					Магазин
				</Title>
				<div className={'market__items_list'}>
					<div className={'market__item'} onClick={() => setOpenGood(true)}>
						<img className={'market__item_photo'} src={photo1} alt={'avatar'} />
						<div className={'market__item_content'}>
							<Title level={'2'} weight={'medium'}>
								Скидки Магнит
							</Title>
							<div className={'market__item_price'}>
								<img className={'market__item_coin'} src={coin} alt={'coin'} />
								<Title level={'2'} weight={'regular'}>
									300
								</Title>
							</div>
						</div>
					</div>
					<div className={'market__item'} onClick={() => setOpenGood(true)}>
						<img className={'market__item_photo'} src={photo2} alt={'avatar'} />
						<div className={'market__item_content'}>
							<Title level={'2'} weight={'medium'}>
								Бонусы Перекресток
							</Title>
							<div className={'market__item_price'}>
								<img className={'market__item_coin'} src={coin} alt={'coin'} />
								<Title level={'2'} weight={'regular'}>
									300
								</Title>
							</div>
						</div>
					</div>
					<div className={'market__item'} onClick={() => setOpenGood(true)}>
						<img className={'market__item_photo'} src={photo3} alt={'avatar'} />
						<div className={'market__item_content'}>
							<Title level={'2'} weight={'medium'}>
								Яндекс Плюс
							</Title>
							<div className={'market__item_price'}>
								<img className={'market__item_coin'} src={coin} alt={'coin'} />
								<Title level={'2'} weight={'regular'}>
									300
								</Title>
							</div>
						</div>
					</div>
					<div className={'market__item'} onClick={() => setOpenGood(true)}>
						<img className={'market__item_photo'} src={photo4} alt={'avatar'} />
						<div className={'market__item_content'}>
							<Title level={'2'} weight={'medium'}>
								Билет на концерт
							</Title>
							<div className={'market__item_price'}>
								<img className={'market__item_coin'} src={coin} alt={'coin'} />
								<Title level={'2'} weight={'regular'}>
									300
								</Title>
							</div>
						</div>
					</div>
					<div className={'market__item'} onClick={() => setOpenGood(true)}>
						<img className={'market__item_photo'} src={photo5} alt={'avatar'} />
						<div className={'market__item_content'}>
							<Title level={'2'} weight={'medium'}>
								Билет в кино
							</Title>
							<div className={'market__item_price'}>
								<img className={'market__item_coin'} src={coin} alt={'coin'} />
								<Title level={'2'} weight={'regular'}>
									300
								</Title>
							</div>
						</div>
					</div>
					<div className={'market__item'} onClick={() => setOpenGood(true)}>
						<img className={'market__item_photo'} src={photo6} alt={'avatar'} />
						<div className={'market__item_content'}>
							<Title level={'2'} weight={'medium'}>
								{/* eslint-disable-next-line react/no-unescaped-entities */}
								Футболка Colin's
							</Title>
							<div className={'market__item_price'}>
								<img className={'market__item_coin'} src={coin} alt={'coin'} />
								<Title level={'2'} weight={'regular'}>
									300
								</Title>
							</div>
						</div>
					</div>
				</div>
				<BuyGoodBottomPanel open={openGood} setOpen={setOpenGood} />
			</div>
		</Panel>
	);
}
