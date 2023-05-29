import React, { ReactElement, ReactNode } from "react";
import { Provider } from "react-redux";
import { render as rtlRender, RenderOptions } from "@testing-library/react";
import store from "../redux/store";

type WrapperProps = {
  children: ReactNode;
};

function render(
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) {
  function Wrapper({ children }: WrapperProps) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...options });
}

test.skip('wrapper', () => {});

export * from "@testing-library/react";
export { render };
