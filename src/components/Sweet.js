import React, { useState } from 'react'
import { dbService, storageService } from '../firebase';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const Sweet = ({ sweetObj, isOwner }) =>  {
    const [editing, setEditing] = useState(false);
    const [newSweet, setNewSweet] = useState(sweetObj.text);

    const onDeleteClick = async () => {
        const ok = window.confirm("Are you sure you want to delete this sweet?");
        console.log(ok);
        if (ok) {
            // delete sweet
            await dbService.doc(`sweets/${sweetObj.id}`).delete();
            await storageService.refFromURL(sweetObj.attachmentUrl).delete();
        }
    };
    const toggleEditing = () => setEditing((prev) => !prev);

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(sweetObj, newSweet);
        await dbService.doc(`sweets/${sweetObj.id}`).update({
            text: newSweet,
        });
        setEditing(false);
    }
    const onChange = (e) => {
        const {
            target : { value },
        } = e;
        setNewSweet(value);
    };

    

    return (
        <div className="sweet">
            { editing ? (
                <>
                <form onSubmit={onSubmit} className="container sweetEdit">
                    <input
                        type="text"
                        placeholder="Edit your sweet" 
                        value={newSweet} 
                        required
                        onChange={onChange}
                    />
                    
                    <input type="submit" value="Update Sweet" className="formBtn" />
                </form>
                <span onClick={toggleEditing} className="formBtn cancelBtn">
                   Cancel
                </span>
                </>
            ) : ( 
                <>
                    <h4>{sweetObj.text}</h4>
                    {sweetObj.attachmentUrl && <img src={sweetObj.attachmentUrl} />}
                    {isOwner && (
                    <div class="sweet__actions">
                        <span onClick={onDeleteClick}>
                        <FontAwesomeIcon icon={faTrash} />
                        </span>
                        <span onClick={toggleEditing}>
                        <FontAwesomeIcon icon={faPencilAlt} />
                        </span>
                    </div>
                    )}
                </>
        )}
        </div>
    );
};    

export default Sweet;
