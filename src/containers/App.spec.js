import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import App from "./App";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import Adapter from "enzyme-adapter-react-16";
import Message from "../components/Message";

Enzyme.configure({ adapter: new Adapter() });

describe("App", () => {
  let wrapper;
  const mockStore = configureStore([thunk]);
  const store = mockStore({
    elements: [],
    message: 'HI',
  });
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
  it("should render component", () => {
    expect(wrapper.find('Message')).toHaveLength(1);
    expect(wrapper.find('[data-id="message"]')).toHaveLength(1);

  });
});
//
