import React from 'react'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
   <div>
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
    {/* Brand Logo */}
    <Link href="index3.html" className="brand-link">
      <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
      <span className="brand-text font-weight-light">users dashboard</span>
    </Link>
    {/* Sidebar */}
    <div className="sidebar">
      {/* Sidebar user panel (optional) */}
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
        </div>
        <div className="info">
          <Link to={"/admin"} className="d-block">Alexander Pierce</Link>
        </div>
      </div>
      {/* SidebarSearch Form */}
      <div className="form-inline">
        <div className="input-group" data-widget="sidebar-search">
          <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
          <div className="input-group-append">
            <button className="btn btn-sidebar">
              <i className="fas fa-search fa-fw" />
            </button>
          </div>
        </div>
      </div>
      {/* Sidebar Menu */}
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
          <li className="nav-item menu-open">
            <Link to={"/admin"} className="nav-link active">
              <i className="nav-icon fas fa-tachometer-alt" />
              <p>
                Dashboard
                {/* <i className="right fas fa-angle-left" /> */}
              </p>
            </Link>
            {/* <ul className="nav nav-treeview">
              <li className="nav-item">
                <Link href="./index.html" className="nav-link active">
                  <i className="far fa-circle nav-icon" />
                  <p>Dashboard v1</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="./index2.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Dashboard v2</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="./index3.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Dashboard v3</p>
                </Link>
              </li>
            </ul> */}
          </li>
          <li className="nav-item menu-open">
            <Link to={"/admin/e-comm"} className="nav-link">
              <i className="nav-icon nav-icon fas fa-shopping-cart" />
              <p>
                E-commerce
                <span className="right badge badge-success">Host</span>
              </p>
            </Link>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <Link href="./index.html" className="nav-link active">
                  <i className="far fa-circle nav-icon" />
                  <p>Products</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="./index2.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Add product</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="./index3.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Cart</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="./index3.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Orders</p>
                </Link>
              </li>
            </ul>
          </li>
          {/* <li className="nav-item">
            <Link href="pages/widgets.html" className="nav-link">
              <i class="nav-icon fas fa-shopping-cart"></i>
              <p>
                E-commerce
                <span className="right badge badge-success">Host</span>
              </p>
            </Link>
          </li> */}
          <li className="nav-item">
            <Link to={"/admin"} className="nav-link">
              <i className="nav-icon fas fa-copy" />
              <p>
                Layout Options
                <i className="fas fa-angle-left right" />
                <span className="badge badge-info right">6</span>
              </p>
            </Link>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <Link href="pages/layout/top-nav.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Top Navigation</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="pages/layout/top-nav-sidebar.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Top Navigation + Sidebar</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="pages/layout/boxed.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Boxed</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="pages/layout/fixed-sidebar.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Fixed Sidebar</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="pages/layout/fixed-sidebar-custom.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Fixed Sidebar <small>+ Custom Area</small></p>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="pages/layout/fixed-topnav.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Fixed Navbar</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="pages/layout/fixed-footer.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Fixed Footer</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="pages/layout/collapsed-sidebar.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Collapsed Sidebar</p>
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to={"/admin"} className="nav-link">
              <i className="nav-icon fas fa-chart-pie" />
              <p>
                Charts
                <i className="right fas fa-angle-left" />
              </p>
            </Link>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <Link href="pages/charts/chartjs.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>ChartJS</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="pages/charts/flot.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Flot</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="pages/charts/inline.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Inline</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="pages/charts/uplot.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>uPlot</p>
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to={"/admin"} className="nav-link">
              <i className="nav-icon fas fa-tree" />
              <p>
                UI Elements
                <i className="fas fa-angle-left right" />
              </p>
            </Link>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <Link href="pages/UI/general.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>General</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="pages/UI/icons.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Icons</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="pages/UI/buttons.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Buttons</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="pages/UI/sliders.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Sliders</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="pages/UI/modals.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Modals &amp; Alerts</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="pages/UI/navbar.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Navbar &amp; Tabs</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="pages/UI/timeline.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Timeline</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="pages/UI/ribbons.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Ribbons</p>
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to={"/admin"} className="nav-link">
              <i className="nav-icon fas fa-edit" />
              <p>
                Forms
                <i className="fas fa-angle-left right" />
              </p>
            </Link>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <Link href="pages/forms/general.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>General Elements</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="pages/forms/advanced.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Advanced Elements</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="pages/forms/editors.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Editors</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="pages/forms/validation.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Validation</p>
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to={"/admin"} className="nav-link">
              <i className="nav-icon fas fa-table" />
              <p>
                Tables
                <i className="fas fa-angle-left right" />
              </p>
            </Link>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <Link href="pages/tables/simple.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Simple Tables</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="pages/tables/data.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>DataTables</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="pages/tables/jsgrid.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>jsGrid</p>
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-header">EXAMPLES</li>
          <li className="nav-item">
            <Link href="pages/calendar.html" className="nav-link">
              <i className="nav-icon far fa-calendar-alt" />
              <p>
                Calendar
                <span className="badge badge-info right">2</span>
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="pages/gallery.html" className="nav-link">
              <i className="nav-icon far fa-image" />
              <p>
                Gallery
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="pages/kanban.html" className="nav-link">
              <i className="nav-icon fas fa-columns" />
              <p>
                Kanban Board
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/admin"} className="nav-link">
              <i className="nav-icon far fa-envelope" />
              <p>
                Mailbox
                <i className="fas fa-angle-left right" />
              </p>
            </Link>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <Link href="pages/mailbox/mailbox.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Inbox</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="pages/mailbox/compose.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Compose</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="pages/mailbox/read-mail.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Read</p>
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to={"/admin"} className="nav-link">
              <i className="nav-icon fas fa-book" />
              <p>
                Pages
                <i className="fas fa-angle-left right" />
              </p>
            </Link>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <Link href="pages/examples/invoice.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Invoice</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="pages/examples/profile.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Profile</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="pages/examples/e-commerce.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>E-commerce</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="pages/examples/projects.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Projects</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="pages/examples/project-add.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Project Add</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="pages/examples/project-edit.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Project Edit</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="pages/examples/project-detail.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Project Detail</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="pages/examples/contacts.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Contacts</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="pages/examples/faq.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>FAQ</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="pages/examples/contact-us.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Contact us</p>
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to={"/admin"} className="nav-link">
              <i className="nav-icon far fa-plus-square" />
              <p>
                Extras
                <i className="fas fa-angle-left right" />
              </p>
            </Link>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>
                    Login &amp; Register v1
                    <i className="fas fa-angle-left right" />
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link href="pages/examples/login.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Login v1</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="pages/examples/register.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Register v1</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="pages/examples/forgot-password.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Forgot Password v1</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="pages/examples/recover-password.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Recover Password v1</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>
                    Login &amp; Register v2
                    <i className="fas fa-angle-left right" />
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link href="pages/examples/login-v2.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Login v2</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="pages/examples/register-v2.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Register v2</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="pages/examples/forgot-password-v2.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Forgot Password v2</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="pages/examples/recover-password-v2.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Recover Password v2</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link href="pages/examples/lockscreen.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Lockscreen</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="pages/examples/legacy-user-menu.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Legacy User Menu</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="pages/examples/language-menu.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Language Menu</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="pages/examples/404.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Error 404</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="pages/examples/500.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Error 500</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="pages/examples/pace.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Pace</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="pages/examples/blank.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Blank Page</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="starter.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Starter Page</p>
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to={"/admin"} className="nav-link">
              <i className="nav-icon fas fa-search" />
              <p>
                Search
                <i className="fas fa-angle-left right" />
              </p>
            </Link>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <Link href="pages/search/simple.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Simple Search</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="pages/search/enhanced.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Enhanced</p>
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-header">MISCELLANEOUS</li>
          <li className="nav-item">
            <Link href="iframe.html" className="nav-link">
              <i className="nav-icon fas fa-ellipsis-h" />
              <p>Tabbed IFrame Plugin</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="https://adminlte.io/docs/3.1/" className="nav-link">
              <i className="nav-icon fas fa-file" />
              <p>Documentation</p>
            </Link>
          </li>
          <li className="nav-header">MULTI LEVEL EXAMPLE</li>
          <li className="nav-item">
            <Link to={"/admin"} className="nav-link">
              <i className="fas fa-circle nav-icon" />
              <p>Level 1</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/admin"} className="nav-link">
              <i className="nav-icon fas fa-circle" />
              <p>
                Level 1
                <i className="right fas fa-angle-left" />
              </p>
            </Link>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Level 2</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>
                    Level 2
                    <i className="right fas fa-angle-left" />
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to={"/admin"} className="nav-link">
                      <i className="far fa-dot-circle nav-icon" />
                      <p>Level 3</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/admin"} className="nav-link">
                      <i className="far fa-dot-circle nav-icon" />
                      <p>Level 3</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/admin"} className="nav-link">
                      <i className="far fa-dot-circle nav-icon" />
                      <p>Level 3</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Level 2</p>
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to={"/admin"} className="nav-link">
              <i className="fas fa-circle nav-icon" />
              <p>Level 1</p>
            </Link>
          </li>
          <li className="nav-header">LABELS</li>
          <li className="nav-item">
            <Link to={"/admin"} className="nav-link">
              <i className="nav-icon far fa-circle text-danger" />
              <p className="text">Important</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/admin"} className="nav-link">
              <i className="nav-icon far fa-circle text-warning" />
              <p>Warning</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/admin"} className="nav-link">
              <i className="nav-icon far fa-circle text-info" />
              <p>Informational</p>
            </Link>
          </li>
        </ul>
      </nav>
      {/* /.sidebar-menu */}
    </div>
    {/* /.sidebar */}
  </aside>
</div>

  )
}

export default Sidebar
