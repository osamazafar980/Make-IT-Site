import React from 'react';
import Select from '../components/shared/Form/Select';
import { CheckboxGroup } from '../components/shared/Form/Checkbox';
import RadioGroup, { Radio } from '../components/shared/Form/Radio';
import Button from '../components/shared/Button';
import Tabs, { Tab } from '../components/shared/Tabs';
import Header from './Header';
import './Survey.css';




function Survey() {


  const handleSelect = (e) => {
    const target = e.target;
    this.setState({ [target.name]: parseInt(target.value, 10) });
  }

  const goTo = (e) => {
    e.preventDefault();
    const Tabs = this.tabs;
    switch (e.target.name) {
      case "next":
        Tabs.handleClick(Tabs.state.activeIndex + 1);
        break;
      case "back":
        Tabs.handleClick(Tabs.state.activeIndex - 1);
        break;
      default:
        break;
    }
  }
  return (
    <div><Header />

      <div className="Survey">

        <div className="Survey__content">
          <div className="Survey__heading"><h1>Some quick questions to generate that awesome meal plan ..</h1></div>
          <form>
            <Tabs className="Survey__tabs">
              <Tab heading="1">
                <h2>How many meals do you ( or want to have ) in a day?</h2>
                <Select name="mealCount" />
                <div className="Survey__goto">
                  <Button name="next" onClick={goTo} className="Survey__goto__button--next">Next</Button>
                </div>
              </Tab>

              <Tab heading="2">
                <h2>Choose a plan type</h2>
                <Select name="planType" handler={handleSelect} />
                <div className="Survey__goto">
                  <Button name="back" onClick={goTo} className="Survey__goto__button--back">Back</Button>
                  <Button name="next" onClick={goTo} className="Survey__goto__button--next">Next</Button>
                </div>
              </Tab>

              <Tab heading="3">
                <h2>Any dietary preferences?</h2>
                <Radio>Go with recommended</Radio>
                <Radio>Choose custom values</Radio>
                <div className="Survey__goto">
                  <Button name="back" onClick={goTo} className="Survey__goto__button--back">Back</Button>
                  <Button name="next" onClick={goTo} className="Survey__goto__button--next">Next</Button>
                </div>
              </Tab>

              <Tab heading="4" >
                <h2>Any health preferences?</h2>
                <Radio>Go with recommended</Radio>
                <Radio>Choose custom values</Radio>
                <div className="Survey__goto">
                  <Button name="back" onClick={goTo} className="Survey__goto__button--back">Back</Button>
                  <Button name="next" onClick={goTo} className="Survey__goto__button--next">Next</Button>
                </div>
              </Tab>

              <Tab heading="5">
                <h2>Calorie intake</h2>
                <RadioGroup  >
                  <Radio>Go with recommended</Radio>
                  <Radio>Choose custom values</Radio>
                </RadioGroup>
                <div className="Survey__goto">
                  <Button name="back" className="Survey__goto__button--back">Back</Button>
                  <Button className="Survey__goto__button--next">Get Plan!</Button>
                </div>
              </Tab>
            </Tabs>
          </form>
        </div>
        <Button className="Survey__goto__button--next">Get Plan!</Button>


      </div></div>
  )
}
export default Survey
