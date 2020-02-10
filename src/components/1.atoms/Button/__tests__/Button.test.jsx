// Link.react.test.js
import React from "react";
import Button from "../Button";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Button", () => {

    it("should render correctly", () => {
        const button = <Button />;
        expect(button).toMatchSnapshot();
    });

    it("should call passed in function when clicked", () => {
        const onClick = jest.fn();
        const button = shallow(<Button onClick={onClick}/>);

        button.simulate("click");

        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it("should show the correct type of Button", () => {
        const type = "secondary";
        const button = mount(<Button styledAs={type}/>);

        const findClassName = button.find('button').hasClass("c-btn--secondary");
        
        expect(findClassName).toBe(true);    
    });

});