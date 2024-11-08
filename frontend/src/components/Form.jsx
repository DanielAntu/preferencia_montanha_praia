import { useState, useEffect } from "react";

import "./Form.css";

const Form = ({
    handleSubmit,
    setAge,
    setIncome,
    setFrequency,
    setBudget,
    setProxMontain,
    setProxBeach,
    setPet,
    setConcern,
    setGender,
    setEducation,
    setActivity,
    setLocation,
    setSeason,
    loading,
}) => {
    const url = "http://127.0.0.1:5000/";

    const [confs, setConfs] = useState([]);
    const [genders, setGenders] = useState([]);
    const [educations, setEducations] = useState([]);
    const [activitys, setActivitys] = useState([]);
    const [locations, setLocations] = useState([]);
    const [seasons, setSeasons] = useState([]);

    const getFetch = async (endpoint, set) => {
        const response = await fetch(url + endpoint);
        const data = await response.json();
        set(data);
    };

    useEffect(() => {
        getFetch("confi", setConfs);
        getFetch("gender", setGenders);
        getFetch("education", setEducations);
        getFetch("activity", setActivitys);
        getFetch("location", setLocations);
        getFetch("season", setSeasons);
    }, []);

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <label htmlFor="age">Idade:</label>
                <input
                    type="number"
                    name="age"
                    id="age"
                    onChange={(e) => setAge(e.target.value)}
                />
            </div>

            <div className="form-control">
                <label htmlFor="income">Renda:</label>
                <input
                    type="number"
                    name="income"
                    id="income"
                    onChange={(e) => setIncome(e.target.value)}
                />
            </div>

            <div className="form-control">
                <label htmlFor="frequency">Frequencia de Férias:</label>
                <input
                    type="number"
                    name="frequency"
                    id="frequency"
                    onChange={(e) => setFrequency(e.target.value)}
                />
            </div>

            <div className="form-control">
                <label htmlFor="budget">Orçamento de Férias:</label>
                <input
                    type="number"
                    name="budget"
                    id="budget"
                    onChange={(e) => setBudget(e.target.value)}
                />
            </div>

            <div className="form-control">
                <label htmlFor="prox-montain">
                    Quantos km está das montanhas:
                </label>
                <input
                    type="number"
                    name="prox-montain"
                    id="prox-montain"
                    onChange={(e) => setProxMontain(e.target.value)}
                />
            </div>

            <div className="form-control">
                <label htmlFor="prox-beach">Quantos km está das praias:</label>
                <input
                    type="number"
                    name="prox-beach"
                    id="prox-beach"
                    onChange={(e) => setProxBeach(e.target.value)}
                />
            </div>

            <div className="form-control">
                <label htmlFor="pets">Pretende Levar Animais:</label>
                <select
                    name="pets"
                    id="pets"
                    onChange={(e) => setPet(e.target.value)}>
                    <option value="">Selecione uma Opção</option>
                    {confs &&
                        confs.map((item) => (
                            <option value={item[0]} key={item[0]}>
                                {item[1]}
                            </option>
                        ))}
                </select>
            </div>

            <div className="form-control">
                <label htmlFor="concerns">
                    Tem alguma preocupação com o meio ambiente:
                </label>
                <select
                    name="concerns"
                    id="concerns"
                    onChange={(e) => setConcern(e.target.value)}>
                    <option value="">Selecione uma Opção</option>
                    {confs &&
                        confs.map((item) => (
                            <option value={item[0]} key={item[0]}>
                                {item[1]}
                            </option>
                        ))}
                </select>
            </div>

            <div className="form-control">
                <label htmlFor="gender">Genero:</label>
                <select
                    name="gender"
                    id="gender"
                    onChange={(e) => setGender(e.target.value)}>
                    <option value="">Selecione uma Opção</option>
                    {genders &&
                        genders.map((item) => (
                            <option value={item[0]} key={item[0]}>
                                {item[1]}
                            </option>
                        ))}
                </select>
            </div>

            <div className="form-control">
                <label htmlFor="education">Nível de Educação:</label>
                <select
                    name="education"
                    id="education"
                    onChange={(e) => setEducation(e.target.value)}>
                    <option value="">Selecione uma Opção</option>
                    {educations &&
                        educations.map((item) => (
                            <option value={item[0]} key={item[0]}>
                                {item[1]}
                            </option>
                        ))}
                </select>
            </div>

            <div className="form-control">
                <label htmlFor="activities">Atividade Preferida:</label>
                <select
                    name="activities"
                    id="activities"
                    onChange={(e) => setActivity(e.target.value)}>
                    <option value="">Selecione uma Opção</option>
                    {activitys &&
                        activitys.map((item) => (
                            <option value={item[0]} key={item[0]}>
                                {item[1]}
                            </option>
                        ))}
                </select>
            </div>

            <div className="form-control">
                <label htmlFor="location">Tipo onde mora:</label>
                <select
                    name="location"
                    id="location"
                    onChange={(e) => setLocation(e.target.value)}>
                    <option value="">Selecione uma Opção</option>
                    {locations &&
                        locations.map((item) => (
                            <option value={item[0]} key={item[0]}>
                                {item[1]}
                            </option>
                        ))}
                </select>
            </div>

            <div className="form-control">
                <label htmlFor="season">Estação do ano favorita:</label>
                <select
                    name="season"
                    id="season"
                    onChange={(e) => setSeason(e.target.value)}>
                    <option value="">Selecione uma Opção</option>
                    {seasons &&
                        seasons.map((item) => (
                            <option value={item[0]} key={item[0]}>
                                {item[1]}
                            </option>
                        ))}
                </select>
            </div>

            {!loading && <button type="submit">Enviar</button>}
            {loading && <button disabled>Carregando...</button>}
        </form>
    );
};

export default Form;
