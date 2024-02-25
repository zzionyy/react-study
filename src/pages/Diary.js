import { useParams } from 'react-router-dom';

const Diary = () => {

    const {id} = useParams();

    return <div>
        <h2>Diary</h2>
        <div>다이어리임</div>
    </div>
}

export default Diary;