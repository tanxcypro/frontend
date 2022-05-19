// import package for property types
import propType from 'prop-types'
import { Figure } from 'react-bootstrap'

// create component here
export default function DetailAbout(props) {
  return(
    <>
    <h1  style={{color:'white'}}>title:{props.title}</h1>
    <Figure>
  <Figure.Image
    width={171}
    height={180}
    alt="171x180"
    src="https://images.unsplash.com/photo-1638913658179-18c9a9c943f7?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500"
  />
  <Figure.Caption>
    Nulla vitae elit libero, a pharetra augue mollis interdum.
  </Figure.Caption>
</Figure>
    
    </>
  )
  
}

// define property type for this component here
DetailAbout.propType={
  title:propType.string
}