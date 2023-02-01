import { ArrowBackIosRounded, ArrowForwardIosOutlined } from '@material-ui/icons';
import ListItem from '../listItem/ListItem';
import './List.scss';

const List = () => {
    return (
        <div className='list'>
            <span className="listTitle">Continue to watch</span>

            <div className="wrapper">
                <ArrowBackIosRounded className='sliderArrow Left'/>
                <div className="container">
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                </div>
                <ArrowForwardIosOutlined className='sliderArrow Right' />
            </div>

        </div>
    )
}

export default List
