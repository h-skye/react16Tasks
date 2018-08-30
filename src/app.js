console.log('New App.js');
// const obj = {
//     name: 'John',
//     getName() {
//         return this.name;
//     }
// }

// const getName = obj.getName.bind({name: 'Yan'});
// console.log(getName());
class TaskApp extends React.Component {
    render () {

        const title = "Task App";
        const subtitle = "Using React and Redux";
        const options = ['Thing One', 'Thing Two', 'Thing Three'];

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1> {this.props.title} </h1>
                <h2> {this.props.subtitle} </h2>
            </div>
        )
    }
}

class Action extends React.Component {
    handlePick() {
        alert('handlePick')
    }
    render () {
        return (
            <div>
                <button onClick={this.handlePick}> What should I do? </button>
            </div>
        )
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props) // access to this.props
        this.onRemove = this.onRemove.bind(this);

    }

    onRemove() {
        console.log(this.props.options);
    }
    render () {
        return (
            <div>
            <button onClick={this.onRemove}> Remove all </button>
            {this.props.options.map((option) => <Option key={option} optionText={option} />
            )}
            </div>
        );
    }
}

class Option extends React.Component {
    render () {
        console.log(this.props.optionText)
        return (
            <div>
                Option: {this.props.optionText}
            </div>
        )
    }
}


class AddOption extends React.Component {

    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();

        if (option) {
            alert(option)
        }
    }

    render () {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button> Add Options </button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<TaskApp />, document.getElementById('app'))