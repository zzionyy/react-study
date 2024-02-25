import { useNavigate, useSearchParams } from "react-router-dom";


const Edit = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get('id');
    const mode = searchParams.get('mode');
    


    return <div>
        <h2>Edit</h2>
        <div>에딧임</div>
        <button onClick={() => setSearchParams({who: "me"})}>qs바꾸기</button>
        <button onClick={() => {
            navigate("/")
        }}>HOME</button>
        <button onClick={() => {
            navigate(-1)
        }}>뒤로가기</button>
    </div>
}

export default Edit;