import React, { useEffect, useState } from "react";

function PageTwo(){
    const [data, setData]= useState("Loading...");
        useEffect(()=> {
             async function fetchData(){
                try {
                    
                    const response = await fetch(`${import.meta.env.VITE_APP_BACKEND_URL}/app/api/page-two`);
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        const result = await response.json();
                        setData(result.message);
                 } catch (error) {
                    setData(error.message);
                 }
             }
             fetchData();
        }, []);
    return (
      <div>
        <h1>{data}</h1>      
      </div>
    );
}
export default PageTwo;