import { makeStyles } from "@material-ui/core"
import background from "../Images/SignUp.jpeg";

const useStyle = makeStyles({
    parent_container:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundImage:`url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh'
    },
    container:{
        display:'flex',
        flexDirection:'column',
        gap: 15,
        width:'30%',
        backgroundColor:'#f6f1db',
        padding:20,
        borderRadius:20,
        border: '1.5px #000 solid',
    },
})

export default function Profile(){
    const style = useStyle();
    return(
        <div className={style.parent_container}>
            <div className={style.container}>

            </div>
        </div>
    )
}