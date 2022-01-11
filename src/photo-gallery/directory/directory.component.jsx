import React from "react";
import './directory.styles.scss';
import MenuItem from "../menu-item/menu-item.component";
import PhotoPageHeader from "../photo-page-header/photo-page-header.component";
import ReactMessage from "../../components/react-message/react-message.component";
import pic1 from './photos/DSCN1250.JPG';
import pic2 from './photos/DSCN0535.JPG';
import pic3 from './photos/DSCN0552.JPG';
import pic4 from './photos/DSCN1082.JPG';
import pic5 from './photos/DSCN0870.JPG';
import pic6 from './photos/DSCN0689.JPG';
import pic7 from './photos/DSCN1045.JPG';
import pic8 from './photos/DSCN1262.JPG';
import pic9 from './photos/DSCN0978.JPG';
import pic10 from './photos/DSCN1269.JPG';
import pic11 from './photos/DSCN1284.JPG';
import pic12 from './photos/DSCN1331.JPG';
import pic13 from './photos/DSCN1339.JPG';
import Toolbar from "../../components/toolbar/toolbar.component";

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                  title: 'rainbow',
                  imageUrl: pic1,
                  size: 'large',
                  id: 1,
                  linkUrl: '/shop/hats'
                },
                {
                  title: 'bird',
                  imageUrl: pic2,
                  size: 'large',
                  id: 2,
                  linkUrl: '/shop/jackets'
                },
                {
                  title: 'sunset',
                  imageUrl: pic3,
                  size: 'large',
                  id: 3,
                  linkUrl: '/shop/sneakers'
                },
                {
                  title: 'womens',
                  imageUrl: pic4,
                  size: 'large',
                  id: 4,
                  linkUrl: '/shop/womens'
                },
                {
                  title: 'mens',
                  imageUrl: pic5,
                  size: 'large',
                  id: 5,
                  linkUrl: '/shop/mens'
                },
                {
                  title: 'mens',
                  imageUrl: pic6,
                  size: 'large',
                  id: 6,
                  linkUrl: '/shop/mens'
                },
                {
                  title: 'mens',
                  imageUrl: pic7,
                  size: 'large',
                  id: 7,
                  linkUrl: '/shop/mens'
                },
                {
                  title: 'mens',
                  imageUrl: pic8,
                  size: 'large',
                  id: 7,
                  linkUrl: '/shop/mens'
                },
                {
                  title: 'mens',
                  imageUrl: pic9,
                  size: 'large',
                  id: 7,
                  linkUrl: '/shop/mens'
                },
                {
                  title: 'mens',
                  imageUrl: pic10,
                  size: 'large',
                  id: 6,
                  linkUrl: '/shop/mens'
                },
                {
                  title: 'mens',
                  imageUrl: pic11,
                  size: 'large',
                  id: 7,
                  linkUrl: '/shop/mens'
                },
                {
                  title: 'mens',
                  imageUrl: pic12,
                  size: 'large',
                  id: 7,
                  linkUrl: '/shop/mens'
                },
                {
                  title: 'mens',
                  imageUrl: pic13,
                  size: 'large',
                  id: 7,
                  linkUrl: '/shop/mens'
                }
            ]  
        }
    }

    render() {
        return (      
          <div className="App">
            <div className="directory-menu">
                <Toolbar />
                <PhotoPageHeader />
              
                {
                    this.state.sections.map( ({id, ...otherSectionProps }) => (
                        <MenuItem
                            key={id}
                            {...otherSectionProps}
                        />
                    ))
                }
              
              <ReactMessage />
            </div>
          </div>
        )
    }
}

export default Directory;