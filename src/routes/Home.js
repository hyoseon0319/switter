import React, { useState, useEffect } from  'react';
import { dbService, storageService } from '../firebase';
import Sweet from '../components/Sweet';
import SweetFactory from '../components/SweetFactory';

const Home = ( { userObj } ) => {
    const [sweets, setSweets] = useState([]);

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

    
    return (
        <div>
            <SweetFactory userObj={userObj} />
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