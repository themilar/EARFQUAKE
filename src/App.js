import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      currentPage: 1,
      featuresPerPage: 15,
      features: [],
      metadata: {},
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
      .then((response) => this._isMounted && this.setData(response.data))
      .catch(
        (error) =>
          this._isMounted && this.setState({ error: error, isLoading: false })
      );
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

  componentDidMount() {
    this._isMounted = true;
    this.fetchEarthQuakes();
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    const { error, metadata, features, featuresPerPage, currentPage } =
      this.state;
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
      <div id="App">
        <Container>
          {/* <div className="header">This is tha app {metadata.title}</div> */}

          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h3" component="div">
                  USGS Earthquakes Past Day
                </Typography>
              </Toolbar>
            </AppBar>
          </Box>
          {error ? (
            // <div className="error-message">
            //   <p>Something went wrong</p>
            // </div>
            <Alert severity="error">Something went wrong</Alert>
          ) : (
            <div className="content">
              {currentFeatures.map((earthquake) => (
                <div key={earthquake.id} className="">
                  <Card variant="outlined" sx={{ margin: "20px" }}>
                    <Typography component="span">Location:</Typography>
                    <CardHeader title={earthquake.properties.place} />
                    <CardContent>
                      Magnitude: {earthquake.properties.mag}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          )}
          {/* <Map features={features} /> */}
          <Pagination
            count={pageCount}
            page={currentPage}
            onChange={this.handlePageChange}
            color="primary"
            size="large"
            // sx={{
            //   display: "flex",
            //   justifyContent: "space-between",
            //   alignContent: "center",
            //   whiteSpace: "nowrap",
            //   overflow: "hidden",
            //   width: "100%",
            //   margin: "0 auto",
            // }}
          ></Pagination>
        </Container>
      </div>
    );
  }
}
("https://media.giphy.com/media/wgHY9nSrlTMt2/giphy.gif"); //loading image
