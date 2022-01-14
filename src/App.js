
import NavBar from "./components/commonFolder/NavBar";
import Contacts from "./components/contacts/Contacts";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <React.Fragment>
          <NavBar />
          <Routes>
            <Route path="/" element={<Contacts />} />
            <Route path="/addcontact" element={<AddContact />} />
            <Route path="/editcontact/:id" element={<EditContact />} />
          </Routes>
        </React.Fragment>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
