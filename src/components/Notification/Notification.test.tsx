import { render, screen, fireEvent, act } from "@testing-library/react";
import Notification from "./Notification";
import "@testing-library/jest-dom";

describe("Notification Component", () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.runOnlyPendingTimers();
        jest.useRealTimers();
    });

    test("renders with correct title and description", () => {
        render(<Notification title="Success" description="Operation completed" duration={5000} />);

        expect(screen.getByText("Success")).toBeInTheDocument();
        expect(screen.getByText("Operation completed")).toBeInTheDocument();
    });

    test("shows success icon by default", () => {
        render(<Notification title="Success" description="Operation completed" />);
        expect(screen.getByText("✔")).toBeInTheDocument();
    });

    test("shows error icon when status is error", () => {
        render(<Notification title="Error" description="Something went wrong" status="error" />);
        expect(screen.getByText("✖")).toBeInTheDocument();
    });

    test("closes when the close button is clicked", () => {
        render(<Notification title="Success" description="Operation completed" />);

        const closeButton = screen.getByRole("button");
        fireEvent.click(closeButton);

        expect(screen.queryByText("Success")).not.toBeInTheDocument();
    });

    test("hides automatically after the specified duration", () => {
        render(<Notification title="Auto Hide" description="This will disappear" duration={3000} />);

        expect(screen.getByText("Auto Hide")).toBeInTheDocument();

        act(() => {
            jest.advanceTimersByTime(3000);
        });

        expect(screen.queryByText("Auto Hide")).not.toBeInTheDocument();
    });
});
