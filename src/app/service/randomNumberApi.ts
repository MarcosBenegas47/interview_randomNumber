
export const getPost = async ()=>{
    const response = await fetch("/service/api/random", {
        method:'POST',
        
    });
    const result =await response.json();
    return result.value;
}