import HeaderComp from '../HeaderComponent/Header';
import MiddleComp from '../MiddleWrapper/Middle';
import { Link } from 'react-router-dom';

const HomeComponent = () => {
  

    return (
       <> <Link to='/'>
            <HeaderComp/>
            <MiddleComp/>
        </Link>
           
       </>
    );
};

export default HomeComponent;