import { useState, useEffect } from "react";

import { Providers, ProviderState } from "@microsoft/mgt-element";
import { Msal2Provider } from "@microsoft/mgt-msal2-provider";
import { Agenda, Login } from "@microsoft/mgt-react";
import Dice from "@/Components/ui/Dice/Dice";

Providers.globalProvider = new Msal2Provider({
    clientId: "9de29a00-4e84-4ab4-94ce-99e02ff7a5fe",
    redirectUri: "/",
    postLogoutRedirectUri: "/",
    navigateToLoginRequestUri: false,
    authority: `https://login.microsoftonline.com/28ecce82-44f4-4a19-a1f6-ac1bebd8e185`,
});

function useIsSignedIn() {
    const [isSignedIn, setIsSignedIn] = useState(false);

    useEffect(() => {
        const updateState = () => {
            const provider = Providers.globalProvider;
            setIsSignedIn(
                provider && provider.state === ProviderState.SignedIn
            );
        };

        Providers.onProviderUpdated(updateState);
        updateState();

        return () => {
            Providers.removeProviderUpdatedListener(updateState);
        };
    }, []);

    return [isSignedIn];
}

const O365 = ({ children }) => {
    const [isSignedIn] = useIsSignedIn();

    return (
        <>
            <dialog open={!isSignedIn} style={{ zIndex: "1000" }}>
                <article>
                    <header>
                        <img src="/logo.webp" alt="kockice-logo" />
                    </header>
                    <Login></Login>
                </article>
            </dialog>
            {children}
        </>
    );
};

export default O365;
