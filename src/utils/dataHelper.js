import { v4 } from 'uuid';

export const createComment = (comment) => {

        const newCommment = {
                id: v4(),
                parentId: null,
                repliedTo: null,
                votes: 0,
                date: new Date().toISOString(),
                name: "",
                children: [],
                image: "/assets/images/image-amyrobson.png",
                ...comment,
        }
        const availableComments = getComments();
        availableComments.push(newCommment);
        saveComments(availableComments);
}

export const getComments = () => {
        return JSON.parse(localStorage.getItem("comments")) || localStorage.setItem("comments", JSON.stringify(dummy))

}



export const saveComments = (comments) => {
        localStorage.setItem("comments", JSON.stringify(comments))

}


const updateCommentById = (comments, idToFind, updatedProperties) => {
        for (let i = 0; i < comments.length; i++) {
                const comment = comments[i];

                if (comment.id === idToFind) {
                        // Update the comment with the specified id
                        comments[i] = { ...comment, ...updatedProperties };
                        return comments; // Return true to indicate that the update was successful
                }

                // Recursively search in children if they exist
                if (comment.children && comment.children.length > 0) {
                        if (updateCommentById(comment.children, idToFind, updatedProperties)) {
                                return comments; // Return true if an update occurred in the children
                        }
                }
        }

        return false; // Return false to indicate that the object was not found
}

export const updateCommentHandler = (commentId, updatedComment) => {
        const availableComments = getComments();
        const updatedResults = updateCommentById(availableComments, commentId, updatedComment)
        saveComments(updatedResults);
}

const addChildCommentById = (comments, parentId, newChildComment) => {
        for (const comment of comments) {
                if (comment.id === parentId) {
                        if (!comment.children) {
                                comment.children = [];
                        }
                        comment.children.push(newChildComment);
                        return comments; // Return true to indicate that the child comment was added
                }

                // Recursively search in children if they exist
                if (comment.children && comment.children.length > 0) {
                        if (addChildCommentById(comment.children, parentId, newChildComment)) {
                                return comments; // Return true if the child comment was added in the children
                        }
                }
        }

        return false; // Return false to indicate that the parent comment was not found
}

export const replyCommentHandler = async (parentId, newReply) => {
        const availableComments = await getComments();
        const newResults = addChildCommentById(availableComments, parentId, newReply);
        saveComments(newResults);
}

const deleteCommentById = (comments, idToDelete) => {
        for (let i = 0; i < comments.length; i++) {
                const comment = comments[i];

                if (comment.id === idToDelete) {
                        // Delete the comment with the specified id
                        comments.splice(i, 1);
                        return comments; // Return true to indicate that the comment was deleted
                }

                // Recursively search in children if they exist
                if (comment.children && comment.children.length > 0) {
                        if (deleteCommentById(comment.children, idToDelete)) {
                                return comments; // Return true if a deletion occurred in the children
                        }
                }
        }

        return false; // Return false to indicate that the comment was not found
}

export const deleteCommentHandler = async (commentId) => {
        const availableComments = await getComments();
        const updatedComments = deleteCommentById(availableComments, commentId);
        saveComments(updatedComments);
}
export const dummy = [
        {
                id: 1,
                parentId: null,
                repliedTo: null,
                votes: 3,
                date: "2023-09-04T18:30:00.000Z",
                image: "/assets/images/image-amyrobson.png",
                comment: "hello brown its been a long time no seee ddddd",
                name: "ransomMaxime",
                children: [
                        {
                                id: 2,
                                parentId: 1,
                                repliedTo: { id: 1, name: "ransomMaxime" },
                                votes: 3,
                                date: "2023-09-05T18:30:00.000Z",
                                image: "/assets/images/image-amyrobson.png",
                                comment: "ramnsom  long long bro where have you been",
                                name: "BrownTent",
                                children: []

                        },
                        {
                                id: 3,
                                parentId: 1,
                                repliedTo: { id: 2, name: "BrownTent" },
                                votes: 3,
                                date: "2023-09-20T18:30:00.000Z",
                                image: "/assets/images/image-amyrobson.png",
                                comment: "I have been loking for him either htvhvoncvvuocvovnbvoivn",
                                name: "ruthTab",
                                children: []

                        },
                ]

        },

        {
                id: 4,
                parentId: null,
                repliedTo: null,
                votes: 0,
                date: "2023-09-23T18:30:00.000Z",
                image: "/assets/images/image-amyrobson.png",
                comment: "summer has been hot I will not forget it",
                name: "Blazia",
                children: [
                        {
                                id: 5,
                                parentId: 4,
                                repliedTo: { id: 4, name: "Blazia" },
                                votes: 0,
                                date: "2023-09-27T18:30:00.000Z",
                                image: "/assets/images/image-amyrobson.png",
                                comment: "for me it was something to remember always",
                                name: "LouisBan",
                                children: []

                        },
                        {
                                id: 6,
                                parentId: 4,
                                repliedTo: { id: 4, name: "Blazia" },
                                votes: 0,
                                date: "2023-10-04T18:30:00.000Z",
                                image: "/assets/images/image-amyrobson.png",
                                comment: "I loved that the whether did not disappoint anyone this year lol ",
                                name: "PhilipMose",
                                children: []

                        },
                ]

        },
        {
                id: 7,
                parentId: null,
                repliedTo: null,
                votes: 6,
                date: new Date().toISOString(),
                image: "/assets/images/image-amyrobson.png",
                comment: "platea dictumst. Vestibulum tincidunt commodo auctor. Sed iaculis elit a nibh lacinia bibendum. Ut dui quam, vestibulum porta nulla vel, ornare efficitur ex. Duis eu sagittis arcu.",
                name: "Paul-den",
                children: []
        },
        {
                id: 8,
                parentId: null,
                repliedTo: null,
                votes: 9,
                date: new Date().toISOString(),
                image: "/assets/images/image-amyrobson.png",
                comment: "platea dictumst. Vestibulum tincidunt commodo auctor. Sed iaculis elit a nibh lacinia bibendum. Ut dui quam, vestibulum porta nulla vel, ornare efficitur ex. Duis eu sagittis arcu.",
                name: "WillyDon",
                children: []
        },



]