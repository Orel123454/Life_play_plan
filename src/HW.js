import React from 'react';
import ReactDOM from 'react-dom';
import { Root, View, Panel, PanelHeader, Header,Button , Group, Cell, CellButton, Epic, Tabbar, TabbarItem, Avatar, PanelHeaderContent } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import bridge from "@vkontakte/vk-bridge";
import user from './img/icons/user.png';
import ng from './img/icons/ng.png';
import magaz from './img/icons/magaz.png';
import cal from './img/icons/cal.png';
import ZST from './img/ZST.png';
import LPP from './img/LPP.png';
import IconVk from './img/icons/vk-1 1.png'

import Prof from './Prof'
import Form from './Form'
import Vuvod from './Vuvod'
import Shop from './Shop'
import Achivements from './Achivements'
import Ent from './img/icons/Ent.png'
import Punkt from "./img/icons/Punkt.png"
import Sova from './img/icons/Персонаж лиса.png'
import Lisa from './img/icons/Персонаж сова.png'
import Pisez from './img/icons/Персонаж песец.png'
import Tix from './img/icons/Тихоходка 2.png'
import Ox from './img/icons/Охотник.png'


class HW extends React.Component {
    constructor (props) {
      super(props);
  
      this.state = {
        activeStory: 'pr'
      };
      this.onStoryChange = this.onStoryChange.bind(this);
    }
     
  
    onStoryChange (e) {
      this.setState({ activeStory: e.currentTarget.dataset.story })
    }
  
    render () {
  
      return (
        <Epic activeStory={this.state.activeStory} tabbar={
          <Tabbar>
            <TabbarItem
              onClick={this.onStoryChange}
              selected={this.state.activeStory === 'pr'}
              data-story="pr"
            ><img size={32} src={user} /></TabbarItem>
            <TabbarItem
              onClick={this.onStoryChange}
              selected={this.state.activeStory === 'magaz'}
              data-story="magaz"
            ><img size={32} src={magaz} /></TabbarItem>
            <TabbarItem
              onClick={this.onStoryChange}
              selected={this.state.activeStory === 'ng'}
              data-story="ng"
            ><img size={32} src={ng} /></TabbarItem>
            <TabbarItem
              onClick={this.onStoryChange}
              selected={this.state.activeStory === 'cal'}
              data-story="cal"
            ><img size={32} src={cal} /></TabbarItem>
          </Tabbar>
        }>
          <View id="pr" activePanel="pr">
            <Panel id="pr">
              <PanelHeader>Профиль</PanelHeader>
              <Prof/>
            </Panel>
          </View>
          <View id="magaz" activePanel="magaz">
            <Panel id="magaz">
              <PanelHeader>Магазин</PanelHeader>

              
              <Prof/>
              <Cell size="l"
                        indicator="Бесплатно"
                        style={{backgroundColor: '#EEEEEE'}}
                        description="Старательный исполнитель"
                        before={<Avatar src={Sova}/>}>
                        Персонаж сова
                    </Cell>
                    <Cell size="l"
                        indicator="250 монет"
                        style={{backgroundColor: '#EEEEEE'}}
                        description="Приходит в самых неожиданных ситуациях"
                        before={<Avatar  src={Pisez}/>}>
                        Персонаж писец
                    </Cell>
                    <Cell size="l"
                        indicator="200 монет"
                        style={{backgroundColor: '#EEEEEE'}}
                        description="Немного сноровки в делах не помешает"
                        before={<Avatar  src={Lisa}/>}>
                        Персонаж лиса
                    </Cell>
                    <Cell size="l"
                        indicator="400 монет"
                        style={{backgroundColor: '#EEEEEE'}}
                        description="Неубиваемый энтузиазм"
                        before={<Avatar  src={Tix}/>}>
                        Персонаж тихоходка
                    </Cell>
              <Vuvod />
            </Panel>
          </View>
          <View id="ng" activePanel="ng">
            <Panel id="ng">
              <PanelHeader>Награды</PanelHeader>
              <Prof/>
              <Cell size="l"
                        indicator="0/15"
                        style={{backgroundColor: '#EEEEEE'}}
                        description="Выполнил 15 задач в срок"
                        before={<Avatar src={Punkt}/>}>
                        Сама пунктуальность
                    </Cell>
                    <Cell size="l"
                    onPointerCancel="true"
                        indicator="0/20"
                        style={{backgroundColor: '#EEEEEE'}}
                        description="Завершил 20 лёгких задач в срок"
                        before={<Avatar src={Ox}/>}>
                        Охотник
                    </Cell>
                    <Cell size="l"
                        indicator="0/3"
                        style={{backgroundColor: '#EEEEEE'}}
                        description="Перенёс выполнение и завершил 3 задачи"
                        before={<Avatar src={Ent}/>}>
                        Энтузиаст
                    </Cell>
            </Panel>
          </View>
          <View id="cal" activePanel="cal">
            <Panel id="cal">
              <PanelHeader>Календарь</PanelHeader>
              <Prof/>
              <Form />
            </Panel>
          </View>
        </Epic>
      )
    }
  }
  

export default HW; 