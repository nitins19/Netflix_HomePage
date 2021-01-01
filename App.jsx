import React from 'react';
import Series from "./Series"
import data from "./data.jsx";
const Card= ()=>
(
    data.map((val,index)=>{
        return(
            <Series 
            key={val.id}
            imgsrc={val.imgsrc}
            series_name={val.series_name}
            link={val.link}     
            />
        );
    })
);

function App()
{
    return(<>
    
    <h1 className="heading">List of Top 5 Netflix Series in 2020 </h1>
    <Card/>
   
    </>);
}
export default App;
