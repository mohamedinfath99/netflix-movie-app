import './Featured.scss';
import { PlayArrow, Info } from '@material-ui/icons';

const Featured = ({type}) => {
    return (
        <div className='featured'>

            {type && (
                <div className='category'>
                    <span>{type === 'movie' ? 'Movies' : 'Series'}</span>
                    <select name='genre' id='genre'>
                        <option>Genre</option>
                        <option value='adventure'>Adventure</option>
                        <option value='comedy'>Comedy</option>
                        <option value='crime'>Crime</option>
                        <option value='fantasy'>Fantasy</option>
                        <option value='historical'>Historical</option>
                        <option value='horror'>Horror</option>
                        <option value='romance'>Romance</option>
                        <option value='value'>Drama</option>
                    </select>
                </div>
            )}


            <div className="info">
                <img src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1" alt="movie" />


                <span className='desc'>Varisu is an action-suspense thriller movie. The story begins with a big family living together happily, and they have a very big company in which everyone manages the business together. Then suddenly a man enters. This creates a lot of problems in the business; there was a huge loss in the business, and the family gets separated. How does loss happen in business? Why does the family get separated? This suspense remains</span>

                <div className="buttons">
                    <button className="play">
                        <PlayArrow />
                        <span>Play</span>
                    </button>

                    <button className="more">
                        <Info />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Featured
