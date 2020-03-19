import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import uuid from 'react-uuid'
import ContactList from "./Components/ContactList/ContactList";
import ContactAdd from './Components/ContactAdd/ContactAdd';

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
            return{
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
    render() {
        return (
            <Fragment>
                <header className="hat">
                    <h2>Contact book</h2>
                </header>
                <main>

                    <ContactList List={this.state.List} setFavourite={this.setFavourite}></ContactList>
                    <ContactAdd addContact={this.addContact}></ContactAdd>
                </main>
            </Fragment>
        )
    }


}


ReactDOM.render(<App />, document.getElementById('root'));