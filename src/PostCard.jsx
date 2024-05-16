import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import HeartIcon from "./HeartIcon";
import ShareIcon from "./ShareIcon";
import DropdownIcon from "./DropdownIcon";
import OptionDropdown from "./OptionDropdown";

function PostCard(props) {
  return (
    <li className="container" style={{width: 'fit-content'}}>
      <div className="username" id="user">
        <img src={props.image} alt={props.username}/>
        <span><strong>{props.username}</strong></span>
        <OptionDropdown/>
      </div>
      <div className="image">
        <img src={props.post} alt={props.username} />
      </div>
      <div className="icons">
          <div className="love">
              <HeartIcon/>
          </div>
          <div className="share">
              <ShareIcon/>
          </div>
          <div className="dropdown">
              <DropdownIcon message={props.message} />
          </div>
      </div>
      <div className="description">
       {props.description}
      </div>
    </li>
  );
}

export default PostCard;