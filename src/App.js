import React, {Component} from "react";
import Header from "./components/Header";
import SubHeader from "./components/Sub-header";
import Main from "./components/Main";
import ImageTile from "./components/ImageTile";
import images from "./images.json";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    images,
    gameMessage: "Click on an image to earn points, but don't click on any more than once!",
    score: 0,
    topScore: 0
  };

  checkClicked = id => {
    const images = this.state.images;
  
  const clickedImage = images.filter(match => match.id === id);

  if (clickedImage[0].clicked) {
    this.setState({ score: 0, gameMessage: "You were shot down! Try to get them all next time!"})

    for (let i = 0; i < images.length; i++) {
      images[i].clicked = false;
    }
    
    this.setState({ images });

  } else if (this.state.score < 11) {
    clickedImage[0].clicked = true;

    this.setState({
      score: this.state.score + 1, 
      gameMessage: "Nice shot! On to the next one!"},

      () => {console.log(this.state.score, this.state.topScore)

      if (this.state.score > this.state.topScore){
          console.log(this.state.score, this.state.topScore)
          this.setState({
              topScore: this.state.score
          },
          () => console.log(this.state.score, this.state.topScore)
          );
      }
      }
      
      );
    
      images.sort(function(a, b) {return 0.5 - Math.random()});

      this.setState({ images });

    } else { 
      clickedImage[0].clicked = true;

      this.setState({
        score: 0,
        gameMessage: "Nice job, Ace! Now go after the next group.",
        topScore: 12
      })

    for (let i = 0; i < images.length; i++) {
      images[0].clicked = false;
    }
    
    images.sort(function(a, b) {return 0.5 - Math.random()});

    this.setState({ images });

    }
  }


  render() {
    return (
      <div>
        <Header score={this.state.score} topScore={this.state.topScore} gameMessage={this.state.gameMessage} />
        <SubHeader />
        <Main>
          {this.state.images.map(fighter => (
            <ImageTile
            id={fighter.id}
            key={fighter.id}
            name={fighter.name}
            image={fighter.image}
            checkClicked={this.checkClicked}
            />
          ))}
        </Main>
        <Footer />
      </div>
    )
  }
}

export default App;