import React ,{Component} from 'react';
import { Link } from 'react-router';

export default class Header extends Component{
  render(){
    return(
      <aside className="main-sidebar">
        <section className="sidebar">
          <div className="user-panel">
            <div className="pull-left image">
              <img src="styles/img/user2-160x160.jpg" className="img-circle" alt="User Image"/>
            </div>
            <div className="pull-left info">
              <p>Admin</p>
              <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
            </div>
          </div>
          <form action="#" method="get" className="sidebar-form">
            <div className="input-group">
              <input type="text" name="q" className="form-control" placeholder="Search..."/>
              <span className="input-group-btn">
                <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i
                  class="fa fa-search"></i></button>
              </span>
            </div>
          </form>
          <ul className="sidebar-menu">
            <li className="treeview">
              <Link to=""><i className="fa fa-link"></i><span>Test Groups</span><i className="fa fa-angle-left pull-right"></i></Link>
            </li>
            <li className="treeview">
              <Link to=""><i className="fa fa-link"></i><span>Products</span><i className="fa fa-angle-left pull-right"></i></Link>
            </li>
            <li className="treeview">
              <Link to=""><i className="fa fa-link"></i><span>Vendor</span><i className="fa fa-angle-left pull-right"></i></Link>
            </li>
            <li className="treeview">
              <Link to=""><i className="fa fa-link"></i><span>Formula</span><i className="fa fa-angle-left pull-right"></i></Link>
            </li>
            <li className="treeview">
              <Link to=""><i className="fa fa-link"></i><span>Attributes</span><i className="fa fa-angle-left pull-right"></i></Link>
            </li>
            <li className="treeview">
              <Link to=""><i className="fa fa-link"></i><span>Application Logs</span><i className="fa fa-angle-left pull-right"></i></Link>
            </li>
          </ul>
        </section>
      </aside>
    )
  }

}