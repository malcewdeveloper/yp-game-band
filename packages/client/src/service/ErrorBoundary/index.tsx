import { Component, ReactNode } from "react";

interface ErrorBoundaryState {
    error: Error | null;
}

interface ErrorBoundaryProps {
    children: ReactNode;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);

        this.state = {
            error: null,
        };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { error };
    }

    static componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.error("Unhandled error:", error, errorInfo);
    }

    render() {
        const { error } = this.state;

        if (error) {
            return <div>{error.message}</div>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
