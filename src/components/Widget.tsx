import Moment from "react-moment";
import IWidget from "../interfaces/IWidget";

const Widget = ({
  id,
  title,
  description,
  rating,
  created,
  updated,
  isSpecialCard,
}: IWidget) => {
  return (
    <div className="col-12 mt-2 mb-2">
      <div className={isSpecialCard ? "card specialCard" : "card"}>
        <div className="card-body">
          <p>#{id}</p>
          <h1 className="card-title">{title}</h1>
          <p className="card-text">{description}</p>
          <p className="card-text font-italic">Rating: {rating}/10</p>
        </div>
        <div className="card-footer text-muted text-right">
          <p>
            Created: <Moment fromNow date={created} />
          </p>

          <p>
            updated: <Moment fromNow date={updated} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Widget;
