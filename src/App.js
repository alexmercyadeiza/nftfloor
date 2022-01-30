import { useState } from "react";
import Spinner from "./components/Spinner";

function App() {

  const [spin, setSpin] = useState(false);

  const toggleSpinner = () => {
    setSpin(true);
  }

  return (
    <div class="grid bg-gray-100 h-screen place-items-center">
      {!spin ?
        <div class="w-full max-w-xl rounded-lg bg-white p-10 space-y-8">
          <div class="flex items-center justify-between">
            <div class="font-bold tracking-tight text-blue-800">nftfloor.</div>
            <img src="https://storage.googleapis.com/opensea-static/Logomark/Logomark-Blue.svg" class="w-7" alt="opensea.io" />
          </div>

          <div>
            <input type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Wallet Address" />
          </div>
          <button class="btn btn-sm btn-outline" onClick={toggleSpinner}>Get floor price</button>
        </div>
        :
        <Spinner />
      }
    </div>
  );
}

export default App;
