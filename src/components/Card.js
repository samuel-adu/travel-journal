import locationIcon from "../images/location-icon.png";

export default function Card(props) {
  return (
    <div className="card">
      <div className="card__img">
        <img src={props.item.imageUrl} alt="" className="preview-img" />
      </div>

      <div className="card__body">
        <div className="card__location">
          <img src={locationIcon} alt="" />
          <small className="location">{props.item.location}</small>
          <a href={props.item.googleMapsUrl}>View on Google Maps</a>
        </div>

        <h3 className="card__date">
          {props.item.startDate} - {props.item.endDate}
        </h3>
        <h2>{props.item.title}</h2>
        <p>{props.item.description}</p>
      </div>
    </div>
  );
}
