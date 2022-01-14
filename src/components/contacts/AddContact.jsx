import React, { useState } from "react";
import "./AddContact.css";
import { addContact } from "../../actions/actions";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

const AddContact = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("");
  const [gender, setGender] = useState("");
  const createContact = (e) => {
    e.preventDefault();
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
      email: email,
      gender: gender,
      type: type,
    };

    dispatch(addContact(newContact));
    navigate("/");
  };

  const cancelButton = () => {
    navigate("/");
  };

  return (
    <div className="main-div">
      <div className="form-div">
        <div className=" card border-0 shadow">
          <div className="card-header">Add a Contact</div>
          <div className="card-body p-3">
            {/*   // form starts here  */}
            <form onSubmit={(e) => createContact(e)} autoComplete="off">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Contact Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  type="text"
                  className="form-control mt-2"
                  placeholder="Contact Number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  required
                />
                <input
                  type="text"
                  className="form-control mt-2 mb-3"
                  placeholder="Contact Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              {/* // ============================= radio button for gender
             
                                                    ============================ // */}
              <div className="radio-button-group">
                <label className="radio-button-label">Select Gender</label>
                <input
                  className="radio-btn"
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={(e) => setGender(e.target.value)}
                  required
                />
                Male
                <input
                  className="radio-btn"
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={(e) => setGender(e.target.value)}
                  required
                />
                Female
                {/* // ============================= radio button for contact type
             
                                                    ============================ // */}
                <label className="radio-button-label">Contact Type</label>
                <input
                  className="radio-btn"
                  type="radio"
                  name="contactType"
                  value="business"
                  onChange={(e) => setType(e.target.value)}
                  required
                />
                Business
                <input
                  className="radio-btn"
                  type="radio"
                  name="contactType"
                  value="personal"
                  onChange={(e) => setType(e.target.value)}
                  required
                />
                Personal
              </div>
              {/* // ============================= radio button end
                                                    ============================ // */}
              <button className="save-button" type="submit">
                Save Contact
              </button>
              <button
                onClick={cancelButton}
                className="save-button"
                type="button"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
