function seedData() {
    let questions = [
        {
            question: "Ichi",
            answer: "one",
        },
        {
            question: "Daijoubu desu ka?",
            answer: "are you okay?",
        },
        {
            question: "Aka",
            answer: "red",
        },
        {
            question: "Mizu",
            answer: "water",
        },
        {
            question: "Konichiwa",
            answer: "hello",
        },
        {
            question: "Roku",
            answer: "six",
        },
        {
            question: "Mada mada dane",
            answer: "no not yet",
        },
        {
            question: "Kawaii",
            answer: "cute",
        },
        {
            question: "Sayonara",
            answer: "goodbye",
        },
        {
            question: "Gambatte",
            answer: "good luck",
        }
    ];

    for (var i = 0; i < questions.length; i++) {
        questions[i].weight = 1;
    }

    return questions;
}

module.exports = seedData;