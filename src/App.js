import React, { Component } from "react";
import axios from "axios";
import {
  Container,
  Box,
  Alert,
  Pagination,
  Typography,
  CircularProgress,
} from "@mui/material";
import { Content, Header, DataList } from "./components";
import { BASE_URL, LOADING_IMAGE } from "./constants";
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

  handlePageChange = (e, v) => this.setState({ currentPage: v });
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
    } = this.state;
    // const currentTableData = useMemo(() => {
    //   const firstPageIndex = (currentPage - 1) * featuresPerPage;
    //   const lastPageIndex = firstPageIndex + featuresPerPage;
    //   return features.slice(firstPageIndex, lastPageIndex);
    // }, [currentPage]);

    const indexOfLastPost = currentPage * featuresPerPage;
    const indexOfFirstPost = indexOfLastPost - featuresPerPage;
    const currentFeatures = features.slice(indexOfFirstPost, indexOfLastPost);
    const pageCount = Math.ceil(features.length / featuresPerPage);

    return (
      <div id="app">
        <Header activeTab={activePage} onTabChange={this.handleTabs} />
        <Container>
          {error ? (
            <Alert severity="error">
              <Typography>Something went wrong</Typography>
            </Alert>
          ) : (
            <Box>
              {isLoading ? (
                // <img
                //   src={LOADING_IMAGE}
                //   alt="spinning earth"
                //   width="800"
                //   height="600"
                // />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CircularProgress size={80} />
                </Box>
              ) : (
                // <DataList features={currentFeatures} />
                <Content features={currentFeatures} tab={activePage} />
              )}
            </Box>
          )}
          {/* <Map features={features} /> */}
          <Pagination
            count={pageCount}
            page={currentPage}
            onChange={this.handlePageChange}
            color="primary"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          ></Pagination>
        </Container>
      </div>
    );
  }
}
