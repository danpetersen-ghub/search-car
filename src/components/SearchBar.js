import React from "react";


class SearchBar extends React.Component {
    // constructor() {
    //     super();
    //     this.state = { term: ''};
    //   }
    state = {
        term: ''
    }

    onInputChange(e) {
        console.log(e.target.value);
    }


    OnInputClick(e) {
        alert("CLICKY!!!");
        console.log(e);
    }


    onFormSubmit(e) {
        e.preventDefault();
        // console.log( this.props.onSubmit );
        this.props.onSubmitFunc(this.state.term);
    }

    render() {
        return (
            <div className="mt-10 mb-100">
                <form onSubmit={(e) => this.onFormSubmit(e)}>
                    <div className="md-form mt-10 mb-100 text-uppercase">
                        <h5>Image Search</h5>
                        {/*<input onClick={this.OnInputClick} onChange={this.onInputChange} className="form-control" type="text" placeholder="Search" aria-label="Search"/> */}
                        <input value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })} className="form-control" type="text" placeholder="Search" aria-label="Search" />

                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;