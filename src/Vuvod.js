import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import { View, Panel, FormLayout, PanelHeader, Input, FormLayoutGroup, Radio,Select, Textarea,Checkbox,Button,  Link } from '@vkontakte/vkui';
import Dost from "./panels/Dost";
import ReactDOM from "react-dom";
import jokesData  from './jokesData';

const Vuvod = () => {
    const [Help, setHelp] = useState(null);
    const [Prum, setPrum] = useState(null);
    const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
    useEffect(() => {
      bridge.subscribe(({ detail: { type, data }}) => {
        if (type === 'VKWebAppUpdateConfig') {
          const schemeAttribute = document.createAttribute('scheme');
          schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
          document.body.attributes.setNamedItem(schemeAttribute);
        }
      });
      async function fetchData() {
            const prum2 = await bridge.send("VKWebAppStorageGetKeys", {"count": 20, "offset": 0});
            console.log(prum2);
            const user2 = await bridge.send("VKWebAppStorageGet", {"keys": prum2.keys});
            console.log(user2);
            setHelp(user2);
      }
      fetchData();
      }, []);
    
    
      return (
          <Dost Help={Help}></Dost>
       )
        
        


      
    }

export default Vuvod;