// import React  from "react";

// class ImageCard extends React.Component {

//     render() {
//         console.log(this.props)
//         const { id, description, urls } = this.props.image
        

//         return(
//                         <div  key={id} id={id} className="card" >
//                               <img className="card-img-top" src={urls.regular} alt={description} />
//                               <div className="card-body">
//                                     <p className="card-text">{description}</p>
//                                </div>
//                         </div>
//         )
//     }

// }

// export default ImageCard

//V2: https://www.udemy.com/course/react-redux/learn/lecture/12531332#content

import React  from "react";

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            height:'auto',
            width: 'auto',
        }

        this.imageRef = React.createRef();
    }
    componentDidMount() {
    //console.log(this.imageRef);

     this.imageRef.current.addEventListener("load", this.setStyles );
    }
    setStyles = () => {
        //console.log(this.imageRef.current.clientHeight);
        const height = this.imageRef.current.clientHeight ;
        const width = this.imageRef.current.clientWidth ;
        //console.log(height, width);
        this.setState({
            height: height,
            width: width,
        })
    //console.log(this.state);
    }

    render() {
        //console.log(this.props)
        const { id, description, urls } = this.props.image;
        const imgStyle = { width: `${this.state.width}px` ,  height: `${this.state.height}px` };
        //console.log(imgStyle);

        return(
                      <div  key={id}  id={id} className="card"  >
                              <img ref={this.imageRef}  style={ imgStyle }  className="card-img-top" src={urls.regular} alt={description} />
                              <div className="card-body">
                                    <p className="card-text">{description}
                                    <br></br>
                                    <a href={urls.regular} target="_blank">View Full Image</a>
                                    </p>
                               </div>
                        </div>
        )
    }

}

export default ImageCard