# Installation Instructions (React Only)
To  use the trust badge SDK, you'll need to have a `projectId` for your specific project, please talk to the arcx team to get your projectId.  

Installing the SDK is as simple as any other published package:  
```
npm i @arcxmoney/trust-badge-sdk
yarn add @arcxmoney/trust-badge-sdk
pnpm i @arcxmoney/trust-badge-sdk
```

After the SDK is installed, you'll want to import the CSS files at the top level of your application, or in the same component as the TrustBadge itself.  
Here is an example component with the full configuration.

```js
import 'sandbox-equinox/dist/index.css';
import { TrustBadge } from 'sandbox-equinox';

function App() {
  // handle the loading state however you wish.
  const handleLoadingState = (loaded: boolean) => {
    console.log("Loaded: ", loaded);
  }
  return (
    <>
      <TrustBadge projectId={424} onLoaded={handleLoadingState} />
    </>
  );
}

export default App;
```

The onLoaded hook is so that end developers can handle the loading state for the badge however they want, when ``loaded`` is set to true, the badge is ready for rendering.
