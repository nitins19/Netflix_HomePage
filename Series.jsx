import React from 'react';
function Series(props)
{
    return(
<>
 <div className="special">
    <div className='square'>
        <img src={props.imgsrc} alt="loading" height="300" className="img_css"/>
        <div className='info'>
        <span className="Netflix"> A Netflix Original Series</span>
        <h3 className="seriesname">{props.series_name}</h3>
        <a href={props.link} target="_blank">
        <button>Watch Now</button>
        </a>
        </div>
    </div>
 </div>
</>
    );

}
export default Series;
