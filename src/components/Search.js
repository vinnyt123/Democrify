import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import SingleSearchItem from "./SingleSearchItem";
import "./Playlists/Playlists.css";
import { Table } from "reactstrap";

class Search extends Component {
  render() {
    const { error, loading, data } = this.props.tracks;

    if (error) {
      return <p>Error: {error}</p>;
    }

    if (loading) {
      return (
        <Loader type="ThreeDots" color="#1ECD97" height={100} width={100} />
      );
    }

    if (data) {
      var bottomMargin = {};
      if (this.props.nowPlaying) {
        bottomMargin = {marginBottom: "6em"};
      }

      return (
        <div>
          <div className="tableContainer">
            <Table hover size="sm" className="table" style={bottomMargin}>
              <thead>
                <tr>
                  <th></th>
                  <th>{this.props.col1Name}</th>
                  <th>{this.props.col2Name}</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data.tracks.items &&
                  data.tracks.items.map((item, index) => (
                    <SingleSearchItem
                      key={item.id}
                      trackInfo={item}
                      showAlert={this.showAlert}
                    ></SingleSearchItem>
                  ))}
              </tbody>
            </Table>
          </div>
        </div>
      );
    }

    return <div />;
  }
}

// State is entire state tree
const mapStateToProps = (state) => {
  return {
    tracks: state.search,
    activePlaylistTitle: state.playlists.active_playlist.name,
    nowPlaying: state.webplayer.playState
      ? state.webplayer.playState.track_window.current_track
      : null
  };
};

export default connect(mapStateToProps)(Search);
