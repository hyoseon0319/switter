import React, { useState, useEffect } from  'react';
import { v4 as uuidv4 }from "uuid";
import { dbService, storageService } from '../firebase';
import Sweet from '../components/Sweet';

const Home = ( { userObj } ) => {
    const [sweet, setSweet] = useState("")
    const [sweets, setSweets] = useState([]);
    const [attachment, setAttachment] = useState("")

    // const getSweets = async() => {
    //     const dbSweets = await dbService.collection("sweets").get();
    //     dbSweets.forEach(document => {
    //         const sweetObject = {
    //             ...document.data(),
    //             id: document.id
    //         };
    //         setSweets((prev) => [sweetObject, ...prev])            
    //     })
    // }

    useEffect(() => {
        // getSweets();
        dbService.collection("sweets").onSnapshot((snapshot) => {
            console.log(snapshot.docs)
            const sweetArray = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
        }));
        setSweets(sweetArray);
      });
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        let attachmentUrl = "";
        if(attachment !== "") {
            const attachmentRef = storageService.ref().child(`${userObj.uid}/${uuidv4()}`);
            const response = await attachmentRef.putString(attachment, "data_url");
            console.log(response);
            attachmentUrl = await response.ref.getDownloadURL();
        }
        const sweetObj = {
            text: sweet,
            createdAt: Date.now(),
            creatorId: userObj.uid,
            attachmentUrl
        }
        await dbService.collection("sweets").add(sweetObj);
        setSweet("");
        setAttachment("");
    };

    const onChange = (e) => {
        const {
            target: { value }, 
        } = e;
        setSweet(value);
    }

    const onFileChange = (e) => {
        const {target: { files },
    } = e;
    const theFile = files[0]; 
    const reader = new FileReader();

    reader.onloadend = (finishedEvent) => {
        const {
            currentTarget: { result },
        } = finishedEvent;
        setAttachment(result);
    };
        reader.readAsDataURL(theFile);
    };

    const onClearAttachment = () => setAttachment(null);
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input 
                    type="text" 
                    value={sweet} 
                    onChange={onChange} 
                    placeholder="What's on your mind?" 
                    maxLength={120} 
                />
                <input type="file" accept="image/*" onChange={onFileChange} />
                <input type="submit" value="Sweet" />
                {attachment && (
                    <div>
                        <img src={attachment} width="50px" height="50px" />
                        <button onClick={onClearAttachment}>Clear</button>
                    </div>
                )}
            </form>
            <div>
                {sweets.map((sweet) => (
                <Sweet 
                    key={sweet.id} 
                    sweetObj={sweet} 
                    isOwner={sweet.creatorId === userObj.uid} />
                ))}
            </div>
        </div>
        );
    }

export default Home;