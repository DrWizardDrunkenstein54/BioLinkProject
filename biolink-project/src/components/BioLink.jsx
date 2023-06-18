import React from "react";
import NavBar from './NavBar';
import Home from './Home';
import Features from './Features';
import ProblemStatement from './ProblemStatement';
import ProposedSolutions from './ProposedSolutions';
import YourContribution from './YourContribution';
import Event from './Event';
import Schedule from './Schedule';

function BioLink() {
    return (
        <div className="BioLink">
            <NavBar />
            <Home />
            <Features />
            <ProblemStatement />
            <ProposedSolutions />
            <YourContribution />
            <Event />
            <Schedule />

        </div>
    );
}

export default BioLink;