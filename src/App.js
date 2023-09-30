import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/items";



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'AWP | Dragon Lore',
          img: 'awp_dragonlore.png',
          grade: 'Прямо с завода',
          collection: 'Коллекция «Cobblestone»',
          rare: 'Тайное',
          price: '2.000.000₽'
        },
        {
          id: 2,
          title: '☆ Нож-бабочка | Гамма-волны',
          img: 'butterfly_gamma_dopler.png',
          grade: 'Прямо с завода',
          collection: 'Кейс «Гамма»',
          rare: 'Тайное',
          price: '1.000.000₽'
        },
        {
          id: 3,
          title: '★ Нож с лезвием-крюком',
          img: 'gut_knife.png',
          grade: 'Прямо с завода',
          collection: 'Кейс «Гамма»',
          rare: 'Тайное',
          price: '20.000₽'
        },
        {
          id: 4,
          title: 'AK-47 | Огненный змей',
          img: 'ak-47_fire_serpent.png',
          grade: 'После полевых испытаний',
          collection: 'Кейс «Браво»',
          rare: 'Тайное',
          price: '150.000₽'
        },
        {
          id: 5,
          title: 'Desert Eagle | Поток информации',
          img: 'desert_eagle_printstrream.png',
          grade: 'Прямо с завода',
          collection: 'Коллекция «Разлом»',
          rare: 'Тайное',
          price: '10.000₽'
        },
        {
          id: 6,
          title: 'AWP | Медуза',
          img: 'awp_medusa.png',
          grade: 'Прямо с завода',
          collection: 'Коллекция «Боги и чудовища»',
          rare: 'Тайное',
          price: '350.000₽'
        }
      ]
    }
    this.AddToOrder = this.AddToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Items items={this.state.items} onAdd={this.AddToOrder} />
        <Footer />
      </div>
    );
  }

  deleteOrder(id){
      this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  AddToOrder(item) {
    let isInArray
    this.state.orders.forEach(el => {
      if(el.id == item.id)
        isInArray = true
    })
    if (!isInArray)
      this.setState({orders: [...this.state.orders, item] })
  }
}

export default App;
