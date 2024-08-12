import os
import platform

# this is just added to make the replay make sense
def clear_terminal():
    if platform.system() == 'Windows':
        os.system('cls')
    else:
        os.system('clear')


data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]


    # Create a function that asks the questions to the user, and check his answers. Track the number of correct, incorrect answers. Create a list of wrong_answers
    # Create a function that informs the user of his number of correct/incorrect answers.
    # Bonus : display to the user the questions he answered wrong, his answer, and the correct answer.
    # If he had more then 3 wrong answers, ask him to play again.

def execute_quiz(quiz):
    correct = 0
    incorrect = []
    for question_answer in quiz:
        user_answer = input(question_answer["question"])
        if user_answer == question_answer["answer"]:
            correct += 1
        else:
            incorrect.append({"question": question_answer["question"], "user_answer": user_answer, "answer": question_answer["answer"]})
    return correct, len(incorrect), incorrect

def display_grade(right, wrong, corrections):
    print(f" You got {right} correct and {wrong} wrong")
    for correction in corrections:
        print(f"The questions was: {correction['question']}")
        print(f"Your answer was: {correction['user_answer']}")
        print(f"The right answer was: {correction['answer']}")
    if wrong > 3:
        again = input("Do you want to try again? y for yes, anything else for no: ")
        if again == "y":
            clear_terminal()
            main()

def main():
    num_correct, num_incorrect, wrong = execute_quiz(data)
    display_grade(num_correct, num_incorrect, wrong)

main()