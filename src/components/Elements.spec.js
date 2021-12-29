import React from "react";
import { shallow } from "enzyme";

import Elements from "./Elements";

it("Returns no elements when store is empty", () => {
  const wrapper = shallow(<Elements elements={[]} />);
  expect(wrapper.find(".element").length).toBe(0);
});
//
