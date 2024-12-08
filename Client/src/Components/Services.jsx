// import React from 'react';
import axios from 'axios';
import { useEffect, useState } from "react";

const Services = () => {
    const [services,setServices] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchTeams = async () => {
        try {
          const response = await axios.get("/api/services");
          console.log(response.data); 
          setServices(response.data.data || response.data); 
        } catch (error) {
          console.error("Error fetching services:", error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchTeams();
    }, []);
  
    
    if (loading) {
      return <h1>Loading...</h1>;
    }
  
    if (!Array.isArray(services) || services.length === 0) {
      return <h1>No data available</h1>;
    }
    return (       
        <div>
            <div className="sm:m-10 flex justify-center">
                <div className="text-center">
                    <p className='text-[#0096C7] font-bold'>Our Services</p>
                    <h2 className="text-4xl">Market  <span className='text-[#0096C7]'>Insights and Analysis.</span></h2>
                    <p className='sm:w-[600px] text-lg'>Help businesses improve their operations, achieve their goals, and stay competitive in  todays.</p>
                </div>
            </div>
            
            <div  className="grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {
              services.map((service,i)=>( 
                <div key={i}>
                  <div className="card card-compact bg-base-100 shadow-md">
          
                    <figure>
                      <img
                        src={service.coverImg}
                        alt="img" className='w-full h-48 object-cover' />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{service.title}</h2>
                      <p>{service.details}</p>
                    </div>
                  </div>
                </div>
              ))
            }
            </div>
            
        </div>
    );
};

export default Services;