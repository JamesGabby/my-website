import React from "react";
import './skills.styles.scss';
// import pic from './me.JPG';

const Skills = () => (
    <div>
        <header className="bg-light text-centre">
            <div className="container container--narrow">
                <p>Lorem, ipsum dolor.</p>
                <h1>Responsive layouts don't have to be a struggle.</h1>
            </div>
        </header>

        <section>
            <div className="container">
                <h2 className="text-centre">Quality Designs</h2>
                <div className="split">
                    <div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur laudantium perspiciatis aliquam illum sit aut et libero quod nihil ipsum, quia iure aperiam expedita, id, reprehenderit porro. Aliquam, quam? Ratione!</p>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, itaque minima aut tempore neque labore voluptatibus dolor accusamus temporibus nulla perferendis totam vero perspiciatis corrupti!</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-dark">
            <div className="container">
                <div className="split">
                    <div>
                        <h2>Made custom for you</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto omnis at, quibusdam nobis dolore a magni voluptatibus excepturi cupiditate voluptates quaerat reprehenderit quae recusandae architecto nesciunt, placeat eum debitis odio sint? Quis ipsa nemo ducimus dolores, quae tempora minima consequatur?</p>
                    </div>
                    <div>
                        {/* <img src={pic} alt="me" /> */}
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-accent">
            <div className="container">
                <div className="split">
                    <div>
                        {/* <img src={pic} alt="me" /> */}
                    </div>
                    <div>
                        <h2>Created with care</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero fugit quos incidunt minima enim, ad similique corrupti iusto suscipit doloremque quas omnis repellat modi aliquam eligendi reprehenderit repellendus, architecto voluptas! Est velit ut mollitia distinctio voluptates itaque! Eveniet, aperiam facilis!</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
    
);

export default Skills;