import React , {Component} from 'react';
class NewProject extends Component{
    render(){
        return  <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="text-info">Post New Projects </h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-1 col-md-1 col-sm-12 col-12 form-group"></div>
                        <div className="col-lg-10 col-md-10 col-sm-12 col-12 form-group">
                                <div className="card">
                                    <div className="card-header text-primary">
                                       Enter Project Details
                                    </div>
                                    <div className="card-body">
            <div className="row form-group">
              <div className="col-md-4 form-group">
                  <label>Project Name</label>
                  <input type="text" placeholder="Enter Project Name" className="form-control"/>
              </div>
              <div className="col-md-4 form-group">
                <label>City</label>
                <input type="text" placeholder="Enter City Name" className="form-control"/>
            </div>
            <div className="col-md-4 form-group">
                <label>Project Address</label>
                <input type="text" placeholder="Enter Project Address" className="form-control"/>
            </div>
          </div>
          <div className="row form-group">
            <div className="col-md-3 form-group">
                <label>Project Type</label>
                <select className="form-control">
                    <option value="">Choose</option>
                    <option value="Plot">Plot</option>
                    <option value="Apartent">Apartment</option>
                    <option value="Villa">Villa</option>
                    <option value="Individual House">Individual House</option>
                </select>
            </div>
            <div className="col-md-3 form-group">
              <label>Project Status</label>
              <select className="form-control">
                <option value="">Choose</option>
                <option value="On-Going">On-Going</option>
                <option value="New">New</option>
                <option value="Completed">Completed</option>
                <option value="Sold">Sold</option>
            </select>
          </div>
          <div className="col-md-3 form-group">
            <label>Contact Person</label>
            <input type="text" placeholder="Enter Name" className="form-control"/>
        </div>
          <div className="col-md-3 form-group">
              <label>Contact No</label>
              <input type="number" placeholder="Enter Mobile No" className="form-control"/>
          </div>
        </div>
                                    </div>
        <div className="card-footer text-center">
            <button className="btn btn-primary">Save Project</button>
        </div>
                                </div>
                        </div>
                        <div className="col-lg-1 col-md-1 col-sm-12 col-12 form-group"></div>
                    </div>
                </div>
    }
}
export default NewProject;