import { MyThought } from "../../styles"
import { RemoveBtn } from "../../styles";

function Thought({ thought, thoughtToRemove }){

    const passThougthID = () => {
        thoughtToRemove();
    }

    return(
        (
            thought && (
                <MyThought data-testid="thought" >
                    <p>{thought.thought}</p>
                    <RemoveBtn
                        onClick={passThougthID}
                    >
                        X
                    </RemoveBtn>
                </MyThought>
            )
        )
    )
}

export default Thought;