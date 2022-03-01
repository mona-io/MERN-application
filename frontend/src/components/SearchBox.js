import React, { useState } from "react";
import { Form, Button, FormGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const [keyword, setKeyword] = useState("");
  const history = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history(`/search/${keyword}`);
    } else {
      history("/");
    }
  };
  return (
    <FormGroup>
      <Form className='d-flex' onSubmit={submitHandler}>
        <Form.Control
          type='text'
          name='q'
          onChange={(e) => setKeyword(e.target.value)}
          placeholder='Search Products...'
          className='mr-sm-2 ml-sm-5'
        ></Form.Control>
        <Button type='submit' variant='outline-light' className='p-2'>
          Search
        </Button>
      </Form>
    </FormGroup>
  );
};

export default SearchBox;
