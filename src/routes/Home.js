import React, { useState, useEffect } from  'react';
import { dbService } from '../firebase'

const Home = ( { userObj } ) => {
    const [sweet, setSweet] = useState("")
    const [sweets, setSweets] = useState([]);

    const getSweets = async() => {
        const dbSweets = await dbService.collection("sweets").get();
        dbSweets.forEach(document => {
            const sweetObject = {
                ...document.data(),
                id: document.id
            };
            setSweets((prev) => [sweetObject, ...prev])            
        })
    }

    useEffect(() => {
        getSweets();
        dbService.collection("sweets").onSnapshot(snapshot => {
            console.log(snapshot)
        })
    }, [])

    const onSubmit = async (e) => {
        e.preventDefault();
        await dbService.collection("sweets").add({
            text: sweet,
            createdAt: Date.now(),
            creatorId: userObj.uid,
        });
    };

    const onChange = (e) => {
        const {
            target: { value }, 
        } = e;
        setSweet(value);
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" value={sweet} onChange={onChange} placeholder="What's on your mind?" maxLength={120} />
                <input type="submit" value="Sweet" />
            </form>
            <div>
                {sweets.map((sweet) => (
                <div key={sweet.id}>
                    <h4>{sweet.sweet}</h4>
                </div> 
                ))}
            </div>
        </div>
        );
    }

export default Home;