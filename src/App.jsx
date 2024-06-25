import { useState } from "react";
import { Form } from "./components/Form";
import { PersonInfo } from "./components/PersonInfo";

import "./App.css";

const initialPeople = [
    {
        name: "Filip",
        tel: 123123123,
        city: "Kraków",
        
    },
    {
        name: "Kacper",
        tel: 321321321,
        city: "Ulanów",
        
    },
    {
        name: "Jurek",
        tel: 321321321,
        
        
    }
];



function App() {

    const [isFormShown, setIsFormShown] = useState(false);
    const[people, setPeople] = useState(initialPeople);
    const handleShowFormClick = () => setIsFormShown(true);

    const addPerson = (data) => {
        const newPeople = [...people, data];
        setPeople(newPeople);
        setIsFormShown(false);
    };
    
    return (
        <>
            <h1>Lista kontaktów</h1>
            {isFormShown ? (
                <Form onAddPerson = {addPerson}/>
             ): (
                <button onClick={handleShowFormClick}>Dodaj</button>
            )}
            <ul>
            {people.map((person) => (
            <PersonInfo  
                key={person.tel}
                name={person.name} 
                tel={person.tel} 
                city={person.city} />
                            ))}
                            </ul>
        </>
    );
}

export default App;
