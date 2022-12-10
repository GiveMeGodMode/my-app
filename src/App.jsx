import "./App.css";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Overlay from "./components/overlay/Overlay.jsx";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Favorites from "./components/favorites/Favorites.jsx";
import Home from "./components/Home.jsx";
import Form from "./components/form/Form.jsx";

export const AppContext = React.createContext({});

function App() {
    // состояние корзины
    const [overlayOpen, setOverlayOpen] = useState(false);
    // хранение данных туров
    const [tyrs, setTyrs] = useState([]);
    // для хранения объектов корзины
    const [overlayItems, setOverlayItems] = useState([]);
    // для поиска
    const [search, setSearch] = useState("");
    //Для хранения избранных заявок
    const [favorites, setFavorites] = useState([]);

    React.useEffect(() => {
        // fetch("https://637f91ed5b1cc8d6f949a8dd.mockapi.io/tyrs")
        //   .then((resJson) => {
        //     return resJson.json();
        //   })
        //   .then((myJson) => {
        //     setTyrs(myJson);
        //   });
        async function axiosData() {
            const tyrsData = await axios.get(
                "https://637f91ed5b1cc8d6f949a8dd.mockapi.io/tyrs"
            );

            // axios
            //   .get("https://637f91ed5b1cc8d6f949a8dd.mockapi.io/tyrs")
            //   .then((resJson) => {
            //     setTyrs(resJson.data);
            //   });
            const cartData = await axios.get(
                "https://637f91ed5b1cc8d6f949a8dd.mockapi.io/cart"
            );

            // axios
            //   .get("https://637f91ed5b1cc8d6f949a8dd.mockapi.io/cart")
            //   .then((res) => {
            //     setOverlayItems(res.data);
            //   });

            const favoritesData = await axios.get(
                "https://637f91ed5b1cc8d6f949a8dd.mockapi.io/favorites"
            );

            // axios
            //   .get("https://637f91ed5b1cc8d6f949a8dd.mockapi.io/favorites")
            //   .then((res) => {
            //     setFavorites(res.data);
            //   });
            setTyrs(tyrsData.data);
            setOverlayItems(cartData.data);
            setFavorites(favoritesData.data);
        }
        axiosData();
    }, []);

    const deleteItems = (id) => {
        console.log(id);
        axios.delete(`https://637f91ed5b1cc8d6f949a8dd.mockapi.io/cart/${id}`);
        setOverlayItems((objDelete) => objDelete.filter((item) => item.id !== id));
    };

    const isAdded = (myId) => {
        return overlayItems.some((objisAdded) => objisAdded.myId === myId);
    };

    const isFav = (myId) => {
        return favorites.some((objisFav) => objisFav.myId === myId);
    };

    return (
        <AppContext.Provider
            value={{
                tyrs,
                setTyrs,
                overlayItems,
                setOverlayItems,
                favorites,
                setFavorites,
                isAdded,
                isFav,
            }}
        >
            <div className="app">
                {overlayOpen ? (
                    <Overlay
                        totalPrice={Number(
                            overlayItems.reduce(
                                (elements = overlayItems.length, obj) => elements + obj.price,
                                0
                            )
                        )}
                        overlayProp={overlayItems}
                        closeOverlay={() => setOverlayOpen(false)}
                        deleteItems={deleteItems}
                    />
                ) : null}

                <Header
                    openOverlay={() => setOverlayOpen(true)}
                    overlayItems={overlayItems}
                />
                <Routes>
                    <Route
                        path="/favorites"
                        element={
                            <Favorites
                                favorites={favorites}
                                setFavorites={setFavorites}
                                item={tyrs}
                                overlayItems={overlayItems}
                                setOverlayItems={setOverlayItems}
                            />
                        }
                    />

                    <Route
                        path="/"
                        element={
                            <Home
                                item={tyrs}
                                overlayItems={overlayItems}
                                setOverlayItems={setOverlayItems}
                                setSearch={setSearch}
                                search={search}
                                favorites={favorites}
                                setFavorites={setFavorites}
                            />
                        }
                    />

                    <Route
                        path="/form"
                        element={
                            <Form

                            />
                        }
                    />
                </Routes>
                <Footer />
            </div>
        </AppContext.Provider>
    );
}
export default App;
