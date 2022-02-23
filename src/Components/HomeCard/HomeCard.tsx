import './HomeCard.scss';
import yelp_logo from './yelp_logo.png';
import yelp_logo_hover from './yelp_logo_hover.png';
// import StarRatings from '../StarRatings/StarRatings';

interface Props {
  id: string,
  addToList: ((listName: string, id: string) => void),
  name: string,
  rating: number,
  image: string,
  location: string[],
  phone: string,
  url: string,
  key: string
}

const displayAddress = (address: string[]) => {
  return address.map((element, index) => 
    <p key={index} className='address'>{element}</p>
  )
}

const HomeCard: React.FC<Props> = (props: Props) => {
  return (
    <section className='home-card'>
      <img className='thumbnail' src={props.image} alt={`${props.name} Image`} />
      <article className='restaurant-info'>
      <h2 className='name'>{props.name}</h2>
        <p className='rating'>Rating: {props.rating}</p>
        {/* Don't delete, Jani is working on this ---> <StarRatings rating={props.rating} /> */}
        <p className='phone-number'><a href='tel:{props.phone}' className='phone-link' aria-label='phone number'>
          {props.phone}
        </a></p>
        <div className='address-container'>
          {displayAddress(props.location)}
        </div>
        <a href={props.url} target='_blank' className='yelp-link'><img src={yelp_logo} alt='visit yelp page' className='yelp-logo'/>
        </a>
        <a href={props.url} target='_blank' className='yelp-link-hover'><img src={yelp_logo_hover} alt='visit yelp page' className='yelp-logo'/>
        </a>
      </article>
      <article className='card-buttons'>
        <button aria-label='click here to add to Gotta Go List' className='gotta-go' 
          id={props.id}
          onClick={(event) => 
          props.addToList('gottaGo', props.id)} >Gotta Go!</button>
        <button aria-label='click here to add to Loved It List' className='loved-it'
        id={props.id}
        onClick={(event) => 
        props.addToList('lovedIt', props.id)}>Loved It!</button>
        {/* <button className='more-info'>Tell Me More</button> */}
      </article>
    </section>
  )
}

export default HomeCard;