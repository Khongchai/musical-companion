import { act, renderHook } from "@testing-library/react-hooks";
import useFormStatusMessages from "../../src/utils-hooks/useFormStatusMessages";

describe("Setting form status message", () => {
  it("Sets error message and remove finished message.", () => {
    const { result } = renderHook(() => useFormStatusMessages());
    const { setErrorMessage, setFinishedMessage } = result.current;

    const newErrorMessage = "Error message 1";
    const newFinishedMessage = "New finished message";

    act(() => {
      setFinishedMessage(newFinishedMessage);
      setErrorMessage(newErrorMessage);
    });

    expect(result.current.finishedMessage).toBe("");
    expect(result.current.errorMessage).toBe(newErrorMessage);
  });

  it("Set finished message and remove error message.", () => {
    const { result } = renderHook(() => useFormStatusMessages());
    const { setErrorMessage, setFinishedMessage } = result.current;

    const newErrorMessage = "Error message 1";
    const newFinishedMessage = "New finished message";

    act(() => {
      setErrorMessage(newErrorMessage);
      setFinishedMessage(newFinishedMessage);
    });

    expect(result.current.errorMessage).toBe("");
    expect(result.current.finishedMessage).toBe(newFinishedMessage);
  });
});
