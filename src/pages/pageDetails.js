import React, {Component} from 'react';
import DribbleApiUtils from '../utils/dribbbleRequestUtils';
import moment from 'moment';
export default class PageDetails extends Component{
    constructor(props) {
        super(props);
        this.shotsId = this.props.match.params.id;
        this.state = {
            shot: []
        };
        this.setCurrentShot = this.setCurrentShot.bind(this);
    }

    setCurrentShot(shot) {
        this.setState({shot: shot})
    }

    componentDidMount() {
        DribbleApiUtils.getShots(this.shotsId).then(shot => {
            console.log(shot);
            this.setCurrentShot(shot);
        })
    }

    render() {
        const img = this.state.shot.images;
        const user = this.state.shot.user;
        const imgElement = img ? img.normal : '';
        const userImg = user ? user.avatar_url : '';
        return (
           <div>
               <div className="col-md-12 col-xs-12 col-sm-12">
                   <div className="card  card-stats">
                       <div className="card-header" >
                           <i className="img-responsive">
                               <img className="img-circle img-responsive" src={userImg} alt=""/>
                           </i>
                       </div>
                       <div className="card-content">
                           <h3 className="title">{user ? user.name : ''}</h3>
                           <p className="category">{user ? user.bio : ''}</p>
                           <p className="category">{user ? user.location : ''}</p>
                       </div>
                       <div className="card-footer">
                           <div className="stats">
                               <i className="material-icons">local_offer</i>
                               <a href={user ? user.html_url : '#'}> {user ? user.html_url : ''} </a>
                           </div>
                       </div>
                   </div>
               </div>
               <div className="col-md-6 col-xs-12 col-sm-6 details">
                   <div className="card card-stats">
                       <img className="img-responsive" src={imgElement} alt=""/>
                       <div className="card-content">
                           <div className="stats">
                               <span className="pull-left"><i className="material-icons" style={{verticalAlign:'middle'}}>access_time</i> {moment(this.state.shot.created_at).format('MMMM Do YYYY')}</span>
                               <span className="m-r-5"><i className="material-icons" style={{verticalAlign:'middle'}}>thumb_up</i> {this.state.shot.likes_count}</span>
                               <span className="m-r-5"><i className="material-icons" style={{verticalAlign:'middle'}}>mode_comment</i> {this.state.shot.comments_count}</span>
                               <span><i className="material-icons" style={{verticalAlign:'middle'}}>visibility</i>{this.state.shot.views_count}</span>
                           </div>
                       </div>
                   </div>
               </div>
               <div className="col-md-6 col-xs-12 col-sm-6">
                   <div className="card" >
                       <div className="card-content">
                            <h3 className="title">{this.state.shot.title}</h3>
                            <div dangerouslySetInnerHTML={{ __html: this.state.shot.description }} />
                       </div>
                   </div>

               </div>
           </div>
        );
    }
}