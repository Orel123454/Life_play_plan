import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';

const Dost = ({Help}) => (
	<div>		{Help &&<div> <div>
		{Help.keys[0] && Help.keys[0] ?
			 <div>
				<div>{Help.keys[0].name}</div>
				<div>{Help.keys[0].text}</div>
			</div>
			:
			null
		}
	</div>
	<div>
		{Help.keys[1] && Help.keys[1] ?
			 <div>
				<div>{Help.keys[0].name}</div>
				<div>{Help.keys[0].text}</div>
			</div>
			:
			null
		}
	</div>
	<div>
		{Help.keys[1] && Help.keys[1] ?
			 <div>
				<div>{Help.keys[1].name}</div>
				<div>{Help.keys[1].text}</div>
			</div>
			:
			null
		}
	</div>
	</div>}
	</div>

)
	
	
	




export default Dost;
