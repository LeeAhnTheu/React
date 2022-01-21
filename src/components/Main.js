import {Link} from 'react-router-dom';
import '../styles/Main.scss';

export default function Main(){
    return(
        <div className='main'>
            <h1>STUDY SPACE</h1> 
            <Link to="/shopee">Shopee Header</Link>
        </div>
    )
}