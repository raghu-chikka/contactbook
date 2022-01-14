import React from "react";
import Avatar from "react-avatar";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteContact } from "../../actions/actions";

const Displaycontact = ({ contact }) => {
  const dispatch = useDispatch();
  const { id, name, number, email, type } = contact;

  return (
    <>
      <tr key={contact.id} scope="row">
        <td>
          <Avatar className="mr-3" name={name} size="35" round={true} /> {name}
        </td>
        <td>{number}</td>
        <td>{email}</td>
        <td className="actions">
          <Link to={`/editcontact/${id}`}>
            <span className="material-icons dark mr-5">edit</span>
          </Link>{" "}
          <span
            onClick={() => dispatch(deleteContact(id))}
            className="material-icons"
            style={{ cursor: "pointer" }}
          >
            remove_circle
          </span>
        </td>
      </tr>
    </>
  );
};

export default Displaycontact;
