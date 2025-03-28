import React, {useState} from 'react'
import './MedFilterSideNav.css'
import { IoFilter } from "react-icons/io5";
import DropdownWithCheckboxes from '../Dropdownwithcheckboxes/DropdownWithCheckboxes';
import PriceFilter from '../PriceFilter/PriceFilter';

const MedFilterSideNav = () => {
  const medCategoryOptions = ['Analgesics', 'Antibiotics', 'Antihistamines', 'Antihypertensives', 'Antacids','Antidepressants', 'Antidiabetics','Antipyretics', 'Bronchodilators'];

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
            <DropdownWithCheckboxes 
              id="medCategory"
              title="Category"
              options={medCategoryOptions}
            />

            <input type="text" placeholder='Name' className='filterSearch'/>

            <input type="text" placeholder='Weight' className='filterSearch'/>

            <input type="text" placeholder='Code' className='filterSearch'/>

            <div className='priceFilterBox'>
                <PriceFilter onFilterChange={handleFilterChange} />
                <p>Selected Price: ${filteredPrice}</p>
            </div>
        </div>
    </div>
  )
}

export default MedFilterSideNav