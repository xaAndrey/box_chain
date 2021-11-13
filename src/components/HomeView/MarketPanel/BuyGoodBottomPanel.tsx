import React, { useEffect } from 'react';
import { Title, Button, CustomSelect } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import '../QrCodePanel.css';
import './MarketPanel.css';
import coin from '../../../img/coin.svg';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { useSwipeable } from 'react-swipeable';
import { usePopout } from '../../../context/PopoutProvider';
import { CustomPopout } from '../../CustomPopout';
import photo2 from '../../../img/Perecrestok.jpg';

export function BuyGoodBottomPanel({ open, setOpen }: { open: boolean; setOpen: any }): JSX.Element {
	const { vkEvents } = useSelector((state: RootState) => state);
	const handlers = useSwipeable({
		onSwipedDown: () => setOpen(false),
		trackMouse: true,
	});
	const { popout, setPopout } = usePopout();

	return (
		<>
			<div className={'page_mask' + (open ? '' : ' disabled')} onClick={() => setOpen(false)} />
			<div className={'market__bottom_panel' + (open ? ' expanded' : '')} {...handlers}>
				<div className={open ? '' : ' disabled'}>
					<div className={'market__expanded_photo_bg'}>
						<img className={'market__expanded_bg_photo'} src={photo2} alt={'avatar'} />
					</div>
					<img className={'market__expanded_photo'} src={photo2} alt={'avatar'} />
					<div className={'market__expanded_content'}>
						<Title level={'2'} weight={'medium'}>
							Бонусы Перекресток
						</Title>
						<div className={'market__item_price'}>
							<img className={'market__item_coin'} src={coin} alt={'coin'} />
							<Title level={'2'} weight={'regular'}>
								300
							</Title>
						</div>
						<div className={'market__item_size'}>
							<CustomSelect
								placeholder='Размер'
								options={[
									{ label: 'L', value: 'L' },
									{ label: 'S', value: 'S' },
									{ label: 'M', value: 'M' },
									{ label: 'XL', value: 'XL' },
								]}
								className={'market__item_select'}
							/>
							<Title level={'3'} weight={'regular'}>
								В наличии
							</Title>
						</div>
						<Title level={'3'} weight={'regular'}>
							Бонусы на карту перекрёстка 500 рублей. Потратить можно на любые категории товаров и вообще
							делай с ними что хочешь
						</Title>
					</div>
					<Button
						className={'market__buy_button'}
						onClick={() =>
							setPopout(
								<CustomPopout
									onClose={() => setPopout(null)}
									content={
										<Title level={'2'} weight={'medium'}>
											Обратитесь к ближайшему оператору точки по вопросу покупки этого товара
										</Title>
									}
								/>,
							)
						}
					>
						Купить
					</Button>
				</div>
				<div className={'market__balance' + (open ? ' shifted' : '')}>
					<Title level={'3'} weight={'medium'}>
						Баланс:
					</Title>
					<img className={'balance__coin'} src={coin} alt={'coin'} />
					<Title level={'3'} weight={'medium'}>
						300
					</Title>
				</div>
			</div>
		</>
	);
}
