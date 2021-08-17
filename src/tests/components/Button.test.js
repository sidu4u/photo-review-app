import React from "react";
import renderer from 'react-test-renderer';
import CircularProgress from '@material-ui/core/CircularProgress';
import { shallow } from 'enzyme';
import Button from '../../components/Button';



it('renders correctly',()=>{
    const component = renderer
    .create(<Button isLoading={false}/>)
    .toJSON();
    expect(component).toMatchSnapshot();
});

it('renders spinner on loading',()=>{
    const component = shallow(<Button isLoading={true}/>);
    expect(component.exists(CircularProgress)).toBe(true);
});

it('onclick handler is called on click',()=>{
    const onClick = jest.fn();
    const component = shallow(<Button isLoading={false} onClick={onClick}/>);
    component.find("#button").simulate("click");
    expect(onClick).toHaveBeenCalled();
});
