import React from "react";
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

const data = "sample data1";
let component;

beforeEach(() => {
    component = shallow(<Header data={data}/>);
  })
  
  afterEach(() => {
    component = null;
  });

it('renders correctly',()=>{
    const component = renderer
    .create(<Header data={data}/>)
    .toJSON();
    expect(component).toMatchSnapshot();
});

it('renders passed pros correctly',()=>{
    expect(component.find("#header").text()).toBe(data);
});