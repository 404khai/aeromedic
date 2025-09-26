// import React, {useState, useEffect} from 'react'
// import './Medications.css'
// import FilterSideNav from '../../components/FilterSideNav/FilterSideNav'
// import medicationData from '../../json/medications.json'
// import MedCard from '../../components/MedCard/MedCard'

// const Medications = ({drug}) => {
//     const [drugs, setDrugs] = useState([]);

//         useEffect(() => {
//         setDrugs(medicationData);
//     }, []);

//   return (
//     <div className='medications'>
//         <FilterSideNav/>

//         <div className="medicationsBodyBox">
//             <div className="medicationsHead">
//                 <h1>Medications</h1>
//             </div>

//             <div className="medicationsBody">
                
//                 {drugs.map((drug) => (
//                     <MedCard key={drug.id} drug={drug} />
//                 ))}
//             </div>
//         </div>
        
//     </div>
//   )
// }

// export default Medications


import React, { useState, useEffect } from 'react';
import './Medications.css';
import MedFilterSideNav from '../../components/MedFilterSideNav/MedFilterSideNav';
import medicationData from '../../json/medications.json';
import MedCard from '../../components/MedCard//MedCard';

const Medications = ({ addToCart }) => {
    const [drugs, setDrugs] = useState([]);

    useEffect(() => {
        setDrugs(medicationData);
    }, []);

    return (
        <div className='medications'>
            <MedFilterSideNav />
            <div className="medicationsBodyBox">
                <div className="medicationsHead">
                    <h1>Medications</h1>
                </div>
                <div className="medicationsBody">
                    {drugs.map((drug) => (
                        <MedCard key={drug.id} drug={drug} addToCart={addToCart} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Medications;


