import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { closeDialog } from "@redux/slices/dialogSlice";
import Dialog from "@components/elements/Dialog/Dialog";


const mockStore = configureStore([]);

describe("CustomizedDialogs", () => {
  let store: any;
  let component: any;

  beforeEach(() => {
    store = mockStore({
      dialog: {
        isOpen: true
      },
      products: {
        selectedProduct: {
        }
      }
    });

    store.dispatch = jest.fn();

    component = render(
      <Provider store={store}>
        <Dialog />
      </Provider>
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders the dialog component", () => {
    const { getByTestId } = component;
    expect(getByTestId("dialogTitle")).toBeInTheDocument();
  });

  test("dispatches closeDialog action when cancel button is clicked", () => {
    const { getByTestId } = component;
    const cancelButton = getByTestId("cancelButton");

    fireEvent.click(cancelButton);

    expect(store.dispatch).toHaveBeenCalledWith(closeDialog());
  });

  test("dispatches closeDialog action when delete button is clicked", () => {
    const { getByTestId } = component;
    const deleteButton = getByTestId("deleteButton");

    fireEvent.click(deleteButton);

    expect(store.dispatch).toHaveBeenCalledWith(closeDialog());
  });

});
