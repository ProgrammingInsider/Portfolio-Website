import {render, screen} from '@testing-library/react'
import Projects from '../Components/Projects'
import projectCollection  from './mockData';

// it("The Project Element length should be 2", ()=>{
//     render(<Projects projects={projectCollection} />);
//     const projectElement = screen.getAllByTestId("project");

//     expect(projectElement.length).toBe(2);
// })

it("The heading element with 'crypto' text should be render", ()=>{
    render(<Projects projects={projectCollection} />);
    const headingElement = screen.getByText(/crypto/i);

    expect(headingElement).toBeInTheDocument();
})

it("The heading element with 'Business Website' text should be render", ()=>{
    render(<Projects projects={projectCollection} />);
    const headingElement = screen.getByText(/Business Website/i);

    expect(headingElement).toBeInTheDocument();
})

