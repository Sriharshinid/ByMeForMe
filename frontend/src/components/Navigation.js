import React from 'react';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu(){
        this.setState({ menu: !this.state.menu })
    }

  render() {
    const show = (this.state.menu) ? "show" : "" ;
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">ByMeForMe</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={this.toggleMenu}>
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className={"collapse navbar-collapse " + show} id="navbarNav">
            <ul className="navbar-nav mr-auto">
                <li className={window.location.pathname==="/" ? 'nav-item active' : 'nav-item'}>
                    <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className={window.location.pathname==="/doodles" ? 'nav-item active' : 'nav-item'}>
                    <a className="nav-link" href="/doodles">Doodles</a>
                </li>
                <li className={window.location.pathname==="/food" ? 'nav-item active' : 'nav-item'}>
                    <a className="nav-link" href="/food">Food</a>
                </li>
                <li className={window.location.pathname==="/current" ? 'nav-item active' : 'nav-item'}>
                    <a className="nav-link" href="/current">Current Events</a>
                </li>
            </ul>
        </div>
    </nav>
    );
  }
}

export default Navigation;
