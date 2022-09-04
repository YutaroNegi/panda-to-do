import { Box } from "@mui/system";
import { useAppSelector } from '../redux/hooks'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useNavigate } from "react-router-dom";

function Home(){
    const lists = useAppSelector(state => state.lists.listArray)
    console.log(lists)
    let navigate = useNavigate();

    function openList(listId : number | null){
        navigate(`/list/${listId}`)
    }

    return (
        <Box sx={{marginTop: '1em'}}>
            {lists.map(list=>{
                return (
                    <Card onClick={()=>{openList(list.listId)}} key={list.listId} sx={{ maxWidth: '20em', margin: 'auto', textAlign: 'center', cursor: 'pointer', marginBottom: '1em'}}>
                        <CardContent>
                            {list.listName}
                        </CardContent>
                    </Card>
                )
            })}
        </Box>
    )
}

export default Home