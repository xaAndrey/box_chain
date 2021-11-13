import { PopoutWrapper, ViewWidth, withAdaptivity } from '@vkontakte/vkui';
import React from 'react';
import './CustomComponents.css';

export const CustomPopout = withAdaptivity(
	({ onClose, content, viewWidth }: { onClose: any; content: JSX.Element; viewWidth?: ViewWidth }) => {
		return (
			<PopoutWrapper onClick={onClose}>
				<div className={'custom_popout'}>{content}</div>
			</PopoutWrapper>
		);
	},
	{
		viewWidth: true,
	},
);
