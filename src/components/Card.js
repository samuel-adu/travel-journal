import locationIcon from "../images/location-icon.png";

export default function Card(props) {
  return (
    <div className="card">
      <div className="card__img">
        <img src={props.item.imageUrl} alt="" className="preview-img" />
      </div>

      <div className="card__body">
        <div className="card__date">
          <img src={locationIcon} alt="" />
          <small className="location">{props.item.location}</small>
          <a href="https://goo.gl/maps/1DGM5WrWnATgkSNB8">
            View on Google Maps
          </a>
        </div>

        <h3 className="card__date">
          {props.item.startDate} - {props.item.endDate}
        </h3>
        <h2>{props.item.title}</h2>
        <p>
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.
        </p>
      </div>
    </div>
  );
}
