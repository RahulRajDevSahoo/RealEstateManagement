import React , {Component} from 'react';
import axios from 'axios';
class Signup extends Component{
    constructor(){
        super();
        this.state = {
            name:'',
            mobile:'',
            email:'',
            password:'',
            message:''
        }
    }

    processName = (obj) =>{
        this.setState({
            name:obj.target.value
        })
    }

    processEmail = (obj) =>{
        this.setState({
            email:obj.target.value
        })
    }

    processMobile = (obj) =>{
        this.setState({
            mobile:obj.target.value
        })
    }

    processPassword = (obj) =>{
        this.setState({
            password:obj.target.value
        })
    }

    register = () =>{
        if(this.state.name==""){
            this.setState({
                message:"Please enter required input !"
            })
        }else{
            this.setState({
                message:"Please wait submitting... !"
            })
        }
    }

    render(){
        return <div className="container mt-4">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header bg-secondary text-white">Sign Up</div>
                        <div className="card-body">
                           <div className="text-center text-danger"><i>{this.state.message}</i></div>
                            <div className="row">
                                <div className="col-md-6 col-lg-6 col-12 form-group">
                                    <label>Full Name <em className="text-danger">*</em></label>
                                    <input type="text" className="form-control" onChange={this.processName}/>
                                </div>
                                <div className="col-md-6 col-lg-6 col-12 form-group">
                                    <label>Contact No <em className="text-danger">*</em></label>
                                    <input type="number" className="form-control" onChange={this.processMobile}/>
                                </div>
                                <div className="col-md-6 col-lg-6 col-12 form-group">
                                    <label>e-Mail Id <em className="text-danger">*</em></label>
                                    <input type="email" className="form-control" onChange={this.processEmail}/>
                                </div>
                                <div className="col-md-6 col-lg-6 col-12 form-group">
                                    <label>Password <em className="text-danger">*</em></label>
                                    <input type="password" className="form-control" onChange={this.processPassword}/>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer text-center">
                            <button className="btn btn-primary" onClick={this.register}>Register</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    }
}
export default Signup;