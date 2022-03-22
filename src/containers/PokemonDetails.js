import axios from "axios";
import React, { Component } from "react";
import { POKEMON_API_URL } from "../config";

export default class PokemonDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: null,
    };
  }
  render() {
    return <div style={{ marginTop: 100 }}>test</div>;
  }
}
