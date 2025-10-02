
import './Header.css';


const HeaderComp = () => {


    return (
       <div className="HeaderConatiner">
          <div className='image-container-header'>
            <img src='https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png' alt=''/>
          </div>
          <div className="auth position">
             <span>Log in</span>
             <span>Sign up</span>
          </div>
          <div className="position title-header">
            QuickBite
          </div>
          <div className="position desc">
            <h1>Discover the best food & drinks</h1>    
          </div>
       </div>
    );
};

export default HeaderComp;