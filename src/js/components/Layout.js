import React from 'react'
import { Button, ButtonToolbar, Grid, Row, Col, Clearfix } from 'react-bootstrap';

class Layout extends React.Component{



	render(){


const dummySentences = ['Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'Donec hendrerit tempor tellus.', 'Donec pretium posuere tellus.', 'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'Nulla posuere.', 'Donec vitae dolor.', 'Nullam tristique diam non turpis.', 'Cras placerat accumsan nulla.', 'Nullam rutrum.', 'Nam vestibulum accumsan nisl.'];

const gridInstance = (
  <Grid>
    <Row className="show-grid">
      <Col  md={3}>
      	<div bsStyle="success" > ASDADSADASD  </div>
	       asdadsad <br/>{dummySentences.slice(0, 3).join(' ')}
       </Col>
             <Col md={3}>
	       asdadsad <br/>{dummySentences.slice(0, 6).join(' ')}
       </Col>
             <Col md={3}>
	       asdadsad <br/>{dummySentences.slice(0, 6).join(' ')}
       </Col>
             <Col md={3}>
	       asdadsad <br/>{dummySentences.slice(0, 6).join(' ')}
       </Col>

      <Clearfix ><code>&lt;{'Clearfix visibleSmBlock'} /&gt;</code></Clearfix>
    </Row>
  </Grid>
);



		const buttonsInstance = (
					  <ButtonToolbar>
					    {/* Standard button */}
					    <Button>Default</Button>

					    {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
					    <Button bsStyle="primary">Primary</Button>

					    {/* Indicates a successful or positive action */}
					    <Button bsStyle="success">Success</Button>

					    {/* Contextual button for informational alert messages */}
					    <Button bsStyle="info">Info</Button>

					    {/* Indicates caution should be taken with this action */}
					    <Button bsStyle="warning">Warning</Button>

					    {/* Indicates a dangerous or potentially negative action */}
					    <Button bsStyle="danger">Danger</Button>

					    {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
					    <Button bsStyle="link">Link</Button>
					  </ButtonToolbar>
					);


			return(

				<div> 
				{gridInstance}
						<h1> this is the  Layout </h1>
					 {buttonsInstance}
				</div>


				)
	}
}

export default Layout