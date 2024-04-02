// import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';
import { abc } from './Arraydata';
import { abc2 } from './Arraydata';
function App() {

  var [bb, setBb] = useState(abc);
  var [arm, setArm] = useState([]);
  var [model, setModel] = useState(true);
  var [model2, setModel2] = useState(true);
  var [cc, setCc] = useState(abc2);

  var oneinp1 = useRef();
  var oneinp2 = useRef();
  var oneinp3 = useRef();
  var oneinp4 = useRef();
  var b = () => {
    var inp1 = oneinp1.current.value;
    var inp2 = oneinp2.current.value;
    var inp3 = oneinp3.current.value;
    var inp4 = oneinp4.current.value;

    if (inp1 != '' && inp2 != '' && inp3 !== '' && inp4 != '') {
      var data = abc.filter((ele) => {
        return (
          ele.products == inp1 && ele.Price >= inp2 && ele.Price <= inp3 && ele.brand == inp4
        )
      })
      setBb(data)
      setModel2(!model2);
    }
    else if (inp1 != '' && inp2 != '' && inp3 != '' && inp4 == '') {
      var data = abc.filter((ele) => {
        return (
          ele.products == inp1 && ele.Price >= inp2 && ele.Price <= inp3
        )
      })
      console.log(data);
      setBb(data)
      setModel2(!model2);
    }
    else if (inp1 != '' && inp2 != '' && inp3 == '' && inp4 != '') {
      var data = abc.filter((ele) => {
        return (
          ele.products == inp1 && ele.Price >= inp2 && ele.brand == inp4
        )
      })
      console.log(data);
      setBb(data)
      setModel2(!model2);
    }


    else if (inp1 != '' && inp2 == '' && inp3 != '' && inp4 != '') {
      var data = abc.filter((ele) => {
        return (
          ele.products == inp1 && ele.Price <= inp3 && ele.brand == inp4
        )
      })
      console.log(data);
      setBb(data)
      setModel2(!model2);
    }
    else if (inp1 == '' && inp2 != '' && inp3 != '' && inp4 != '') {
      var data = abc.filter((ele) => {
        return (
          ele.Price >= inp2 && ele.Price <= inp3 && ele.brand == inp4
        )
      })
      console.log(data);
      setBb(data)
      setModel2(!model2);
    }
    else if (inp1 == '' && inp2 == '' && inp3 == '' && inp4 != '') {
      var data = abc.filter((ele) => {
        return (
          ele.brand == inp4
        )
      })
      console.log(data);
      setBb(data)
      setModel2(!model2);
    }
    else if (inp1 == '' && inp2 != '' && inp3 == '' && inp4 == '') {
      var data = abc.filter((ele) => {
        return (
          ele.Price >= inp3
        )
      })
      console.log(data);
      setBb(data)
      setModel2(!model2);
    }
    else if (inp1 == '' && inp2 == '' && inp3 == '' && inp4 != '') {
      var data = abc.filter((ele) => {
        return (
          ele.Price >= inp4
        )
      })
      console.log(data);
      setBb(data)
      setModel2(!model2);
    }
    else if (inp1 != '' && inp2 == '' && inp3 == '' && inp4 == '') {
      var data = abc.filter((ele) => {
        return (
          ele.products == inp1
        )
      })
      console.log(data);
      setBb(data)
      setModel2(!model2);
    }

    else if (inp1 == '' && inp2 == '' && inp3 != '' && inp4 == '') {
      var data = abc.filter((ele) => {
        return (
          ele.Price >= inp3
        )
      })
      console.log(data);
      setBb(data)
      setModel2(!model2);
    }

  }
  var k = (e) => {
    console.log("value===", e.target.value);
    setBb(
      abc.filter((ele) => {
        return ele.products.includes(e.target.value)
      })

    )
    console.log("check", abc);
  }

  var Addcart = (element) => {
    arm.push(element);
  }
  var mycart = () => {
    setModel(!model);
  }
  var removecart = (inx) => {
    setArm(
      arm.filter((elle, index) => {
        return index != inx;
      }))
  }

  var tshirts = () => {
    var data = abc.filter((ele) => {
      return (
        ele.products.includes('tshirts')
      )
    })
    console.log(data);
    setBb(data)
  }
  var shorts = () => {
    var data = abc.filter((ele) => {
      return (
        ele.products.includes('shorts')
      )
    })
    console.log(data);
    setBb(data)
  }

  var skirts = () => {
    var data = abc.filter((ele) => {
      return (
        ele.products.includes('skirts')
      )
    })
    console.log(data);
    setBb(data)
  }

  var jeans = () => {
    var data = abc.filter((ele) => {
      return (
        ele.products.includes('jeans')
      )
    })
    console.log(data);
    setBb(data)
  }
  var tops = () => {
    var data = abc.filter((ele) => {
      return (
        ele.products.includes('tops')
      )
    })
    console.log(data);
    setBb(data)
  }
  var kurtas = () => {
    var data = abc.filter((ele) => {
      return (
        ele.products.includes('kurta')
      )
    })
    console.log(data);
    setBb(data)
  }
  var pants = () => {
    var data = abc.filter((ele) => {
      return (
        ele.products.includes('pants')
      )
    })
    console.log(data);
    setBb(data)
  }
  var shoes = () => {
    var data = abc.filter((ele) => {
      return (
        ele.products.includes('shoes')
      )
    })
    console.log(data);
    setBb(data)
  }
  var slippers = () => {
    var data = abc.filter((ele) => {
      return (
        ele.products.includes('slippers')
      )
    })
    console.log(data);
    setBb(data)
  }
  var dailywear = () => {
    var data = abc.filter((ele) => {
      return (
        ele.products.includes('dailywear')
      )
    })
    console.log(data);
    setBb(data)
  }
  var jerseys = () => {
    var data = abc.filter((ele) => {
      return (
        ele.products.includes('jerseys')
      )
    })
    console.log(data);
    setBb(data)
  }
  var roadster = () => {
    var data = abc.filter((ele) => {
      return (
        ele.brand.includes('roadster')
      )
    })
    console.log(data);
    setBb(data)
  }

  var sassafras = () => {
    var data = abc.filter((ele) => {
      return (
        ele.brand.includes('sassafras')
      )
    })
    console.log(data);
    setBb(data)
  }
  var kalini = () => {
    var data = abc.filter((ele) => {
      return (
        ele.brand.includes('kalini')
      )
    })
    console.log(data);
    setBb(data);
    setModel2(false)
  }

  var sangria = () => {
    var data = abc.filter((ele) => {
      return (
        ele.brand.includes('sangria')
      )
    })
    console.log(data);
    setBb(data)
  }

  var huhu = () => {
    var data = abc.filter((ele) => {
      return (
        ele.brand.includes('huhu')
      )
    })
    console.log(data);
    setBb(data)
  }

  var bewakoof = () => {
    var data = abc.filter((ele) => {
      return (
        ele.brand.includes('bewakoof')
      )
    })
    console.log(data);
    setBb(data)
  }

  var aloo = () => {
    var data = abc.filter((ele) => {
      return (
        ele.brand.includes('aloo')
      )
    })
    console.log(data);
    setBb(data)
  }

  var nykaa = () => {
    var data = abc.filter((ele) => {
      return (
        ele.brand.includes('nykaa')
      )
    })
    console.log(data);
    setBb(data)
  }
  var wrogn = () => {
    var data = abc.filter((ele) => {
      return (
        ele.brand.includes('wrogn')
      )
    })
    console.log(data);
    setBb(data)
  }

  return (
    <div>

      <div>
        <img src='./images/gold top right.png' height='100px' width='160px' />
        <img src="./images/logo.png" height="90px" width="90px"></img>
        <button type='button' onClick={jeans}>JEANS</button>
        <button onClick={tops}>TOPS</button>
        <button onClick={kurtas}>KURTAS</button>
        <button onClick={pants}>PANTS</button>
        <button onClick={shoes}>SHOES</button>
        <button onClick={slippers}>SLIPPERS</button>
        <button onClick={dailywear}>DAILYWEAR</button>
        <button onClick={jerseys}>JERSEYS</button>
        <img src='./images/search icon.png' height='33px' />
        <input type='text' placeholder='search  catalogue' onChange={k} />
        <img class="d-block w-100" src="./images/gold.jpg" alt="First slide" height="30px" />

      </div>
      <hr></hr>
      {model2&&<div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1" onClick={shorts}></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" onClick={tshirts}></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" onClick={tshirts}></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="./images/sarousel.png" class="d-block w-100" alt="..." onClick={shorts} />
          </div>
          <div class="carousel-item active">
            <img src="./images/carousel2.png" class="d-block w-100" alt="..." onClick={tshirts} />
          </div>
          <div class="carousel-item active">
            <img src="./images/carousel3.png" class="d-block w-100" alt="..." onClick={tshirts} />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>}
      <div id="homeh1"><img src="./images/homeh1.png" width="500px" onClick={skirts} ></img></div>
      <div className='lines'></div>

      <div class="card text-center">
        <div class="card-header">
          <ul class="nav nav-pills card-header-pills">
            <li>
              <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Filter
              </button>
              <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">filter</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <div id="allpro">
                        <select id='cat' class="form-select" ref={oneinp1}>
                          <option value="">category</option>
                          <option value="tshirts">T-shirts</option>
                          <option value="shirts">shirts</option>
                          <option value="Pants">Pants</option>
                          <option value="shoes">shoes</option>
                          <option value="jeans">jeans</option>
                          <option value="dailywear">dailywear</option>
                          <option value="slippers">slippers</option>
                          <option value="jerseys">jerseys</option>
                          <option value="tops">tops</option>
                          <option value="kurta">kurta</option>
                          <option value="eabcings">eabcings</option>
                          <option value="bracelettes">bracelettes</option>
                          <option value="nosepin">nosepin</option>
                          <option value="heels">heels</option>
                          <option value="creams">creams</option>
                          <option value="aloo">aloo</option>
                          <option value="caps">caps</option>
                          <option value="punjabi">punjabi</option>
                          <option value="jackets">jackets</option>
                          <option value="dupatta">dupatta</option>
                          <option value="shorts">shorts</option>
                          <option value="bags">bags</option>
                          <option value="casusal">casusal</option>
                          <option value="bags">bags</option>
                        </select>
                        <select id='min' class="form-select" ref={oneinp2}>
                          <option value=""> min-range</option>
                          <option value="1000">1000</option>
                        </select>
                        <select id='max' class="form-select" ref={oneinp3}>
                          <option value="">max-range</option>
                          <option value="10000">10000</option>
                        </select>
                        <select id='brand' class="form-select" ref={oneinp4} >
                          <option value=''>brand</option>
                          <option value="wrogn">wrogn</option>
                          <option value="nykaa">nykaa</option>
                          <option value="aloo">aloo</option>
                          <option value="bewakoof">bewakoof</option>
                          <option value="huhu">huhu</option>
                          <option value="sangria">sangria</option>
                          <option value="kalini">kalini</option>
                          <option value="sassafras">sassafras</option>
                          <option value="roadster">roadster</option>
                        </select>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-warning" data-bs-dismiss="modal">X</button>
                      <button type="button" onClick={b} >Apply filters</button>
                    </div>
                  </div>
                </div>
              </div>


            </li>
            <li>
              {model ? <button onClick={mycart}>Mycart</button>
                : <button onClick={mycart}>Back</button>}
            </li>
          </ul>
        </div>

        <div class="card-body">
          <p class="card-text"><b>▼  Our Most popular brands ▼</b></p>
        
          <img src='/images/kalini.png' height='60px' onClick={kalini} />
          <img src='/images/roadster.png' height='100px' onClick={roadster} />
          <img src='/images/bewakoof.png' height='60px' onClick={bewakoof} />
          <img src='/images/sassafras.png' height='60px' onClick={sassafras} />
          <img src='/images/aloo.png' height='60px' onClick={aloo} />
          <img src='/images/huhu.png' height='60px' onClick={huhu} />
          <img src='/images/onykaa.png' height='60px' onClick={nykaa} />
          <img src='/images/sangria.png' height='60px' onClick={sangria} />
          <img src='/images/owrogn.png' height='60px' onClick={wrogn} />
      
        </div>
      </div>

      {model ? <div>

        {bb.map((element) => {
          return (

            < div className="pi">
              <img class="pc" src={element.image} />
              <dl class="row">
                <dt class="col-sm-3">Brand</dt>
                <dd class="col-sm-9"><em>{element.brand}</em></dd>

                <dt class="col-sm-3">Price</dt>
                <dd class="col-sm-9">{element.Price}</dd>

                <dt class="col-sm-3">Product</dt>
                <dd class="col-sm-9">{element.products}</dd>

                <dt class="col-sm-3">category</dt>
                <dd class="col-sm-9">{element.category}</dd>

              </dl>
              <button class="btn btn-warning" onClick={() => { Addcart(element) }} >AddTocart</button>
            </div>

          )
        })}
      </div> :
        <div >
          {
            arm.map((element, inx) => {
              return (
                <div>


                  <div class="card text-bg-warning mb-3" >
                    <div class="card-header"><b><em> <button onClick={() => { removecart(inx) }} >Delete</button></em></b></div>
                    <div class="card-body">
                      {/* <h5 class="card-title">Warning card title</h5> */}
                      <p class="card-text"> <img className="pc" src={element.image} />

                        <dl class="row">
                          <dt class="col-sm-3">Brand</dt>
                          <dd class="col-sm-9"><em>{element.brand}</em></dd>

                          <dt class="col-sm-3">Price</dt>
                          <dd class="col-sm-9">{element.Price}</dd>

                          <dt class="col-sm-3">Product</dt>
                          <dd class="col-sm-9">{element.products}</dd>

                          <dt class="col-sm-3">category</dt>
                          <dd class="col-sm-9">{element.category}</dd>

                        </dl>

                      </p>
                    </div>
                  </div>

                </div>
              )
            })}
        </div>} <br></br> <br></br> <br></br><br></br><br></br>

{/* <div className='myfoot'></div> */}
<img src="./images/logo.png" height="200px" width="300px"/>
<img src='/images/kalini.png' height='60px' onClick={kalini} />
          <img src='/images/roadster.png' height='100px' onClick={roadster} />
          <img src='/images/bewakoof.png' height='60px' onClick={bewakoof} />
          <img src='/images/sassafras.png' height='60px' onClick={sassafras} />
          <img src='/images/aloo.png' height='60px' onClick={aloo} />
          <img src='/images/huhu.png' height='60px' onClick={huhu} />
          <img src='/images/onykaa.png' height='60px' onClick={nykaa} />
          <img src='/images/sangria.png' height='60px' onClick={sangria} />
          <img src='/images/owrogn.png' height='60px' onClick={wrogn} />
      <div><img class="d-block w-100" src="./images/gold footer.png" alt="First slide" height="300px" /> 
    

     <div className='footer'> 
     <button >ContactUs</button> 
     <button >Blog</button> 
     <button >careers</button> 
     <button >FAQ</button> 
     <button >T&C</button> 
     <button >Terms</button> 
     <button >Shipping</button> 
     <button >returns</button> 
     <button >Privacy</button> 
     <button >ComplaintBox</button> 
     <button >Coupons</button> 
     <button >cancellations</button> 
     <button >instagram</button> 
     <button >facebook</button> 
     <button >twitter</button> 
     </div>
     <div className='footer'> 
     <button >tops</button> 
     <button >kurta</button> 
     <button >shirts</button> 
     <button >hoodies</button> 
     <button >tshirts</button> 
     <button >casusal</button> 
     <button >sweatshirts</button> 
     <button >cotton</button>  
     <button >shorts</button> 
     <button >ties</button> 
     <button >punjabi</button> 
     <button >jackets</button> 
     <button >slippers</button> 
     <button >jerseys</button> 
     <button >creams</button>
     </div>
     <div className='footer'> 
     <button >wrogn</button> 
     <button >nykaa</button> 
     <button >aloo</button> 
     <button >bewakoof</button> 
     <button >huhu</button> 
     <button >sangria</button> 
     <button >hello</button> 
     <button >kalini</button> 
     <button >sassafras</button> 
     <button >roadster</button> 
     <button >clothing</button> 
     <button >bracelettes</button> 
     <button >earrings</button> 
     <button >shoes</button> 
     <button >jeans</button> 
     </div>
      </div>
    </div>
  )
}
export default App;