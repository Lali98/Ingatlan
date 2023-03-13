import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import {useEffect, useState} from "react";

function Offers() {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/ingatlan', {
            "Content-Type": "application/json"
        })
            .then((data) => data.json())
            .then(data => setOffers(data));
    }, []);


    return (
        <div>
            <h1 style={{textAlign: 'center', margin: '15px'}}>Ajánlataink</h1>
            <TableContainer style={{boxShadow: '0px 0px 15px 0px #000000', display: 'block', width: '90%', marginRight: 'auto', marginLeft: 'auto'}}>
                <Table sx={{minWidth: 500}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Kategória</TableCell>
                            <TableCell align="center">Leírás</TableCell>
                            <TableCell align="center">Hirdetés dátuma</TableCell>
                            <TableCell align="center">Tehermentes</TableCell>
                            <TableCell align="center">Fénykép</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {offers.map((offer) => (
                            <TableRow key={offer.id}>
                                <TableCell align="center">{offer.kategoriaNev}</TableCell>
                                <TableCell>{offer.leiras}</TableCell>
                                <TableCell align="center">{offer.hirdetesDatuma}</TableCell>
                                <TableCell align="center" style={{color: offer.tehermentes ? "green" : "red"}}>{offer.tehermentes ? "Igen" : "Nem"}</TableCell>
                                <TableCell align="center">
                                    <img src={offer.kepUrl} alt="" style={{maxHeight: '125px'}}/>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Offers;