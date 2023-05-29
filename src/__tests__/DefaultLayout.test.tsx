import { cleanup, fireEvent, getByTestId } from "@testing-library/react";
import DefaultLayout from "@components/layout/DefaultLayout";
import { getLanguage, changeLanguage } from "@utils/languageHandlers";
import configureStore from "redux-mock-store";
import {render} from './Wrapper.test'

const mockStore = configureStore([]);

jest.mock("@utils/languageHandlers", () => ({
  getLanguage: jest.fn(),
  changeLanguage: jest.fn(),
}));

describe("DefaultLayout", () => {
  afterEach(cleanup);

  test("should render children", () => {
    const { getByText } = render(
      <DefaultLayout>
        <div>Welcome to the Income app</div>
      </DefaultLayout>
    );

    expect(getByText(/Welcome to the Income app/i)).toBeInTheDocument();
  });

  test("should render Header / not render Sidebar", () => {
    const { getByTestId, queryByTestId } = render(
        <DefaultLayout>
          <div>Welcome to the Income app</div>
        </DefaultLayout>
    );

    expect(getByTestId("headerContainer")).toBeInTheDocument();
    expect(queryByTestId("sidebarContainer")).not.toBeInTheDocument();
  });

  test("should update language on languageHandler call", () => {
    (getLanguage as jest.Mock).mockReturnValue("en");

    const { getByTestId } = render(

        <DefaultLayout>
          <div>Welcome to the Income app</div>
        </DefaultLayout>

    );

    const languageButton = getByTestId("headerChangeLanguageButton");
    fireEvent.click(languageButton);

    expect(changeLanguage).toHaveBeenCalledWith("en");
  });
});
