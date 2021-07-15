import React from 'react';
import {mount,unmount} from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root';

let wrapped;

beforeEach(()=>{
    wrapped = mount(<Root><CommentBox/></Root>);
});

afterEach(()=>{
    wrapped.unmount();
});

it('has a text area and button',()=>{
    
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);
});

describe('the text area',()=>{
    
    beforeEach(()=>{
        wrapped.find('textarea').simulate('change',{
            target: {value:'new Comment'}
        });
        wrapped.update();
    });

    it('can take input',()=>{
        expect(wrapped.find('textarea').prop('value')).toEqual('new Comment');
    });

    it('gets clean when user hits submit',()=>{
        wrapped.find('form').simulate('submit');
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual('');
    });

});