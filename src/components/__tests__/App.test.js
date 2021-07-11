import React from 'react';
import {shallow} from 'enzyme';

import App from 'components/App';
import ComponentList from 'components/CommentBox';
import CommentBox from 'components/CommentList';

let wrapped;

beforeEach(()=> {
    wrapped = shallow(<App/>);
});

it('shows a comment box', ()=>{
    expect( wrapped.find(CommentBox).length).toEqual(1);
})

it('shows a comment list', ()=>{
    expect( wrapped.find(ComponentList).length).toEqual(1);
})