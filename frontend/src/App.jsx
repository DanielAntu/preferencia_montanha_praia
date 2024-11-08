import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Result from "./components/Result";

import "./App.css";

function App() {
    const [age, setAge] = useState("");
    const [income, setIncome] = useState("");
    const [frequency, setFrequency] = useState("");
    const [budget, setBudget] = useState("");
    const [proxMontain, setProxMontain] = useState("");
    const [proxBeach, setProxBeach] = useState("");
    const [pet, setPet] = useState("");
    const [concern, setConcern] = useState("");
    const [gender, setGender] = useState("");
    const [education, setEducation] = useState("");
    const [activity, setActivity] = useState("");
    const [location, setLocation] = useState("");
    const [season, setSeason] = useState("");
    const [loading, setLoading] = useState(false);
    const [isData, setIsData] = useState(false);
    const [preference, setPreference] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
            !age ||
            !income ||
            !frequency ||
            !budget ||
            !proxMontain ||
            !proxBeach ||
            !pet ||
            !concern ||
            !gender ||
            !education ||
            !activity ||
            !location ||
            !season
        )
            return;

        const obj = {
            age,
            income,
            frequency,
            budget,
            prox_mountains: proxMontain,
            prox_beach: proxBeach,
            pets: pet,
            concerns: concern,
            gender,
            education,
            activity,
            location,
            season,
        };

        const url = "http://127.0.0.1:5000/";

        setLoading(true);
        const response = await fetch(url + "predict", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(obj),
        });

        const data = await response.json();

        setPreference(data.preference);
        setLoading(false);
        setIsData(true);
    };

    return (
        <div className="app">
            <Header />
            <div className="container">
                {!isData ? (
                    <>
                        <p>
                            Preencha o formulário que nossa IA irá lhe ajudar
                            escolher a melhor viagem!
                        </p>
                        <Form
                            handleSubmit={handleSubmit}
                            setAge={setAge}
                            setIncome={setIncome}
                            setFrequency={setFrequency}
                            setBudget={setBudget}
                            setProxMontain={setProxMontain}
                            setProxBeach={setProxBeach}
                            setPet={setPet}
                            setConcern={setConcern}
                            setGender={setGender}
                            setEducation={setEducation}
                            setActivity={setActivity}
                            setLocation={setLocation}
                            setSeason={setSeason}
                            loading={loading}
                        />
                    </>
                ) : (
                    <Result preference={preference} setIsData={setIsData} />
                )}
            </div>
            <Footer />
        </div>
    );
}

export default App;
