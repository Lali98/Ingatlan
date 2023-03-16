import {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";

function NewAd() {
    const [categories, setCategory] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/api/kategoriak', {
            "Content-Type": "application/json"
        })
            .then((data) => data.json())
            .then(data => setCategory(data));
    }, []);
    const navigate = useNavigate();
    const hibaRef = useRef(null);
    return (
        <div className="container">
            <h2 className="mb-4 text-center">Új hirdetés elküldése</h2>
            <div className="row">
                <div className="offset-lg-3 offset-md-2 col-lg-6 col-md-8 col-12">
                    <form className='row' onSubmit={async (e) => {
                        e.preventDefault();
                        const ujIngatlan = {
                            // kategoriaId: parseInt(e.target.elements.kategoriaId.value),
                            leiras: e.target.elements.leiras.value,
                            hirdetesDatuma: e.target.elements.hirdetesDatuma.value,
                            tehermentes: e.target.elements.tehermentes.checked,
                            kepUrl: e.target.elements.kepUrl.value
                        };
                        const response = await fetch('http://localhost:5000/api/ujingatlan', {
                            method: 'POST',
                            body: JSON.stringify(ujIngatlan),
                            headers: {
                                "Content-Type": "application/json",
                            }
                        });
                        if(response.status === 200) {
                            navigate('/offers');
                        } else {
                            hibaRef.current.innerHTML = response.status + ' ' + response.statusText;
                        }
                    }
                    }>
                        <div className="mb-3">
                            <label htmlFor="category" className="form-label">Ingatlan kategóriája</label>
                            <select className="form-select" name="kategoriaId">
                                {categories.map((category) => (
                                    <option value={category.id}>{category.megnevezes}</option>
                                ))}
                            </select>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="date" className="form-label">Hirdetés dátuma</label>
                            <input type="date" className="form-control" name="hirdetesDatuma" readOnly
                                   value={new Date().toISOString().split('T')[0]}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Ingatlan leírása</label>
                            <textarea className="form-control" name="leiras" rows="3"></textarea>
                        </div>
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="checkbox" name="tehermentes"/>
                            <label className="form-check-label" htmlFor="creditFree">Tehermentes ingatlan</label>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="pictureUrl" className="form-label">Fénykép az ingatlanról</label>
                            <input type="url" className="form-control" name="kepUrl"/>
                        </div>
                        <div className="mb-3 text-center">
                            <button className="btn btn-primary px-5" type='submit'>Küldés</button>
                        </div>
                        <div className="alert alert-danger alert-dismissible" role="alert">
                            <strong ref={hibaRef}>Hiba szövege</strong>
                            <button type="button" className="btn-close"></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default NewAd;