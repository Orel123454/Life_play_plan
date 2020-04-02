import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import {View,Root,Panel,PanelHeader,Group,CellButton,div,Avatar,HorizontalScroll, 
    PanelHeaderButton,PanelHeaderContent,Cell,Header,Div, Gallery} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

class Achivements extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
        }
      }
    
      render() {
        return (
              <Panel id="panel2">
                <Group>
                    
                </Group>
                <Group>
                    <Cell size="l"
                        indicator="5/15"
                        style={{backgroundColor: '#EEEEEE'}}
                        description="Выполнил 15 задач в срок"
                        before={<Avatar style={{backgroundColor: "#EDAA9A"}}/>}>
                        Сама пунктуальность
                    </Cell>
                </Group>
                <Group>
                    <Cell size="l"
                    onPointerCancel="true"
                        indicator="1/20"
                        style={{backgroundColor: '#EEEEEE'}}
                        description="Завершил 20 лёгких задач в срок"
                        before={<Avatar style={{backgroundColor: "#EDAA9A"}}/>}>
                        Охотник
                    </Cell>
                </Group>
                <Group>
                    <Cell size="l"
                        indicator="0/3"
                        style={{backgroundColor: '#EEEEEE'}}
                        description="Перенёс выполнение и завершил 3 задачи"
                        before={<Avatar style={{backgroundColor: "#EDAA9A"}}/>}>
                        Энтузиаст
                    </Cell>
                </Group>
                </Panel>
        )
      }
    }

export default Achivements;

