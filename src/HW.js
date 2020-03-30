import React from 'react';
//import ReactDOM from 'react-dom';
import { Root, View, Panel, PanelHeader, Header, Group, Cell, CellButton } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import bridge from "@vkontakte/vk-bridge";



class HW extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        activeView: 'view1',
        name: '',
        info: ''
      }
      this.onClick = this.onClick.bind(this);
      
    }
    onClick(e) {
        e.preventDefault();
        bridge.send("VKWebAppInit", {});
        bridge.subscribe((e) => {
          switch (e.detail.type) {
            case "VKWebAppGetUserInfoResult" :
              this.bindConnectUserData(e.detail.data);
              this.setState(prevState => ({
                name: e.detail.data.first_name
              }))
              break;
          }
        });
        this.setState(prevState => ({
          info: 'sjfgjsdjjgd'
        }))
    }
    
    
    
    render() {
      return (
        <Root activeView={this.state.activeView}>
          <View activePanel="panel1.1" id="view1">
            <Panel id="panel1.1">
              <PanelHeader>View 1</PanelHeader>
              <Group>
                <CellButton onClick={ () => this.setState({ activeView: 'view2' }) }>
                  View 2
                </CellButton>
              </Group>
            </Panel>
          </View>
          <View header activePanel="panel2.1" id="view2">
            <Panel id="panel2.1">
              <PanelHeader>View 2</PanelHeader>
              <Group>
                <CellButton onClick={this.onClick}>
                  Back to View 1
                  {this.state.info}
                  {this.state.name}
                </CellButton>
              </Group>
            </Panel>
          </View>
        </Root>
      )
    }
}
  

//ReactDOM.render(<HW />, document.getElementById('root'));
export default HW; 