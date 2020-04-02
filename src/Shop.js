import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import {View,Root,Panel,PanelHeader,Group,CellButton,div,Avatar,HorizontalScroll, 
    PanelHeaderButton,PanelHeaderContent,Cell,Header,Div, Gallery} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

class Shop extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
        }
      }
    
      render() {
        return (
              <Panel id="panel1">
                <Group>
                    <Cell size="l"
                        indicator="Бесплатно"
                        style={{backgroundColor: '#EEEEEE'}}
                        description="Старательный исполнитель"
                        before={<Avatar style={{backgroundColor: "#D8E4E2"}}/>}>
                        Персонаж сова
                    </Cell>
                </Group>
                <Group>
                    <Cell size="l"
                        indicator="250 монет"
                        style={{backgroundColor: '#EEEEEE'}}
                        description="Приходит в самых неожиданных ситуациях"
                        before={<Avatar style={{backgroundColor: "#D8E4E2"}}/>}>
                        Персонаж писец
                    </Cell>
                </Group>
                <Group>
                    <Cell size="l"
                        indicator="200 монет"
                        style={{backgroundColor: '#EEEEEE'}}
                        description="Немного сноровки в делах не помешает"
                        before={<Avatar style={{backgroundColor: "#D8E4E2"}}/>}>
                        Персонаж лиса
                    </Cell>
                </Group>
                <Group>
                    <Cell size="l"
                        indicator="400 монет"
                        style={{backgroundColor: '#EEEEEE'}}
                        description="Неубиваемый энтузиазм"
                        before={<Avatar style={{backgroundColor: "#D8E4E2"}}/>}>
                        Персонаж тихоходка
                    </Cell>
                </Group>
                </Panel>
        )
      }
    }

export default Shop;

