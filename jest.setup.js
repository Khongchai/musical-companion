import "@testing-library/jest-dom/extend-expect";

import React from "react";
React.useLayoutEffect = React.useEffect;

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
