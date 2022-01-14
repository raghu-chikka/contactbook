import React, { useState } from "react";
import "./Contact.css";
import { useSelector } from "react-redux";
import Displaycontact from "./Displaycontact";
import Badge from "react-bootstrap/Badge";
import { useNavigate } from "react-router-dom";

const Contacts = () => {
  const navigate = useNavigate();
  const [personalCnt, setPersonalCnt] = useState(false);
  const [businessCnt, setBusinessCnt] = useState(false);
  const contacts = useSelector((state) => state.contact.contacts);

  let cfmale = 0;
  let cmale = 0;
  let business = 0;
  let personal = 0;

  contacts.filter(function (contact1) {
    return contact1.gender === "male" ? cmale++ : cfmale++;
  });
  contacts.filter(function (contact1) {
    return contact1.type === "personal" ? personal++ : business++;
  });

  const personalContact = () => {
    setPersonalCnt(true);
  };

  const businessContact = () => {
    setBusinessCnt(true);
  };

  return (
    <div className="main-div">
      <div className="tbl-view">
        <div className="filter-buttons">
          <span className="filter-text">Filter Contact: </span>
          <button
            onClick={personalContact}
            className="save-button"
            type="button"
          >
            Personal
          </button>
          <button
            onClick={businessContact}
            className="save-button"
            type="button"
          >
            Business
          </button>
        </div>
        <table className="table table-borderless table-hover table-shadow p-5">
          <thead className="table-light p-5 text-left">
            <tr>
              <th>Name</th>
              <th>Mobile</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="text-left">
            {contacts.map((contact) => (
              <Displaycontact contact={contact} key={contact.id} />
            ))}
          </tbody>
        </table>
      </div>

      <div className="side-div">
        <h4 className="contact-info">Contact Info</h4>
        <div className="badge-icon">
          <h5>
            Business
            <Badge className="badge-ele" bg="secondary">
              {business}{" "}
            </Badge>
            Personal
            <Badge className="badge-ele" bg="secondary">
              {" "}
              {personal}
            </Badge>{" "}
          </h5>
        </div>
        <div>
          <h5>
            Male
            <Badge className="badge-ele" bg="secondary">
              {cmale}
            </Badge>
            Female
            <Badge className="badge-ele" bg="secondary">
              {cfmale}
            </Badge>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
