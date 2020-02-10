// Link.react.test.js
import React from "react";
import Spinner from "../Spinner";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Spinner", () => {

    it("should render correctly", () => {
        const spinner = <Spinner />;
        expect(spinner).toMatchSnapshot();
    });

    it("Should show the correct custom text", () => {
        const text = "Please wait";
        const spinner = mount(<Spinner text={text} />);

        expect(spinner.prop("text")).toEqual(text);
    });

    it("Should show the correct default text", () => {
        const text = "Loading...";
        const spinner = mount(<Spinner />);

        expect(spinner.prop("text")).toEqual(text);
    });
});