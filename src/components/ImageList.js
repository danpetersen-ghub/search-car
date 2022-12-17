//  V1


// import React  from "react";

// class ImageList extends React.Component {
//     state = {
//         images: []
//     }

//     displayImages(){
//         const reformattedImages = this.props.images.map( 
//             //({ key, value}) => ({ [key]: value })
//             ({id, description, urls}) => // <img key={id} id={id} src={urls.regular} alt/> 
//                                         <div  key={id} id={id} className="card" >
//                                             <img className="card-img-top" src={urls.regular} alt={description} />
//                                             <div className="card-body">
//                                                 <p className="card-text">{description}</p>
//                                             </div>
//                                         </div>

//          );

//         return(
//             <div className="image-list">
//                 {reformattedImages}               
//             </div>
//         )
//     } 

//     componentDidUpdate() {

//     }


//     render() {
//         return(         
//             <div>
//                 <hr></hr>
//                 {this.displayImages()}
//             </div>
//         );
//     }
// }

// export default ImageList;


//  V2

import React from "react";
import ImageCard from "./ImageCard";

class ImageList extends React.Component {
    // state = {
    //     images: []
    // }

    displayImages() {
        const reformattedImages = this.props.images.map(
            (image) => <ImageCard key={image.id} image={image} />
        );

        return (
            <div className="image-list">
                {reformattedImages}
            </div>
        )
    }
    componentDidUpdate() {
    }
    render() {
        return (
            <div>
                <hr></hr>
                {this.displayImages()}
            </div>
        );
    }
}

export default ImageList;