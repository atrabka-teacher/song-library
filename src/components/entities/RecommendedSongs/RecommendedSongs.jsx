import React from "react";
import "./RecommendedSongs.scss";
import Block from "../../shared/Block/Block";
import { connect } from "react-redux";
import { getRecommendedSongs } from "../../../store/user/user.selectors";

class RecommendedSongs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { recommendedSongs } = this.props;
    return (
      <Block className="RecommendedSongs">
        <h2>Recommended songs</h2>
        <div className="songs">
          {recommendedSongs?.map((song) => (
            <div key={song} className="song">
              <img src={song.cover} className="cover" alt="cover" />
              <div className="info">
                <span>{song.author}</span> - {song.title}
              </div>
            </div>
          ))}
        </div>
      </Block>
    );
  }
}

export default RecommendedSongs;
