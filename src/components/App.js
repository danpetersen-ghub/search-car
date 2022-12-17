import React from "react";

//COMPONENTS
import SearchBar from './SearchBar'
import ImageList from './ImageList'

//APIs
import UnSplash from '../APIs/unsplash'

class App extends React.Component {
    state = {
        images: [],
    };
    onSearchSubmit = async (term) => {
        const response = await fetch(`${UnSplash.baseURL}?query=${term}`, UnSplash.meta).then((res) => res.json())
        this.setState({ images: response.results });
    }

    render() {
        return (
            <div className="body">
                <h1>Image Search</h1>
                <SearchBar onSubmitFunc={this.onSearchSubmit}></SearchBar>
                Found: {this.state.images.length} pics for you!
                <ImageList images={this.state.images} ></ImageList>
            </div>
        );
    }

}



export default App;

