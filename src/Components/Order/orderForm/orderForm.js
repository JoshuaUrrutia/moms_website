import React,{Component} from 'react';
import './orderForm.css';
import {Container,Row,Col} from 'reactstrap';
import Items from '../Items/Items';
//import ContactUs from '../../../Containers/OrderOnline/Email';
//import sendEmail from '../../../Containers/OrderOnline/Email';
import emailjs from 'emailjs-com';

class  orderForm extends Component{
    state={
        name:"",
        phone:"",
        houseNumber:"",
        email:"",
        pincode:"",
        landmark:"",
        items:Items
    }
    nameHandler=(e)=>{
        this.setState({name:e.target.value});
    }
    phoneHandler=(e)=>{
        this.setState({phone:e.target.value});
    }
    houseHandler=(e)=>{
        this.setState({houseNumber:e.target.value});
    }
    emailHandler=(e)=>{
        this.setState({email:e.target.value});
    }
    pincodeHandler=(e)=>{
        this.setState({pincode:e.target.value});
    }
    landHandler=(e)=>{
        this.setState({landmark:e.target.value});
    }
    render(){
        var checkOut={
            name:this.state.name,
            phone:this.state.number,
            houseNumber:this.state.houseNumber,
            email:this.state.email,
            landmark:this.state.landmark,
            pincode:this.state.pincode,
            items:this.state.items
        };
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm("service_zaw15n8","template_t6zyi1w", e.target, "user_VieQ5QakhVyB2gJHKzPqG")
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
        };
    //  function postClick(e) {
    // //     this.props.place({checkOut})
    // //     //()=>this.props.place({checkOut})}
    // // <button type="button" onClick={()=>this.props.place({checkOut})}>Place Order</button>
    // // <button type="button" onClick={postClick}>Place Order</button>
    //      sendEmail(e)
    //      return this.props.place({checkOut})
    //      };
        return(
        <div className="OrderForm">
        <p className="OrderFormHead">Fill Delivery Details</p>
            <form className="contact-form" onSubmit={sendEmail}>
              <div>
                <Container>
                    <Row>
                        <Col xs="4" xl="4">
                            <legend>
                                <p>Name</p>
                            </legend>
                        </Col>
                        <Col xs="8" xl="8">
                        <input type="text" value={this.state.name} onChange={this.nameHandler} id="CustomerName" name="CustomerName"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="4" xl="4">
                            <legend>
                                <p>Address</p>
                            </legend>
                        </Col>
                        <Col xs="8" xl="8">
                        <input type="text" value={this.state.houseNumber} onChange={this.houseHandler} id="HouseNumber" name="HouseNumber"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="4" xl="4">
                            <legend>
                                <p>Email</p>
                            </legend>
                        </Col>
                        <Col xs="8" xl="8">
                        <input type="email" value={this.state.email} onChange={this.emailHandler} id="Email" name="Email"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="4" xl="4">
                            <legend>
                                <p>Landmark</p>
                            </legend>
                        </Col>
                        <Col xs="8" xl="8">
                        <input type="text" value={this.state.landmark} onChange={this.landHandler} id="message" name="message"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="4" xl="4">
                            <legend>
                                <p>Zip Code</p>
                            </legend>
                        </Col>
                        <Col xs="8" xl="8">
                        <input type="text" value={this.state.pincode} onChange={this.pincodeHandler} id="PinCode" name="PinCode"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="4" xl="4">
                            <legend>
                                <p>Number</p>
                            </legend>
                        </Col>
                        <Col xs="8" xl="8">
                        <input type="text" value={this.state.phone} onChange={this.phoneHandler} id="Number" name="Number"/>
                        </Col>
                    </Row>
                    <input type="text" value={JSON.stringify(this.props.data)} name="cartData"/>
                </Container>
                </div>
                <button type="button" onClick={()=>this.props.place({checkOut})}>Place Order</button>
                <input type="submit" value="Send" />
            </form>

            <p className="OrderFormNotice">*Payment will be takes as Cash On delivery</p>
        </div>
    );
}
}

export default orderForm;
