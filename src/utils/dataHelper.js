import { v4 } from 'uuid';

export const createComment = (comment) => {

        const newCommment = {
                id: v4(),
                parentId: null,
                votes: 0,
                name: "",
                image: "/assets/images/image-amyrobson.png",
                ...comment,
        }
        const availableComments = getComments();
        availableComments.push(newCommment);
        saveComments(availableComments);
}

export const getComments = () => {
        return JSON.parse(localStorage.getItem("comments")) || []
}

export const saveComments = (comments) => {
        localStorage.setItem("comments", JSON.stringify(comments))

}

export const dummy = [
        {
                id: 1,
                parentId: null,
                repliedTo: null,
                votes: 3,
                image: "/assets/images/image-amyrobson.png",
                comment: "hello brown its been a long time no seee ddddd",
                name: "ransomMaxime",
                children: [
                        {
                                id: 2,
                                parentId: 1,
                                repliedTo: { id: 1, name: "ransomMaxime" },
                                votes: 3,
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
                image: "/assets/images/image-amyrobson.png",
                comment: "summer has been hot I will not forget it",
                name: "Blazia",
                children: [
                        {
                                id: 5,
                                parentId: 4,
                                repliedTo: { id: 4, name: "Blazia" },
                                votes: 0,
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
                image: "/assets/images/image-amyrobson.png",
                comment: "platea dictumst. Vestibulum tincidunt commodo auctor. Sed iaculis elit a nibh lacinia bibendum. Ut dui quam, vestibulum porta nulla vel, ornare efficitur ex. Duis eu sagittis arcu.",
                name: "WillyDon",
                children: []
        },



]