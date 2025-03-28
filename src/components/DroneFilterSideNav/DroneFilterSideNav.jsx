import React, {useState} from 'react'
import './DroneFilterSideNav.css'
import { IoFilter } from "react-icons/io5";
import DropdownWithCheckboxes2 from '../Dropdownwithcheckboxes2/DropdownWithCheckboxes2';
import PriceFilter from '../PriceFilter/PriceFilter';

const DroneFilterSideNav = () => {
  const [filteredPrice, setFilteredPrice] = useState(100);

  const handleFilterChange = (price) => {
    setFilteredPrice(price);
    console.log(`Filtered price: $${price}`);
  };

  return (
    <div className='filterSideNav'>

        <div className="filterHead">
            <h1>Filters</h1>
            <i><IoFilter /></i>
        </div>

        <div className="filterOptions">
            <DropdownWithCheckboxes2/>

            <input type="text" placeholder='Name' className='filterSearch'/>

            <input type="text" placeholder='Status' className='filterSearch'/>

            <input type="text" placeholder='Battery' className='filterSearch'/>

            <div className='priceFilterBox'>
                <PriceFilter onFilterChange={handleFilterChange} />
                <p>Selected Price: ${filteredPrice}</p>
            </div>
        </div>
    </div>
  )
}

export default DroneFilterSideNav