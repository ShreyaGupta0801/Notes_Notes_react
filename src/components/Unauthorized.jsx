import React from 'react'
import {Link} from "react-router-dom";
import { Button } from "react-bootstrap";
const Unauthorized = () =>
  <div>
    <h3>404 page not found</h3>
    <p>We are sorry but the page you are looking for does not exist.</p>
    <Link  to="/">
              <Button>
                 Home
              </Button>
    </Link>
  </div>

export default Unauthorized