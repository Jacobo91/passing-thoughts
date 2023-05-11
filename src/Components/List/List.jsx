import Thought from "../Thought/Thought";


function List({ thoughts, onRemoveThought }){

    const handleRemoveThought = (id) => {
        onRemoveThought(id);
    }

    return(
        <article className="list" >
            {
                thoughts.map(thought => 
                        <Thought 
                            thought={thought} 
                            key={thought.id} 
                            thoughtToRemove={() => handleRemoveThought(thought.id)} 
                            
                            />
                    )
            }
        </article>
    )
}

export default List;