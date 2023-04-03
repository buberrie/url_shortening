import './style/statistics.css'
import Recognition from '../../images/icon-brand-recognition.svg';
import Records from '../../images/icon-detailed-records.svg';
import Customizale from '../../images/icon-fully-customizable.svg'
import GetUrl from '../getUrl/GetUrl';

const Statistics = () => {
  return (
    <section>
      <GetUrl />
      <div className="advanced">
        <h1>Advanced Statistics</h1>
        <p>Track how your links are performing across the web with our 
          advanced statistics dashboard.</p>
      </div>
      <div className="line"></div>
      <div className="brand">
        <div className="brand1 card">
          <div className="image">
            <img src={Recognition} alt="" />
          </div>
          <h2>Brand Recognition</h2>
          <p>
            Boost your brand recognition with each click. Generic links don’t 
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <div className="brand2 card" >
          <div className="image">
            <img src={Records} alt="" />
          </div>
          <h2>Detailed Records</h2>
          <p>
            Gain insights into who is clicking your links. Knowing when and where 
            people engage with your content helps inform better decisions.
          </p>
        </div>
        <div className="brand3 card">
          <div className="image">
            <img src={Customizale} alt="" />
          </div>
          <h2>Fully Customizable</h2>
          <p>
            Improve brand awareness and content discoverability through customizable 
            links, supercharging audience engagement.
          </p>
        </div>
      </div>
      <div className="boost">
        <h1>Boost your links today</h1>
        <button>Get Started</button>
      </div>
    </section>
  )
}

export default Statistics