import { v4  } from 'uuid';

export const createComment =(comment)=>{
       
        const newCommment ={
                id: v4(),
                parentId: null,
                votes: 0,
                name:"",
                image:"/assets/images/image-amyrobson.png",
                ...comment,
        }
       const availableComments = getComments();
       availableComments.push(newCommment);
       saveComments(availableComments);
}

export const getComments =()=>{
        return JSON.parse(localStorage.getItem("comments")) || []
}

export const saveComments =(comments)=>{
       localStorage.setItem( "comments", JSON.stringify(comments))

}