//Fruits function component
function Fruit(props) {
  return <li>{props.fruit}</li>;
}

//Form class component
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.fruitList = [
      { id: "1", type: "apple" },
      { id: "2", type: "orange" },
      { id: "3", type: "banana" },
      { id: "4", type: "mango" },
      { id: "5", type: "durian" },
      { id: "6", type: "tomato" }
    ];
    this.state = { input: "" };
  }

  userInput = () => {
    const userInput = document.querySelector("input").value;
    console.log(this.fruitList);
    return this.setState({ input: userInput });
  };

  render() {
    const filteredFruitList = this.fruitList
      .filter(obj => {
        const fruit = obj["type"];
        return fruit.indexOf(this.state.input) !== -1;
      })
      .map(obj => {
        return <Fruit key={obj.id} fruit={obj.type} />;
      });

    return (
      <React.Fragment>
        <input onChange={this.userInput} />
        {filteredFruitList}
      </React.Fragment>
    );
  }
}

const container = document.querySelector("#app");
const element = <Form />;
ReactDOM.render(element, container);
