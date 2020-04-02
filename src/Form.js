import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, Panel, FormLayout, PanelHeader, Input, FormLayoutGroup, Radio,Select, Textarea,Checkbox,Button,  Link } from '@vkontakte/vkui';

class Form extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
          name: "",
          text: "", 
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(e) {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    }
    handleSubmit(e){
        async function fetchData() {
            bridge.send("VKWebAppStorageSet", {"key": this.state.name, "value": this.state.text});

        }
    }
    render() {
    const { name, text} = this.state;
      return (
            <div>
              <FormLayout onSubmit={this.handleSubmit}>
            <Input
              top="Название цели"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
            <Textarea name="text" top="Описание цели" value={text}  onChange={this.handleChange} />
            <Button size="xl" type="submit">Добавить цель</Button>
            </FormLayout>
            <div>{this.state.name}
            {this.state.text}
            </div>
            </div>
            
      );
    }
  }

export default Form;
