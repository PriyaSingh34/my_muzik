import { Route, Routes } from "react-router-dom";
import { useContext } from "react";

import { Navbar, MusicPlayer } from "./components";
import { Discover, Search } from "./pages";

import { PlayerContext } from "./context/PlayerContext";
import Home from "./components/home";
import SidePlayer from "./components/sidePlayer";

const App = () => {
  const {
    state: { activeSong, currentSongs },
  } = useContext(PlayerContext);

  console.log("App Rendered!");
  return (
    <div className="App relative w-full h-[100vh]">
      <div className=" flex-1 flex flex-col bg-gradient-to-r from-red-600 to-black">
        <Navbar />

        <Home/>

        {/* <div className="px-2 w-full h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse"> */}
        <div className="px-2 w-full overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="w-[80%] flex-1 h-fit mb-40">
          {/* <div className=" flex-1 h-fit mb-40"> */}
            <Routes>
              <Route path="/" element={<Discover />} />
              <Route path="/search/:searchTerm" element={<Search />} />
            </Routes>
          </div>
          {/* <div className="w-[20%] h-[600px]">
            <SidePlayer/>
          </div> */}
        </div>
      {/* <Home/> */}
    
      </div>
 
      
      
      {activeSong?.hub?.actions && (
        <div className="h-28 w-full fixed bottom-0 md:bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-red-300 to-black backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer />
        </div>
      )}
      {!activeSong?.hub?.actions && currentSongs.length > 1 && (
        <div className="h-28 w-full fixed bottom-0 md:bottom-0 left-0 right-0 flex justify-center items-center animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
          <p className="text-2xl text-white">Song Not Available</p>
        </div>
      )}
    </div>
  );
};

export default App;
