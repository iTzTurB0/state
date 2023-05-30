import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Majdi Boughaba',
        bio: 'Easy steps Hard Work ',
        imgSrc: 'https://example.com/avatar.jpg',
        profession: 'Web developer'
      },
      show: false
    };
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show
    }));
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      // Code to calculate time interval since component mounted
      const currentTime = new Date();
      const mountedTime = new Date(this.mountedTime);
      const diff = currentTime - mountedTime;
      console.log(`Time interval: ${diff}ms`);
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show } = this.state;

    return (
      <div>
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {show && (
          <div>
            <h2>{fullName}</h2>
            <p>{bio}</p>
            <img src={imgSrc} alt="Avatar" />
            <p>{profession}</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
