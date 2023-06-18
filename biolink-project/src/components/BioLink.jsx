import React from "react";
import NavBar from './NavBar';
import Home from './Home';
import Features from './Features';
import ProblemStatement from './ProblemStatement';
import ProposedSolutions from './ProposedSolutions';
import YourContribution from './YourContribution';

function BioLink() {
    return (
        <div className="BioLink">
            <NavBar />
            <Home />
            <Features />
            <ProblemStatement />
            <ProposedSolutions />
            <YourContribution />

        </div>
    );
}

export default BioLink;