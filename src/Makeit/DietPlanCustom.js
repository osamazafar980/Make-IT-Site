import React, { useState } from 'react';
import './Dietplanmodal.css';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import Header from './Header';
import Modal from 'react-modal';
import { capitalize } from 'lodash';


function DietPlanCustom() {



  const calendar = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const mealOrder = ['breakfast', 'lunch', 'dinner'];
  const [modalopen, setmodalopen] = useState(false);

  return (
    <div>
      <Header />
      <div className="Dietplan_container">
        <div className='Dietplan_nav'>
          <h1 className='Dietplan_header'>Meal Planner</h1>
          <button
            className='Dietplan_shopping-list'
          >
            Ingredient     </button>
        </div>

        <ul className="Dietplan_meal-types">
          {
            mealOrder.map(mealType => <li key={mealType} className="Dietplan_subheader">{capitalize(mealType)}</li>)
          }
        </ul>

        <div className='Dietplan_calendar'>
          <div className='Dietplan_days'>
            {calendar.map((day => <h3 key={day} className='Dietplan_subheader'>{capitalize(day)}</h3>))}
          </div>
          <div className='Dietplan_icon-grid'>
            {calendar.map(({ day, meals }) => (
              <ul key={day}>
                {mealOrder.map((meal) => (
                  <li key={meal} className='Dietplan_meal'>
                    <div className='Dietplan_add-meal-btn'>
                      <button className='Dietplan_icon-btn' onClick={() => setmodalopen(true)}>
                        <RestaurantIcon size={10} />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <Modal className='Dietplan_modal' isOpen={modalopen} shouldCloseOnOverlayClick={false} onRequestClose={() => setmodalopen(false)}>
          <div className='Dietplan_search-container'>
            <h3 className='Dietplan_subheader'>
              Find a meal
            </h3>
            <div>
              <div className='Dietplan_search'>
                <input
                  className='Dietplan_food-input'
                  type='text'
                  placeholder='Search Foods'

                />
                <button
                  className='Dietplan_icon-btn'
                >
                  Search
                </button>
              </div>
              {
                <h3>Searched recipes will appear here</h3>
              }
            </div>
            <button
              onClick={() => setmodalopen(false)}       >
              close
            </button>
          </div>
        </Modal>

      </div>  </div>

  );
}

export default DietPlanCustom
