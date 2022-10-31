import Moment from "react-moment";
import IPerson from "../interfaces/IPerson";

const Person = ({ firstName, lastName, birthday, eyeColor }: IPerson) => {
  return (
    <div className="col-12 mt-2 mb-2">
      <div className="card">
        <div className="card-body">
          <h3>
            Name: {firstName} {lastName}
          </h3>
          <ul>
            <li>
              Has <b>{eyeColor}</b> eyes
            </li>
            <li>
              Birthday:{" "}
              <b>
                <Moment date={birthday} format="MMMM D, YYYY" />
              </b>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Person;
