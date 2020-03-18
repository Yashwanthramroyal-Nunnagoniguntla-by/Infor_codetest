import React from 'react'
import {Testingdata} from './Testingdata.json';   //  Json Data for Testing
import Tree1 from './Tree1'

test('renders learn react link', () => {
    // const { getByText } = render(<App />);
    // const linkElement = getByText(/learn react/i);
    // expect(linkElement).toBeInTheDocument();
});
describe('<Tree1/>',()=>{
     test('readers a tree area',()=>{
         const tree=<Tree1 records={Testingdata} />;
         expect(tree).toBeTruthy();
     })
})