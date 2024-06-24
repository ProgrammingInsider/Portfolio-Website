import {render, screen, fireEvent} from '@testing-library/react'
import Portfolio from '../Components/Portfolio'

jest.mock('../LocalStorage/LocalStorage', () => [
    {
       projectImage: require('../Assets/img/crypto.png'),
       projectName: "CRYPTO 💰",
       projectDesc: "A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.",
       projectTech: ["HTML", "CSS", "JavaScript"],
       projectType: "JavaScript",
       GitHuB: 'https://github.com ProgrammingInsider',
       Demo: 'https://prouplecryptocurrency.netlify.app/',
       Design: 'https://github.com ProgrammingInsider'
    },
  
    {
      projectImage: require('../Assets/img/intelligent.png'),
      projectName: "Business Website 💰",
      projectDesc: "A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.",
      projectTech: ["HTML", "JavaScript", "React"],
      projectType: "React",
      GitHuB: 'https://github.com ProgrammingInsider',
      Demo: 'https://prouplecryptocurrency.netlify.app/',
      Design: 'https://github.com ProgrammingInsider'
   },

   {
    projectImage: require('../Assets/img/crypto.png'),
    projectName: "Third Title💰",
    projectDesc: "A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.",
    projectTech: ["HTML", "CSS", "JavaScript"],
    projectType: "JavaScript",
    GitHuB: 'https://github.com ProgrammingInsider',
    Demo: 'https://prouplecryptocurrency.netlify.app/',
    Design: 'https://github.com ProgrammingInsider',
    
    },

    {
    projectImage: require('../Assets/img/intelligent.png'),
    projectName: "Fourth Title 💰",
    projectDesc: "A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.",
    projectTech: ["HTML", "JavaScript", "React"],
    projectType: "React",
    GitHuB: 'https://github.com ProgrammingInsider',
    Demo: 'https://prouplecryptocurrency.netlify.app/',
    Design: 'https://github.com ProgrammingInsider'
    },
  ]);

it("Should Render four Project Elements", ()=>{
    render(<Portfolio/>);

    const projectElements = screen.getAllByTestId("project")

    expect(projectElements.length).toBe(4)
})

it("When Clicked on All filter Btn, it should show All Projects", ()=>{
    render(<Portfolio/>);
    
    const allFilterBtn = screen.getByTestId("allBtn")
    fireEvent.click(allFilterBtn)
    
    const projectElements = screen.getAllByTestId("project")
    
    
    expect(projectElements.length).toBe(4);
})

describe("React Filter Btn Assertion",()=>{
    
    it("When Clicked on React filter Btn, it should only render React Projects", ()=>{
        render(<Portfolio/>);
    
        const reactFilterBtn = screen.getByTestId("reactBtn")
        fireEvent.click(reactFilterBtn)
        const projectElements = screen.getAllByTestId("project")
        const reactProjects = screen.getAllByTestId("React")
        
        expect(projectElements.length).toBe(2);
        expect(reactProjects.length).toBe(2);
    
    })

    it("When Clicked on React filter Btn, it should not render 'Projects Coming soon' text element", ()=>{
        render(<Portfolio/>);
    
        const reactFilterBtn = screen.getByTestId("reactBtn")
        fireEvent.click(reactFilterBtn)
        
        const messageElement = screen.queryByText(/projects coming soon/i)
   
        expect(messageElement).not.toBeInTheDocument();
    
    })

   
    
    it("When Clicked on React filter Btn, it should hide other project Types", ()=>{
        render(<Portfolio/>);
    
        const reactFilterBtn = screen.getByTestId("reactBtn")
        fireEvent.click(reactFilterBtn)
    
        const projectElements = screen.getAllByTestId("project")
        const reactProjects = screen.getAllByTestId("React")
    
        const javascriptProjects = screen.queryAllByTestId("JavaScript")
        const fullstackProjects = screen.queryAllByTestId("FullStack")
        const htmlcssProjects = screen.queryAllByTestId("Html/Css")
            
        expect(projectElements.length).toBe(2);
        expect(reactProjects.length).toBe(2);
        expect(javascriptProjects.length).toBe(0);
        expect(fullstackProjects.length).toBe(0);
        expect(htmlcssProjects.length).toBe(0);
    
    
    })
})

describe("JavaScript Filter Btn Assertion",()=>{
    
    it("When Clicked on JavaScript filter Btn, it should only render JavaScript Projects", ()=>{
        render(<Portfolio/>);
    
        const javascriptFilterBtn = screen.getByTestId("javascriptBtn")
        fireEvent.click(javascriptFilterBtn)
        const projectElements = screen.getAllByTestId("project")
        const javascriptProjects = screen.getAllByTestId("JavaScript")
        
        expect(projectElements.length).toBe(2);
        expect(javascriptProjects.length).toBe(2);
    
    })
    
    it("When Clicked on JavaScript filter Btn, it should hide other project Types", ()=>{
        render(<Portfolio/>);
    
        const javascriptFilterBtn = screen.getByTestId("javascriptBtn")
        fireEvent.click(javascriptFilterBtn)
    
        const projectElements = screen.getAllByTestId("project")
        const javascriptProjects = screen.getAllByTestId("JavaScript")
        const reactProjects = screen.queryAllByTestId("React")
        const fullstackProjects = screen.queryAllByTestId("FullStack")
        const htmlcssProjects = screen.queryAllByTestId("Html/Css")
            
        expect(projectElements.length).toBe(2);
        expect(javascriptProjects.length).toBe(2);
        expect(reactProjects.length).toBe(0);
        expect(fullstackProjects.length).toBe(0);
        expect(htmlcssProjects.length).toBe(0);
    })
})


it("When Clicked Fullstack filter Btn, it should render not render project element", ()=>{
    render(<Portfolio/>);

    const fullstackFilterBtn = screen.getByTestId("fullstackBtn")
    fireEvent.click(fullstackFilterBtn)

    const projectElements = screen.queryAllByTestId("project")
   
    expect(projectElements.length).toBe(0);
})

it("When Clicked Fullstack filter Btn, it should render 'Projects Coming Soon' text", ()=>{
    render(<Portfolio/>);

    const fullstackFilterBtn = screen.getByTestId("fullstackBtn")
    fireEvent.click(fullstackFilterBtn)

    const messageElement = screen.getByText(/Projects Coming Soon/i)
   
    expect(messageElement).toBeInTheDocument();
})