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

import HW from './HW';


class Glan extends React.Component {
    constructor (props) {
      super(props);
  
      this.state = {
        activeStory: 'nat'
      };
      this.onStoryChange = this.onStoryChange.bind(this);
    }
     
  
    onStoryChange (e) {
      this.setState({ activeStory: e.currentTarget.dataset.story })
    }
  
    render () {
  
      return (
        <Epic activeStory={this.state.activeStory} id ="glav">
        <View id="nat" activePanel="nat">
            <Panel id="nat">
              <div className="nat_center">
                <img src={LPP}></img>
                <Button size="xl" onClick={this.onStoryChange} data-story="view2">
					         <img src={IconVk}></img>Продолжить через вконтакте
				        </Button>
              </div>
              
            </Panel>
          </View>
        <View header activePanel="panel2.1" id="view2">
            <HW />
        </View>
        </Epic>  
      )
    }
  }
  

export default Glan; 