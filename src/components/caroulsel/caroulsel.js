import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import './style.css'
import { depoimentos } from "../../data/data";
import { IconContext } from "react-icons/lib";

export function Carousel(props){
    
    const data = depoimentos;
    const [ indexData, setIndexData ] = useState(0);


    function handleNext(e){
        if(indexData == data.length - 1) setIndexData(0);
        else setIndexData(indexData+1);
    };
    function handlePrevious(e){
        if(indexData == 0) setIndexData(data.length -1)
        else setIndexData(indexData-1)
    }
    return(
        <div className="container" >
            <button onClick={handlePrevious}> 
                <IconContext.Provider value={{color: 'rgb(167,132,91)'}}>
                    <FiChevronLeft size={70} />
                </IconContext.Provider>
            </button>
            <div className="body">
                <h1 className="title" >Depoimentos</h1>
                    <img className="avatar" src={data[indexData].fotoUrl}/>
                <span>
                    "
                        {data[indexData].depoimento}
                    "
                </span>
                <span className="name" >{data[indexData].nome}</span>
                <span className="cargo" >{data[indexData].cargo}</span>
                <div className="dots">
                    {data.map((element, index)=>{
                        const selected = index == indexData;
                        return(
                            <span
                                key={index}
                                className={`dot-${selected}`}>
                            </span>
                        );
                    })}
                </div>
            </div>
            <button onClick={handleNext}>
                <IconContext.Provider value={{color: 'rgb(167,132,91)'}}>
                    <FiChevronRight size={70} />
                </IconContext.Provider>
            </button>
        </div>
    );

}