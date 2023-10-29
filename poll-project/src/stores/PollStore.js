import {writable} from 'svelte/store';

const PollStore = writable([
    {
        id: 1,
        question: "Which language do you prefer?",
        answerA: "Java",
        answerB: "C++",
        votesA: 10,
        votesB: 3
    },
    {
        id: 2,
        question: "Who will win today's match?",
        answerA: "Pakistan",
        answerB: "India",
        votesA: 6,
        votesB: 12
    }
]);


export default PollStore;