// Home.js

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addInputData, deleteInputData } from '../Redux/Slices/action';

function Home({ inputDataList, addInputData, deleteInputData }) {
  const [inputData, setInputData] = useState('');
  const [checkedItems, setCheckedItems] = useState({});

  const handleAdd = () => {
    if (inputData.trim() !== '') {
      addInputData(inputData);
      setInputData('');
    }
  };

  const handleDelete = (index) => {
    deleteInputData(index);
  };

  const handleCheckboxChange = (index) => {
    setCheckedItems({ ...checkedItems, [index]: !checkedItems[index] });
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <div className='d-flex'>
        <input type="text" value={inputData} onChange={(e) => setInputData(e.target.value)} className='form-control w-50' />
        <button className='btn btn-info' onClick={handleAdd}>Add</button>
      </div>
      <div className="container mt-5">
        {inputDataList.map((data, index) => (
          <div key={index} className="card" style={{ backgroundColor: checkedItems[index] ? 'lightgreen' : 'white' }}>
            <div className="d-flex justify-content-between mb-3 align-items-center p-1">
              <div>
                <input type="checkbox" name="" id="" checked={checkedItems[index]} onChange={() => handleCheckboxChange(index)} />
                <h4>{data}</h4>
              </div>
              <button className='btn btn-danger' onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div className="container">
        <h4>Total Complete Items: {Object.values(checkedItems).filter(item => item).length}</h4>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    inputDataList: state.inputDataList
  };
};

const mapDispatchToProps = {
  addInputData,
  deleteInputData
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
