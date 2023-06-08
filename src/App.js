import logo from './logo.svg';
import './App.css';
import vector from './assets/Vector 1.svg';
import msgImg1 from './assets/msg-1.svg';
import msgImg2 from './assets/msg-2.svg';


function App() {
  return (
    <div className='main-container'>
      <div className="left-container">
        <div className="left-sub-container">
          <h1>lodgn</h1>
          <div className="sub-heading">
            <p className='p1'>Current requests</p> <hr className='hr1' />
            <p className='p2'>Ongoing stays</p> < hr className='hr2' />
            <p className='p3'>Previous stays</p> < hr className='hr3' />
            <p className='p4'>Reports</p> < hr className='hr4' />
          </div>
          <div className="btn-green">
            <span className='btn'>Log-Out</span>
          </div>
          <div className="btn-desc">
            <p className='para1'>Help-Desk:</p>
            <p className='para2'>786-874 9988</p>
          </div>
        </div>
      </div>
      <div className="right-container">
        <div className="right-sub-container">
          <div className="top-container">
            <div className="para"><p>You currently have 3 requests</p></div>
          </div>
          <div className="center-container">
            <div className="rectangle-box-center">
              <div className="div-1">
                <h2>St Judes Hospital</h2>
                <span>Sarasota,FL. 33178</span>
              </div>
              <span className='v-line1'></span>
              <div className="div-2">
                <h2> 10 &nbsp; &nbsp; - &nbsp; &nbsp; 17 </h2>
                <div className="inner-div">
                  <span className='first'> October</span>
                  <span className='second'>December</span>
                </div>
              </div>
              <span className='v-line2'></span>
              <div className="div-3">
                <h2>20 Rooms</h2>
                <span> 10 Singles, 10 doubles</span>
              </div>
            </div>
            <div className="center-box">
              <div className="one">
                <h3>RECEIVED</h3>
              </div>
              <span className='v-line3'></span>
              <div className="two">
                <h3>NEGOTIATING</h3>
              </div>
              <span className='v-line4'></span>
              <div className="three">
                <h3>COMPLETED</h3>
              </div>
            </div>

          </div>
          <div className="bottom-container">
            <div className="rectangle-box-center">
              <div className="div-1">
                <h2>St Judes Hospital</h2>
                <span>Sarasota,FL. 33178</span>
              </div>
              <span className='v-line1'></span>
              <div className="div-2">
                <h2> 10 &nbsp; &nbsp; - &nbsp; &nbsp; 17 </h2>
                <div className="inner-div">
                  <span className='first'> October</span>
                  <span className='second'>December</span>
                </div>
              </div>
              <span className='v-line2'></span>
              <div className="div-3">
                <h2>20 Rooms</h2>
                <span> 10 Singles, 10 doubles</span>
              </div>
            </div>
            <div className="green-box">
              <h3>COMPLETED</h3>
            </div>
            <div className="three-box-container">
              <div className="first-box">
                <div className="top">
                  <span>Rare Find</span>
                </div>
                <img src={vector} alt="" />
                <span className='holi'>Holiday Inn</span>
                <div className="sub-container">
                  <span className='one'>1.5 miles away from joblocation.</span>
                  <div className="inner-div">
                    <div className="p">
                      <span className='two'>Singles: $120</span><br />
                      <span className='three'>Doubles: $145</span>
                    </div>
                    <div className="btn">
                      <button> <span>Book now</span> </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="second-box">
              <img src={vector} alt="" />
                <span className='holi'>Holiday Inn</span>
                <div className="sub-container">
                  <span className='one'>1.5 miles away from joblocation.</span>
                  <div className="inner-div">
                    <div className="p">
                      <span className='two'>Singles: $120</span><br />
                      <span className='three'>Doubles: $145</span>
                    </div>
                    <div className="btn">
                      <button> <span>Book now</span> </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="second-box">
              <img src={vector} alt="" />
                <span className='holi'>Holiday Inn</span>
                <div className="sub-container">
                  <span className='one'>1.5 miles away from joblocation.</span>
                  <div className="inner-div">
                    <div className="p">
                      <span className='two'>Singles: $120</span><br />
                      <span className='three'>Doubles: $145</span>
                    </div>
                    <div className="btn">
                      <button> <span>Book now</span> </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
