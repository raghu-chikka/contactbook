import React, {useState} from "react";
import Avatar from "react-avatar";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteContact } from "../../actions/actions";

const PersonalContact = ({ contact }) => {
  const dispatch = useDispatch();
  
 const [newName, setNewName] = useState("");
 const [newNum, setNewNum] = useState("");
 const [newemail, setNewemail] = useState("")
 
  const { id, name, number, email, type } = contact;

 if(type === "personal"){
   return (setNewName(name),setNewNum(number),setNewemail(email));
}

//  type==="business" ? (name, number, email) : null

  return (
    <>
      <tr scope="row">
        <td>
          <Avatar className="mr-3" name={name} size="35" round={true} /> {newName}
        </td>
        <td>{newNum}</td>
        <td>{newemail}</td>
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

export default PersonalContact;
