import React, { useState, useEffect } from "react";
import "./AddContact.css";
import { getContact, updateContact } from "../../actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const EditContact = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  let { id } = useParams();
  const contact = useSelector((state) => state.contact.contact);

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("");
  const [gender, setGender] = useState("");

  useEffect(() => {
    if (contact !== null) {
      setName(contact.name);
      setNumber(contact.number);
      setEmail(contact.email);
      setType(contact.type);
      setGender(contact.gender);
    }
    dispatch(getContact(id));
  }, [contact]);

  const onUpdateContact = (e) => {
    e.preventDefault();
    const updatecontact = Object.assign(contact, {
      name: name,
      number: number,
      email: email,
      type: type,
      gender: gender,
    });
    dispatch(updateContact(updatecontact));
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
            <form onSubmit={(e) => onUpdateContact(e)} autoComplete="off">
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
                Update Contact
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

export default EditContact;
