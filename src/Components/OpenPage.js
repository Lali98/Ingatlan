import {Link} from 'react-router-dom';

function OpenPage() {
    return (
        <div className="container">
            <div className="start w-100">
                <h1 className="text-center pt-2 pt-lg-4">Á.L.B. Ingatlanügynöség</h1>
                <div className="row">
                    <div className="col-12 col-sm-6 text-center">
                        <Link to="/offers">
                            <span className="btn btn-primary">Nézze meg kínálatunkat!</span>
                        </Link>
                    </div>
                    <div className="col-12 col-sm-6 text-center">
                        <Link to='/newad'>
                            <span className="btn btn-primary">Hirdessen nálunk!</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OpenPage;