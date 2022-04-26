import React, { Component } from "react";
import axios from "axios";
import { Container, Box } from "@mui/material";
import {
  Content,
  Header,
  ErrorMessage,
  Loading,
  DataPagination,
} from "./components";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      currentPage: 1,
      featuresPerPage: 15,
      features: [],
      metadata: {},
      activePage: "home",
      error: null,
    };
    this.fetchEarthQuakes = this.fetchEarthQuakes.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }
  //   TODO: functional setstate filters and map visualizations
  fetchEarthQuakes() {
    this.setState({ isLoading: true });
    axios(
      "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson"
    )
      .then((response) => this.setData(response.data))
      .catch((error) => this.setState({ error: error, isLoading: false }));
  }

  setData = (result) =>
    this.setState(() => {
      return {
        features: result.features,
        metadata: result.metadata,
        isLoading: false,
      };
    });

  handlePageChange = (_, v) => this.setState({ currentPage: v });
  handleTabs = (e) => this.setState({ activePage: e.target.value });
  componentDidMount() {
    this.fetchEarthQuakes();
  }

  render() {
    const {
      error,
      isLoading,
      features,
      featuresPerPage,
      currentPage,
      activePage,
      metadata,
    } = this.state;

    const indexOfLastPost = currentPage * featuresPerPage;
    const indexOfFirstPost = indexOfLastPost - featuresPerPage;
    const currentFeatures = features.slice(indexOfFirstPost, indexOfLastPost);
    const pageCount = Math.ceil(features.length / featuresPerPage);

    return (
      <div id="app">
        <Header activeTab={activePage} onTabChange={this.handleTabs} />
        <Container>
          {error ? (
            <ErrorMessage />
          ) : (
            <Box>
              {isLoading ? (
                <Loading />
              ) : (
                <Content
                  features={currentFeatures}
                  tab={activePage}
                  metadata={metadata}
                />
              )}
            </Box>
          )}
          <DataPagination
            count={pageCount}
            page={currentPage}
            handlePageChange={this.handlePageChange}
          />
        </Container>
      </div>
    );
  }
}
