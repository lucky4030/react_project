import React , { Component } from 'react';
import {Card , CardImg ,CardImgOverlay, CardText , CardTitle , CardBody} from 'reactstrap';

class Detail extends Component{
  constructor(props){
    super(props);
  }
  render()
    {
      if(this.props.dish != null)
      {
        const comments=this.props.dish.comments.map((com)=>{
          return(
            <div key={com.id} className="row">
              <div className="col-12 mb-0">
              <p>{com.comment}</p>
              </div>
              <div className="col-12 col-md-4 m-0">
              <p>--{com.author} </p>
              </div>
              <div className="col-12 col-md-8 m-0">
              <p> ({new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(com.date)))} )</p>
              </div>
            </div>
            );
        });

        return(
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-5 m-1">
                  <Card>
                    <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                    <CardBody>
                      <CardTitle>{this.props.dish.name}</CardTitle>
                      <CardText>{this.props.dish.description}</CardText>
                    </CardBody>
                  </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                  <Card>
                    <CardBody>
                      <CardTitle><strong>Comments</strong></CardTitle>
                      <CardText>{comments} </CardText>
                    </CardBody>
                  </Card>
                </div>
              </div>
            </div>    
            );

      }
      else
        {return(
            <div></div>
          );
        }
    }
}
export default Detail;