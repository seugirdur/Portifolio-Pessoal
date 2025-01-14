import { useRouteError } from "react-router-dom";

interface RouteError {
    statusText?: string;
    message?: string;
}

export const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    const isRouteError = (err: unknown): err is RouteError => {
        return (
            typeof err === "object" &&
            err !== null &&
            ("statusText" in err || "message" in err)
        );
    };

    return (
        <div id="error-page">
            <h1>Oops! 2</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                {isRouteError(error) ? (
                    <i>{error.statusText || error.message}</i>
                ) : (
                    <i>Unknown error occurred.</i>
                )}
            </p>
        </div>
    );
};
