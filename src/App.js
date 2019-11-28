import React from 'react';
import Herb from './herb';
import { Container, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const booboo = ["simbo", "noel", "egg", "waterbottle", "solojazz", "bruh"]
  return (
    <Container >

        {booboo.map((bruh)=>{
          return (
            <Herb
            name={bruh}
            key={bruh}
            />
          )
        })}
      <Button
        target="_blank"
        href="https://www.youtube.com/watch?v=5_0Yonah0gY"
        color="success">
        click here to die instantly
      </Button>

    </Container>
  );
}

export default App;
