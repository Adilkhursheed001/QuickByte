import "./PizzaCave-Overview.css";

const PizzaCaveOverviewContainer = () => {
  
    console.log("Overview Component Rendered");
    
  return (
    <div className="PizzaCave-Overview-Conatiner ">
      <div className="menu">
        <p>Menu</p>
          <div className="cuisines">
              <p>Cuisines</p>
              <div className="items">
                <p>Pizza</p>
                <p>Italian</p>
                <p>Pasta</p>
                <p>Fast Food</p>
              </div>
          </div>

          <div className="topdishes">
            <p>Top dishes</p>
             <div className="items">
                <p>Sweet corn Pizza</p>
                <p>BBQ Pizza</p>
                <p>Shakes</p>
                <p>California Chicken</p>
              </div>
          </div>
      </div>

      
    </div>
  );
};

export default PizzaCaveOverviewContainer;
