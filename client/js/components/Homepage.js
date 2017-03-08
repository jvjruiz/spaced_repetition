import React from 'react';


export class Homepage extends React.Component {
  render () {
    return (
        <div>
            <section className="header">
                <div>
                    <span className="letter" data-letter="J">J</span>
                    <span className="letter" data-letter="A">A</span>
                    <span className="letter" data-letter="P">P</span>
                    <span className="letter" data-letter="A">A</span>
                    <span className="letter" data-letter="N">N</span>
                    <span className="letter" data-letter="E">E</span>
                    <span className="letter" data-letter="S">S</span>
                    <span className="letter" data-letter="E">E</span>
                    <span className="letter" data-letter=" "> </span>
                    <span className="letter" data-letter="X">X</span>
                </div>
                <p>Mental Weight Lifting</p>
            </section>
            <section className="button">
                <a href="/auth/google"> 
                    <span>Log In With Google</span>
                </a>
            </section>
        </div>
    )
  }
}

export default Homepage;