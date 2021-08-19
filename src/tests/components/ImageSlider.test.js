import React from "react";
import renderer from 'react-test-renderer';
import {shallow} from "enzyme";
import ImageSlider from '../../components/ImageSlider';
import useLocalState from "../../components/ImageSlider/hooks/useLocalState";

const images = [{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7}].map(({id})=>({id,urls:{raw:`${id}`}}))

it('renders correctly',()=>{
    const component = renderer
    .create(<ImageSlider images={images}/>)
    .toJSON();
    expect(component).toMatchSnapshot();
});

function HookWrapper({images}) {
    const hook = useLocalState(images,3);
    return <div hook={hook} />;
}

it('renders with first page as default',()=>{
  let wrapper = shallow(<HookWrapper images={images}/>);
  let { hook } = wrapper.find('div').props();
  let {currentPageNumber}= hook;
  
  expect(currentPageNumber).toBe(1);

});

it('page number should not go below 1',()=>{
    let wrapper = shallow(<HookWrapper images={images}/>);
    let {hook:{previousPage}} = wrapper.find('div').props();
    previousPage();
    let {hook:{currentPageNumber}} = wrapper.find('div').props();
    expect(currentPageNumber).toBe(1);
  });


it('page number should increase on next click',()=>{
    let wrapper = shallow(<HookWrapper images={images}/>);
    let {hook:{nextPage}} = wrapper.find('div').props();
    nextPage();
    let {hook:{currentPageNumber}} = wrapper.find('div').props();
    expect(currentPageNumber).toBe(2);
  }); 
  
  it('page number should decrease on previous click',()=>{
    let wrapper = shallow(<HookWrapper images={images}/>);
    let {hook:{nextPage,previousPage}} = wrapper.find('div').props();
    nextPage();
    previousPage();
    let {hook:{currentPageNumber}} = wrapper.find('div').props();
    expect(currentPageNumber).toBe(1);
  }); 
   
  it('page number should not be more than number of pages',()=>{
    let wrapper = shallow(<HookWrapper images={images}/>);
    let {hook:{nextPage,pages}} = wrapper.find('div').props();
    
    for(let i=1;i<=pages+2;i++){  // increaseing more than number of pages
        nextPage();
    }
     
    let {hook:{currentPageNumber}} = wrapper.find('div').props();
    expect(currentPageNumber).toBe(pages);
  }); 
   

