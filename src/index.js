import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import uuid from 'react-uuid'
import Page404 from "./Components/Page404/Page404";

import ContactList from "./Components/ContactList/ContactList";
import ContactAdd from './Components/ContactAdd/ContactAdd';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class App extends Component {
    state = {
        List: [
            {
                id: uuid(),
                name: " Riabii",
                phone: "+38 (095) 41 66 765",
                email: "cuanid@gmail.com",
                address: "Rivne",
                gender: "men",
                avatar: 3,
                IsFavorite: false

            },
            {
                id: uuid(),
                name: " Riabii",
                phone: "+38 (095) 41 66 765",
                email: "cuanid@gmail.com",
                address: "Rivne",
                gender: "men",
                avatar: 3,
                IsFavorite: false

            },
            {
                id: uuid(),
                name: " Riabii",
                phone: "+38 (095) 41 66 765",
                email: "cuanid@gmail.com",
                address: "Kiiv",
                gender: "women",
                avatar: 3,
                IsFavorite: false

            }

        ]
    };
    addContact = (name, address, phone, email, avatar) => {

        const newcontact = {
            id: uuid(),
            name: name,
            phone: phone,
            email: email,
            address: address,
            gender: "men",
            avatar: avatar,
            IsFavorite: false
        }
        this.setState(state => {
            let tempList = this.state.List.slice();
            tempList.push(newcontact);
            return {
                List: tempList
            }
        });
    }
    setFavourite = id => {
        const index = this.state.List.findIndex(t => t.id === id);
        let tempList = this.state.List.slice();
        tempList[index].IsFavorite = !tempList[index].IsFavorite;
        this.setState(state => {
            return {
                IsFavorite: !this.tempList
            }
        });

    }

    deleteContact = (id) => {
        const tempList = this.state.List.slice();
        const index = tempList.findIndex(item => item.id === id)
        tempList.splice(index, 1);
        this.setState({
            List: tempList
        });
    }

    render() {
        return (
            <Fragment>
                <Router>
                    <header className="hat">
                    <nav class="navbar navbar-default">
                                <div class="container-fluid">
                                    <div class="navbar-header">
                                        <Link class="navbar-brand" to="#">Contact book</Link>
                                    </div>
                                    <ul class="nav navbar-nav">
                                        <li><Link to="/listContact">List contacts</Link></li>
                                        <li><Link to="/addContact">Add contact</Link></li>
 
                                    </ul>
                                </div>
                            </nav>                    </header>
                    <main>

                        <Switch>
                            <Route path="/listContact"
                            exact
                            render={()=> <ContactList deleteContact={this.deleteContact.bind(this)} List={this.state.List} setFavourite={this.setFavourite}></ContactList>}>

                            </Route>
                            
                            <Route path="/addContact"
                            exact
                            render={()=><ContactAdd addContact={this.addContact}></ContactAdd>}
                            >

                            </Route>

                            <Route
                            path="*"
                            render={()=> <Page404></Page404>}
                            >

                            </Route>
                        </Switch>


                        {/* <ContactList deleteContact={this.deleteContact.bind(this)} List={this.state.List} setFavourite={this.setFavourite}></ContactList>
                        <ContactAdd addContact={this.addContact}></ContactAdd> */}
                    </main>
                </Router>
            </Fragment>
        )
    }


}


ReactDOM.render(<App />, document.getElementById('root'));