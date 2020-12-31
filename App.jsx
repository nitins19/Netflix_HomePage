import React from 'react';
import Series from "./Series"
import data from "./data.jsx";

function App()
{
    return(<>
    
    <h1 className="heading">List of Top 5 Netflix Series in 2020 </h1>
    {data.map((val,index)=>{
        return(
            <Series 
            imgsrc={val.imgsrc}
            series_name={val.series_name}
            link={val.link}     
            />
        );
    })}
    </>);
}
export default App;
