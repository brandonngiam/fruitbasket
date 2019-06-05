//Fruits function component
function Fruit(props) {
  return <li>{props.type + " " + props.emoji}</li>;
}

//Form class component
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "", fruitList: [] };
  }

  //Event handler to capture user input
  userInput = () => {
    const userInput = document.querySelector("input").value;
    return this.setState({ input: userInput });
  };

  //Loads fruits from url when component mounts
  async componentDidMount() {
    try {
      const api = await fetch(
        "https://my-json-server.typicode.com/thoughtworks-jumpstart/api/fruits"
      );
      const data = await api.json();
      this.setState({ fruitList: data });
    } catch (e) {
      console.log(e.message);
    }
  }

  render() {
    //Filter fruit list according to userinput
    const filteredFruitList = this.state.fruitList
      .filter(obj => {
        const fruit = obj["type"];
        return fruit.indexOf(this.state.input.toLowerCase()) !== -1;
      })
      .map(obj => {
        return <Fruit key={obj.id} type={obj.type} emoji={obj.emoji} />;
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
