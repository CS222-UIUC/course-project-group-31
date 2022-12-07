//this is an independent form for students to leave reviews on classes

class EssayForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 'Please list out what you thought of your specific courses in school. Feel free to be as descriptive as you wish.The more descriptive, the better! List out your classes and review of the class by saying "Class Name: Review, Class Name: Review"'
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A review was submitted for classes. Please review accordingly: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Essay:
            <textarea value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit Review on Classes" />
        </form>
      );
    }
  }